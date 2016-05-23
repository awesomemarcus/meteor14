import React from 'react';
import ProductsListItem from './products_list_item.jsx';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {products,deleteProduct,updateProduct} = this.props;

    return (
      <div className="col-sm-12">
        <a href="/products/add" className="btn btn-success">Add</a>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {products ? products.map( (product) => (
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
