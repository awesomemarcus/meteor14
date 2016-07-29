import React from 'react';

class ProductsAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {productsAdd} = this.props;
    let productData = {};

    $.each($(event.currentTarget).serializeArray(), function() {
      productData[this.name] = this.value;
    });
    productData.price = parseFloat(productData.price);
    productsAdd(productData);

  }

  handleBlur(event) {
    event.preventDefault();

    const {productsAdd} = this.props;

    const fieldName = event.currentTarget.name;
    let fieldValue = event.currentTarget.value;

    productsAdd(null, fieldName, fieldValue);
  }

  render() {
    const {
        categories,
        formErrorObject,
    } = this.props;

    return (
      <form className="form-horizontal col-sm-4" id="productAddForm" role="form" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <div className="col-sm-10">
            <h3>Add Product</h3>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Choose Category</label>
          <div className="col-sm-10">
            <select className="selectpicker form-control" name="category_id">
              <option value="selecCategory" defaultValue="selected">Select a Category</option>
              {
                categories ? categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                )) : 'No category available'
              }
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" id="prodName" className="form-control" name="name" onBlur={this.handleBlur.bind(this)}/>
            {formErrorObject ? <p className="error text-error">{formErrorObject['name']}</p> : null}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea id="prodDescription" className="form-control" rows="3" name="description" onBlur={this.handleBlur.bind(this)}></textarea>
            {formErrorObject ? <p className="error text-error">{formErrorObject['description']}</p> : null}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" id="prodPrice" className="form-control" name="price" placeholder="(i.e) $10.00" min="0.01" step="0.01" onBlur={this.handleBlur.bind(this)}/>
            {formErrorObject ? <p className="error text-error">{formErrorObject['price']}</p> : null}
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

}

export default ProductsAdd;
