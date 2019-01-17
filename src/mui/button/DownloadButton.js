import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import translate from '../../i18n/translate';

const DownloadButton = ({ resource = '', filterValues = {}, label = 'aor.action.download', translate }) => <FlatButton 
    primary 
    label={label && translate(label)}
    icon={<FileDownload />} 
    containerElement={<Link to={{pathname: `export/${resource}`, search: `?filter=${JSON.stringify(filterValues)}` }} />} 
    style={{ overflow: 'inherit' }}
  />;

DownloadButton.propTypes = {
    resource: PropTypes.string.isRequired,
    translate: PropTypes.func.isRequired,
};

export default translate(DownloadButton);