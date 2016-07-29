describe('Insert and Update data to the products collection and subscribe to the data to check if data is successfully inserted or updated', function () {
  var server = meteor({flavor: "fiber"});
  var client = ddp(server, {flavor: "fiber"});

  var productDummy = {
      category_id: '12345678907894563',
      name: 'asdfwasd',
      description: 'asdfwasdfasdfasdf',
      price: 12,
  };

  it('should login before adding products', function () {
    server.execute(function() {
      var formData = {
        "emails.$.address": "rod@snapzio.com",
        "password": "tmp12345",
        "confirmPassword": "tmp12345",
        "profile.profilename": "rod",
        "profile.firstname": "rod",
        "profile.lastname": "gohetia",
        "profile.gender": "male",
        "profile.age": 29,
        modifiedAt: new Date(),
        createdAt: new Date()
      };

    Meteor.call("usersSignup", formData);
    });
    var loginCredentials = client.login({ user : { email : "rod@snapzio.com" }, password : "tmp12345" });

    expect(loginCredentials).to.be.a("object");
    expect(loginCredentials.id).to.be.a("string");
    expect(loginCredentials.token).to.be.a("string");

  });

  it('should check user data based on the info inserted', function () {
    client.subscribe("users.current");
    var user = client.collection("users");
    expect(user).to.be.a("Object");

    for(var i in user) {
      expect(user[i].emails[0].address).to.be.equal("rod@snapzio.com");
      expect(user[i].profile.profilename).to.be.equal("rod");
    }
  });

  it('should insert an object to Categories collection for product insertion', function () {
    var data = [{
      name : 'Games',
    }];

    var cats = client.call("categoriesAdd", data);
    expect(cats).to.be.a("String");
  });

  it('should insert products', function () {

    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.call("productsAdd", [productDummy]); // 1st call
    client.call("productsAdd", [productDummy]); // 2nd call

    // check if successfully added
    client.subscribe("productsList", [userPropId]);

    var products = client.collection("products");
    var index = Object.keys(products);

    expect(products[index[0]]).to.be.an('object');
    expect(products[index[1]]).to.be.an('object');

  });

  it('should subscribe to the products collection and return object', function () {

    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.subscribe("productsList", [userPropId]);
    var products = client.collection("products");

    expect(products).to.be.a("Object");

  });

  it('should get the products related to the user', function () {

    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.subscribe("productsList", [userPropId]);
    var products = client.collection("products");

    expect(Object.keys(products).length).to.equal(2);

    for(var i in products) {
      expect(products[i].createdBy).to.be.equal(userPropId);
    }

  });

});
