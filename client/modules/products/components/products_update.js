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

    productData.price = parseFloat(productData.price);

    productsUpdate(productId,productData);
  }

  handleBlur(event) {
    event.preventDefault();
    const {productsUpdate, productId} = this.props;

    const fieldName = event.currentTarget.name;
    const fieldValue = event.currentTarget.value;

    productsUpdate(productId, null, fieldName, fieldValue);
  }

  render() {
    const {
        product,
        categories,
        mainError,
        formErrorObject,
    } = this.props;

    return (
      <form className="form-horizontal col-sm-4" role="form" onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <div className="col-sm-10">
            <h3>Update Product</h3>
            {
              mainError ?
              <p className="error text-error">{mainError}</p> : null
            }
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Choose Category</label>
          <div className="col-sm-10">
            <select className="selectpicker form-control" name="category_id" defaultValue={product.category_id}>
              {categories ? (categories.map((cat)=>(
                <option key={cat._id}
                  value={cat._id}
                >{cat.name}</option>
              ))) : <option>No categories</option>
              }
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="name" defaultValue={product.name} onBlur={this.handleBlur.bind(this)}/>
            {formErrorObject ? <p className="error text-error">{formErrorObject['name']}</p> : null}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="3" name="description" defaultValue={product.description} onBlur={this.handleBlur.bind(this)}></textarea>
            {formErrorObject ? <p className="error text-error">{formErrorObject['description']}</p> : null}
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" name="price" placeholder="(i.e) $10.00" step="0.01" defaultValue={product.price} onBlur={this.handleBlur.bind(this)}/>
            {formErrorObject ? <p className="error text-error">{formErrorObject['price']}</p> : null}
          </div>
        </div>

        <div className="form-group pull-right">
          <div className="col-sm-10">
            <button className="btn btn-primary">Update</button>
          </div>
        </div>

      </form>
    );
  }
}

export default ProductsUpdate;
