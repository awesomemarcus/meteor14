import React from 'react';




class CategoriesUpdate extends React.Component {
  render() {
    const {error} = this.props;
    const {category} = this.props;


    return (
      <form onSubmit={this.PostsUpdate.bind(this)}>
      <div className="form-group">
        <h5>Category Add</h5>
      </div>
      <div className="form-group">
        {error ? <p className="center bg-danger ">{error}</p> : null }
      </div>

        <div className="form-group">
          <label for="categoryName">Name</label>
          <input ref="name" type="text" className="form-control" id="categoryName" placeholder="Name" defaultValue={category.name} />
        </div>


        <div className="form-group">
          <label for="categoryDetails">Details</label>
          <textarea ref="details"  type="textarea" className="form-control" id="categoryDetails" placeholder="categoryDetails" defaultValue={category.details}></textarea>
        </div>
        <button type="submit" className="btn btn-default">Update</button>
    </form>
    );
  }

  PostsUpdate(e){
    if(e && e.preventDefault){
      e.preventDefault();
    }
    const {categoriesUpdate} = this.props;
    const {name, details} = this.refs;
    const {category_id} = this.props;
    let formData = {
        _id : category_id,
      name : name.value,
      details : details.value
    };
    categoriesUpdate(formData);

  }
}

export default CategoriesUpdate;
