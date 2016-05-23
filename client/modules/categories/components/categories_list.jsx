import React from 'react';

class CategoriesList extends React.Component{
  render() {
    const {categories} = this.props;
    return (
      <div>
        <h1>CategoriesList</h1>
        <a className="btn btn-default" href="/categories/add/" role="button">Add Category</a>
        <br />
        <table className="table table-bordered">
            <thead>
                  <tr className="info">
                        <td>Name</td>
                        <td>Details</td>
                        <td>Created At</td>
                        <td>Actions</td>
                  </tr>
            </thead>

                  <CategoriesTable categories={categories} />

        </table>

      </div>
    );
  }
}


const CategoriesTable = ({categories}) => (
      <tbody>
            {
              categories.map(category => (
                <tr key={category._id}>
                      <td>{category.name}</td>
                      <td>{category.details}</td>
                      <td>{Date(category.createdAt)}</td>
                      <td>
                          <a className="btn btn-primary" href={"/categories/view/" + category._id} role="button">View</a> &nbsp;&nbsp;
                          <a className="btn btn-primary" href={"/categories/update/" + category._id} role="button">Update</a> &nbsp;&nbsp;
                          <a className="btn btn-danger " href={"/categories/delete/" +  category._id} role="button">Delete</a>
                      </td>
                </tr>
              ))
            }
      </tbody>
);



export default CategoriesList;
