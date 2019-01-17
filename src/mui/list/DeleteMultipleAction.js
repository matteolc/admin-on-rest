import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inflection from 'inflection';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

import { crudDelete as crudDeleteAction } from '../../actions/dataActions';

class DeleteMultipleAction extends Component {
	
  state = {
    open: false,
  };             

  handleOpen = () => this.setState({open: true});
                      
  handleClose = () => this.setState({open: false});
       
  handleSubmit = () => {
  	const { selectedRows, resource, basePath } = this.props;
  	console.log(selectedRows)
    this.setState({open: false});
    selectedRows.map(id => {
      this.props.crudDelete(resource, id, basePath);
    })
  };  

  render() {
  	  
  	  const { selectedRows, resource } = this.props;
  	  const { translate } = this.context;
  	  console.log(this.context)
  	  
    const actions = [
      <FlatButton
        label= {translate('aor.action.cancel')}
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={translate('aor.action.delete')}
        secondary
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <span>
        <FlatButton 
          secondary 
          disabled={selectedRows.length == 0}
          label={translate('aor.action.delete')} 
          icon={<DeleteIcon />}  
          style={{ overflow: 'inherit' }}
          onTouchTap={this.handleOpen}
        />      
        <Dialog
          title={`${translate('aor.action.delete')} ${translate(`resources.${resource}.name`, {
              smart_count: 2,
              _: inflection.humanize(inflection.pluralize(resource)),
          })}`}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {`${translate('aor.message.multiple_delete_are_you_sure')} ${selectedRows.length} ${translate(`resources.${resource}.name`, {
              smart_count: 2,
              _: inflection.humanize(inflection.pluralize(resource)),
          })}?`}
        </Dialog>
      </span>
    );
  }
}

DeleteMultipleAction.propTypes = {
    basePath: PropTypes.string,
};

DeleteMultipleAction.contextTypes = {
    translate: PropTypes.any,
};

function mapStateToProps(state, props) {
    return {
        isLoading: state.admin.loading > 0,
    };
}

export default connect(
    mapStateToProps,
    { crudDelete: crudDeleteAction },
)(DeleteMultipleAction);  

