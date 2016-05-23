import React from 'react';
import * as help from '/client/global-helpers.js';

class CategoriesListItem extends React.Component {

    handleDelete() {
      const {category,categoriesDelete} = this.props;
      categoriesDelete(category._id);
    }


    getProductNames(category){

      return(
            <div key={category._id}>
            {
              category.products.map(function(product, key){
                return (
                  <span key={key}>
                    <a href={"/products/view/" + product._id}>{product.name} </a>
                  </span>
                );
              })
            }
            </div>
      );
    }


    render() {
      const {category} = this.props;
      return (
        <tr>
            <td>{category._id}</td>
            <td>{category.name}</td>
            <td>{help.formatDate(category.createdAt)}</td>
            <td>asdasd</td>
            <td>
              <a className="btn btn-xs btn-danger" href="#" role="button" onClick={this.handleDelete.bind(this)}>Delete</a>
              <a className="btn btn-xs btn-success" href={`/categories/update/${category._id}`} role="button">Update</a>
              <a className="btn btn-xs btn-default"  href={`/categories/view/${category._id}`} role="button">View</a>
            </td>
        </tr>
      );
    }
}

export default CategoriesListItem;
