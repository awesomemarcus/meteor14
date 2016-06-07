import React from 'react';

class CategoriesUpdate extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    const {categoriesUpdate} = this.props;
    const {name} = this.refs;
    categoriesUpdate({'name': name.value});
  }

  render() {
    const {nameError, category, detailsError} = this.props;

    return (
      <div className="col-sm-4">
      <form onSubmit={this.handleSubmit.bind(this)}>

        <div className="form-group">
          <h3>Category Update</h3>
          {detailsError ? <p  style={{color: 'red'}}>{detailsError}</p> : null}
        </div>

        <div className="form-group">
          <label for="categoryName">Name</label>
          <input ref="name" type="text" className="form-control" id="categoryName" placeholder="Name" defaultValue={category.name} />
          <p className="error text-error">{nameError ? nameError : ''}</p>
        </div>

        <button type="submit" className="btn btn-default">Update</button>

       </form>
      </div>
    );
  }

}

export default CategoriesUpdate;
