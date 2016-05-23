import React from 'react';

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
              {categories ? categories.map( (cat) => (
                <option value={cat._id}>{cat.name}</option>
              )) : <option>No categories</option>}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" ref="name"/>
            <p className="error text-error">{nameError ? nameError : ''}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Description</label>
          <div className="col-sm-10">
            <textarea className="form-control" rows="3" ref="description"></textarea>
            <p className="error text-error">{descriptionError ? descriptionError : ''}</p>
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label">Price</label>
          <div className="col-sm-10">
            <input type="number" className="form-control" ref="price" placeholder="(i.e) $10.00" step="0.01"/>
            <p className="error text-error">{priceError ? priceError : ''}</p>
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
