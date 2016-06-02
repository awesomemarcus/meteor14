var require = meteorInstall({"lib":{"collections":{"categories.js":["meteor/mongo",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/collections/categories.js                                                                     //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
var _mongo = require('meteor/mongo');                                                                // 1
                                                                                                     //
var Categories = new _mongo.Mongo.Collection('categories');                                          // 4
                                                                                                     //
exports['default'] = Categories;                                                                     //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./categories","./products",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/collections/index.js                                                                          //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
exports.Products = exports.Categories = exports.undefined = undefined;                               //
                                                                                                     //
var _categories = require('./categories');                                                           // 1
                                                                                                     //
var _categories2 = _interopRequireDefault(_categories);                                              //
                                                                                                     //
var _products = require('./products');                                                               // 2
                                                                                                     //
var _products2 = _interopRequireDefault(_products);                                                  //
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
                                                                                                     //
exports.undefined = undefined;                                                                       //
exports.Categories = _categories2['default'];                                                        //
exports.Products = _products2['default'];                                                            //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products.js":["meteor/mongo","node-simple-schema",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/collections/products.js                                                                       //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
exports.ProductSchem = undefined;                                                                    //
                                                                                                     //
var _mongo = require('meteor/mongo');                                                                // 1
                                                                                                     //
var _nodeSimpleSchema = require('node-simple-schema');                                               // 2
                                                                                                     //
var _nodeSimpleSchema2 = _interopRequireDefault(_nodeSimpleSchema);                                  //
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
                                                                                                     //
var Products = new _mongo.Mongo.Collection('products');                                              // 4
                                                                                                     //
var ProductSchem = exports.ProductSchem = new _nodeSimpleSchema2['default']({                        // 6
  user_id: {                                                                                         // 7
    type: String,                                                                                    // 8
    label: 'User ID'                                                                                 // 9
  },                                                                                                 //
  category_id: {                                                                                     // 11
    type: String,                                                                                    // 12
    label: 'Category ID'                                                                             // 13
  },                                                                                                 //
  name: {                                                                                            // 15
    type: String,                                                                                    // 16
    label: 'Name',                                                                                   // 17
    max: 10,                                                                                         // 18
    min: 3                                                                                           // 19
  },                                                                                                 //
  description: {                                                                                     // 21
    type: String,                                                                                    // 22
    label: 'Description',                                                                            // 23
    max: 300,                                                                                        // 24
    min: 10                                                                                          // 25
  },                                                                                                 //
  price: {                                                                                           // 27
    type: Number,                                                                                    // 28
    decimal: true,                                                                                   // 29
    label: 'Price'                                                                                   // 30
  },                                                                                                 //
  createdAt: {                                                                                       // 32
    type: Date,                                                                                      // 33
    label: 'Created At',                                                                             // 34
    optional: true                                                                                   // 35
  },                                                                                                 //
  modifiedAt: {                                                                                      // 37
    type: Date,                                                                                      // 38
    label: 'Modified At',                                                                            // 39
    optional: true                                                                                   // 40
  },                                                                                                 //
  isDeleted: {                                                                                       // 42
    type: Boolean,                                                                                   // 43
    label: 'Deleted',                                                                                // 44
    optional: true                                                                                   // 45
  }                                                                                                  //
});                                                                                                  //
                                                                                                     //
exports['default'] = Products;                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["node-simple-schema",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// lib/collections/users.js                                                                          //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
var _nodeSimpleSchema = require("node-simple-schema");                                               // 1
                                                                                                     //
var _nodeSimpleSchema2 = _interopRequireDefault(_nodeSimpleSchema);                                  //
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }    //
                                                                                                     //
/**                                                                                                  //
 * Users schema                                                                                      //
 */                                                                                                  //
                                                                                                     //
_nodeSimpleSchema2["default"].messages({                                                             // 8
  regex: [{ msg: "[label] must be valid." }]                                                         // 9
});                                                                                                  //
var User = new _nodeSimpleSchema2["default"]({                                                       // 11
                                                                                                     //
  profile: {                                                                                         // 13
    type: Object,                                                                                    // 14
    optional: true,                                                                                  // 15
    label: "Porfile"                                                                                 // 16
  },                                                                                                 //
                                                                                                     //
  "profile.profilename": {                                                                           // 19
    type: String,                                                                                    // 20
    min: 1,                                                                                          // 21
    label: "Profilename"                                                                             // 22
  },                                                                                                 //
                                                                                                     //
  "profile.firstname": {                                                                             // 25
    type: String,                                                                                    // 26
    label: "Firstname",                                                                              // 27
    min: 1                                                                                           // 28
  },                                                                                                 //
                                                                                                     //
  "profile.lastname": {                                                                              // 31
    type: String,                                                                                    // 32
    min: 1,                                                                                          // 33
    label: "Lastname"                                                                                // 34
  },                                                                                                 //
                                                                                                     //
  "profile.gender": {                                                                                // 37
    type: String,                                                                                    // 38
    allowedValues: ["male", "female"],                                                               // 39
    label: "Gender"                                                                                  // 40
  },                                                                                                 //
                                                                                                     //
  "profile.age": {                                                                                   // 43
    type: Number,                                                                                    // 44
    label: "Age",                                                                                    // 45
    min: 18,                                                                                         // 46
    max: 99                                                                                          // 47
  },                                                                                                 //
                                                                                                     //
  services: {                                                                                        // 50
    type: Object,                                                                                    // 51
    optional: true,                                                                                  // 52
    blackbox: true                                                                                   // 53
  },                                                                                                 //
                                                                                                     //
  emails: {                                                                                          // 56
    type: Array,                                                                                     // 57
    optional: true,                                                                                  // 58
    label: "Email"                                                                                   // 59
  },                                                                                                 //
                                                                                                     //
  "emails.$": {                                                                                      // 62
    type: Object                                                                                     // 63
  },                                                                                                 //
                                                                                                     //
  "emails.$.address": {                                                                              // 66
    label: "Email Addess",                                                                           // 67
    type: String,                                                                                    // 68
    regEx: _nodeSimpleSchema2["default"].RegEx.Email                                                 // 69
  },                                                                                                 //
                                                                                                     //
  "emails.$.verified": {                                                                             // 72
    type: Boolean                                                                                    // 73
  },                                                                                                 //
                                                                                                     //
  password: {                                                                                        // 76
    type: String,                                                                                    // 77
    label: "Password",                                                                               // 78
    min: 6,                                                                                          // 79
    max: 20                                                                                          // 80
  },                                                                                                 //
                                                                                                     //
  modifiedAt: {                                                                                      // 83
    type: Date,                                                                                      // 84
    label: "ModifiedAt",                                                                             // 85
    defaultValue: new Date()                                                                         // 86
  },                                                                                                 //
                                                                                                     //
  createdAt: {                                                                                       // 89
    type: Date,                                                                                      // 90
    label: "CreatedAt",                                                                              // 91
    defaultValue: new Date()                                                                         // 92
  }                                                                                                  //
                                                                                                     //
});                                                                                                  //
                                                                                                     //
exports["default"] = User;                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"methods":{"categories.js":["/lib/collections","meteor/meteor","meteor/check",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/methods/categories.js                                                                      //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
  _meteor.Meteor.methods({                                                                           // 6
    'categoriesAdd': function () {                                                                   // 7
      function categoriesAdd(data) {                                                                 //
        (0, _check.check)(data, Object);                                                             // 8
        _collections.Categories.insert({                                                             // 9
          name: data.name,                                                                           // 10
          modifiedAt: new Date(),                                                                    // 11
          createdAt: new Date()                                                                      // 12
        });                                                                                          //
      }                                                                                              //
                                                                                                     //
      return categoriesAdd;                                                                          //
    }(),                                                                                             //
    'categoriesUpdate': function () {                                                                // 15
      function categoriesUpdate(data) {                                                              //
        (0, _check.check)(data, Object);                                                             // 16
        _collections.Categories.update({ _id: data._id }, { $set: {                                  // 17
            name: data.name,                                                                         // 18
            modifiedAt: new Date()                                                                   // 19
          } });                                                                                      //
      }                                                                                              //
                                                                                                     //
      return categoriesUpdate;                                                                       //
    }()                                                                                              //
  });                                                                                                //
};                                                                                                   //
                                                                                                     //
var _collections = require('/lib/collections');                                                      // 1
                                                                                                     //
var _meteor = require('meteor/meteor');                                                              // 2
                                                                                                     //
var _check = require('meteor/check');                                                                // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./products","./categories","./users",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/methods/index.js                                                                           //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
  (0, _products2['default'])();                                                                      // 6
  (0, _categories2['default'])();                                                                    // 7
  (0, _users2['default'])();                                                                         // 8
};                                                                                                   //
                                                                                                     //
var _products = require('./products');                                                               // 1
                                                                                                     //
var _products2 = _interopRequireDefault(_products);                                                  //
                                                                                                     //
var _categories = require('./categories');                                                           // 2
                                                                                                     //
var _categories2 = _interopRequireDefault(_categories);                                              //
                                                                                                     //
var _users = require('./users');                                                                     // 3
                                                                                                     //
var _users2 = _interopRequireDefault(_users);                                                        //
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products.js":["/lib/collections/products.js","meteor/meteor","meteor/check",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/methods/products.js                                                                        //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
  _meteor.Meteor.methods({                                                                           // 6
    'insertProduct': function () {                                                                   // 7
      function insertProduct(user_id, category_id, name, description, price) {                       //
        var createdAt = new Date();                                                                  // 8
                                                                                                     //
        (0, _check.check)(user_id, String);                                                          // 10
        (0, _check.check)(category_id, String);                                                      // 11
        (0, _check.check)(name, String);                                                             // 12
        (0, _check.check)(description, String);                                                      // 13
        (0, _check.check)(price, String);                                                            // 14
        (0, _check.check)(createdAt, Date);                                                          // 15
                                                                                                     //
        var formDate = {                                                                             // 17
          user_id: user_id,                                                                          // 18
          category_id: category_id,                                                                  // 19
          name: name,                                                                                // 20
          description: description,                                                                  // 21
          price: Number(price)                                                                       // 22
        };                                                                                           //
                                                                                                     //
        var isValid = _products.ProductSchem.namedContext("myContext").validate(formDate);           // 25
        if (isValid === true) {                                                                      // 26
          var prodDetails = {                                                                        // 27
            user_id: user_id,                                                                        // 28
            category_id: category_id,                                                                // 29
            name: name,                                                                              // 30
            description: description,                                                                // 31
            price: price,                                                                            // 32
            createdAt: createdAt,                                                                    // 33
            modifiedAt: null,                                                                        // 34
            deleted: null,                                                                           // 35
            saving: true                                                                             // 36
          };                                                                                         //
          _products2['default'].insert(prodDetails);                                                 // 38
        }                                                                                            //
                                                                                                     //
        // check(categoryid, String);                                                                //
        // check(name, String);                                                                      //
        // check(description, String);                                                               //
        // check(price, String);                                                                     //
        // check(createdAt, Date);                                                                   //
                                                                                                     //
        // const prodDetails = {                                                                     //
        //   categoryid,                                                                             //
        //   name,                                                                                   //
        //   description,                                                                            //
        //   price,                                                                                  //
        //   createdAt,                                                                              //
        //   modifiedAt: null,                                                                       //
        //   deleted: null,                                                                          //
        //   saving: true,                                                                           //
        // };                                                                                        //
        // Products.insert(prodDetails);                                                             //
      }                                                                                              // 7
                                                                                                     //
      return insertProduct;                                                                          //
    }(),                                                                                             //
    'deleteProduct': function () {                                                                   // 60
      function deleteProduct(id) {                                                                   //
        (0, _check.check)(id, String);                                                               // 61
        _products2['default'].update({ _id: id }, { $set: { deleted: true } });                      // 62
      }                                                                                              //
                                                                                                     //
      return deleteProduct;                                                                          //
    }(),                                                                                             //
    'updateProduct': function () {                                                                   // 65
      function updateProduct(id, categoryid, name, description, price) {                             //
        (0, _check.check)(id, String);                                                               // 66
        (0, _check.check)(categoryid, String);                                                       // 67
        (0, _check.check)(name, String);                                                             // 68
        (0, _check.check)(description, String);                                                      // 69
        (0, _check.check)(price, Number);                                                            // 70
        _products2['default'].update({ _id: id }, { $set: { category_id: categoryid, name: name, description: description, price: price, modifiedAt: new Date() } });
      }                                                                                              //
                                                                                                     //
      return updateProduct;                                                                          //
    }()                                                                                              //
  });                                                                                                //
};                                                                                                   //
                                                                                                     //
var _products = require('/lib/collections/products.js');                                             // 1
                                                                                                     //
var _products2 = _interopRequireDefault(_products);                                                  //
                                                                                                     //
var _meteor = require('meteor/meteor');                                                              // 2
                                                                                                     //
var _check = require('meteor/check');                                                                // 3
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["/lib/collections/users.js","meteor/meteor","meteor/check","meteor/accounts-base",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/methods/users.js                                                                           //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
  _meteor.Meteor.methods({                                                                           // 26
    'usersLogin': function () {                                                                      // 27
      function usersLogin(formData) {                                                                //
        (0, _check.check)(formData, Object);                                                         // 28
        // let isValid = UsersSchema.namedContext("myContext").validate(formData,"email.$.address");
        // let isValid2 = UsersSchema.namedContext("myContext").validateOne(formData,"password");    //
        // check(formData,UsersSchema,(err)=>{                                                       //
        //                                                                                           //
        // });                                                                                       //
      }                                                                                              //
                                                                                                     // 27
      return usersLogin;                                                                             //
    }(),                                                                                             //
    'usersSignup': function () {                                                                     // 36
      function usersSignup(formData) {                                                               //
        (0, _check.check)(formData, Object);                                                         // 37
                                                                                                     //
        var Checker = _users2['default'].namedContext("myContext");                                  // 40
        var schemaNoError = Checker.validate(formData);                                              // 41
                                                                                                     //
        if (!schemaNoError) {                                                                        // 43
          throw new Error("Please fill in the form correctly.");                                     // 44
        }                                                                                            //
        _accountsBase.Accounts.createUser({                                                          // 46
          "email": formData["emails.$.address"],                                                     // 47
          "password": formData["password"],                                                          // 48
          "profile.profilename": formData["profile.profilename"],                                    // 49
          "profile.firstname": formData["profile.firstname"],                                        // 50
          "profile.lastname": formData["profile.lastname"],                                          // 51
          "profile.gender": formData["profile.gender"],                                              // 52
          "profile.age": formData["profile.age"],                                                    // 53
          modifiedAt: new Date(),                                                                    // 54
          createdAt: new Date()                                                                      // 55
        });                                                                                          //
      }                                                                                              //
                                                                                                     //
      return usersSignup;                                                                            //
    }()                                                                                              //
  });                                                                                                //
};                                                                                                   //
                                                                                                     //
var _users = require('/lib/collections/users.js');                                                   // 1
                                                                                                     //
var _users2 = _interopRequireDefault(_users);                                                        //
                                                                                                     //
var _meteor = require('meteor/meteor');                                                              // 2
                                                                                                     //
var _check = require('meteor/check');                                                                // 3
                                                                                                     //
var _accountsBase = require('meteor/accounts-base');                                                 // 4
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
                                                                                                     //
_meteor.Meteor.startup(function () {                                                                 // 6
  _accountsBase.Accounts.config({                                                                    // 7
    forbidClientAccountCreation: true                                                                // 8
  });                                                                                                //
  _accountsBase.Accounts.onCreateUser(function (options, user) {                                     // 10
    user.profile = {};                                                                               // 11
    user.profile.profilename = options["profile.profilename"];                                       // 12
    user.profile.firstname = options["profile.firstname"];                                           // 13
    user.profile.lastname = options["profile.lastname"];                                             // 14
    user.profile.gender = options["profile.gender"];                                                 // 15
    user.profile.age = options["profile.age"];                                                       // 16
    user.modifiedAt = options["modifiedAt"];                                                         // 17
    user.createdAt = options["createdAt"];                                                           // 18
    return user;                                                                                     // 19
  });                                                                                                //
});                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"publications":{"categories.js":["/lib/collections","meteor/meteor","meteor/check",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/publications/categories.js                                                                 //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
                                                                                                     //
  _meteor.Meteor.publish('categoriesList', function () {                                             // 7
                                                                                                     //
    return [_collections.Categories.find(), _collections.Products.find()];                           // 9
  });                                                                                                //
                                                                                                     //
  _meteor.Meteor.publish('categoriesSingle', function (category_id) {                                // 16
                                                                                                     //
    (0, _check.check)(category_id, String);                                                          // 18
                                                                                                     //
    return _collections.Categories.find({ _id: category_id });                                       // 20
  });                                                                                                //
};                                                                                                   //
                                                                                                     //
var _collections = require('/lib/collections');                                                      // 1
                                                                                                     //
var _meteor = require('meteor/meteor');                                                              // 2
                                                                                                     //
var _check = require('meteor/check');                                                                // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./categories","./users","./products",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/publications/index.js                                                                      //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
  (0, _categories2['default'])();                                                                    // 6
  (0, _users2['default'])();                                                                         // 7
  (0, _products2['default'])();                                                                      // 8
};                                                                                                   //
                                                                                                     //
var _categories = require('./categories');                                                           // 1
                                                                                                     //
var _categories2 = _interopRequireDefault(_categories);                                              //
                                                                                                     //
var _users = require('./users');                                                                     // 2
                                                                                                     //
var _users2 = _interopRequireDefault(_users);                                                        //
                                                                                                     //
var _products = require('./products');                                                               // 3
                                                                                                     //
var _products2 = _interopRequireDefault(_products);                                                  //
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products.js":["meteor/meteor","/lib/collections",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/publications/products.js                                                                   //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
                                                                                                     //
  _meteor.Meteor.publish('productList', function () {                                                // 6
    return [_collections.Products.find(), _collections.Categories.find()];                           // 7
  });                                                                                                //
};                                                                                                   //
                                                                                                     //
var _meteor = require('meteor/meteor');                                                              // 1
                                                                                                     //
var _collections = require('/lib/collections');                                                      // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["meteor/meteor",function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/publications/users.js                                                                      //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
exports.__esModule = true;                                                                           //
                                                                                                     //
exports['default'] = function () {                                                                   //
  _meteor.Meteor.publish('users.current', function () {                                              // 5
    return _meteor.Meteor.users.find(this.userId);                                                   // 6
  });                                                                                                //
};                                                                                                   //
                                                                                                     //
var _meteor = require('meteor/meteor');                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"main.js":["./publications","./methods",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// server/main.js                                                                                    //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
var _publications = require('./publications');                                                       // 1
                                                                                                     //
var _publications2 = _interopRequireDefault(_publications);                                          //
                                                                                                     //
var _methods = require('./methods');                                                                 // 2
                                                                                                     //
var _methods2 = _interopRequireDefault(_methods);                                                    //
                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }    //
                                                                                                     //
(0, _publications2['default'])();                                                                    // 4
(0, _methods2['default'])();                                                                         // 5
///////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"wallaby.js":["react",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                   //
// wallaby.js                                                                                        //
//                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                     //
module.exports = function (wallaby) {                                                                // 1
  // There is a weird error with the mui and mantra.                                                 //
  // See: https://goo.gl/cLH8ib                                                                      //
  // Using require here seems to be the error.                                                       //
  // Renaming it into `load` just fixed the issue.                                                   //
  var load = require;                                                                                // 6
                                                                                                     //
  return {                                                                                           // 8
    files: ['client/modules/**/components/*.js', 'client/modules/**/actions/*.js', 'client/modules/**/containers/*.js', 'client/modules/**/libs/*.js'],
    tests: ['client/**/tests/*.js'],                                                                 // 15
    compilers: {                                                                                     // 18
      '**/*.js*': wallaby.compilers.babel({                                                          // 19
        babel: load('babel-core'),                                                                   // 20
        presets: ['es2015', 'stage-2', 'react']                                                      // 21
      })                                                                                             //
    },                                                                                               //
    env: {                                                                                           // 24
      type: 'node'                                                                                   // 25
    },                                                                                               //
    testFramework: 'mocha',                                                                          // 27
    setup: function () {                                                                             // 28
      function setup() {                                                                             // 28
        global.React = require('react');                                                             // 29
      }                                                                                              //
                                                                                                     //
      return setup;                                                                                  //
    }()                                                                                              //
  };                                                                                                 //
};                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////

}]},{"extensions":[".js",".json",".jsx"]});
require("./lib/collections/categories.js");
require("./lib/collections/index.js");
require("./lib/collections/products.js");
require("./lib/collections/users.js");
require("./server/methods/categories.js");
require("./server/methods/index.js");
require("./server/methods/products.js");
require("./server/methods/users.js");
require("./server/publications/categories.js");
require("./server/publications/index.js");
require("./server/publications/products.js");
require("./server/publications/users.js");
require("./wallaby.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
