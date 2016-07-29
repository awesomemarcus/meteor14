import React from 'react';

class ProductsUpdate extends React.Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {productsUpdate, productId} = this.props;
    let productData = {};

    $.each($(event.currentTarget).serializeArray(), function() {
      productData[this.name] = this.value;
    });
    productData._id = productId;
    productData.price = parseFloat(productData.price);

    productsUpdate(productData);

  }

  handleBlur(event) {
    event.preventDefault();

    const {productsUpdate} = this.props;

    const fieldName = event.currentTarget.name;
    let fieldValue = event.currentTarget.value;

    productsUpdate(null, fieldName, fieldValue);
  }

  backToPrevious() {
    window.history.back();
  }

  render() {
    const {
        product,
        categories,
        mainError,
        formErrorObject,
    } = this.props;

    return (
      <form className="form-horizontal col-sm-4" id="productAddForm" role="form" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <div className="col-sm-10">
            <h3>Update Product Info</h3>
          </div>
        </div>

        {mainError ? <p className="error">{mainError}</p> : null}

        <div className="form-group">
          <label className="col-sm-2 control-label">Choose Category</label>
          <div className="col-sm-10">
            <select className="selectpicker form-control" name="category_id" defaultValue={product.category_id}>
              <option>Select a Category</option>
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
            <input type="text" id="prodName" className="form-control" name="name"
                   onBlur={this.handleBlur.bind(this)} defaultValue={product.name}/>
            {formErrorObject ? <p className="error text-error">{formErrorObject['name']}</p> : null}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea id="prodDescription" className="form-control" rows="3" name="description"
                      onBlur={this.handleBlur.bind(this)} defaultValue={product.description}></textarea>
            {formErrorObject ? <p className="error text-error">{formErrorObject['description']}</p> : null}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" id="prodPrice" className="form-control" name="price"
                   placeholder="(i.e) $10.00" min="0.01" step="0.01" onBlur={this.handleBlur.bind(this)}
                   defaultValue={product.price} />
            {formErrorObject ? <p className="error text-error">{formErrorObject['price']}</p> : null}
          </div>
        </div>

        <div className="form-group pull-right">
          <div className="col-md-12 col-sm-10">
            <a className="btn btn-primary" onClick={this.backToPrevious.bind(this)}>Back</a>
            <button className="btn btn-default">Save changes</button>
          </div>
        </div>

      </form>
    );
  }
}

export default ProductsUpdate;
