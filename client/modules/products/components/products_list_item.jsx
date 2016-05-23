import React from 'react';
import * as help from '/client/global-helpers.js';

class ProductsListItem extends React.Component {
  handleDelete() {
    const {product,deleteProduct} = this.props;
    deleteProduct(product._id);
  }

  render() {
    const {product} = this.props;
    return (
      <tr>
        <td>{product.category_id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>${product.price}</td>
        <td>{help.formatDate(product.createdAt)}</td>
        <td>
          <a href="#" className="btn btn-xs btn-danger" onClick={this.handleDelete.bind(this)}>
            delete
          </a>
          <a href="#" className="btn btn-xs btn-success">
            edit
          </a>
          <a href="#" className="btn btn-xs btn-default">
            view
          </a>
        </td>
      </tr>
    );
  }
}



export default ProductsListItem;
