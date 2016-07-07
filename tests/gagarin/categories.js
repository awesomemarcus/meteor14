describe('Insert and Update data to the categories collection and subscribe to the data to check if data is successfully inserted or updated', function () {
  var param = {flavor:"fiber"};

  var server = meteor(param, require("./users/setup").generateFixture);
  var client = ddp(server, param);
  it('should login first before managing categories', function() {
    var loginCredentials = client.login({ user : { email : "rod@snapzio.com" }, password : "tmp12345" });

    expect(loginCredentials).to.be.a("object");
    expect(loginCredentials.id).to.be.a("string");
    expect(loginCredentials.token).to.be.a("string");
  });

  it('should be able to insert to Categories collection', function () {
    var data = [{
      name : 'Games',
    }];

    client.call("categoriesAdd", data);
  });

  it('should be able to subscribe to the Categories collection and return an object', function () {
    client.subscribe("users.current");
    var user = client.collection("users");

    var userId = [Object.keys(user)[0]];

    client.subscribe("categoriesList", userId);
    var category = client.collection("categories");


    expect(category).to.be.a("Object");
  });

  it('should NOT equal to NULL or UNDEFINED', function () {
    client.subscribe("users.current");
    var user = client.collection("users");

    var userId = [Object.keys(user)[0]];

    client.subscribe("categoriesList", userId);
    var category = client.collection("categories");
    expect(category).to.not.be.a("undefined");
  });

  it('should equal to the inserted data', function () {
    client.subscribe("users.current");
    var user = client.collection("users");

    var userId = Object.keys(user)[0];

    client.subscribe("categoriesList", [userId]);
    var category = client.collection("categories");

    for(var i in category) {
      expect(category[i].name).to.be.equal('Games');
      expect(category[i].createdBy).to.be.equal(userId);
      expect(category[i].updatedAt).to.be.a('Date');
      expect(category[i].createdAt).to.be.a('Date');
      expect(category[i].isDeleted).to.be.equal(false);
    }
  });

  it('should update data name', function () {
    client.subscribe("users.current");
    var user = client.collection("users");

    var userId = [Object.keys(user)[0]];

    client.subscribe("categoriesList", userId);
    var category = client.collection("categories");
    var id = Object.keys(category)[0];
    var data = {
      name : 'GamesUpdt',
    };
    client.call("categoriesUpdate", [id, data]);
    client.sleep(200);
  });

  it('should reflect the updated data', function () {
    client.subscribe("users.current");
    var user = client.collection("users");

    var userId = [Object.keys(user)[0]];

    client.subscribe("categoriesList", userId);

    var category = client.collection("categories");

    for(var i in category) {
      expect(category[i].name).to.be.equal('GamesUpdt');
      expect(category[i].updatedAt).to.be.a('Date');
    }
  });

  it('should delete category', function () {
    client.subscribe("users.current");
    var user = client.collection("users");

    var userId = [Object.keys(user)[0]];

    client.subscribe("categoriesList", userId);
    var category = client.collection("categories");
    var id = Object.keys(category)[0];
    expect(category).to.have.property(id);
    client.call("categoriesDelete", [id]);
    client.sleep(200);
    expect(category).to.be.empty;

  });
});
