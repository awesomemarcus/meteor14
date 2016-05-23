import React from 'react';
import {ProductSchem} from '/lib/collections/products.js';
import {check} from 'meteor/check';


class CategoriesAdd extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form onSubmit={this.PostsAdd.bind(this)}>
      <div className="form-group">
        <h5>Category Add</h5>
      </div>
      <div className="form-group">
        {error ? <p className="center bg-danger ">{error}</p> : null }
      </div>

        <div className="form-group">
          <label for="categoryName">Name</label>
          <input ref="name" type="text" className="form-control" id="categoryName" placeholder="Name" />
        </div>


        <div className="form-group">
          <label for="categoryDetails">Details</label>
          <textarea ref="details"  type="textarea" className="form-control" id="categoryDetails" placeholder="categoryDetails" ></textarea>
        </div>
        <button type="submit" className="btn btn-default">Add</button>
    </form>
    );
  }

  // PostsAdd2(e){
  //   if(e && e.preventDefault){
  //     e.preventDefault();
  //   }
  //   const {categoriesAdd} = this.props;
  //   const {name, details} = this.refs;
  //   let formData = {
  //     name : name.value,
  //     details : details.value
  //   };
  //   categoriesAdd(formData);
  // }

  PostsAdd(e){
    e.preventDefault();
    const {categoriesAdd} = this.props;
    let formData = {
      catgory_id: 3543534534,
      name: "Prod Name 2",
      description: "Sample Details",
      price: 24,
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    validateCatId = ProductSchem.namedContext("myContext").validateOne(formData, "catgory_id");
    console.log(validateCatId);
    validateName = ProductSchem.namedContext("myContext").validateOne(formData, "name");
    console.log(validateCatId);
    validateDescription = ProductSchem.namedContext("myContext").validateOne(formData, "description");
    console.log(validateCatId);
    validatePrice = ProductSchem.namedContext("myContext").validateOne(formData, "price");
    console.log(validateCatId);
    validateCreatedAt = ProductSchem.namedContext("myContext").validateOne(formData, "createdAt");
    console.log(validateCatId);
    validateModifiedAt = ProductSchem.namedContext("myContext").validateOne(formData, "modifiedAt");
    console.log(validateCatId);

    isValid = ProductSchem.namedContext("myContext").validate(formData);
    console.log(isValid);
    console.log(check(formData, ProductSchem));
  }
}

export default CategoriesAdd;
