import React from 'react';
import ProductsListItem from './products_list_item.jsx';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {products,deleteProduct,updateProduct} = this.props;

    return (
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
    );
  }
}

export default ProductsList;
