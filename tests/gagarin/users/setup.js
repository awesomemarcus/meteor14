module.exports = {

  generateFixture: function(){

    // set gagarin db
    process.env.MONGO_URL = "mongodb://localhost:27017/gagarin";

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

  }

};
