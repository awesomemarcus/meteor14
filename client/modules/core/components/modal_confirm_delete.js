import React from 'react';

class ModalConfirmDelete extends React.Component{
  render() {
    const {title, content, object} = this.props;

    return(
      <div id={'modal_' + object._id} className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete {content} with ID <span className="text-primary">{object._id}</span>?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={this.handleAction.bind(this)}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    );

  }

  handleAction(){
    const {action, object} = this.props;

    action(object._id);
  }
}

export default ModalConfirmDelete;
