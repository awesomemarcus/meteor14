import React from 'react';



class CategoriesAdd extends React.Component {
  render() {
    const {error} = this.props;
    return (
      <form onSubmit={this.PostsAdd.bind(this)}>
      <div className="form-group">
        <h5>Category Add</h5>
      </div>
      <div className="form-group">
        {error ? <p className="center bg-danger ">{error}</p> : null }
      </div>

        <div className="form-group">
          <label for="categoryName">Name</label>
          <input ref="name" type="text" className="form-control" id="categoryName" placeholder="Name" />
        </div>


        <div className="form-group">
          <label for="categoryDetails">Details</label>
          <textarea ref="details"  type="textarea" className="form-control" id="categoryDetails" placeholder="categoryDetails" ></textarea>
        </div>
        <button type="submit" className="btn btn-default">Add</button>
    </form>
    );
  }

  PostsAdd(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {categoriesAdd} = this.props;
    const {name, details} = this.refs;
    let formData = {
      name : name.value,
      details : details.value
    };
    categoriesAdd(formData);

  }
}

export default CategoriesAdd;
