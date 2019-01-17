import { combineReducers } from 'redux';
import data from './data';
import list from './list';
import aggregations from './aggregations';

export default (resource) => combineReducers({
    data: data(resource),
    list: list(resource),
    aggregations: aggregations(resource),
});
