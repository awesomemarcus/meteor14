import React from 'react';
import ProductsListItem from './products_list_item.jsx';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { prods, deleteProduct, updateProduct, categories } = this.props;

    return (
      <div className="col-sm-12">

        <div className="col-sm-9">
          <a href="/products/add" className="btn btn-success">Add</a>
        </div>

        <div className="col-sm-3">
          <select className="form-control pull-right">
            {categories ? categories.map( (category) => (
              <option key={category._id} value={category._id}>{category.name}</option>
              )) : 'no categories'}
          </select>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>CreatedAt</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {prods ? prods.map( (product) => (
              <ProductsListItem
                  key={product._id}
                  product={product}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
              />
            )) : 'no products yet'}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductsList;
