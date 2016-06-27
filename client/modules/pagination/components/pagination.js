import React from 'react';

class Pagination extends React.Component {
  render () {
    const itemPerPage = 2;
    const {
      setTotalPages,
      totalPages,
      pageList,
      recordDeleteError,
      recordDeleteSuccess,
      loadPageInit,
    } = this.props;
    setTotalPages(itemPerPage);
    const pages = [];
    for(var i=1; i<=totalPages; i++) {
      pages.push(i);
    }
    return (
      <div>

        <div>{recordDeleteError?recordDeleteError:recordDeleteSuccess}</div>
        <hr/>
        <div>
        {pageList?pageList.map( (list) => (
          <div key={list._id}>
            <div>{list.profile.name}<button type="button" ref={list._id} id={list._id} name={list._id} className="label label-danger" onClick={this.deleteRecord.bind(this)}>Delete</button></div>
          </div>
        ) ): 'no data yet'}
        </div>

        <hr/>

        <div>
          {pages?pages.map( (page) => (
            <div key={page}>
              <button ref={page} name={page} id={page} className="btn btn-info paginationBtn" onClick={this.loadPageContent.bind(this)}>{page}</button>
            </div>
          ) ): 'no data yet'}
        </div>

        <br/><br/><br/><br/>

        <div>
        {pages?pages.slice(0,loadPageInit).map( (page) => (
          <div key={page}>
            <button ref={page} name={page} id={page} className="btn btn-info paginationBtn" onClick={this.loadMorePages.bind(this)}>{page===loadPageInit?page+" >>":page+""}</button>
          </div>
        ) ): 'no data yet'}
        </div>

      </div>
    );
  }

  loadPageContent(e) {
    const {currentPage} = this.props;
    currentPage(e.currentTarget.id);
  }

  deleteRecord(e) {
    const {deleteRecord} = this.props;
    deleteRecord(e.currentTarget.id);
  }

  loadMorePages(e) {
    const {extendPages, loadPageInit, currentPage} = this.props;
    if(loadPageInit === parseInt(e.currentTarget.id)) {
      extendPages(e.currentTarget.id, loadPageInit);
    }
          currentPage(e.currentTarget.id);
  }
}

export default Pagination;
