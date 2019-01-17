import { FETCH_END } from '../../actions/fetchActions';

import { CRUD_GET_LIST_SUCCESS } from '../../actions/dataActions';

export default resource => (previousState = {}, { type, payload, meta }) => {
    if (!meta || meta.resource !== resource) {
        return previousState;
    }
    if (resource !== 'inbound_calls') { return previousState };
    switch (type) {
    case CRUD_GET_LIST_SUCCESS:
        return payload.aggregations;
    default:
        return previousState;
    }
};
