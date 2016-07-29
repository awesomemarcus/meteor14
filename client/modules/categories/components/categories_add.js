import React from 'react';

class CategoriesAdd extends React.Component {

  handleSubmit(event) {
    event.preventDefault();

    const {categoriesAdd} = this.props;
    const {name} = this.refs;

    categoriesAdd({'name': name.value});
  }

  render() {
    const {
      nameError,
    } = this.props;

    return (
      <div className="col-sm-4">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <h3>Category Add</h3>
          </div>

          <div className="form-group">
            <label for="categoryName">Name</label>
            <input ref="name" type="text" className="form-control" id="categoryName" placeholder="Name" />
            <p className="error text-error">{nameError ? nameError : ''}</p>
          </div>

          <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    );
  }

}

export default CategoriesAdd;
