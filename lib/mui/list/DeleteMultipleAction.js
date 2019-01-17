'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _dataActions = require('../../actions/dataActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteMultipleAction = function (_Component) {
  (0, _inherits3.default)(DeleteMultipleAction, _Component);

  function DeleteMultipleAction() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DeleteMultipleAction);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DeleteMultipleAction.__proto__ || Object.getPrototypeOf(DeleteMultipleAction)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.handleOpen = function () {
      return _this.setState({ open: true });
    }, _this.handleClose = function () {
      return _this.setState({ open: false });
    }, _this.handleSubmit = function () {
      var _this$props = _this.props,
          selectedRows = _this$props.selectedRows,
          resource = _this$props.resource,
          basePath = _this$props.basePath;

      console.log(selectedRows);
      _this.setState({ open: false });
      selectedRows.map(function (id) {
        _this.props.crudDelete(resource, id, basePath);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DeleteMultipleAction, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selectedRows = _props.selectedRows,
          resource = _props.resource;
      var translate = this.context.translate;

      console.log(this.context);

      var actions = [_react2.default.createElement(_FlatButton2.default, {
        label: translate('aor.action.cancel'),
        primary: true,
        onTouchTap: this.handleClose
      }), _react2.default.createElement(_FlatButton2.default, {
        label: translate('aor.action.delete'),
        secondary: true,
        keyboardFocused: true,
        onTouchTap: this.handleSubmit
      })];

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_FlatButton2.default, {
          secondary: true,
          disabled: selectedRows.length == 0,
          label: translate('aor.action.delete'),
          icon: _react2.default.createElement(_delete2.default, null),
          style: { overflow: 'inherit' },
          onTouchTap: this.handleOpen
        }),
        _react2.default.createElement(
          _Dialog2.default,
          {
            title: translate('aor.action.delete') + ' ' + translate('resources.' + resource + '.name', {
              smart_count: 2,
              _: _inflection2.default.humanize(_inflection2.default.pluralize(resource))
            }),
            actions: actions,
            modal: false,
            open: this.state.open,
            onRequestClose: this.handleClose
          },
          translate('aor.message.multiple_delete_are_you_sure') + ' ' + selectedRows.length + ' ' + translate('resources.' + resource + '.name', {
            smart_count: 2,
            _: _inflection2.default.humanize(_inflection2.default.pluralize(resource))
          }) + '?'
        )
      );
    }
  }]);
  return DeleteMultipleAction;
}(_react.Component);

DeleteMultipleAction.propTypes = {
  basePath: _propTypes2.default.string
};

DeleteMultipleAction.contextTypes = {
  translate: _propTypes2.default.any
};

function mapStateToProps(state, props) {
  return {
    isLoading: state.admin.loading > 0
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { crudDelete: _dataActions.crudDelete })(DeleteMultipleAction);
module.exports = exports['default'];