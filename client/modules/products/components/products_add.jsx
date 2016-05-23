import React from 'react';
import {ProductSchem} from '/lib/collections/products.js';
import {check} from 'meteor/check';

class ProductsAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {add} = this.props;
    const {category_id,name, description, price} = this.refs;

    add(category_id.value,name.value,description.value,price.value);
  }

  render() {
    const {
        nameError,
        descriptionError,
        priceError,
    } = this.props;

    const {categories} = this.props;

    return (
      <form className="form-horizontal col-sm-4" role="form" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <div className="col-sm-10">
            <h3>Add Product</h3>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Choose Category</label>
          <div className="col-sm-10">
            <select className="selectpicker form-control" ref="category_id">
              <option value="selecCategory" defaultValue="selected">Select a Category</option>
              {
                categories ? categories.map(category => (
                  <option key={category._id} value={category.name}>
                    {category._id}
                  </option>
                )) : 'No category available'
              }
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" id="prodName" className="form-control" ref="name" onChange={this.validateProdName.bind(this)}/>
            <p id="nameErrorMsg" className="error text-error">{nameError ? nameError : ''}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea id="prodDescription" onChange={this.validateProdDescription.bind(this)} className="form-control" rows="3" ref="description"></textarea>
            <p id="descriptionErrorMsg" className="error text-error">{descriptionError ? descriptionError : ''}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" id="prodPrice" className="form-control" onChange={this.validateProdPrice.bind(this)} ref="price" placeholder="(i.e) $10.00" step="0.01"/>
            <p id="priceErrorMsg" className="error text-error">{priceError ? priceError : ''}</p>
          </div>
        </div>

        <div className="form-group pull-right">
          <div className="col-sm-10">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>

      </form>
    );
  }

  validateProdName () {
    const {name} = this.refs;
    let formData = {
      name: name.value,
    };
    validateProdName = ProductSchem.namedContext("myContext").validateOne(formData, "name");
    if(validateProdName === false) {
      document.getElementById('prodName').style.border = '1px solid red';
      document.getElementById('nameErrorMsg').style.color = 'red';
      document.getElementById('nameErrorMsg').innerHTML = 'error';
    }

    if(validateProdName === true) {
      document.getElementById('prodName').style.border = '1px solid green';
      document.getElementById('nameErrorMsg').style.color = 'green';
      document.getElementById('nameErrorMsg').innerHTML = 'Good';
    }
  }

  validateProdDescription () {
    const {description} = this.refs;
    let formData = {
      description: description.value,
    };
    validateDescpt = ProductSchem.namedContext("myContext").validateOne(formData, "description");
    if(validateDescpt === false) {
      document.getElementById('prodDescription').style.border = '1px solid red';
      document.getElementById('descriptionErrorMsg').style.color = 'red';
      document.getElementById('descriptionErrorMsg').innerHTML = 'error';
    }

    if(validateDescpt === true) {
      document.getElementById('prodDescription').style.border = '1px solid green';
      document.getElementById('descriptionErrorMsg').style.color = 'green';
      document.getElementById('descriptionErrorMsg').innerHTML = 'Good';
    }
  }

  validateProdPrice () {
    const {price} = this.refs;
    let formData = {
      "price": 5.6,
    };
    validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");
    if(validatePrice === false) {
      document.getElementById('prodPrice').style.border = '1px solid red';
      document.getElementById('priceErrorMsg').style.color = 'red';
      document.getElementById('priceErrorMsg').innerHTML = 'error';
    }

    if(validatePrice === true) {
      document.getElementById('prodPrice').style.border = '1px solid green';
      document.getElementById('priceErrorMsg').style.color = 'green';
      document.getElementById('priceErrorMsg').innerHTML = 'Good';
    }
  }

  // addProduct () {
  //   const {add} = this.props;
  //   const {category_id, name, description, price} = this.refs;
  //   add(category_id.value, name.value, description.value, price.value)
  // }

}

export default ProductsAdd;
