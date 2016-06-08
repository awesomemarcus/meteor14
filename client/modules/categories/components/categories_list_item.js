import React from 'react';
import * as help from '/client/global-helpers';
import ModalConfirmDelete from '../../core/components/modal_confirm_delete';

class CategoriesListItem extends React.Component {

    handleDelete() {
      const {category} = this.props;

      $('#modal_' + category._id).modal();
    }

    render() {
      const {category, categoriesDelete} = this.props;
      return (
        <tr>
            <td>{category._id}</td>
            <td>{category.name}</td>
            <td>{help.formatDate(category.createdAt)}</td>
            <td>{category.productCount}</td>
            <td>
              <a className="btn btn-xs btn-danger" href="#" role="button" onClick={this.handleDelete.bind(this)}>Delete</a>&nbsp;
              <a className="btn btn-xs btn-success" href={`/categories/update/${category._id}`} role="button">Update</a>&nbsp;
              <a className="btn btn-xs btn-default"  href={`/categories/view/${category._id}`} role="button">View</a>
              <ModalConfirmDelete object={category} title="Confirm Category Deletion" content="category" action={categoriesDelete} />
            </td>
        </tr>
      );
    }
}

export default CategoriesListItem;
