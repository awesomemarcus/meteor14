describe('User Signup', function () {

    var param = {flavor:"fiber"};
    var server = meteor(param, require("./setup").generateFixture);
    var client = ddp(server, param);


    it('should add new User', function () {

      server.execute(function(){

        // from fixture
        expect(Meteor.users.find().fetch().length).to.be.equal(1);

        var formData = {
            "emails.$.address": "new-user@snapzio.com",
            "password": "tmp12345",
            "confirmPassword": "tmp12345",
            "profile.profilename": "new-user",
            "profile.firstname": "new",
            "profile.lastname": "user",
            "profile.gender": "female",
            "profile.age": 29,
            modifiedAt: new Date(),
            createdAt: new Date()
          };

        Meteor.call("usersSignup", formData);

        var users = Meteor.users.find().fetch();

        expect(users.length).to.be.equal(2);

        var newUser = users[1];

        expect(newUser).to.be.a("object");
        expect(newUser.emails[0].address).to.be.equal("new-user@snapzio.com");
        expect(newUser.profile.profilename).to.be.equal("new-user");
        expect(newUser.profile.firstname).to.be.equal("new");
        expect(newUser.profile.lastname).to.be.equal("user");

      });

    });

    it("should fail for duplicate email", function(){

      server.execute( function(){

        var formData = {
            "emails.$.address": "new-user@snapzio.com",
            "password": "tmp12345",
            "confirmPassword": "tmp12345",
            "profile.profilename": "new-user",
            "profile.firstname": "new",
            "profile.lastname": "user",
            "profile.gender": "female",
            "profile.age": 29,
            modifiedAt: new Date(),
            createdAt: new Date()
          };


        expect(function(){

            Meteor.call("usersSignup", formData);
        }).to.throw("Email already exists");

      });

    });



});
