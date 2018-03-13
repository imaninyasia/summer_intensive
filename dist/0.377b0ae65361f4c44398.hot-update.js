webpackHotUpdate(0,{

/***/ 605:
/*!****************************************************************!*\
  !*** ./src/Components/FlashMessagesList/FlashMessagesList.jsx ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(/*! react-redux */ 564);var _FlashMessage=__webpack_require__(/*! ./FlashMessage.jsx */ 614);var _FlashMessage2=_interopRequireDefault(_FlashMessage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var FlashMessagesList=function(_Component){_inherits(FlashMessagesList,_Component);function FlashMessagesList(props){_classCallCheck(this,FlashMessagesList);return _possibleConstructorReturn(this,(FlashMessagesList.__proto__||Object.getPrototypeOf(FlashMessagesList)).call(this,props));}_createClass(FlashMessagesList,[{key:'render',value:function render(){if(this.props.messages){var messages=this.props.messages.map(function(message){return _react2.default.createElement(_FlashMessage2.default,{key:message.id,message:message});});}console.log(this.props.messages);return _react2.default.createElement('div',null,this.props.messages?_react2.default.createElement('span',null,'message'):null);}}]);return FlashMessagesList;}(_react.Component);FlashMessagesList.propTypes={messages:_react2.default.PropTypes.objecy.isRequired};function mapStateToProps(state){return{messages:state.addFlashMessage};}exports.default=(0,_reactRedux.connect)(mapStateToProps)(FlashMessagesList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL0ZsYXNoTWVzc2FnZXNMaXN0L0ZsYXNoTWVzc2FnZXNMaXN0LmpzeD8zZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuL0ZsYXNoTWVzc2FnZS5qc3gnXG5jbGFzcyBGbGFzaE1lc3NhZ2VzTGlzdCBleHRlbmRzIENvbXBvbmVudHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpXG59XG5cbnJlbmRlcigpe1xuICBpZiAodGhpcy5wcm9wcy5tZXNzYWdlcyl7XG4gICAgY29uc3QgbWVzc2FnZXM9dGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAobWVzc2FnZT0+IDxGbGFzaE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBtZXNzYWdlPXttZXNzYWdlfSAvPlxuICAgICk7XG4gIH1cbiAgY29uc29sZS5sb2codGhpcy5wcm9wcy5tZXNzYWdlcylcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAge3RoaXMucHJvcHMubWVzc2FnZXM/IDxzcGFuPm1lc3NhZ2U8L3NwYW4+OlxuICAgICAgbnVsbH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG59XG5cbkZsYXNoTWVzc2FnZXNMaXN0LnByb3BUeXBlcyA9e1xuICBtZXNzYWdlczogUmVhY3QuUHJvcFR5cGVzLm9iamVjeS5pc1JlcXVpcmVkXG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xuICByZXR1cm57XG4gICAgbWVzc2FnZXM6IHN0YXRlLmFkZEZsYXNoTWVzc2FnZVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykgKEZsYXNoTWVzc2FnZXNMaXN0KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL0ZsYXNoTWVzc2FnZXNMaXN0L0ZsYXNoTWVzc2FnZXNMaXN0LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///605\n");

/***/ })

})