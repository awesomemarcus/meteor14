import React from 'react';

import CategoriesListItem from './categories_list_item.jsx';

class CategoriesList extends React.Component{
  render() {
    const {categories,categoriesDelete} = this.props;
    return (
      <div>
        <h1>Categories</h1>
        <a className="btn btn-default" href="/categories/add/" role="button">Add Category</a>
        <br />
        <table className="table table-bordered">
            <thead>
                  <tr className="info">
                        <td>Id</td>
                        <td>Name</td>
                        <td>Created At</td>
                        <td>Actions</td>
                  </tr>
            </thead>
            <tbody>
              {categories ? categories.map( (category) => (
                <CategoriesListItem key={category._id} category={category} categoriesDelete={categoriesDelete}/>
              )) : 'no categories yet'}
            </tbody>

        </table>

      </div>
    );
  }
}

export default CategoriesList;
