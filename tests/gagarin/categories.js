describe('Insert and Update data to the categories collection and subscribe to the data to check if data is successfully inserted or updated', function () {
  var server = meteor({flavor: "fiber"});
  var client = ddp(server, {flavor: "fiber"});

  it('should insert an object to Categories collection', function () {
    server.execute(function () {
      var data = {
        name : 'Games',
        createdBy: 'BJg4CB785mqa5WkaW',
        updatedAt : new Date(),
        createdAt : new Date(),
        deleted: false,
      }
      Meteor.call("categoriesAdd", data)
    });
  });

  it('should be able to subscribe to the Categories collection and return an object', function () {
    client.subscribe("categoriesList", ['5s6ad46as1d46sa14dsas56ad5']);
    var category = client.collection("categories");
    expect(category).to.be.a("Object");
  });

  it('should NOT equal to NULL or UNDEFINED', function () {
    client.subscribe("categoriesList", ['5s6ad46as1d46sa14dsas56ad5']);
    var category = client.collection("categories");
    expect(category).to.not.be.a("undefined");
  });

  it('should equal to the inserted data', function () {
    client.subscribe("categoriesList", ['5s6ad46as1d46sa14dsas56ad5']);
    var category = client.collection("categories");
    for(var i in category) {
      expect(category[i].name).to.be.equal('Games');
      expect(category[i].createdBy).to.be.equal('BJg4CB785mqa5WkaW');
      expect(category[i].updatedAt).to.be.a('Date');
      expect(category[i].createdAt).to.be.a('Date');
      expect(category[i].deleted).to.be(false);
    }
  });

  it('should update data name', function () {
    client.subscribe("categoriesList", ['5s6ad46as1d46sa14dsas56ad5']);
    var category = client.collection("categories");
    var id = Object.keys(category)[0];
    var data = [{
      _id: id,
      name : 'Games Arcade',
      updatedAt : new Date(),
    }]
    client.call("categoriesUpdate", data)
    client.sleep(200);
  });

  it('should reflect the updated data', function () {
    client.subscribe("categoriesList", ['5s6ad46as1d46sa14dsas56ad5']);
    var category = client.collection("categories");
    for(var i in category) {
      expect(category[i].name).to.be.equal('Games Arcade');
      expect(category[i].updatedAt).to.be.a('Date');
    }
  });
});
