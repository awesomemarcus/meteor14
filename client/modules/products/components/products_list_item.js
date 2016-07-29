import React from 'react';
import * as help from '/client/global-helpers';
import ModalConfirmDelete from '../../core/components/modal_confirm_delete';

class ProductsListItem extends React.Component {

  handleDelete() {
    const {product} = this.props;

    $('#modal_' + product._id).modal();
  }

  render() {

    const {product, productsDelete} = this.props;

    return (
      <tr>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.category_name}</td>
        <td>{product.description}</td>
        <td>${product.price}</td>
        <td>{help.formatDate(product.createdAt)}</td>
        <td>
          <a href="#" className="btn btn-sm btn-danger" onClick={this.handleDelete.bind(this)}>
            Delete
          </a>&nbsp;
          <a href={`/products/update/${product._id}`} className="btn btn-sm btn-success">
            Update
          </a>&nbsp;
          <a href={`/products/view/${product._id}`} className="btn btn-sm btn-default">
            view
          </a>
          <ModalConfirmDelete object={product} title="Confirm Product Deletion" content="product" action={productsDelete} />
        </td>
      </tr>
    );
  }


}



export default ProductsListItem;
