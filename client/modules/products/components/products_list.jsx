import React from 'react';
import ProductsListItem from './products_list_item.jsx';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {prods,deleteProduct,updateProduct} = this.props;
    console.log(prods);
    return (
      <div className="col-sm-12">
        <a href="/products/add" className="btn btn-success">Add</a>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Prod Id</th>
              <th>Category Id</th>
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
