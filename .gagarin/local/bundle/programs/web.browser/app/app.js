var require = meteorInstall({"lib":{"collections":{"categories.js":["meteor/mongo",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/collections/categories.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _mongo = require('meteor/mongo');                                                                                 // 1
                                                                                                                      //
var Categories = new _mongo.Mongo.Collection('categories');                                                           // 4
                                                                                                                      //
exports['default'] = Categories;                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./categories","./products",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/collections/index.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.Products = exports.Categories = exports.undefined = undefined;                                                //
                                                                                                                      //
var _categories = require('./categories');                                                                            // 1
                                                                                                                      //
var _categories2 = _interopRequireDefault(_categories);                                                               //
                                                                                                                      //
var _products = require('./products');                                                                                // 2
                                                                                                                      //
var _products2 = _interopRequireDefault(_products);                                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports.undefined = undefined;                                                                                        //
exports.Categories = _categories2['default'];                                                                         //
exports.Products = _products2['default'];                                                                             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products.js":["meteor/mongo","node-simple-schema",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/collections/products.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.ProductSchem = undefined;                                                                                     //
                                                                                                                      //
var _mongo = require('meteor/mongo');                                                                                 // 1
                                                                                                                      //
var _nodeSimpleSchema = require('node-simple-schema');                                                                // 2
                                                                                                                      //
var _nodeSimpleSchema2 = _interopRequireDefault(_nodeSimpleSchema);                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var Products = new _mongo.Mongo.Collection('products');                                                               // 4
                                                                                                                      //
var ProductSchem = exports.ProductSchem = new _nodeSimpleSchema2['default']({                                         // 6
  user_id: {                                                                                                          // 7
    type: String,                                                                                                     // 8
    label: 'User ID'                                                                                                  // 9
  },                                                                                                                  //
  category_id: {                                                                                                      // 11
    type: String,                                                                                                     // 12
    label: 'Category ID'                                                                                              // 13
  },                                                                                                                  //
  name: {                                                                                                             // 15
    type: String,                                                                                                     // 16
    label: 'Name',                                                                                                    // 17
    max: 10,                                                                                                          // 18
    min: 3                                                                                                            // 19
  },                                                                                                                  //
  description: {                                                                                                      // 21
    type: String,                                                                                                     // 22
    label: 'Description',                                                                                             // 23
    max: 300,                                                                                                         // 24
    min: 10                                                                                                           // 25
  },                                                                                                                  //
  price: {                                                                                                            // 27
    type: Number,                                                                                                     // 28
    decimal: true,                                                                                                    // 29
    label: 'Price'                                                                                                    // 30
  },                                                                                                                  //
  createdAt: {                                                                                                        // 32
    type: Date,                                                                                                       // 33
    label: 'Created At',                                                                                              // 34
    optional: true                                                                                                    // 35
  },                                                                                                                  //
  modifiedAt: {                                                                                                       // 37
    type: Date,                                                                                                       // 38
    label: 'Modified At',                                                                                             // 39
    optional: true                                                                                                    // 40
  },                                                                                                                  //
  isDeleted: {                                                                                                        // 42
    type: Boolean,                                                                                                    // 43
    label: 'Deleted',                                                                                                 // 44
    optional: true                                                                                                    // 45
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
exports['default'] = Products;                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":["node-simple-schema",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/collections/users.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _nodeSimpleSchema = require("node-simple-schema");                                                                // 1
                                                                                                                      //
var _nodeSimpleSchema2 = _interopRequireDefault(_nodeSimpleSchema);                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
/**                                                                                                                   //
 * Users schema                                                                                                       //
 */                                                                                                                   //
                                                                                                                      //
_nodeSimpleSchema2["default"].messages({                                                                              // 8
  regex: [{ msg: "[label] must be valid." }]                                                                          // 9
});                                                                                                                   //
var User = new _nodeSimpleSchema2["default"]({                                                                        // 11
                                                                                                                      //
  profile: {                                                                                                          // 13
    type: Object,                                                                                                     // 14
    optional: true,                                                                                                   // 15
    label: "Porfile"                                                                                                  // 16
  },                                                                                                                  //
                                                                                                                      //
  "profile.profilename": {                                                                                            // 19
    type: String,                                                                                                     // 20
    min: 1,                                                                                                           // 21
    label: "Profilename"                                                                                              // 22
  },                                                                                                                  //
                                                                                                                      //
  "profile.firstname": {                                                                                              // 25
    type: String,                                                                                                     // 26
    label: "Firstname",                                                                                               // 27
    min: 1                                                                                                            // 28
  },                                                                                                                  //
                                                                                                                      //
  "profile.lastname": {                                                                                               // 31
    type: String,                                                                                                     // 32
    min: 1,                                                                                                           // 33
    label: "Lastname"                                                                                                 // 34
  },                                                                                                                  //
                                                                                                                      //
  "profile.gender": {                                                                                                 // 37
    type: String,                                                                                                     // 38
    allowedValues: ["male", "female"],                                                                                // 39
    label: "Gender"                                                                                                   // 40
  },                                                                                                                  //
                                                                                                                      //
  "profile.age": {                                                                                                    // 43
    type: Number,                                                                                                     // 44
    label: "Age",                                                                                                     // 45
    min: 18,                                                                                                          // 46
    max: 99                                                                                                           // 47
  },                                                                                                                  //
                                                                                                                      //
  services: {                                                                                                         // 50
    type: Object,                                                                                                     // 51
    optional: true,                                                                                                   // 52
    blackbox: true                                                                                                    // 53
  },                                                                                                                  //
                                                                                                                      //
  emails: {                                                                                                           // 56
    type: Array,                                                                                                      // 57
    optional: true,                                                                                                   // 58
    label: "Email"                                                                                                    // 59
  },                                                                                                                  //
                                                                                                                      //
  "emails.$": {                                                                                                       // 62
    type: Object                                                                                                      // 63
  },                                                                                                                  //
                                                                                                                      //
  "emails.$.address": {                                                                                               // 66
    label: "Email Addess",                                                                                            // 67
    type: String,                                                                                                     // 68
    regEx: _nodeSimpleSchema2["default"].RegEx.Email                                                                  // 69
  },                                                                                                                  //
                                                                                                                      //
  "emails.$.verified": {                                                                                              // 72
    type: Boolean                                                                                                     // 73
  },                                                                                                                  //
                                                                                                                      //
  password: {                                                                                                         // 76
    type: String,                                                                                                     // 77
    label: "Password",                                                                                                // 78
    min: 6,                                                                                                           // 79
    max: 20                                                                                                           // 80
  },                                                                                                                  //
                                                                                                                      //
  modifiedAt: {                                                                                                       // 83
    type: Date,                                                                                                       // 84
    label: "ModifiedAt",                                                                                              // 85
    defaultValue: new Date()                                                                                          // 86
  },                                                                                                                  //
                                                                                                                      //
  createdAt: {                                                                                                        // 89
    type: Date,                                                                                                       // 90
    label: "CreatedAt",                                                                                               // 91
    defaultValue: new Date()                                                                                          // 92
  }                                                                                                                   //
                                                                                                                      //
});                                                                                                                   //
                                                                                                                      //
exports["default"] = User;                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"client":{"modules":{"categories":{"components":{"test":{"categories_list.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/test/categories_list.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"categories_add.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/categories_add.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var CategoriesAdd = function (_React$Component) {                                                                     //
  (0, _inherits3['default'])(CategoriesAdd, _React$Component);                                                        //
                                                                                                                      //
  function CategoriesAdd() {                                                                                          //
    (0, _classCallCheck3['default'])(this, CategoriesAdd);                                                            //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  CategoriesAdd.prototype.handleSubmit = function () {                                                                //
    function handleSubmit(event) {                                                                                    //
      event.preventDefault();                                                                                         // 6
                                                                                                                      //
      var categoriesAdd = this.props.categoriesAdd;                                                                   //
      var name = this.refs.name;                                                                                      //
                                                                                                                      //
                                                                                                                      //
      categoriesAdd({ 'name': name.value });                                                                          // 11
                                                                                                                      //
      // let formData = {                                                                                             //
      //   catgory_id: "3543534534",                                                                                  //
      //   name: "Prod Name",                                                                                         //
      //   description: "Sample Details",                                                                             //
      //   price: 24,                                                                                                 //
      //   createdAt: new Date(),                                                                                     //
      //   modifiedAt: new Date(),                                                                                    //
      // };                                                                                                           //
      //                                                                                                              //
      // validateCatId = ProductSchem.namedContext("myContext").validateOne(formData, "catgory_id");                  //
      // if(validateCatId ===  false) {                                                                               //
      //   console.log(check(formData, ProductSchem));                                                                //
      // }                                                                                                            //
      //                                                                                                              //
      // validateName = ProductSchem.namedContext("myContext").validateOne(formData, "name");                         //
      // if(validateName ===  false) {                                                                                //
      //   console.log(check(formData, ProductSchem));                                                                //
      // }                                                                                                            //
      //                                                                                                              //
      // validateDescription = ProductSchem.namedContext("myContext").validateOne(formData, "description");           //
      // if(validateDescription ===  false) {                                                                         //
      //   console.log(check(formData, ProductSchem));                                                                //
      // }                                                                                                            //
      //                                                                                                              //
      // validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");                       //
      // if(validatePrice ===  false) {                                                                               //
      //   console.log(check(formData, ProductSchem));                                                                //
      // }                                                                                                            //
      //                                                                                                              //
      // validateCreatedAt = ProductSchem.namedContext("myContext").validateOne(formData, "createdAt");               //
      // if(validateCreatedAt ===  false) {                                                                           //
      //   console.log(check(formData, ProductSchem));                                                                //
      // }                                                                                                            //
      //                                                                                                              //
      // validateModifiedAt = ProductSchem.namedContext("myContext").validateOne(formData, "modifiedAt");             //
      // if(validateModifiedAt ===  false) {                                                                          //
      //   console.log(check(formData, ProductSchem));                                                                //
      // }                                                                                                            //
      //                                                                                                              //
      // isValid = ProductSchem.namedContext("myContext").validate(formData);                                         //
      // if(isValid ===  true) {                                                                                      //
      //   console.log('call action');                                                                                //
      //   // categoriesAdd(formData);                                                                                //
      // }                                                                                                            //
    }                                                                                                                 //
                                                                                                                      // 5
    return handleSubmit;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  CategoriesAdd.prototype.render = function () {                                                                      // 3
    function render() {                                                                                               //
      var nameError = this.props.nameError;                                                                           //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 64
        'div',                                                                                                        //
        { className: 'col-sm-4' },                                                                                    //
        _react2['default'].createElement(                                                                             //
          'form',                                                                                                     //
          { onSubmit: this.handleSubmit.bind(this) },                                                                 //
          _react2['default'].createElement(                                                                           //
            'div',                                                                                                    //
            { className: 'form-group' },                                                                              //
            _react2['default'].createElement(                                                                         //
              'h3',                                                                                                   //
              null,                                                                                                   //
              'Category Add'                                                                                          //
            )                                                                                                         //
          ),                                                                                                          //
          _react2['default'].createElement(                                                                           //
            'div',                                                                                                    //
            { className: 'form-group' },                                                                              //
            _react2['default'].createElement(                                                                         //
              'label',                                                                                                //
              { 'for': 'categoryName' },                                                                              //
              'Name'                                                                                                  //
            ),                                                                                                        //
            _react2['default'].createElement('input', { ref: 'name', type: 'text', className: 'form-control', id: 'categoryName', placeholder: 'Name' }),
            _react2['default'].createElement(                                                                         //
              'p',                                                                                                    //
              { className: 'error text-error' },                                                                      //
              nameError ? nameError : ''                                                                              //
            )                                                                                                         //
          ),                                                                                                          //
          _react2['default'].createElement(                                                                           //
            'button',                                                                                                 //
            { type: 'submit', className: 'btn btn-default' },                                                         //
            'Add'                                                                                                     //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return CategoriesAdd;                                                                                               //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = CategoriesAdd;                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_delete.js":["react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/categories_delete.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var CategoriesDelete = function CategoriesDelete() {                                                                  // 3
  return _react2['default'].createElement(                                                                            //
    'div',                                                                                                            //
    null,                                                                                                             //
    'CategoriesDelete'                                                                                                //
  );                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = CategoriesDelete;                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_list.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./categories_list_item",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/categories_list.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _categories_list_item = require('./categories_list_item');                                                        // 3
                                                                                                                      //
var _categories_list_item2 = _interopRequireDefault(_categories_list_item);                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var CategoriesList = function (_React$Component) {                                                                    //
  (0, _inherits3['default'])(CategoriesList, _React$Component);                                                       //
                                                                                                                      //
  function CategoriesList() {                                                                                         //
    (0, _classCallCheck3['default'])(this, CategoriesList);                                                           //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  CategoriesList.prototype.render = function () {                                                                     //
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var categories = _props.categories;                                                                             //
      var categoriesDelete = _props.categoriesDelete;                                                                 //
                                                                                                                      //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 12
        'div',                                                                                                        //
        null,                                                                                                         //
        _react2['default'].createElement(                                                                             //
          'h1',                                                                                                       //
          null,                                                                                                       //
          'Categories List'                                                                                           //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'a',                                                                                                        //
          { className: 'btn btn-default', href: '/categories/add/', role: 'button' },                                 //
          'Add Category'                                                                                              //
        ),                                                                                                            //
        _react2['default'].createElement('br', null),                                                                 //
        _react2['default'].createElement('br', null),                                                                 //
        _react2['default'].createElement(                                                                             //
          'table',                                                                                                    //
          { className: 'table table-bordered' },                                                                      //
          _react2['default'].createElement(                                                                           //
            'thead',                                                                                                  //
            null,                                                                                                     //
            _react2['default'].createElement(                                                                         //
              'tr',                                                                                                   //
              { className: 'info' },                                                                                  //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Id'                                                                                                  //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Name'                                                                                                //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Created At'                                                                                          //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Products'                                                                                            //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Actions'                                                                                             //
              )                                                                                                       //
            )                                                                                                         //
          ),                                                                                                          //
          _react2['default'].createElement(                                                                           //
            'tbody',                                                                                                  //
            null,                                                                                                     //
            categories ? categories.map(function (category) {                                                         //
              return _react2['default'].createElement(_categories_list_item2['default'], { key: category._id, category: category, categoriesDelete: categoriesDelete });
            }) : 'no categories yet'                                                                                  //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return CategoriesList;                                                                                              //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = CategoriesList;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_list_item.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","/client/global-helpers",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/categories_list_item.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _globalHelpers = require('/client/global-helpers');                                                               // 2
                                                                                                                      //
var help = _interopRequireWildcard(_globalHelpers);                                                                   //
                                                                                                                      //
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var CategoriesListItem = function (_React$Component) {                                                                //
  (0, _inherits3['default'])(CategoriesListItem, _React$Component);                                                   //
                                                                                                                      //
  function CategoriesListItem() {                                                                                     //
    (0, _classCallCheck3['default'])(this, CategoriesListItem);                                                       //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  CategoriesListItem.prototype.handleDelete = function () {                                                           //
    function handleDelete() {                                                                                         //
      var _props = this.props;                                                                                        //
      var category = _props.category;                                                                                 //
      var categoriesDelete = _props.categoriesDelete;                                                                 //
                                                                                                                      //
      categoriesDelete(category._id);                                                                                 // 8
    }                                                                                                                 //
                                                                                                                      //
    return handleDelete;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  CategoriesListItem.prototype.render = function () {                                                                 // 4
    function render() {                                                                                               //
      var category = this.props.category;                                                                             //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 13
        'tr',                                                                                                         //
        null,                                                                                                         //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          category._id                                                                                                //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          category.name                                                                                               //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          help.formatDate(category.createdAt)                                                                         //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          category.productCount                                                                                       //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          _react2['default'].createElement(                                                                           //
            'a',                                                                                                      //
            { className: 'btn btn-xs btn-danger', href: '#', role: 'button', onClick: this.handleDelete.bind(this) },
            'Delete'                                                                                                  //
          ),                                                                                                          //
          ' ',                                                                                                        //
          _react2['default'].createElement(                                                                           //
            'a',                                                                                                      //
            { className: 'btn btn-xs btn-success', href: '/categories/update/' + category._id, role: 'button' },      //
            'Update'                                                                                                  //
          ),                                                                                                          //
          ' ',                                                                                                        //
          _react2['default'].createElement(                                                                           //
            'a',                                                                                                      //
            { className: 'btn btn-xs btn-default', href: '/categories/view/' + category._id, role: 'button' },        //
            'View'                                                                                                    //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return CategoriesListItem;                                                                                          //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = CategoriesListItem;                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_update.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/categories_update.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var CategoriesUpdate = function (_React$Component) {                                                                  //
  (0, _inherits3["default"])(CategoriesUpdate, _React$Component);                                                     //
                                                                                                                      //
  function CategoriesUpdate() {                                                                                       //
    (0, _classCallCheck3["default"])(this, CategoriesUpdate);                                                         //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  CategoriesUpdate.prototype.handleSubmit = function () {                                                             //
    function handleSubmit(event) {                                                                                    //
      event.preventDefault();                                                                                         // 6
      var categoriesUpdate = this.props.categoriesUpdate;                                                             //
      var name = this.refs.name;                                                                                      //
                                                                                                                      //
      categoriesUpdate(name.value);                                                                                   // 9
    }                                                                                                                 //
                                                                                                                      //
    return handleSubmit;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  CategoriesUpdate.prototype.render = function () {                                                                   // 3
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var nameError = _props.nameError;                                                                               //
      var category = _props.category;                                                                                 //
                                                                                                                      //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 15
        "div",                                                                                                        //
        { className: "col-sm-4" },                                                                                    //
        _react2["default"].createElement(                                                                             //
          "form",                                                                                                     //
          { onSubmit: this.handleSubmit.bind(this) },                                                                 //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "form-group" },                                                                              //
            _react2["default"].createElement(                                                                         //
              "h3",                                                                                                   //
              null,                                                                                                   //
              "Category Update"                                                                                       //
            )                                                                                                         //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "form-group" },                                                                              //
            _react2["default"].createElement(                                                                         //
              "label",                                                                                                //
              { "for": "categoryName" },                                                                              //
              "Name"                                                                                                  //
            ),                                                                                                        //
            _react2["default"].createElement("input", { ref: "name", type: "text", className: "form-control", id: "categoryName", placeholder: "Name", defaultValue: category.name }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { className: "error text-error" },                                                                      //
              nameError ? nameError : ''                                                                              //
            )                                                                                                         //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "button",                                                                                                 //
            { type: "submit", className: "btn btn-default" },                                                         //
            "Update"                                                                                                  //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return CategoriesUpdate;                                                                                            //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = CategoriesUpdate;                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_view.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/components/categories_view.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var CategoriesView = function (_React$Component) {                                                                    //
  (0, _inherits3["default"])(CategoriesView, _React$Component);                                                       //
                                                                                                                      //
  function CategoriesView() {                                                                                         //
    (0, _classCallCheck3["default"])(this, CategoriesView);                                                           //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  CategoriesView.prototype.render = function () {                                                                     //
    function render() {                                                                                               //
      var category = this.props.category;                                                                             //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 6
        "div",                                                                                                        //
        null,                                                                                                         //
        _react2["default"].createElement(                                                                             //
          "h1",                                                                                                       //
          null,                                                                                                       //
          category.name                                                                                               //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "h2",                                                                                                       //
          null,                                                                                                       //
          category.details                                                                                            //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "h3",                                                                                                       //
          null,                                                                                                       //
          Date(category.createdAt)                                                                                    //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "a",                                                                                                        //
          { className: "btn btn-primary ", href: "/categories/list/", role: "button" },                               //
          "back"                                                                                                      //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return CategoriesView;                                                                                              //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = CategoriesView;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"actions":{"categories.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/actions/categories.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports["default"] = {                                                                                                //
  categoriesAdd: function () {                                                                                        // 2
    function categoriesAdd(_ref, formData) {                                                                          //
      var Meteor = _ref.Meteor;                                                                                       //
      var LocalState = _ref.LocalState;                                                                               //
      var FlowRouter = _ref.FlowRouter;                                                                               //
                                                                                                                      //
      Meteor.call("categoriesAdd", formData, function (error) {                                                       // 3
        if (error) {                                                                                                  // 4
          return LocalState.set("CATEGORIES_ADD_ERROR", error.message);                                               // 5
        }                                                                                                             //
        FlowRouter.go('/categories/list');                                                                            // 7
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return categoriesAdd;                                                                                             //
  }(),                                                                                                                //
  categoriesUpdate: function () {                                                                                     // 10
    function categoriesUpdate(_ref2, formData) {                                                                      //
      var Meteor = _ref2.Meteor;                                                                                      //
      var LocalState = _ref2.LocalState;                                                                              //
      var FlowRouter = _ref2.FlowRouter;                                                                              //
                                                                                                                      //
      Meteor.call("categoriesUpdate", formData, function (error) {                                                    // 11
        if (error) {                                                                                                  // 12
          return LocalState.set("categories_add_error", error.message);                                               // 13
        }                                                                                                             //
        FlowRouter.go('/categories/list');                                                                            // 15
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return categoriesUpdate;                                                                                          //
  }(),                                                                                                                //
  categoriesDelete: function () {                                                                                     // 18
    function categoriesDelete() {}                                                                                    //
                                                                                                                      //
    return categoriesDelete;                                                                                          //
  }(),                                                                                                                //
  clearErrors: function () {                                                                                          // 21
    function clearErrors(_ref3) {                                                                                     //
      var LocalState = _ref3.LocalState;                                                                              //
                                                                                                                      //
      return LocalState.set("categories_add_error", null);                                                            // 22
    }                                                                                                                 //
                                                                                                                      //
    return clearErrors;                                                                                               //
  }()                                                                                                                 //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":["./categories",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/actions/index.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _categories = require('./categories');                                                                            // 1
                                                                                                                      //
var _categories2 = _interopRequireDefault(_categories);                                                               //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  categories: _categories2['default']                                                                                 // 4
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"containers":{"categories_add.js":["mantra-core","../components/categories_add",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/containers/categories_add.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _categories_add = require('../components/categories_add');                                                        // 3
                                                                                                                      //
var _categories_add2 = _interopRequireDefault(_categories_add);                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var LocalState = _context.LocalState;                                                                               //
                                                                                                                      //
  var nameError = LocalState.get('CATEGORIES_ADD_NAME_ERROR');                                                        // 7
  var detailsError = LocalState.get('CATEGORIES_ADD_DETAILS_ERROR');                                                  // 8
  onData(null, {                                                                                                      // 9
    nameError: nameError,                                                                                             // 10
    detailsError: detailsError                                                                                        // 11
  });                                                                                                                 //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 15
  return {                                                                                                            //
    categoriesAdd: actions.categories.categoriesAdd,                                                                  // 16
    clearErrors: actions.categories.clearErrors,                                                                      // 17
    context: function () {                                                                                            // 18
      function context() {                                                                                            // 18
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_categories_add2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_delete.js":["mantra-core","../components/categories_delete",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/containers/categories_delete.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _categories_delete = require('../components/categories_delete');                                                  // 3
                                                                                                                      //
var _categories_delete2 = _interopRequireDefault(_categories_delete);                                                 //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  onData(null, {});                                                                                                   // 6
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context) {                                                 // 9
  return {                                                                                                            //
    context: function () {                                                                                            // 10
      function context() {                                                                                            // 10
        return _context;                                                                                              //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_categories_delete2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_list.js":["mantra-core","../components/categories_list",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/containers/categories_list.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _categories_list = require('../components/categories_list');                                                      // 3
                                                                                                                      //
var _categories_list2 = _interopRequireDefault(_categories_list);                                                     //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
                                                                                                                      //
                                                                                                                      //
  if (Meteor.subscribe('categoriesList').ready()) {                                                                   // 9
                                                                                                                      //
    var categories = Collections.Categories.find({}).fetch().map(function (category) {                                // 11
                                                                                                                      //
      category.productCount = Collections.Products.find({ category_id: category._id }).count();                       // 14
                                                                                                                      //
      return category;                                                                                                // 16
    });                                                                                                               //
                                                                                                                      //
    onData(null, {                                                                                                    // 20
      categories: categories                                                                                          // 21
    });                                                                                                               //
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 28
  return {                                                                                                            //
    categoriesDelete: actions.categories.categoriesDelete,                                                            // 29
    context: function () {                                                                                            // 30
      function context() {                                                                                            // 30
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_categories_list2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_update.js":["mantra-core","../components/categories_update",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/containers/categories_update.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _categories_update = require('../components/categories_update');                                                  // 3
                                                                                                                      //
var _categories_update2 = _interopRequireDefault(_categories_update);                                                 //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
  var category_id = _ref.category_id;                                                                                 //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
                                                                                                                      //
  if (Meteor.subscribe("categoriesSingle", category_id).ready()) {                                                    // 7
    var category = Collections.Categories.findOne(category_id);                                                       // 8
    onData(null, { category: category });                                                                             // 9
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 14
  return {                                                                                                            //
    categoriesUpdate: actions.categories.categoriesUpdate,                                                            // 15
    clearErrors: actions.categories.clearErrors,                                                                      // 16
    context: function () {                                                                                            // 17
      function context() {                                                                                            // 17
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_categories_update2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"categories_view.js":["mantra-core","../components/categories_view",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/containers/categories_view.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _categories_view = require('../components/categories_view');                                                      // 3
                                                                                                                      //
var _categories_view2 = _interopRequireDefault(_categories_view);                                                     //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
  var category_id = _ref.category_id;                                                                                 //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
                                                                                                                      //
  if (Meteor.subscribe("categoriesSingle", category_id).ready()) {                                                    // 7
    var category = Collections.Categories.findOne(category_id);                                                       // 8
    onData(null, { category: category });                                                                             // 9
  }                                                                                                                   //
                                                                                                                      //
  return;                                                                                                             // 12
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2) {                                                // 16
  return {                                                                                                            //
    context: function () {                                                                                            // 17
      function context() {                                                                                            // 17
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_categories_view2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"index.js":["./actions","./routes",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/index.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _actions = require('./actions');                                                                                  // 1
                                                                                                                      //
var _actions2 = _interopRequireDefault(_actions);                                                                     //
                                                                                                                      //
var _routes = require('./routes');                                                                                    // 2
                                                                                                                      //
var _routes2 = _interopRequireDefault(_routes);                                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  routes: _routes2['default'],                                                                                        // 5
  actions: _actions2['default']                                                                                       // 6
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["react","react-mounter","../users/containers/auth_checker","../core/components/main_layout","./containers/categories_add","./containers/categories_update","./containers/categories_view","./containers/categories_delete","./containers/categories_list",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/categories/routes.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
exports['default'] = function (injectDeps, _ref) {                                                                    //
  var FlowRouter = _ref.FlowRouter;                                                                                   //
                                                                                                                      //
  //  const MainLayoutCtx = injectDeps(MainLayout);                                                                   //
  var AuthCheck = injectDeps(_auth_checker2['default']);                                                              // 16
                                                                                                                      //
  FlowRouter.route('/categories/add', {                                                                               // 18
    name: 'categories_add',                                                                                           // 19
    action: function () {                                                                                             // 20
      function action() {                                                                                             //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 21
          MainLayout: _main_layout2['default'], content: function () {                                                // 22
            function content() {                                                                                      // 22
              return _react2['default'].createElement(_categories_add2['default'], null);                             //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/categories/update/:category_id', {                                                               // 27
    name: 'categories_update',                                                                                        // 28
    action: function () {                                                                                             // 29
      function action(_ref2) {                                                                                        //
        var category_id = _ref2.category_id;                                                                          //
                                                                                                                      //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 30
          MainLayout: _main_layout2['default'], content: function () {                                                // 31
            function content() {                                                                                      // 31
              return _react2['default'].createElement(_categories_update2['default'], { category_id: category_id });  //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/categories/view/:category_id', {                                                                 // 36
    name: 'categories_view',                                                                                          // 37
    action: function () {                                                                                             // 38
      function action(_ref3) {                                                                                        //
        var category_id = _ref3.category_id;                                                                          //
                                                                                                                      //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 39
          MainLayout: _main_layout2['default'], content: function () {                                                // 40
            function content() {                                                                                      // 40
              return _react2['default'].createElement(_categories_view2['default'], { category_id: category_id });    //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/categories/delete/:category_id', {                                                               // 45
    name: 'categories_delete',                                                                                        // 46
    action: function () {                                                                                             // 47
      function action(_ref4) {                                                                                        //
        var category_id = _ref4.category_id;                                                                          //
                                                                                                                      //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 48
          MainLayout: _main_layout2['default'], content: function () {                                                // 49
            function content() {                                                                                      // 49
              return _react2['default'].createElement(_categories_delete2['default'], { category_id: category_id });  //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/categories/list', {                                                                              // 54
    name: 'categories_list',                                                                                          // 55
    action: function () {                                                                                             // 56
      function action() {                                                                                             //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 57
          MainLayout: _main_layout2['default'], content: function () {                                                // 58
            function content() {                                                                                      // 58
              return _react2['default'].createElement(_categories_list2['default'], null);                            //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
};                                                                                                                    //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactMounter = require('react-mounter');                                                                         // 2
                                                                                                                      //
var _auth_checker = require('../users/containers/auth_checker');                                                      // 5
                                                                                                                      //
var _auth_checker2 = _interopRequireDefault(_auth_checker);                                                           //
                                                                                                                      //
var _main_layout = require('../core/components/main_layout');                                                         // 6
                                                                                                                      //
var _main_layout2 = _interopRequireDefault(_main_layout);                                                             //
                                                                                                                      //
var _categories_add = require('./containers/categories_add');                                                         // 7
                                                                                                                      //
var _categories_add2 = _interopRequireDefault(_categories_add);                                                       //
                                                                                                                      //
var _categories_update = require('./containers/categories_update');                                                   // 8
                                                                                                                      //
var _categories_update2 = _interopRequireDefault(_categories_update);                                                 //
                                                                                                                      //
var _categories_view = require('./containers/categories_view');                                                       // 9
                                                                                                                      //
var _categories_view2 = _interopRequireDefault(_categories_view);                                                     //
                                                                                                                      //
var _categories_delete = require('./containers/categories_delete');                                                   // 10
                                                                                                                      //
var _categories_delete2 = _interopRequireDefault(_categories_delete);                                                 //
                                                                                                                      //
var _categories_list = require('./containers/categories_list');                                                       // 11
                                                                                                                      //
var _categories_list2 = _interopRequireDefault(_categories_list);                                                     //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"core":{"actions":{"index.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/actions/index.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports["default"] = {                                                                                                //
  undefined: undefined                                                                                                // 2
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"home.js":["react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/components/home.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var Home = function Home() {                                                                                          // 3
      return _react2['default'].createElement(                                                                        //
            'div',                                                                                                    //
            null,                                                                                                     //
            _react2['default'].createElement(                                                                         //
                  'h1',                                                                                               //
                  null,                                                                                               //
                  'Welcome to snapzio Mantra Boilerplate'                                                             //
            )                                                                                                         //
      );                                                                                                              //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = Home;                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main_layout.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./nav_bar",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/components/main_layout.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _nav_bar = require('./nav_bar');                                                                                  // 3
                                                                                                                      //
var _nav_bar2 = _interopRequireDefault(_nav_bar);                                                                     //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var Layout = function (_React$Component) {                                                                            //
  (0, _inherits3['default'])(Layout, _React$Component);                                                               //
                                                                                                                      //
  function Layout() {                                                                                                 //
    (0, _classCallCheck3['default'])(this, Layout);                                                                   //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  Layout.prototype.render = function () {                                                                             //
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var content = _props.content;                                                                                   //
      var userId = _props.userId;                                                                                     //
      var Meteor = this.props.Meteor;                                                                                 //
                                                                                                                      //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 10
        'div',                                                                                                        //
        null,                                                                                                         //
        _react2['default'].createElement(                                                                             //
          'div',                                                                                                      //
          null,                                                                                                       //
          userId ? _react2['default'].createElement(_nav_bar2['default'], { Meteor: Meteor }) : _react2['default'].createElement(_nav_bar.NavBarLogOut, null),
          _react2['default'].createElement(                                                                           //
            'div',                                                                                                    //
            { className: 'container marginTop' },                                                                     //
            content()                                                                                                 //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Layout;                                                                                                      //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = Layout;                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"nav_bar.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/components/nav_bar.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.NavBarLogOut = undefined;                                                                                     //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var NavBar = function (_React$Component) {                                                                            //
  (0, _inherits3["default"])(NavBar, _React$Component);                                                               //
                                                                                                                      //
  function NavBar() {                                                                                                 //
    (0, _classCallCheck3["default"])(this, NavBar);                                                                   //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  NavBar.prototype.render = function () {                                                                             //
    function render() {                                                                                               //
      return _react2["default"].createElement(                                                                        // 6
        "nav",                                                                                                        //
        { className: "navbar navbar-default navbar-fixed-top" },                                                      //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "container-fluid" },                                                                           //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "navbar-header" },                                                                           //
            _react2["default"].createElement(                                                                         //
              "button",                                                                                               //
              { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
              _react2["default"].createElement(                                                                       //
                "span",                                                                                               //
                { className: "sr-only" },                                                                             //
                "Toggle navigation"                                                                                   //
              ),                                                                                                      //
              _react2["default"].createElement("span", { className: "icon-bar" }),                                    //
              _react2["default"].createElement("span", { className: "icon-bar" }),                                    //
              _react2["default"].createElement("span", { className: "icon-bar" })                                     //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "a",                                                                                                    //
              { className: "navbar-brand", href: "#" },                                                               //
              "Mantra Boilerplate"                                                                                    //
            )                                                                                                         //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },                            //
            _react2["default"].createElement(                                                                         //
              "ul",                                                                                                   //
              { className: "nav navbar-nav" },                                                                        //
              _react2["default"].createElement(                                                                       //
                "li",                                                                                                 //
                null,                                                                                                 //
                _react2["default"].createElement(                                                                     //
                  "a",                                                                                                //
                  { href: "/categories/list" },                                                                       //
                  "Categories"                                                                                        //
                )                                                                                                     //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "li",                                                                                                 //
                null,                                                                                                 //
                _react2["default"].createElement(                                                                     //
                  "a",                                                                                                //
                  { href: "/products/list" },                                                                         //
                  "Products"                                                                                          //
                )                                                                                                     //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "ul",                                                                                                   //
              { className: "nav navbar-nav navbar-right" },                                                           //
              _react2["default"].createElement(                                                                       //
                "li",                                                                                                 //
                null,                                                                                                 //
                _react2["default"].createElement(                                                                     //
                  "a",                                                                                                //
                  { href: "#", onClick: this.logout.bind(this) },                                                     //
                  "Logout"                                                                                            //
                )                                                                                                     //
              )                                                                                                       //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  NavBar.prototype.logout = function () {                                                                             // 3
    function logout(e) {                                                                                              //
      if (e && e.preventDefault) {                                                                                    // 43
        e.preventDefault();                                                                                           // 44
      }                                                                                                               //
      var Meteor = this.props.Meteor;                                                                                 //
                                                                                                                      //
      Meteor.logout();                                                                                                // 47
    }                                                                                                                 //
                                                                                                                      //
    return logout;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return NavBar;                                                                                                      //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
var NavBarLogOut = exports.NavBarLogOut = function NavBarLogOut() {                                                   // 52
  return _react2["default"].createElement(                                                                            //
    "nav",                                                                                                            //
    { className: "navbar navbar-default navbar-fixed-top" },                                                          //
    _react2["default"].createElement(                                                                                 //
      "div",                                                                                                          //
      { className: "container-fluid" },                                                                               //
      _react2["default"].createElement(                                                                               //
        "div",                                                                                                        //
        { className: "navbar-header" },                                                                               //
        _react2["default"].createElement(                                                                             //
          "button",                                                                                                   //
          { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
          _react2["default"].createElement(                                                                           //
            "span",                                                                                                   //
            { className: "sr-only" },                                                                                 //
            "Toggle navigation"                                                                                       //
          ),                                                                                                          //
          _react2["default"].createElement("span", { className: "icon-bar" }),                                        //
          _react2["default"].createElement("span", { className: "icon-bar" }),                                        //
          _react2["default"].createElement("span", { className: "icon-bar" })                                         //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "a",                                                                                                        //
          { className: "navbar-brand", href: "#" },                                                                   //
          "Mantra Boilerplate"                                                                                        //
        )                                                                                                             //
      ),                                                                                                              //
      _react2["default"].createElement(                                                                               //
        "div",                                                                                                        //
        { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },                                //
        _react2["default"].createElement(                                                                             //
          "ul",                                                                                                       //
          { className: "nav navbar-nav navbar-right" },                                                               //
          _react2["default"].createElement(                                                                           //
            "li",                                                                                                     //
            null,                                                                                                     //
            _react2["default"].createElement(                                                                         //
              "a",                                                                                                    //
              { href: "/users/signup" },                                                                              //
              "Signup"                                                                                                //
            )                                                                                                         //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "li",                                                                                                     //
            null,                                                                                                     //
            _react2["default"].createElement(                                                                         //
              "a",                                                                                                    //
              { href: "/users/login" },                                                                               //
              "Login"                                                                                                 //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      )                                                                                                               //
    )                                                                                                                 //
  );                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports["default"] = NavBar;                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"containers":{"main_layout.js":["mantra-core","../components/main_layout",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/containers/main_layout.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _main_layout = require('../components/main_layout');                                                              // 3
                                                                                                                      //
var _main_layout2 = _interopRequireDefault(_main_layout);                                                             //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var authCommon = _context.authCommon;                                                                               //
  var Meteor = _context.Meteor;                                                                                       //
                                                                                                                      //
  var _authCommon = authCommon();                                                                                     //
                                                                                                                      //
  var userSubReady = _authCommon.userSubReady;                                                                        //
  var userId = _authCommon.userId;                                                                                    //
  var user = _authCommon.user;                                                                                        //
                                                                                                                      //
  if (userSubReady) {                                                                                                 // 8
    var data = { userId: userId, user: user, Meteor: Meteor };                                                        // 9
                                                                                                                      //
    onData(null, data);                                                                                               // 11
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2) {                                                // 17
  return {                                                                                                            //
    context: function () {                                                                                            // 18
      function context() {                                                                                            // 18
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_main_layout2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"index.js":["./actions","./routes",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/index.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _actions = require('./actions');                                                                                  // 1
                                                                                                                      //
var _actions2 = _interopRequireDefault(_actions);                                                                     //
                                                                                                                      //
var _routes = require('./routes');                                                                                    // 2
                                                                                                                      //
var _routes2 = _interopRequireDefault(_routes);                                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  routes: _routes2['default'],                                                                                        // 5
  actions: _actions2['default']                                                                                       // 6
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["react","react-mounter","./containers/main_layout","./components/home",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/core/routes.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
exports['default'] = function (injectDeps, _ref) {                                                                    //
  var FlowRouter = _ref.FlowRouter;                                                                                   //
                                                                                                                      //
  var MainLayoutCtx = injectDeps(_main_layout2['default']);                                                           // 8
                                                                                                                      //
  FlowRouter.route('/', {                                                                                             // 10
    name: 'home',                                                                                                     // 11
    action: function () {                                                                                             // 12
      function action() {                                                                                             //
        (0, _reactMounter.mount)(MainLayoutCtx, {                                                                     // 13
          content: function () {                                                                                      // 14
            function content() {                                                                                      // 14
              return _react2['default'].createElement(_home2['default'], null);                                       //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
};                                                                                                                    //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactMounter = require('react-mounter');                                                                         // 2
                                                                                                                      //
var _main_layout = require('./containers/main_layout');                                                               // 4
                                                                                                                      //
var _main_layout2 = _interopRequireDefault(_main_layout);                                                             //
                                                                                                                      //
var _home = require('./components/home');                                                                             // 5
                                                                                                                      //
var _home2 = _interopRequireDefault(_home);                                                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"products":{"actions":{"index.js":["./products",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/actions/index.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _products = require('./products');                                                                                // 1
                                                                                                                      //
var _products2 = _interopRequireDefault(_products);                                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  products: _products2['default']                                                                                     // 4
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/actions/products.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports["default"] = {                                                                                                //
  validateProdName: function () {                                                                                     // 3
    function validateProdName(_ref, name) {                                                                           //
      var LocalState = _ref.LocalState;                                                                               //
      var ProductSchem = _ref.ProductSchem;                                                                           //
                                                                                                                      //
      var formData = {                                                                                                // 4
        name: name                                                                                                    // 5
      };                                                                                                              //
      var validateProdName = ProductSchem.namedContext("myContext").validateOne(formData, "name");                    // 7
      if (validateProdName === false) {                                                                               // 8
        document.getElementById('prodName').style.border = '1px solid red';                                           // 9
        document.getElementById('nameErrorMsg').style.color = 'red';                                                  // 10
        document.getElementById('nameErrorMsg').innerHTML = 'Product name should be min of 3 and max of 10 characters.';
      }                                                                                                               //
                                                                                                                      //
      if (validateProdName === true) {                                                                                // 14
        document.getElementById('prodName').style.border = '1px solid green';                                         // 15
        document.getElementById('nameErrorMsg').style.color = 'green';                                                // 16
        document.getElementById('nameErrorMsg').innerHTML = 'good';                                                   // 17
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return validateProdName;                                                                                          //
  }(),                                                                                                                //
  validateProdDescription: function () {                                                                              // 21
    function validateProdDescription(_ref2, description) {                                                            //
      var LocalState = _ref2.LocalState;                                                                              //
      var ProductSchem = _ref2.ProductSchem;                                                                          //
                                                                                                                      //
      var formData = {                                                                                                // 22
        description: description                                                                                      // 23
      };                                                                                                              //
      var validateDescpt = ProductSchem.namedContext("myContext").validateOne(formData, "description");               // 25
      if (validateDescpt === false) {                                                                                 // 26
        document.getElementById('prodDescription').style.border = '1px solid red';                                    // 27
        document.getElementById('descriptionErrorMsg').style.color = 'red';                                           // 28
        document.getElementById('descriptionErrorMsg').innerHTML = 'Description should be min of 10 and max of 100 characters.';
      }                                                                                                               //
                                                                                                                      //
      if (validateDescpt === true) {                                                                                  // 32
        document.getElementById('prodDescription').style.border = '1px solid green';                                  // 33
        document.getElementById('descriptionErrorMsg').style.color = 'green';                                         // 34
        document.getElementById('descriptionErrorMsg').innerHTML = 'Good';                                            // 35
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return validateProdDescription;                                                                                   //
  }(),                                                                                                                //
  validateProdPrice: function () {                                                                                    // 39
    function validateProdPrice(_ref3, price) {                                                                        //
      var LocalState = _ref3.LocalState;                                                                              //
      var ProductSchem = _ref3.ProductSchem;                                                                          //
                                                                                                                      //
      var formData = {                                                                                                // 40
        price: Number(price)                                                                                          // 41
      };                                                                                                              //
      var validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");                      // 43
      if (validatePrice === false) {                                                                                  // 44
        document.getElementById('prodPrice').style.border = '1px solid red';                                          // 45
        document.getElementById('priceErrorMsg').style.color = 'red';                                                 // 46
        document.getElementById('priceErrorMsg').innerHTML = 'Price must be a number';                                // 47
      }                                                                                                               //
                                                                                                                      //
      if (validatePrice === true) {                                                                                   // 50
        document.getElementById('prodPrice').style.border = '1px solid green';                                        // 51
        document.getElementById('priceErrorMsg').style.color = 'green';                                               // 52
        document.getElementById('priceErrorMsg').innerHTML = 'Good';                                                  // 53
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return validateProdPrice;                                                                                         //
  }(),                                                                                                                //
  add: function () {                                                                                                  // 57
    function add(_ref4, category_id, name, description, price) {                                                      //
      var LocalState = _ref4.LocalState;                                                                              //
                                                                                                                      //
      if (!name || !description || !price) {                                                                          // 58
        LocalState.set('PRODUCTS_ADD_NAME_ERROR', 'Product name is required.');                                       // 59
        LocalState.set('PRODUCTS_ADD_DESCRIPTION_ERROR', 'Product description is required.');                         // 60
        LocalState.set('PRODUCTS_ADD_PRICE_ERROR', 'Product price is required.');                                     // 61
        return;                                                                                                       // 62
      }                                                                                                               //
      var user_id = Meteor.userId();                                                                                  // 64
      Meteor.call("insertProduct", user_id, category_id, name, description, price, function (err) {                   // 65
        if (err) {                                                                                                    // 66
          return LocalState.set('PRODUCTS_ADD_ERROR', 'Failed to Add Product');                                       // 67
        }                                                                                                             //
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return add;                                                                                                       //
  }(),                                                                                                                //
  deleteProduct: function () {                                                                                        // 72
    function deleteProduct(_ref5, id) {                                                                               //
      var LocalState = _ref5.LocalState;                                                                              //
                                                                                                                      //
      Meteor.call("deleteProduct", id, function (err) {                                                               // 73
        if (err) {                                                                                                    // 74
          return LocalState.set('PRODUCTS_ADD_ERROR', 'Unable to delete product.');                                   // 75
        }                                                                                                             //
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return deleteProduct;                                                                                             //
  }(),                                                                                                                //
  updateProduct: function () {                                                                                        // 80
    function updateProduct(_ref6, category_id, name, description, price) {                                            //
      var LocalState = _ref6.LocalState;                                                                              //
      var FlowRouter = _ref6.FlowRouter;                                                                              //
                                                                                                                      //
      var id = FlowRouter.current().params.productId;                                                                 // 81
      Meteor.call("updateProduct", id, category_id, name, description, Number(price), function (err) {                // 82
        if (err) {                                                                                                    // 83
          return LocalState.set('PRODUCTS_UPDATE_ERROR', 'Unable to update product.');                                // 84
        }                                                                                                             //
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return updateProduct;                                                                                             //
  }()                                                                                                                 //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"products_add.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/components/products_add.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var ProductsAdd = function (_React$Component) {                                                                       //
  (0, _inherits3["default"])(ProductsAdd, _React$Component);                                                          //
                                                                                                                      //
  function ProductsAdd(props) {                                                                                       // 4
    (0, _classCallCheck3["default"])(this, ProductsAdd);                                                              //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));                     //
  }                                                                                                                   //
                                                                                                                      //
  ProductsAdd.prototype.handleSubmit = function () {                                                                  // 3
    function handleSubmit(event) {                                                                                    //
      event.preventDefault();                                                                                         // 9
      var add = this.props.add;                                                                                       //
      var _refs = this.refs;                                                                                          //
      var category_id = _refs.category_id;                                                                            //
      var name = _refs.name;                                                                                          //
      var description = _refs.description;                                                                            //
      var price = _refs.price;                                                                                        //
                                                                                                                      //
                                                                                                                      //
      add(category_id.value, name.value, description.value, price.value);                                             // 13
    }                                                                                                                 //
                                                                                                                      //
    return handleSubmit;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  ProductsAdd.prototype.render = function () {                                                                        // 3
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var categories = _props.categories;                                                                             //
      var nameError = _props.nameError;                                                                               //
      var descriptionError = _props.descriptionError;                                                                 //
      var priceError = _props.priceError;                                                                             //
      var addError = _props.addError;                                                                                 //
                                                                                                                      //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 25
        "form",                                                                                                       //
        { className: "form-horizontal col-sm-4", role: "form", onSubmit: this.handleSubmit.bind(this) },              //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "h3",                                                                                                   //
              null,                                                                                                   //
              "Add Product"                                                                                           //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "p",                                                                                                        //
          { className: "error text-error" },                                                                          //
          addError ? addError : ''                                                                                    //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Choose Category"                                                                                         //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "select",                                                                                               //
              { className: "selectpicker form-control", ref: "category_id" },                                         //
              _react2["default"].createElement(                                                                       //
                "option",                                                                                             //
                { value: "selecCategory", defaultValue: "selected" },                                                 //
                "Select a Category"                                                                                   //
              ),                                                                                                      //
              categories ? categories.map(function (category) {                                                       //
                return _react2["default"].createElement(                                                              //
                  "option",                                                                                           //
                  { key: category._id, value: category._id },                                                         //
                  category.name                                                                                       //
                );                                                                                                    //
              }) : 'No category available'                                                                            //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Name"                                                                                                    //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "text", id: "prodName", onBlur: this.checkProdName.bind(this), className: "form-control", ref: "name" }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { id: "nameErrorMsg", className: "error text-error" },                                                  //
              nameError ? nameError : ''                                                                              //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Description"                                                                                             //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("textarea", { id: "prodDescription", onBlur: this.checkProdDescription.bind(this), className: "form-control", rows: "3", ref: "description" }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { id: "descriptionErrorMsg", className: "error text-error" },                                           //
              descriptionError ? descriptionError : ''                                                                //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Price"                                                                                                   //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "number", onBlur: this.checkProdPrice.bind(this), id: "prodPrice", className: "form-control", ref: "price", placeholder: "(i.e) $10.00", min: "0.01", step: "0.01" }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { id: "priceErrorMsg", className: "error text-error" },                                                 //
              priceError ? priceError : ''                                                                            //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group pull-right" },                                                                     //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "button",                                                                                               //
              { className: "btn btn-primary" },                                                                       //
              "Add"                                                                                                   //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  ProductsAdd.prototype.checkProdName = function () {                                                                 // 3
    function checkProdName() {                                                                                        //
      var name = this.refs.name;                                                                                      //
      var validateProdName = this.props.validateProdName;                                                             //
                                                                                                                      //
      validateProdName(name.value);                                                                                   // 89
    }                                                                                                                 //
                                                                                                                      //
    return checkProdName;                                                                                             //
  }();                                                                                                                //
                                                                                                                      //
  ProductsAdd.prototype.checkProdDescription = function () {                                                          // 3
    function checkProdDescription() {                                                                                 //
      var description = this.refs.description;                                                                        //
      var validateProdDescription = this.props.validateProdDescription;                                               //
                                                                                                                      //
      validateProdDescription(description.value);                                                                     // 95
    }                                                                                                                 //
                                                                                                                      //
    return checkProdDescription;                                                                                      //
  }();                                                                                                                //
                                                                                                                      //
  ProductsAdd.prototype.checkProdPrice = function () {                                                                // 3
    function checkProdPrice() {                                                                                       //
      var price = this.refs.price;                                                                                    //
      var validateProdPrice = this.props.validateProdPrice;                                                           //
                                                                                                                      //
      validateProdPrice(price.value);                                                                                 // 101
    }                                                                                                                 //
                                                                                                                      //
    return checkProdPrice;                                                                                            //
  }();                                                                                                                //
                                                                                                                      //
  // validateProdName () {                                                                                            //
  //   const {name} = this.refs;                                                                                      //
  //   let formData = {                                                                                               //
  //     name: name.value,                                                                                            //
  //   };                                                                                                             //
  //   let validateProdName = ProductSchem.namedContext("myContext").validateOne(formData, "name");                   //
  //   if(validateProdName === false) {                                                                               //
  //     document.getElementById('prodName').style.border = '1px solid red';                                          //
  //     document.getElementById('nameErrorMsg').style.color = 'red';                                                 //
  //     document.getElementById('nameErrorMsg').innerHTML = 'error';                                                 //
  //   }                                                                                                              //
  //                                                                                                                  //
  //   if(validateProdName === true) {                                                                                //
  //     document.getElementById('prodName').style.border = '1px solid green';                                        //
  //     document.getElementById('nameErrorMsg').style.color = 'green';                                               //
  //     document.getElementById('nameErrorMsg').innerHTML = 'Good';                                                  //
  //   }                                                                                                              //
  // }                                                                                                                //
  //                                                                                                                  //
  // validateProdDescription () {                                                                                     //
  //   const {description} = this.refs;                                                                               //
  //   let formData = {                                                                                               //
  //     description: description.value,                                                                              //
  //   };                                                                                                             //
  //   let validateDescpt = ProductSchem.namedContext("myContext").validateOne(formData, "description");              //
  //   if(validateDescpt === false) {                                                                                 //
  //     document.getElementById('prodDescription').style.border = '1px solid red';                                   //
  //     document.getElementById('descriptionErrorMsg').style.color = 'red';                                          //
  //     document.getElementById('descriptionErrorMsg').innerHTML = 'error';                                          //
  //   }                                                                                                              //
  //                                                                                                                  //
  //   if(validateDescpt === true) {                                                                                  //
  //     document.getElementById('prodDescription').style.border = '1px solid green';                                 //
  //     document.getElementById('descriptionErrorMsg').style.color = 'green';                                        //
  //     document.getElementById('descriptionErrorMsg').innerHTML = 'Good';                                           //
  //   }                                                                                                              //
  // }                                                                                                                //
  //                                                                                                                  //
  // validateProdPrice () {                                                                                           //
  //   const {price} = this.refs;                                                                                     //
  //   let formData = {                                                                                               //
  //     price: Number(price.value),                                                                                  //
  //   };                                                                                                             //
  //   let validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");                     //
  //   if(validatePrice === false) {                                                                                  //
  //     document.getElementById('prodPrice').style.border = '1px solid red';                                         //
  //     document.getElementById('priceErrorMsg').style.color = 'red';                                                //
  //     document.getElementById('priceErrorMsg').innerHTML = 'error';                                                //
  //   }                                                                                                              //
  //                                                                                                                  //
  //   if(validatePrice === true) {                                                                                   //
  //     document.getElementById('prodPrice').style.border = '1px solid green';                                       //
  //     document.getElementById('priceErrorMsg').style.color = 'green';                                              //
  //     document.getElementById('priceErrorMsg').innerHTML = 'Good';                                                 //
  //   }                                                                                                              //
                                                                                                                      //
  return ProductsAdd;                                                                                                 //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = ProductsAdd;                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_list.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./products_list_item",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/components/products_list.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _products_list_item = require('./products_list_item');                                                            // 2
                                                                                                                      //
var _products_list_item2 = _interopRequireDefault(_products_list_item);                                               //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var ProductsList = function (_React$Component) {                                                                      //
  (0, _inherits3['default'])(ProductsList, _React$Component);                                                         //
                                                                                                                      //
  function ProductsList(props) {                                                                                      // 6
    (0, _classCallCheck3['default'])(this, ProductsList);                                                             //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));                     //
  }                                                                                                                   //
                                                                                                                      //
  ProductsList.prototype.render = function () {                                                                       // 4
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var prods = _props.prods;                                                                                       //
      var deleteProduct = _props.deleteProduct;                                                                       //
      var updateProduct = _props.updateProduct;                                                                       //
                                                                                                                      //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 14
        'div',                                                                                                        //
        { className: 'col-sm-12' },                                                                                   //
        _react2['default'].createElement(                                                                             //
          'a',                                                                                                        //
          { href: '/products/add', className: 'btn btn-success' },                                                    //
          'Add'                                                                                                       //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'table',                                                                                                    //
          { className: 'table table-striped' },                                                                       //
          _react2['default'].createElement(                                                                           //
            'thead',                                                                                                  //
            null,                                                                                                     //
            _react2['default'].createElement(                                                                         //
              'tr',                                                                                                   //
              null,                                                                                                   //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Id'                                                                                                  //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Name'                                                                                                //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Category'                                                                                            //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Description'                                                                                         //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Price'                                                                                               //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Created At'                                                                                          //
              ),                                                                                                      //
              _react2['default'].createElement(                                                                       //
                'th',                                                                                                 //
                null,                                                                                                 //
                'Actions'                                                                                             //
              )                                                                                                       //
            )                                                                                                         //
          ),                                                                                                          //
          _react2['default'].createElement(                                                                           //
            'tbody',                                                                                                  //
            null,                                                                                                     //
            prods ? prods.map(function (product) {                                                                    //
              return _react2['default'].createElement(_products_list_item2['default'], {                              //
                key: product._id,                                                                                     // 34
                product: product,                                                                                     // 35
                deleteProduct: deleteProduct,                                                                         // 36
                updateProduct: updateProduct                                                                          // 37
              });                                                                                                     //
            }) : 'no products yet'                                                                                    //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ProductsList;                                                                                                //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = ProductsList;                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_list_item.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","/client/global-helpers",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/components/products_list_item.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _globalHelpers = require('/client/global-helpers');                                                               // 2
                                                                                                                      //
var help = _interopRequireWildcard(_globalHelpers);                                                                   //
                                                                                                                      //
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var ProductsListItem = function (_React$Component) {                                                                  //
  (0, _inherits3['default'])(ProductsListItem, _React$Component);                                                     //
                                                                                                                      //
  function ProductsListItem() {                                                                                       //
    (0, _classCallCheck3['default'])(this, ProductsListItem);                                                         //
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  ProductsListItem.prototype.handleDelete = function () {                                                             //
    function handleDelete() {                                                                                         //
      var _props = this.props;                                                                                        //
      var product = _props.product;                                                                                   //
      var deleteProduct = _props.deleteProduct;                                                                       //
                                                                                                                      //
      deleteProduct(product._id);                                                                                     // 8
    }                                                                                                                 //
                                                                                                                      //
    return handleDelete;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  ProductsListItem.prototype.handleUpdate = function () {                                                             // 4
    function handleUpdate() {                                                                                         //
      var _props2 = this.props;                                                                                       //
      var product = _props2.product;                                                                                  //
      var updateProduct = _props2.updateProduct;                                                                      //
                                                                                                                      //
      updateProduct(product._id);                                                                                     // 13
    }                                                                                                                 //
                                                                                                                      //
    return handleUpdate;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  ProductsListItem.prototype.render = function () {                                                                   // 4
    function render() {                                                                                               //
      var product = this.props.product;                                                                               //
                                                                                                                      //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 20
        'tr',                                                                                                         //
        null,                                                                                                         //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          product._id                                                                                                 //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          product.name                                                                                                //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          product.category.name                                                                                       //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          product.description                                                                                         //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          '$',                                                                                                        //
          product.price                                                                                               //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          help.formatDate(product.createdAt)                                                                          //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'td',                                                                                                       //
          null,                                                                                                       //
          _react2['default'].createElement(                                                                           //
            'a',                                                                                                      //
            { href: '#', className: 'btn btn-sm btn-danger', onClick: this.handleDelete.bind(this) },                 //
            'Delete'                                                                                                  //
          ),                                                                                                          //
          ' ',                                                                                                        //
          _react2['default'].createElement(                                                                           //
            'a',                                                                                                      //
            { href: '/products/update/' + product._id, className: 'btn btn-sm btn-success' },                         //
            'Edit'                                                                                                    //
          ),                                                                                                          //
          ' ',                                                                                                        //
          _react2['default'].createElement(                                                                           //
            'a',                                                                                                      //
            { href: '/products/view/' + product._id, className: 'btn btn-sm btn-default' },                           //
            'view'                                                                                                    //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ProductsListItem;                                                                                            //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = ProductsListItem;                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_update.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/components/products_update.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var ProductsUpdate = function (_React$Component) {                                                                    //
  (0, _inherits3["default"])(ProductsUpdate, _React$Component);                                                       //
                                                                                                                      //
  function ProductsUpdate(props) {                                                                                    // 5
    (0, _classCallCheck3["default"])(this, ProductsUpdate);                                                           //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));                     //
  }                                                                                                                   //
                                                                                                                      //
  ProductsUpdate.prototype.handleSubmit = function () {                                                               // 3
    function handleSubmit(event) {                                                                                    //
      event.preventDefault();                                                                                         // 10
      var updateProduct = this.props.updateProduct;                                                                   //
      var _refs = this.refs;                                                                                          //
      var category_id = _refs.category_id;                                                                            //
      var name = _refs.name;                                                                                          //
      var description = _refs.description;                                                                            //
      var price = _refs.price;                                                                                        //
                                                                                                                      //
                                                                                                                      //
      updateProduct(category_id.value, name.value, description.value, price.value);                                   // 19
    }                                                                                                                 //
                                                                                                                      //
    return handleSubmit;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  ProductsUpdate.prototype.render = function () {                                                                     // 3
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var product = _props.product;                                                                                   //
      var categories = _props.categories;                                                                             //
      var nameError = _props.nameError;                                                                               //
      var descriptionError = _props.descriptionError;                                                                 //
      var priceError = _props.priceError;                                                                             //
                                                                                                                      //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 32
        "form",                                                                                                       //
        { className: "form-horizontal col-sm-4", role: "form", onSubmit: this.handleSubmit.bind(this) },              //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "h3",                                                                                                   //
              null,                                                                                                   //
              "Update Product"                                                                                        //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Choose Category"                                                                                         //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "select",                                                                                               //
              { className: "selectpicker form-control", ref: "category_id" },                                         //
              categories ? categories.map(function (cat) {                                                            //
                return _react2["default"].createElement(                                                              //
                  "option",                                                                                           //
                  { key: cat._id,                                                                                     //
                    value: cat._id                                                                                    // 47
                  },                                                                                                  //
                  cat.name                                                                                            //
                );                                                                                                    //
              }) : _react2["default"].createElement(                                                                  //
                "option",                                                                                             //
                null,                                                                                                 //
                "No categories"                                                                                       //
              )                                                                                                       //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Name"                                                                                                    //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "text", className: "form-control", ref: "name", defaultValue: product.name }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { className: "error text-error" },                                                                      //
              nameError ? nameError : ''                                                                              //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Description"                                                                                             //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("textarea", { className: "form-control", rows: "3", ref: "description", defaultValue: product.description }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { className: "error text-error" },                                                                      //
              descriptionError ? descriptionError : ''                                                                //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Price"                                                                                                   //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "number", className: "form-control", ref: "price", placeholder: "(i.e) $10.00", step: "0.01", defaultValue: product.price }),
            _react2["default"].createElement(                                                                         //
              "p",                                                                                                    //
              { className: "error text-error" },                                                                      //
              priceError ? priceError : ''                                                                            //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group pull-right" },                                                                     //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "button",                                                                                               //
              { className: "btn btn-primary" },                                                                       //
              "Update"                                                                                                //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ProductsUpdate;                                                                                              //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = ProductsUpdate;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_view.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/components/products_view.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var ProductsView = function (_React$Component) {                                                                      //
  (0, _inherits3["default"])(ProductsView, _React$Component);                                                         //
                                                                                                                      //
  function ProductsView(props) {                                                                                      // 4
    (0, _classCallCheck3["default"])(this, ProductsView);                                                             //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));                     //
  }                                                                                                                   //
                                                                                                                      //
  ProductsView.prototype.render = function () {                                                                       // 3
    function render() {                                                                                               //
      var product = this.props.product;                                                                               //
                                                                                                                      //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 11
        "form",                                                                                                       //
        { className: "form-horizontal col-sm-4", role: "form" },                                                      //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "h3",                                                                                                   //
              null,                                                                                                   //
              "View Product Info"                                                                                     //
            )                                                                                                         //
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Category"                                                                                                //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "text", className: "form-control", value: product.category_id, disabled: true })
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Name"                                                                                                    //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "text", className: "form-control", value: product.name, disabled: true })
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Description"                                                                                             //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("textarea", { className: "form-control", rows: "3", value: product.description, disabled: true })
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group" },                                                                                //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { className: "col-sm-2 control-label" },                                                                  //
            "Price"                                                                                                   //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement("input", { type: "number", className: "form-control", value: product.price, placeholder: "(i.e) $10.00", step: "0.01", disabled: true })
          )                                                                                                           //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "form-group pull-right" },                                                                     //
          _react2["default"].createElement(                                                                           //
            "div",                                                                                                    //
            { className: "col-sm-10" },                                                                               //
            _react2["default"].createElement(                                                                         //
              "a",                                                                                                    //
              { href: "/products/list", className: "btn btn-primary" },                                               //
              "Back"                                                                                                  //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ProductsView;                                                                                                //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = ProductsView;                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"containers":{"products_add.js":["mantra-core","../components/products_add",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/containers/products_add.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _products_add = require('../components/products_add');                                                            // 3
                                                                                                                      //
var _products_add2 = _interopRequireDefault(_products_add);                                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var LocalState = _context.LocalState;                                                                               //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
                                                                                                                      //
  var nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');                                                          // 7
  var descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');                                            // 8
  var priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');                                                        // 9
  // const addError = LocalState.get('PRODUCTS_ADD_ERROR');                                                           //
                                                                                                                      //
  if (Meteor.subscribe('categoriesList').ready()) {                                                                   // 5
    var categories = Collections.Categories.find({}, { sort: { createdAt: -1 } }).fetch();                            // 13
    onData(null, { categories: categories, nameError: nameError, descriptionError: descriptionError, priceError: priceError });
  }                                                                                                                   //
  return;                                                                                                             // 16
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 19
  return {                                                                                                            //
    add: actions.products.add,                                                                                        // 20
    validateProdName: actions.products.validateProdName,                                                              // 21
    validateProdDescription: actions.products.validateProdDescription,                                                // 22
    validateProdPrice: actions.products.validateProdPrice,                                                            // 23
    context: function () {                                                                                            // 24
      function context() {                                                                                            // 24
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_products_add2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_delete.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/containers/products_delete.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"products_list.js":["mantra-core","../components/products_list",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/containers/products_list.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _products_list = require('../components/products_list');                                                          // 3
                                                                                                                      //
var _products_list2 = _interopRequireDefault(_products_list);                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
                                                                                                                      //
                                                                                                                      //
  if (Meteor.subscribe('productList').ready()) {                                                                      // 8
    var prods = Collections.Products.find({ deleted: null }, { sort: { createdAt: -1 } }).fetch().map(function (product) {
                                                                                                                      //
      product.category = Collections.Categories.findOne({ _id: product.category_id }, { fields: { name: 1 } });       // 11
                                                                                                                      //
      return product;                                                                                                 // 13
    });                                                                                                               //
                                                                                                                      //
    onData(null, { prods: prods });                                                                                   // 16
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 21
  return {                                                                                                            //
    deleteProduct: actions.products.deleteProduct,                                                                    // 22
    context: function () {                                                                                            // 23
      function context() {                                                                                            // 23
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_products_list2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_update.js":["mantra-core","../components/products_update",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/containers/products_update.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _products_update = require('../components/products_update');                                                      // 3
                                                                                                                      //
var _products_update2 = _interopRequireDefault(_products_update);                                                     //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
  var productId = _ref.productId;                                                                                     //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
  // const nameError = LocalState.get('PRODUCTS_ADD_NAME_ERROR');                                                     //
  // const descriptionError = LocalState.get('PRODUCTS_ADD_DESCRIPTION_ERROR');                                       //
  // const priceError = LocalState.get('PRODUCTS_ADD_PRICE_ERROR');                                                   //
                                                                                                                      // 5
  if (Meteor.subscribe('productList').ready()) {                                                                      // 10
    var product = Collections.Products.findOne({ _id: productId }, { sort: { createdAt: -1 } });                      // 11
    var categories = Collections.Products.find({}, { sort: { createdAt: -1 } }).fetch();                              // 12
    onData(null, { product: product, categories: categories });                                                       // 13
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 17
  return {                                                                                                            //
    updateProduct: actions.products.updateProduct,                                                                    // 18
    context: function () {                                                                                            // 19
      function context() {                                                                                            // 19
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_products_update2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products_view.js":["mantra-core","../components/products_view",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/containers/products_view.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _products_view = require('../components/products_view');                                                          // 3
                                                                                                                      //
var _products_view2 = _interopRequireDefault(_products_view);                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
  var productId = _ref.productId;                                                                                     //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var Meteor = _context.Meteor;                                                                                       //
  var Collections = _context.Collections;                                                                             //
                                                                                                                      //
  if (Meteor.subscribe('productList').ready()) {                                                                      // 7
    var product = Collections.Products.findOne({}, { sort: { createdAt: -1 } });                                      // 8
    onData(null, { product: product });                                                                               // 9
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2) {                                                // 13
  return {                                                                                                            //
    context: function () {                                                                                            // 14
      function context() {                                                                                            // 14
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_products_view2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"method_stubs":{"index.js":["./products",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/method_stubs/index.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
exports['default'] = function (context) {                                                                             //
  (0, _products2['default'])(context);                                                                                // 4
};                                                                                                                    //
                                                                                                                      //
var _products = require('./products');                                                                                // 1
                                                                                                                      //
var _products2 = _interopRequireDefault(_products);                                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"products.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/method_stubs/products.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// export default function ({Meteor, Collections}) {                                                                  //
//   Meteor.methods({                                                                                                 //
//     'insertProduct'(category_id, name, description, price) {                                                       //
//       const createdAt = new Date();                                                                                //
//       const prodDetails = {                                                                                        //
//         category_id,                                                                                               //
//         name,                                                                                                      //
//         description,                                                                                               //
//         price,                                                                                                     //
//         createdAt,                                                                                                 //
//         modifiedAt: null,                                                                                          //
//         deleted: null,                                                                                             //
//         saving: true                                                                                               //
//       };                                                                                                           //
//       Collections.Products.insert(prodDetails);                                                                    //
//     }                                                                                                              //
//   });                                                                                                              //
// }                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"index.js":["./actions","./routes",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/index.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _actions = require('./actions');                                                                                  // 1
                                                                                                                      //
var _actions2 = _interopRequireDefault(_actions);                                                                     //
                                                                                                                      //
var _routes = require('./routes');                                                                                    // 2
                                                                                                                      //
var _routes2 = _interopRequireDefault(_routes);                                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  routes: _routes2['default'],                                                                                        // 6
  actions: _actions2['default']                                                                                       // 7
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["react","react-mounter","../users/containers/auth_checker","../core/components/main_layout","./containers/products_add","./containers/products_update","./containers/products_view","./containers/products_list",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/products/routes.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
exports['default'] = function (injectDeps, _ref) {                                                                    //
  var FlowRouter = _ref.FlowRouter;                                                                                   //
                                                                                                                      //
  //const MainLayoutCtx = injectDeps(MainLayout);                                                                     //
  var AuthCheck = injectDeps(_auth_checker2['default']);                                                              // 13
                                                                                                                      //
  FlowRouter.route('/products/add', {                                                                                 // 16
    name: 'products_add',                                                                                             // 17
    action: function () {                                                                                             // 18
      function action() {                                                                                             //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 19
          MainLayout: _main_layout2['default'], content: function () {                                                // 20
            function content() {                                                                                      // 20
              return _react2['default'].createElement(_products_add2['default'], null);                               //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/products/update/:productId', {                                                                   // 25
    name: 'products_update',                                                                                          // 26
    action: function () {                                                                                             // 27
      function action(_ref2) {                                                                                        //
        var productId = _ref2.productId;                                                                              //
                                                                                                                      //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 28
          MainLayout: _main_layout2['default'], content: function () {                                                // 29
            function content() {                                                                                      // 29
              return _react2['default'].createElement(_products_update2['default'], { productId: productId });        //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/products/view/:productId', {                                                                     // 34
    name: 'products_view',                                                                                            // 35
    action: function () {                                                                                             // 36
      function action(_ref3) {                                                                                        //
        var productId = _ref3.productId;                                                                              //
                                                                                                                      //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 37
          MainLayout: _main_layout2['default'], content: function () {                                                // 38
            function content() {                                                                                      // 38
              return _react2['default'].createElement(_products_view2['default'], { productId: productId });          //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/products/list', {                                                                                // 43
    name: 'products_list',                                                                                            // 44
    action: function () {                                                                                             // 45
      function action() {                                                                                             //
        (0, _reactMounter.mount)(AuthCheck, {                                                                         // 46
          MainLayout: _main_layout2['default'], content: function () {                                                // 47
            function content() {                                                                                      // 47
              return _react2['default'].createElement(_products_list2['default'], null);                              //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
};                                                                                                                    //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactMounter = require('react-mounter');                                                                         // 2
                                                                                                                      //
var _auth_checker = require('../users/containers/auth_checker');                                                      // 4
                                                                                                                      //
var _auth_checker2 = _interopRequireDefault(_auth_checker);                                                           //
                                                                                                                      //
var _main_layout = require('../core/components/main_layout');                                                         // 5
                                                                                                                      //
var _main_layout2 = _interopRequireDefault(_main_layout);                                                             //
                                                                                                                      //
var _products_add = require('./containers/products_add');                                                             // 6
                                                                                                                      //
var _products_add2 = _interopRequireDefault(_products_add);                                                           //
                                                                                                                      //
var _products_update = require('./containers/products_update');                                                       // 7
                                                                                                                      //
var _products_update2 = _interopRequireDefault(_products_update);                                                     //
                                                                                                                      //
var _products_view = require('./containers/products_view');                                                           // 8
                                                                                                                      //
var _products_view2 = _interopRequireDefault(_products_view);                                                         //
                                                                                                                      //
var _products_list = require('./containers/products_list');                                                           // 9
                                                                                                                      //
var _products_list2 = _interopRequireDefault(_products_list);                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"users":{"actions":{"index.js":["./users",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/actions/index.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _users = require('./users');                                                                                      // 1
                                                                                                                      //
var _users2 = _interopRequireDefault(_users);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  users: _users2['default']                                                                                           // 4
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/actions/users.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports["default"] = {                                                                                                //
  validateInputField: function () {                                                                                   // 5
    function validateInputField(_ref, field, value) {                                                                 //
      var LocalState = _ref.LocalState;                                                                               //
      var User = _ref.User;                                                                                           //
                                                                                                                      //
      var key = "";                                                                                                   // 6
      var userObj = {};                                                                                               // 7
                                                                                                                      //
      key = "profile." + field;                                                                                       // 9
      userObj[key] = value;                                                                                           // 10
                                                                                                                      //
      if (field === 'email') {                                                                                        // 12
        key = "emails.$.address";                                                                                     // 13
        userObj[key] = value;                                                                                         // 14
      }                                                                                                               //
                                                                                                                      //
      if (field === 'password') {                                                                                     // 17
        key = field;                                                                                                  // 18
        userObj[key] = value;                                                                                         // 19
      }                                                                                                               //
                                                                                                                      //
      var Checker = User.namedContext("myContext");                                                                   // 22
      var validate = Checker.validateOne(userObj, key);                                                               // 23
                                                                                                                      //
      LocalState.set(key, null);                                                                                      // 25
                                                                                                                      //
      if (!validate) {                                                                                                // 27
        LocalState.set(key, Checker.keyErrorMessage(key));                                                            // 28
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return validateInputField;                                                                                        //
  }(),                                                                                                                //
  userSignup: function () {                                                                                           // 33
    function userSignup(_ref2, formData) {                                                                            //
      var Meteor = _ref2.Meteor;                                                                                      //
      var LocalState = _ref2.LocalState;                                                                              //
      var FlowRouter = _ref2.FlowRouter;                                                                              //
      var User = _ref2.User;                                                                                          //
      var _ = _ref2._;                                                                                                //
                                                                                                                      //
                                                                                                                      //
      var Checker = User.namedContext("myContext");                                                                   // 35
      var schemaHasNoError = Checker.validate(formData);                                                              // 36
      var signUpErrors = Checker.invalidKeys();                                                                       // 37
      _.map(signUpErrors, function (o) {                                                                              // 38
        //map errors on each fields                                                                                   //
        LocalState.set(o.name, Checker.keyErrorMessage(o.name));                                                      // 39
      });                                                                                                             //
                                                                                                                      //
      if (schemaHasNoError) {                                                                                         // 43
        Meteor.call("usersSignup", formData, function (err) {                                                         // 44
          if (err) {                                                                                                  // 45
            return LocalState.set("main_error", err.message);                                                         // 46
          }                                                                                                           //
                                                                                                                      //
          Meteor.loginWithPassword(formData["emails.$.address"], formData["password"], function (err) {               // 49
            if (err) {                                                                                                // 50
              return LocalState.set("main_error", err.message);                                                       // 51
            }                                                                                                         //
            FlowRouter.go("/");                                                                                       // 53
          });                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return userSignup;                                                                                                //
  }(),                                                                                                                //
  userLogin: function () {                                                                                            // 62
    function userLogin(_ref3, formData) {                                                                             //
      var Meteor = _ref3.Meteor;                                                                                      //
      var LocalState = _ref3.LocalState;                                                                              //
      var FlowRouter = _ref3.FlowRouter;                                                                              //
                                                                                                                      //
      LocalState.set("main_error", null);                                                                             // 63
      var loginUser = true;                                                                                           // 64
                                                                                                                      //
      if (loginUser) {                                                                                                // 66
        Meteor.loginWithPassword(formData["emails.$.address"], formData["password"], function (err) {                 // 67
          if (err) {                                                                                                  // 68
            return LocalState.set("main_error", err.message);                                                         // 69
          }                                                                                                           //
          FlowRouter.go("/");                                                                                         // 71
        });                                                                                                           //
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return userLogin;                                                                                                 //
  }(),                                                                                                                //
  clearErrors: function () {                                                                                          // 76
    function clearErrors(_ref4) {                                                                                     //
      var LocalState = _ref4.LocalState;                                                                              //
                                                                                                                      //
      LocalState.set("profile.profilename", null);                                                                    // 77
      LocalState.set("profile.firstname", null);                                                                      // 78
      LocalState.set("profile.lastname", null);                                                                       // 79
      LocalState.set("emails.$.address", null);                                                                       // 80
      LocalState.set("password", null);                                                                               // 81
      LocalState.set("profile.age", null);                                                                            // 82
      LocalState.set("profile.gender", null);                                                                         // 83
      LocalState.set("main_error", null);                                                                             // 84
      return true;                                                                                                    // 85
    }                                                                                                                 //
                                                                                                                      //
    return clearErrors;                                                                                               //
  }()                                                                                                                 //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"auth_checker.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/kadira:flow-router",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/components/auth_checker.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _kadiraFlowRouter = require('meteor/kadira:flow-router');                                                         // 2
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var AuthChecker = function (_React$Component) {                                                                       //
    (0, _inherits3['default'])(AuthChecker, _React$Component);                                                        //
                                                                                                                      //
    function AuthChecker() {                                                                                          //
        (0, _classCallCheck3['default'])(this, AuthChecker);                                                          //
        return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));            //
    }                                                                                                                 //
                                                                                                                      //
    AuthChecker.prototype.render = function () {                                                                      //
        function render() {                                                                                           //
            var _props = this.props;                                                                                  //
            var MainLayout = _props.MainLayout;                                                                       //
            var content = _props.content;                                                                             //
            var userId = _props.userId;                                                                               //
                                                                                                                      //
            if (!userId) {                                                                                            // 8
                _kadiraFlowRouter.FlowRouter.go("/users/login");                                                      // 9
            }                                                                                                         //
            return _react2['default'].createElement(                                                                  // 11
                'div',                                                                                                //
                null,                                                                                                 //
                _react2['default'].createElement(MainLayout, { content: content, userId: userId })                    //
            );                                                                                                        //
        }                                                                                                             //
                                                                                                                      //
        return render;                                                                                                //
    }();                                                                                                              //
                                                                                                                      //
    return AuthChecker;                                                                                               //
}(_react2['default'].Component);                                                                                      //
                                                                                                                      //
exports['default'] = AuthChecker;                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_login.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/components/users_login.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var UsersLogin = function (_React$Component) {                                                                        //
  (0, _inherits3["default"])(UsersLogin, _React$Component);                                                           //
                                                                                                                      //
  function UsersLogin() {                                                                                             //
    (0, _classCallCheck3["default"])(this, UsersLogin);                                                               //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  UsersLogin.prototype.render = function () {                                                                         //
    function render() {                                                                                               //
      var error = this.props.error;                                                                                   //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 6
        "div",                                                                                                        //
        { className: "container" },                                                                                   //
        _react2["default"].createElement(                                                                             //
          "form",                                                                                                     //
          { className: "form-signin", onSubmit: this.userLogin.bind(this) },                                          //
          _react2["default"].createElement(                                                                           //
            "h2",                                                                                                     //
            { className: "form-signin-heading" },                                                                     //
            "User login"                                                                                              //
          ),                                                                                                          //
          error ? _react2["default"].createElement(                                                                   //
            "p",                                                                                                      //
            { style: { color: 'red' } },                                                                              //
            error                                                                                                     //
          ) : null,                                                                                                   //
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { "for": "inputEmail", className: "sr-only" },                                                            //
            "Email address"                                                                                           //
          ),                                                                                                          //
          _react2["default"].createElement("input", { ref: "email", type: "email", id: "inputEmail", className: "form-control", placeholder: "Email address", autofocus: true }),
          _react2["default"].createElement(                                                                           //
            "label",                                                                                                  //
            { "for": "inputPassword", className: "sr-only" },                                                         //
            "Password"                                                                                                //
          ),                                                                                                          //
          _react2["default"].createElement("input", { ref: "password", type: "password", id: "inputPassword", className: "form-control", placeholder: "Password" }),
          _react2["default"].createElement(                                                                           //
            "button",                                                                                                 //
            { className: "btn btn-lg btn-primary btn-block", type: "submit" },                                        //
            "Sign in"                                                                                                 //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "a",                                                                                                      //
            { href: "/users/signup", className: "btn btn-lg btn-block btn-default" },                                 //
            "Signup"                                                                                                  //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  UsersLogin.prototype.userLogin = function () {                                                                      // 3
    function userLogin(e) {                                                                                           //
      if (e && e.preventDefault) {                                                                                    // 26
        e.preventDefault();                                                                                           // 27
      }                                                                                                               //
      var userLogin = this.props.userLogin;                                                                           //
      var _refs = this.refs;                                                                                          //
      var email = _refs.email;                                                                                        //
      var password = _refs.password;                                                                                  //
                                                                                                                      //
      var formData = {                                                                                                // 31
        "emails.$.address": email.value,                                                                              // 32
        "password": password.value                                                                                    // 33
      };                                                                                                              //
      userLogin(formData);                                                                                            // 35
    }                                                                                                                 //
                                                                                                                      //
    return userLogin;                                                                                                 //
  }();                                                                                                                //
                                                                                                                      //
  return UsersLogin;                                                                                                  //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = UsersLogin;                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_profile.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/components/users_profile.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var UsersProfile = function (_React$Component) {                                                                      //
  (0, _inherits3["default"])(UsersProfile, _React$Component);                                                         //
                                                                                                                      //
  function UsersProfile() {                                                                                           //
    (0, _classCallCheck3["default"])(this, UsersProfile);                                                             //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  UsersProfile.prototype.render = function () {                                                                       //
    function render() {                                                                                               //
      var user = this.props.user;                                                                                     //
                                                                                                                      //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 7
        "div",                                                                                                        //
        { className: "container" },                                                                                   //
        _react2["default"].createElement(                                                                             //
          "h2",                                                                                                       //
          null,                                                                                                       //
          user.profile.username,                                                                                      //
          "'s Profile"                                                                                                //
        ),                                                                                                            //
        _react2["default"].createElement("hr", null),                                                                 //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "col-sm-3" },                                                                                  //
          _react2["default"].createElement("div", { className: "profile-pic-wrapper" })                               //
        ),                                                                                                            //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "col-sm-9" },                                                                                  //
          _react2["default"].createElement(                                                                           //
            "p",                                                                                                      //
            { className: "large-font" },                                                                              //
            _react2["default"].createElement(                                                                         //
              "span",                                                                                                 //
              { className: "text-warning" },                                                                          //
              "Firstname:"                                                                                            //
            ),                                                                                                        //
            " ",                                                                                                      //
            user.profile.firstname                                                                                    //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "p",                                                                                                      //
            { className: "large-font" },                                                                              //
            _react2["default"].createElement(                                                                         //
              "span",                                                                                                 //
              { className: "text-warning" },                                                                          //
              "Lastname:"                                                                                             //
            ),                                                                                                        //
            " ",                                                                                                      //
            user.profile.lastname                                                                                     //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "p",                                                                                                      //
            { className: "large-font" },                                                                              //
            _react2["default"].createElement(                                                                         //
              "span",                                                                                                 //
              { className: "text-warning" },                                                                          //
              "Gender:"                                                                                               //
            ),                                                                                                        //
            " ",                                                                                                      //
            user.profile.gender                                                                                       //
          ),                                                                                                          //
          _react2["default"].createElement(                                                                           //
            "p",                                                                                                      //
            { className: "large-font" },                                                                              //
            _react2["default"].createElement(                                                                         //
              "span",                                                                                                 //
              { className: "text-warning" },                                                                          //
              "Age:"                                                                                                  //
            ),                                                                                                        //
            " ",                                                                                                      //
            user.profile.age                                                                                          //
          ),                                                                                                          //
          this.currentUserProfile() ? _react2["default"].createElement(                                               //
            "a",                                                                                                      //
            { href: "/users/update/", className: "btn btn-lg btn-default" },                                          //
            "Edit Profile"                                                                                            //
          ) : _react2["default"].createElement(                                                                       //
            "button",                                                                                                 //
            { className: "btn btn-lg btn-warning" },                                                                  //
            "Block User"                                                                                              //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  UsersProfile.prototype.currentUserProfile = function () {                                                           // 3
    function currentUserProfile() {                                                                                   //
      var _props = this.props;                                                                                        //
      var profileId = _props.profileId;                                                                               //
      var user = _props.user;                                                                                         //
                                                                                                                      //
                                                                                                                      //
      var result = false;                                                                                             // 32
                                                                                                                      //
      if (profileId === user._id) {                                                                                   // 34
        result = true;                                                                                                // 35
      }                                                                                                               //
                                                                                                                      //
      return result;                                                                                                  // 38
    }                                                                                                                 //
                                                                                                                      //
    return currentUserProfile;                                                                                        //
  }();                                                                                                                //
                                                                                                                      //
  return UsersProfile;                                                                                                //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = UsersProfile;                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_signup.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/components/users_signup.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var UsersSignup = function (_React$Component) {                                                                       //
  (0, _inherits3["default"])(UsersSignup, _React$Component);                                                          //
                                                                                                                      //
  function UsersSignup() {                                                                                            //
    (0, _classCallCheck3["default"])(this, UsersSignup);                                                              //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  UsersSignup.prototype.render = function () {                                                                        //
    function render() {                                                                                               //
      var _props = this.props;                                                                                        //
      var errorField = _props.errorField;                                                                             //
      var getAgeoptions = _props.getAgeoptions;                                                                       //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 10
        "div",                                                                                                        //
        { className: "container" },                                                                                   //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "col-sm-8 col-sm-offset-2" },                                                                  //
          _react2["default"].createElement(                                                                           //
            "h2",                                                                                                     //
            null,                                                                                                     //
            "User Signup"                                                                                             //
          ),                                                                                                          //
          errorField.error ? _react2["default"].createElement(                                                        //
            "p",                                                                                                      //
            { style: { color: 'red' } },                                                                              //
            errorField.error                                                                                          //
          ) : null,                                                                                                   //
          _react2["default"].createElement(                                                                           //
            "form",                                                                                                   //
            { className: "form-horizontal", onSubmit: this.userSignup.bind(this) },                                   //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.email) },                                             //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputEmail3", className: "col-sm-2 control-label" },                                        //
                "Email"                                                                                               //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "email", name: "email", ref: "email", className: "form-control", id: "inputEmail", onBlur: this.validateField.bind(this), placeholder: "Email" }),
                errorField.email ? _react2["default"].createElement(                                                  //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.email                                                                                    //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.password) },                                          //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputPassword3", className: "col-sm-2 control-label" },                                     //
                "Password"                                                                                            //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "password", name: "password", ref: "password", className: "form-control", id: "inputPassword", onBlur: this.validateField.bind(this), placeholder: "Password" }),
                errorField.password ? _react2["default"].createElement(                                               //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.password                                                                                 //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.profilename) },                                       //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputProfilename", className: "col-sm-2 control-label" },                                   //
                "Profilename"                                                                                         //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "text", name: "profilename", ref: "profilename", className: "form-control", id: "inputProfilename", onBlur: this.validateField.bind(this), placeholder: "Profilename" }),
                errorField.profilename ? _react2["default"].createElement(                                            //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.profilename                                                                              //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.firstname) },                                         //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputFirstname", className: "col-sm-2 control-label" },                                     //
                "Firstname"                                                                                           //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "text", name: "firstname", ref: "firstname", className: "form-control", id: "inputFirstname", onBlur: this.validateField.bind(this), placeholder: "Firstname" }),
                errorField.firstname ? _react2["default"].createElement(                                              //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.firstname                                                                                //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.lastname) },                                          //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputLastname", className: "col-sm-2 control-label" },                                      //
                "Lastname"                                                                                            //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "text", name: "lastname", ref: "lastname", className: "form-control", id: "inputLastname", onBlur: this.validateField.bind(this), placeholder: "Lastname" }),
                errorField.lastname ? _react2["default"].createElement(                                               //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.lastname                                                                                 //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.gender) },                                            //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "selectGender", className: "col-sm-2 control-label" },                                       //
                "Gender"                                                                                              //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement(                                                                     //
                  "select",                                                                                           //
                  { className: "form-control", name: "gender", id: "selectGender", onBlur: this.validateField.bind(this), ref: "gender" },
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: true },                                                                                  //
                    "- select gender -"                                                                               //
                  ),                                                                                                  //
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: "male" },                                                                                //
                    "Male"                                                                                            //
                  ),                                                                                                  //
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: "female" },                                                                              //
                    "Female"                                                                                          //
                  )                                                                                                   //
                ),                                                                                                    //
                errorField.gender ? _react2["default"].createElement(                                                 //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.gender                                                                                   //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.age) },                                               //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "selectAge", className: "col-sm-2 control-label" },                                          //
                "Age"                                                                                                 //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement(                                                                     //
                  "select",                                                                                           //
                  { className: "form-control", id: "selectAge", name: "age", onBlur: this.validateField.bind(this), ref: "age" },
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: true },                                                                                  //
                    "- select age -"                                                                                  //
                  ),                                                                                                  //
                  getAgeoptions ? getAgeoptions.map(function (value) {                                                //
                    return _react2["default"].createElement(                                                          //
                      "option",                                                                                       //
                      { key: value.age, value: value.age },                                                           //
                      value.age                                                                                       //
                    );                                                                                                //
                  }) : _react2["default"].createElement(                                                              //
                    "option",                                                                                         //
                    null,                                                                                             //
                    "Invalid Age Object"                                                                              //
                  )                                                                                                   //
                ),                                                                                                    //
                errorField.age ? _react2["default"].createElement(                                                    //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.age                                                                                      //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: "form-group" },                                                                            //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-offset-2 col-sm-10" },                                                           //
                _react2["default"].createElement(                                                                     //
                  "button",                                                                                           //
                  { type: "submit", className: "btn btn-lg btn-block btn-success" },                                  //
                  "SUBMIT"                                                                                            //
                )                                                                                                     //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-offset-2 col-sm-10", style: { marginTop: '5px' } },                              //
                _react2["default"].createElement(                                                                     //
                  "a",                                                                                                //
                  { href: "/users/login", className: "btn btn-lg btn-block btn-default" },                            //
                  "LOGIN"                                                                                             //
                )                                                                                                     //
              )                                                                                                       //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  UsersSignup.prototype.userSignup = function () {                                                                    // 4
    function userSignup(e) {                                                                                          //
      if (e && e.preventDefault) {                                                                                    // 95
        e.preventDefault();                                                                                           // 96
      }                                                                                                               //
      var userSignup = this.props.userSignup;                                                                         //
      var _refs = this.refs;                                                                                          //
      var email = _refs.email;                                                                                        //
      var password = _refs.password;                                                                                  //
      var lastname = _refs.lastname;                                                                                  //
      var firstname = _refs.firstname;                                                                                //
      var gender = _refs.gender;                                                                                      //
      var profilename = _refs.profilename;                                                                            //
      var age = _refs.age;                                                                                            //
                                                                                                                      //
                                                                                                                      //
      var formData = {                                                                                                // 101
        "emails.$.address": email.value,                                                                              // 102
        "password": password.value,                                                                                   // 103
        "profile.profilename": profilename.value,                                                                     // 104
        "profile.firstname": firstname.value,                                                                         // 105
        "profile.lastname": lastname.value,                                                                           // 106
        "profile.gender": gender.value,                                                                               // 107
        "profile.age": parseInt(age.value),                                                                           // 108
        "createdAt": new Date(),                                                                                      // 109
        "modifiedAt": new Date()                                                                                      // 110
      };                                                                                                              //
                                                                                                                      //
      userSignup(formData);                                                                                           // 113
    }                                                                                                                 //
                                                                                                                      //
    return userSignup;                                                                                                //
  }();                                                                                                                //
                                                                                                                      //
  UsersSignup.prototype.getAgeOptions = function () {                                                                 // 4
    function getAgeOptions() {                                                                                        //
      var ageOptions = [];                                                                                            // 117
                                                                                                                      //
      for (var minAge = 18; minAge <= 99; minAge++) {                                                                 // 119
        ageOptions.push({ age: minAge });                                                                             // 120
      }                                                                                                               //
                                                                                                                      //
      return ageOptions.map(function (a) {                                                                            // 123
        return _react2["default"].createElement(                                                                      //
          "option",                                                                                                   //
          { value: a.age },                                                                                           //
          a.age                                                                                                       //
        );                                                                                                            //
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return getAgeOptions;                                                                                             //
  }();                                                                                                                //
                                                                                                                      //
  UsersSignup.prototype.clearError = function () {                                                                    // 4
    function clearError(e) {                                                                                          //
      if (e && e.preventDefault) {                                                                                    // 129
        e.preventDefault();                                                                                           // 130
      }                                                                                                               //
      var clearErrors = this.props.clearErrors;                                                                       //
                                                                                                                      //
      clearErrors();                                                                                                  // 133
    }                                                                                                                 //
                                                                                                                      //
    return clearError;                                                                                                //
  }();                                                                                                                //
                                                                                                                      //
  UsersSignup.prototype.getInputWrapperClass = function () {                                                          // 4
    function getInputWrapperClass(errorObj) {                                                                         //
      var classes = 'form-group';                                                                                     // 138
                                                                                                                      //
      if (errorObj) {                                                                                                 // 140
        classes = 'form-group has-error';                                                                             // 141
      }                                                                                                               //
                                                                                                                      //
      return classes;                                                                                                 // 145
    }                                                                                                                 //
                                                                                                                      //
    return getInputWrapperClass;                                                                                      //
  }();                                                                                                                //
                                                                                                                      //
  UsersSignup.prototype.validateField = function () {                                                                 // 4
    function validateField(event) {                                                                                   //
      if (event && event.preventDefault) {                                                                            // 150
        var validateInputField = this.props.validateInputField;                                                       //
                                                                                                                      //
                                                                                                                      //
        var fieldName = event.currentTarget.name;                                                                     // 153
        var fieldValue = event.currentTarget.value;                                                                   // 154
                                                                                                                      //
        if (fieldName === 'age') {                                                                                    // 156
          fieldValue = parseInt(event.currentTarget.value);                                                           // 157
        }                                                                                                             //
                                                                                                                      //
        validateInputField(fieldName, fieldValue);                                                                    // 160
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return validateField;                                                                                             //
  }();                                                                                                                //
                                                                                                                      //
  return UsersSignup;                                                                                                 //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = UsersSignup;                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_update.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/components/users_update.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require("react");                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var UsersUpdate = function (_React$Component) {                                                                       //
  (0, _inherits3["default"])(UsersUpdate, _React$Component);                                                          //
                                                                                                                      //
  function UsersUpdate() {                                                                                            //
    (0, _classCallCheck3["default"])(this, UsersUpdate);                                                              //
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));                //
  }                                                                                                                   //
                                                                                                                      //
  UsersUpdate.prototype.render = function () {                                                                        //
    function render() {                                                                                               //
      var user = this.props.user;                                                                                     //
      var error = this.props.error;                                                                                   //
      var errorField = this.props.errorField;                                                                         //
                                                                                                                      //
      return _react2["default"].createElement(                                                                        // 8
        "div",                                                                                                        //
        { className: "container" },                                                                                   //
        _react2["default"].createElement(                                                                             //
          "div",                                                                                                      //
          { className: "col-sm-8 col-sm-offset-2" },                                                                  //
          _react2["default"].createElement(                                                                           //
            "h2",                                                                                                     //
            null,                                                                                                     //
            _react2["default"].createElement("span", { className: "glyphicon glyphicon-pencil" }),                    //
            " User Update"                                                                                            //
          ),                                                                                                          //
          error ? _react2["default"].createElement(                                                                   //
            "p",                                                                                                      //
            { style: { color: 'red' } },                                                                              //
            error                                                                                                     //
          ) : null,                                                                                                   //
          _react2["default"].createElement(                                                                           //
            "form",                                                                                                   //
            { className: "form-horizontal", onSubmit: this.userUpdateAccount.bind(this) },                            //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.username) },                                          //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputUsername", className: "col-sm-2 control-label" },                                      //
                "Username"                                                                                            //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "text", className: "form-control", id: "inputUsername", defaultValue: user.profile.username, placeholder: "Username" }),
                errorField.username ? _react2["default"].createElement(                                               //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.username                                                                                 //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.firstname) },                                         //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputFirstname", className: "col-sm-2 control-label" },                                     //
                "Firstname"                                                                                           //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "text", className: "form-control", id: "inputFirstname", defaultValue: user.profile.firstname, placeholder: "Firstname" }),
                errorField.firstname ? _react2["default"].createElement(                                              //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.firstname                                                                                //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.lastname) },                                          //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "inputLastname", className: "col-sm-2 control-label" },                                      //
                "Lastname"                                                                                            //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement("input", { type: "text", className: "form-control", id: "inputLastname", defaultValue: user.profile.lastname, placeholder: "Lastname" }),
                errorField.lastname ? _react2["default"].createElement(                                               //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.lastname                                                                                 //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.gender) },                                            //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "selectGender", className: "col-sm-2 control-label" },                                       //
                "Gender"                                                                                              //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement(                                                                     //
                  "select",                                                                                           //
                  { className: "form-control", id: "selectGender", defaultValue: user.profile.gender },               //
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: true },                                                                                  //
                    "- select gender -"                                                                               //
                  ),                                                                                                  //
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: "male" },                                                                                //
                    "Male"                                                                                            //
                  ),                                                                                                  //
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: "female" },                                                                              //
                    "Female"                                                                                          //
                  )                                                                                                   //
                ),                                                                                                    //
                errorField.gender ? _react2["default"].createElement(                                                 //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.gender                                                                                   //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: this.getInputWrapperClass(errorField.age) },                                               //
              _react2["default"].createElement(                                                                       //
                "label",                                                                                              //
                { "for": "selectAge", className: "col-sm-2 control-label" },                                          //
                "Age"                                                                                                 //
              ),                                                                                                      //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-10" },                                                                           //
                _react2["default"].createElement(                                                                     //
                  "select",                                                                                           //
                  { className: "form-control", id: "selectAge", name: "age", onBlur: this.validateField.bind(this), ref: "age" },
                  _react2["default"].createElement(                                                                   //
                    "option",                                                                                         //
                    { value: true },                                                                                  //
                    "- select age -"                                                                                  //
                  ),                                                                                                  //
                  this.getAgeOptions()                                                                                //
                ),                                                                                                    //
                errorField.age ? _react2["default"].createElement(                                                    //
                  "p",                                                                                                //
                  { style: { color: 'red' } },                                                                        //
                  errorField.age                                                                                      //
                ) : null                                                                                              //
              )                                                                                                       //
            ),                                                                                                        //
            _react2["default"].createElement(                                                                         //
              "div",                                                                                                  //
              { className: "form-group" },                                                                            //
              _react2["default"].createElement(                                                                       //
                "div",                                                                                                //
                { className: "col-sm-offset-2 col-sm-10" },                                                           //
                _react2["default"].createElement(                                                                     //
                  "button",                                                                                           //
                  { type: "submit", className: "btn btn-lg btn-block btn-primary" },                                  //
                  "SAVE"                                                                                              //
                )                                                                                                     //
              )                                                                                                       //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  UsersUpdate.prototype.userUpdateAccount = function () {                                                             // 3
    function userUpdateAccount(event) {                                                                               //
      if (event && event.preventDefault) {                                                                            // 68
        event.preventDefault();                                                                                       // 69
      }                                                                                                               //
    }                                                                                                                 //
                                                                                                                      //
    return userUpdateAccount;                                                                                         //
  }();                                                                                                                //
                                                                                                                      //
  UsersUpdate.prototype.getAgeOptions = function () {                                                                 // 3
    function getAgeOptions() {                                                                                        //
      var ageOptions = [];                                                                                            // 75
                                                                                                                      //
      for (var minAge = 18; minAge <= 99; minAge++) {                                                                 // 77
        ageOptions.push({ age: minAge });                                                                             // 78
      }                                                                                                               //
                                                                                                                      //
      return ageOptions.map(function (a) {                                                                            // 81
        return _react2["default"].createElement(                                                                      //
          "option",                                                                                                   //
          { value: a.age },                                                                                           //
          a.age                                                                                                       //
        );                                                                                                            //
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return getAgeOptions;                                                                                             //
  }();                                                                                                                //
                                                                                                                      //
  UsersUpdate.prototype.getInputWrapperClass = function () {                                                          // 3
    function getInputWrapperClass(errorObj) {                                                                         //
      var classes = 'form-group';                                                                                     // 87
                                                                                                                      //
      if (errorObj) {                                                                                                 // 89
        classes = 'form-group has-error';                                                                             // 90
      }                                                                                                               //
                                                                                                                      //
      return classes;                                                                                                 // 93
    }                                                                                                                 //
                                                                                                                      //
    return getInputWrapperClass;                                                                                      //
  }();                                                                                                                //
                                                                                                                      //
  return UsersUpdate;                                                                                                 //
}(_react2["default"].Component);                                                                                      //
                                                                                                                      //
exports["default"] = UsersUpdate;                                                                                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"containers":{"auth_checker.js":["mantra-core","../components/auth_checker",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/containers/auth_checker.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _auth_checker = require('../components/auth_checker');                                                            // 3
                                                                                                                      //
var _auth_checker2 = _interopRequireDefault(_auth_checker);                                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var authCommon = _context.authCommon;                                                                               //
                                                                                                                      //
  var _authCommon = authCommon();                                                                                     //
                                                                                                                      //
  var userSubReady = _authCommon.userSubReady;                                                                        //
  var userId = _authCommon.userId;                                                                                    //
  var user = _authCommon.user;                                                                                        //
                                                                                                                      //
  if (userSubReady) {                                                                                                 // 8
    var data = { userId: userId, user: user };                                                                        // 9
    onData(null, data);                                                                                               // 10
  }                                                                                                                   //
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2) {                                                // 16
  return {                                                                                                            //
    context: function () {                                                                                            // 17
      function context() {                                                                                            // 17
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_auth_checker2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_login.js":["mantra-core","../components/users_login",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/containers/users_login.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _users_login = require('../components/users_login');                                                              // 3
                                                                                                                      //
var _users_login2 = _interopRequireDefault(_users_login);                                                             //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var LocalState = _context.LocalState;                                                                               //
                                                                                                                      //
  var error = LocalState.get("main_error");                                                                           // 7
  onData(null, { error: error });                                                                                     // 8
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 11
  return {                                                                                                            //
    userLogin: actions.users.userLogin,                                                                               // 12
    clearErrors: actions.users.clearErrors,                                                                           // 13
    context: function () {                                                                                            // 14
      function context() {                                                                                            // 14
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_users_login2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_profile.js":["mantra-core","../components/users_profile",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/containers/users_profile.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _users_profile = require('../components/users_profile');                                                          // 3
                                                                                                                      //
var _users_profile2 = _interopRequireDefault(_users_profile);                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  onData(null, {});                                                                                                   // 6
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context) {                                                 // 9
  return {                                                                                                            //
    context: function () {                                                                                            // 10
      function context() {                                                                                            // 10
        return _context;                                                                                              //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_users_profile2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_signup.js":["mantra-core","../components/users_signup",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/containers/users_signup.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _users_signup = require('../components/users_signup');                                                            // 3
                                                                                                                      //
var _users_signup2 = _interopRequireDefault(_users_signup);                                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
  var clearErrors = _ref.clearErrors;                                                                                 //
                                                                                                                      //
  var _context = context();                                                                                           //
                                                                                                                      //
  var LocalState = _context.LocalState;                                                                               //
                                                                                                                      //
                                                                                                                      //
  var errorField = {                                                                                                  // 8
    "profilename": LocalState.get("profile.profilename", null),                                                       // 9
    "firstname": LocalState.get("profile.firstname", null),                                                           // 10
    "lastname": LocalState.get("profile.lastname", null),                                                             // 11
    "email": LocalState.get("emails.$.address", null),                                                                // 12
    "password": LocalState.get("password", null),                                                                     // 13
    "age": LocalState.get("profile.age", null),                                                                       // 14
    "gender": LocalState.get("profile.gender", null),                                                                 // 15
    "error": LocalState.get("main_error")                                                                             // 16
  };                                                                                                                  //
                                                                                                                      //
  var getAgeoptions = initAgeOptions();                                                                               // 19
                                                                                                                      //
  onData(null, { errorField: errorField, getAgeoptions: getAgeoptions });                                             // 21
  return clearErrors;                                                                                                 // 22
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context2, actions) {                                       // 25
  return {                                                                                                            //
    userSignup: actions.users.userSignup,                                                                             // 26
    clearErrors: actions.users.clearErrors,                                                                           // 27
    validateInputField: actions.users.validateInputField,                                                             // 28
    context: function () {                                                                                            // 29
      function context() {                                                                                            // 29
        return _context2;                                                                                             //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_users_signup2['default']);
                                                                                                                      //
                                                                                                                      //
var initAgeOptions = function initAgeOptions() {                                                                      // 37
  var ageOptions = [];                                                                                                // 38
                                                                                                                      //
  for (var minAge = 18; minAge <= 99; minAge++) {                                                                     // 40
    ageOptions.push({ age: minAge });                                                                                 // 41
  }                                                                                                                   //
                                                                                                                      //
  return ageOptions;                                                                                                  // 44
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"users_update.js":["mantra-core","../components/users_update",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/containers/users_update.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.depsMapper = exports.composer = undefined;                                                                    //
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _users_update = require('../components/users_update');                                                            // 3
                                                                                                                      //
var _users_update2 = _interopRequireDefault(_users_update);                                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var composer = exports.composer = function composer(_ref, onData) {                                                   // 5
  var context = _ref.context;                                                                                         //
                                                                                                                      //
  onData(null, {});                                                                                                   // 6
};                                                                                                                    //
                                                                                                                      //
var depsMapper = exports.depsMapper = function depsMapper(_context) {                                                 // 9
  return {                                                                                                            //
    context: function () {                                                                                            // 10
      function context() {                                                                                            // 10
        return _context;                                                                                              //
      }                                                                                                               //
                                                                                                                      //
      return context;                                                                                                 //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
exports['default'] = (0, _mantraCore.composeAll)((0, _mantraCore.composeWithTracker)(composer), (0, _mantraCore.useDeps)(depsMapper))(_users_update2['default']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"index.js":["./actions","./routes",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/index.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _actions = require('./actions');                                                                                  // 1
                                                                                                                      //
var _actions2 = _interopRequireDefault(_actions);                                                                     //
                                                                                                                      //
var _routes = require('./routes');                                                                                    // 2
                                                                                                                      //
var _routes2 = _interopRequireDefault(_routes);                                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
exports['default'] = {                                                                                                //
  routes: _routes2['default'],                                                                                        // 5
  actions: _actions2['default']                                                                                       // 6
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.js":["react","react-mounter","../core/components/main_layout","./containers/users_login","./containers/users_signup",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/modules/users/routes.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
exports['default'] = function (injectDeps, _ref) {                                                                    //
  var FlowRouter = _ref.FlowRouter;                                                                                   //
  var Meteor = _ref.Meteor;                                                                                           //
                                                                                                                      //
  var MainLayoutCtx = injectDeps(_main_layout2['default']);                                                           // 9
                                                                                                                      //
  FlowRouter.route('/users/login', {                                                                                  // 11
    name: 'login',                                                                                                    // 12
    action: function () {                                                                                             // 13
      function action() {                                                                                             //
        if (Meteor.userId()) {                                                                                        // 14
          FlowRouter.go("/");                                                                                         // 15
        }                                                                                                             //
        (0, _reactMounter.mount)(MainLayoutCtx, {                                                                     // 17
          content: function () {                                                                                      // 18
            function content() {                                                                                      // 18
              return _react2['default'].createElement(_users_login2['default'], null);                                //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
                                                                                                                      //
  FlowRouter.route('/users/signup', {                                                                                 // 23
    name: 'signup',                                                                                                   // 24
    action: function () {                                                                                             // 25
      function action() {                                                                                             //
        if (Meteor.userId()) {                                                                                        // 26
          FlowRouter.go("/");                                                                                         // 27
        }                                                                                                             //
        (0, _reactMounter.mount)(MainLayoutCtx, {                                                                     // 29
          content: function () {                                                                                      // 30
            function content() {                                                                                      // 30
              return _react2['default'].createElement(_users_signup2['default'], null);                               //
            }                                                                                                         //
                                                                                                                      //
            return content;                                                                                           //
          }()                                                                                                         //
        });                                                                                                           //
      }                                                                                                               //
                                                                                                                      //
      return action;                                                                                                  //
    }()                                                                                                               //
  });                                                                                                                 //
};                                                                                                                    //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactMounter = require('react-mounter');                                                                         // 2
                                                                                                                      //
var _main_layout = require('../core/components/main_layout');                                                         // 4
                                                                                                                      //
var _main_layout2 = _interopRequireDefault(_main_layout);                                                             //
                                                                                                                      //
var _users_login = require('./containers/users_login');                                                               // 5
                                                                                                                      //
var _users_login2 = _interopRequireDefault(_users_login);                                                             //
                                                                                                                      //
var _users_signup = require('./containers/users_signup');                                                             // 6
                                                                                                                      //
var _users_signup2 = _interopRequireDefault(_users_signup);                                                           //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"configs":{"context.js":["/lib/collections","meteor/meteor","meteor/kadira:flow-router","meteor/reactive-dict","meteor/tracker","/lib/collections/products","/lib/collections/users","underscore",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/configs/context.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
exports['default'] = function () {                                                                                    //
  return {                                                                                                            // 27
    Meteor: _meteor.Meteor,                                                                                           // 28
    FlowRouter: _kadiraFlowRouter.FlowRouter,                                                                         // 29
    Collections: Collections,                                                                                         // 30
    LocalState: new _reactiveDict.ReactiveDict(),                                                                     // 31
    Tracker: _tracker.Tracker,                                                                                        // 32
    authCommon: authCommon,                                                                                           // 33
    ProductSchem: _products.ProductSchem,                                                                             // 34
    User: _users2['default'],                                                                                         // 35
    _: _underscore2['default']                                                                                        // 36
  };                                                                                                                  //
};                                                                                                                    //
                                                                                                                      //
var _collections = require('/lib/collections');                                                                       // 1
                                                                                                                      //
var Collections = _interopRequireWildcard(_collections);                                                              //
                                                                                                                      //
var _meteor = require('meteor/meteor');                                                                               // 2
                                                                                                                      //
var _kadiraFlowRouter = require('meteor/kadira:flow-router');                                                         // 3
                                                                                                                      //
var _reactiveDict = require('meteor/reactive-dict');                                                                  // 4
                                                                                                                      //
var _tracker = require('meteor/tracker');                                                                             // 5
                                                                                                                      //
var _products = require('/lib/collections/products');                                                                 // 6
                                                                                                                      //
var _users = require('/lib/collections/users');                                                                       // 7
                                                                                                                      //
var _users2 = _interopRequireDefault(_users);                                                                         //
                                                                                                                      //
var _underscore = require('underscore');                                                                              // 8
                                                                                                                      //
var _underscore2 = _interopRequireDefault(_underscore);                                                               //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in meteorBabelHelpers.sanitizeForInObject(obj)) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
                                                                                                                      //
var authCommon = function authCommon() {                                                                              // 10
                                                                                                                      //
  var userSubReady = _meteor.Meteor.subscribe('users.current').ready();                                               // 12
                                                                                                                      //
  var userId = _meteor.Meteor.userId() ? _meteor.Meteor.userId() : null;                                              // 14
  var user = _meteor.Meteor.user();                                                                                   // 15
                                                                                                                      //
  return {                                                                                                            // 17
    userSubReady: userSubReady,                                                                                       // 18
    userId: userId,                                                                                                   // 19
    user: user                                                                                                        // 20
  };                                                                                                                  //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"global-helpers.js":["moment",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/global-helpers.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _moment = require('moment');                                                                                      // 1
                                                                                                                      //
var _moment2 = _interopRequireDefault(_moment);                                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var formatDate = function formatDate(date) {                                                                          // 3
  return (0, _moment2['default'])(date).calendar();                                                                   // 4
};                                                                                                                    //
                                                                                                                      //
var previousPage = function previousPage() {                                                                          // 7
  return history.back();                                                                                              // 8
};                                                                                                                    //
                                                                                                                      //
module.exports = {                                                                                                    // 11
  formatDate: formatDate,                                                                                             // 12
  previousPage: previousPage                                                                                          // 13
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main.js":["mantra-core","./configs/context","meteor/kadira:dochead","./modules/core","./modules/products","./modules/categories","./modules/users",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _mantraCore = require('mantra-core');                                                                             // 1
                                                                                                                      //
var _context = require('./configs/context');                                                                          // 2
                                                                                                                      //
var _context2 = _interopRequireDefault(_context);                                                                     //
                                                                                                                      //
var _kadiraDochead = require('meteor/kadira:dochead');                                                                // 3
                                                                                                                      //
var _core = require('./modules/core');                                                                                // 6
                                                                                                                      //
var _core2 = _interopRequireDefault(_core);                                                                           //
                                                                                                                      //
var _products = require('./modules/products');                                                                        // 7
                                                                                                                      //
var _products2 = _interopRequireDefault(_products);                                                                   //
                                                                                                                      //
var _categories = require('./modules/categories');                                                                    // 8
                                                                                                                      //
var _categories2 = _interopRequireDefault(_categories);                                                               //
                                                                                                                      //
var _users = require('./modules/users');                                                                              // 9
                                                                                                                      //
var _users2 = _interopRequireDefault(_users);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
// init context                                                                                                       //
                                                                                                                      //
                                                                                                                      //
// modules                                                                                                            //
var context = (0, _context2['default'])();                                                                            // 12
                                                                                                                      //
// create app                                                                                                         //
var app = (0, _mantraCore.createApp)(context);                                                                        // 15
app.loadModule(_core2['default']);                                                                                    // 16
app.loadModule(_products2['default']);                                                                                // 17
app.loadModule(_categories2['default']);                                                                              // 18
app.loadModule(_users2['default']);                                                                                   // 19
app.init();                                                                                                           // 20
                                                                                                                      //
//Site Title                                                                                                          //
var title = 'Mantra Boilerplate';                                                                                     // 23
_kadiraDochead.DocHead.setTitle(title);                                                                               // 24
                                                                                                                      //
// Loading Javascript                                                                                                 //
var gaScript = '/bootstrap-3.3.6/js/bootstrap.min.js';                                                                // 27
_kadiraDochead.DocHead.loadScript(gaScript);                                                                          // 28
                                                                                                                      //
// Loadintg CSS                                                                                                       //
var cssLink = { rel: "stylesheet", href: '/bootstrap-3.3.6/css/bootstrap.min.css' };                                  // 31
_kadiraDochead.DocHead.addLink(cssLink);                                                                              // 32
                                                                                                                      //
// Loading Meta tag                                                                                                   //
var metaInfo = { name: "description", content: "Mantra Boilerplate" };                                                // 35
_kadiraDochead.DocHead.addMeta(metaInfo);                                                                             // 36
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"wallaby.js":["react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// wallaby.js                                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.exports = function (wallaby) {                                                                                 // 1
  // There is a weird error with the mui and mantra.                                                                  //
  // See: https://goo.gl/cLH8ib                                                                                       //
  // Using require here seems to be the error.                                                                        //
  // Renaming it into `load` just fixed the issue.                                                                    //
  var load = require;                                                                                                 // 6
                                                                                                                      //
  return {                                                                                                            // 8
    files: ['client/modules/**/components/*.js', 'client/modules/**/actions/*.js', 'client/modules/**/containers/*.js', 'client/modules/**/libs/*.js'],
    tests: ['client/**/tests/*.js'],                                                                                  // 15
    compilers: {                                                                                                      // 18
      '**/*.js*': wallaby.compilers.babel({                                                                           // 19
        babel: load('babel-core'),                                                                                    // 20
        presets: ['es2015', 'stage-2', 'react']                                                                       // 21
      })                                                                                                              //
    },                                                                                                                //
    env: {                                                                                                            // 24
      type: 'node'                                                                                                    // 25
    },                                                                                                                //
    testFramework: 'mocha',                                                                                           // 27
    setup: function () {                                                                                              // 28
      function setup() {                                                                                              // 28
        global.React = require('react');                                                                              // 29
      }                                                                                                               //
                                                                                                                      //
      return setup;                                                                                                   //
    }()                                                                                                               //
  };                                                                                                                  //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},{"extensions":[".js",".json",".html",".css",".jsx"]});
require("./lib/collections/categories.js");
require("./lib/collections/index.js");
require("./lib/collections/products.js");
require("./lib/collections/users.js");
require("./client/modules/categories/components/test/categories_list.js");
require("./client/modules/categories/actions/categories.js");
require("./client/modules/categories/actions/index.js");
require("./client/modules/categories/components/categories_add.js");
require("./client/modules/categories/components/categories_delete.js");
require("./client/modules/categories/components/categories_list.js");
require("./client/modules/categories/components/categories_list_item.js");
require("./client/modules/categories/components/categories_update.js");
require("./client/modules/categories/components/categories_view.js");
require("./client/modules/categories/containers/categories_add.js");
require("./client/modules/categories/containers/categories_delete.js");
require("./client/modules/categories/containers/categories_list.js");
require("./client/modules/categories/containers/categories_update.js");
require("./client/modules/categories/containers/categories_view.js");
require("./client/modules/core/actions/index.js");
require("./client/modules/core/components/home.js");
require("./client/modules/core/components/main_layout.js");
require("./client/modules/core/components/nav_bar.js");
require("./client/modules/core/containers/main_layout.js");
require("./client/modules/products/actions/index.js");
require("./client/modules/products/actions/products.js");
require("./client/modules/products/components/products_add.js");
require("./client/modules/products/components/products_list.js");
require("./client/modules/products/components/products_list_item.js");
require("./client/modules/products/components/products_update.js");
require("./client/modules/products/components/products_view.js");
require("./client/modules/products/containers/products_add.js");
require("./client/modules/products/containers/products_delete.js");
require("./client/modules/products/containers/products_list.js");
require("./client/modules/products/containers/products_update.js");
require("./client/modules/products/containers/products_view.js");
require("./client/modules/products/method_stubs/index.js");
require("./client/modules/products/method_stubs/products.js");
require("./client/modules/users/actions/index.js");
require("./client/modules/users/actions/users.js");
require("./client/modules/users/components/auth_checker.js");
require("./client/modules/users/components/users_login.js");
require("./client/modules/users/components/users_profile.js");
require("./client/modules/users/components/users_signup.js");
require("./client/modules/users/components/users_update.js");
require("./client/modules/users/containers/auth_checker.js");
require("./client/modules/users/containers/users_login.js");
require("./client/modules/users/containers/users_profile.js");
require("./client/modules/users/containers/users_signup.js");
require("./client/modules/users/containers/users_update.js");
require("./client/modules/categories/index.js");
require("./client/modules/categories/routes.js");
require("./client/modules/core/index.js");
require("./client/modules/core/routes.js");
require("./client/modules/products/index.js");
require("./client/modules/products/routes.js");
require("./client/modules/users/index.js");
require("./client/modules/users/routes.js");
require("./client/configs/context.js");
require("./client/global-helpers.js");
require("./wallaby.js");
require("./client/main.js");