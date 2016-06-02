describe('Insert and Update data to the products collection and subscribe to the data to check if data is successfully inserted or updated', function () {
  var server = meteor({flavor: "fiber"});
  var client = ddp(server, {flavor: "fiber"});

  it('should login before adding products', function () {
    server.execute(function() {
      var formData = {
        "emails.$.address": "rod@snapzio.com",
        "password": "tmp12345",
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
    server.execute(function () {
      var data = {
        name : 'Games',
        modifiedAt : new Date(),
        createdAt : new Date(),
      }
      Meteor.call("categoriesAdd", data);
    });
  });

  it('should insert products', function () {
    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.subscribe("categoriesList", [userPropId]);
    var category = client.collection("categories");
    var userCatId = Object.keys(category)[0];

    console.log(client);

    client.call("insertProduct", [userPropId, userCatId, 'Safeguard', 'Skin germ protection soap', '25']);
    client.sleep(200);
    client.call("insertProduct", ['5s6ad46as1d46sa14dsas56ad5', userCatId, 'BlackWhite', 'Underarm protection', '120'])
    client.sleep(200);
    client.call("insertProduct", [userPropId, userCatId, 'Rexona', 'Body Spray', '60' ]);
    client.sleep(200);
    client.call("insertProduct", [userPropId, userCatId, 'Noodles', 'Snack till death', '15' ]);
    client.sleep(200);
    client.call("insertProduct", ['5s6ad46as1d46sa14dsas56ad5', userCatId, 'Jollibee', 'Bida and sarap', '60' ]);
    client.sleep(200);
    client.call("insertProduct", [userPropId, userCatId, 'McDonalds', 'Happy Meal', '100' ]);

  });

  // it('should subscribe to the product collection and return object', function () {
  //   client.subscribe("productList");
  //   var product = client.collection("products");
  //   expect(product).to.be.a("Object");
  // });

  it('should publish product related to the current user login', function () {
    client.subscribe("users.current");
    var user = client.collection("users");
    var userPropId = Object.keys(user)[0];

    client.subscribe("productList", [userPropId]);
    var test = client.collection("products");

    console.log(test);
    console.log(Object.keys(test).length);

  });
});
