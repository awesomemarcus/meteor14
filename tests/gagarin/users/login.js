describe('User Login', function () {

    var param = {flavor:"fiber"};

    var server = meteor(param, require("./setup").generateFixture);
    var client = ddp(server, param);

    it("should return login credentials", function(){

      var loginCredentials = client.login({ user : { email : "rod@snapzio.com" }, password : "tmp12345" });

      expect(loginCredentials).to.be.a("object");
      expect(loginCredentials.id).to.be.a("string");
      expect(loginCredentials.token).to.be.a("string");

    });

    it("should fail to login", function(){

    expect(function(){

      client.login({ user : { email : "fail@snapzio.com" }, password : "tmp12345" });

      }).to.throw("User not found");

    });



});
