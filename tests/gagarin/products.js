describe('Insert and Update data to the products collection and subscribe to the data to check if data is successfully inserted or updated', function () {
  var server = meteor({flavor: "fiber"});
  var client = ddp(server, {flavor: "fiber"});

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

    client.subscribe("categoriesList", [userPropId]);
    var category = client.collection("categories");
    var userCatId = Object.keys(category)[0];

    var productData = {
      category_id: userCatId,
      name: 'Safeguard',
      description: 'Skin germ protection soap',
      price: 25
    };

    client.call("productsAdd", [productData]);
    client.sleep(200);

    expect(client.collection("products")).to.be.a("Object");
  });

  it('should subscribe to the product collection and return object', function () {
    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.subscribe("productsList", [userPropId]);
    var product = client.collection("products");
    expect(product).to.be.a("Object");
  });

  it('should get the products related to the user', function () {
    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.subscribe("productsList", [userPropId]);
    var collection = client.collection("products");
    var product = collection[Object.keys(collection)[0]];
    expect(product.createdBy).to.be.equal(userPropId);
  });
});
