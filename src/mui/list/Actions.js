import React from 'react';
import PropTypes from 'prop-types';
import { CardActions } from 'material-ui/Card';
import { CreateButton, RefreshButton, DownloadButton } from '../button';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import DeleteMultipleAction from './DeleteMultipleAction';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const Actions = ({ resource, filters, displayedFilters, filterValues, hasCreate, hasDelete, hasDownload, basePath, showFilter, refresh, selectedRows }) => (
    <CardActions style={cardActionStyle}>
        {filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' }) }
        {hasCreate && <CreateButton basePath={basePath} />}
        {hasDelete && <DeleteMultipleAction resource={resource} selectedRows={selectedRows} basePath={basePath}/>}
        {hasDownload && <DownloadButton resource={resource} filterValues={filterValues}/>}
        <RefreshButton refresh={refresh} />
    </CardActions>
);

export default onlyUpdateForKeys(['resource', 'filters', 'displayedFilters', 'filterValues'])(Actions);
