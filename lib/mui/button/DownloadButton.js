'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _fileDownload = require('material-ui/svg-icons/file/file-download');

var _fileDownload2 = _interopRequireDefault(_fileDownload);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownloadButton = function DownloadButton(_ref) {
    var _ref$resource = _ref.resource,
        resource = _ref$resource === undefined ? '' : _ref$resource,
        _ref$filterValues = _ref.filterValues,
        filterValues = _ref$filterValues === undefined ? {} : _ref$filterValues,
        _ref$label = _ref.label,
        label = _ref$label === undefined ? 'aor.action.download' : _ref$label,
        translate = _ref.translate;
    return _react2.default.createElement(_FlatButton2.default, {
        primary: true,
        label: label && translate(label),
        icon: _react2.default.createElement(_fileDownload2.default, null),
        containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: { pathname: 'export/' + resource, search: '?filter=' + JSON.stringify(filterValues) } }),
        style: { overflow: 'inherit' }
    });
};

DownloadButton.propTypes = {
    resource: _react.PropTypes.string.isRequired,
    translate: _react.PropTypes.func.isRequired
};

exports.default = (0, _translate2.default)(DownloadButton);
module.exports = exports['default'];