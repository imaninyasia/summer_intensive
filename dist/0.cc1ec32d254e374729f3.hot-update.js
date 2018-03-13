webpackHotUpdate(0,{

/***/ 614:
/*!***********************************************************!*\
  !*** ./src/Components/FlashMessagesList/FlashMessage.jsx ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _classnames=__webpack_require__(/*! classnames */ 8);var _classnames2=_interopRequireDefault(_classnames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var FlashMessage=function(_Component){_inherits(FlashMessage,_Component);function FlashMessage(props){_classCallCheck(this,FlashMessage);var _this=_possibleConstructorReturn(this,(FlashMessage.__proto__||Object.getPrototypeOf(FlashMessage)).call(this,props));_this.onClick=_this.onClick.bind(_this);return _this;}_createClass(FlashMessage,[{key:'onClick',value:function onClick(){this.props.deleteFlashMessage(this.props.message.id);}},{key:'render',value:function render(){var _props$message=this.props.message,id=_props$message.id,type=_props$message.type,text=_props$message.text;return _react2.default.createElement('div',{style:{marginBottom:'0px'},className:(0,_classnames2.default)('alert',{'alert-success':type==='success','alert-danger':type==='error'})},_react2.default.createElement('button',{onClick:this.onClick,className:'close'},_react2.default.createElement('span',null,'\\xD7')),text);}}]);return FlashMessage;}(_react.Component);FlashMessage.propTypes={message:_react2.default.PropTypes.object.isRequired,deleteFlashMessage:_react2.default.PropTypes.func.isRequired};exports.default=FlashMessage;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjE0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL0ZsYXNoTWVzc2FnZXNMaXN0L0ZsYXNoTWVzc2FnZS5qc3g/ZWFlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHByb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNsYXNzIEZsYXNoTWVzc2FnZSBleHRlbmRzIENvbXBvbmVudHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKVxufVxub25DbGljaygpe1xuICB0aGlzLnByb3BzLmRlbGV0ZUZsYXNoTWVzc2FnZSh0aGlzLnByb3BzLm1lc3NhZ2UuaWQpXG59XG4gIHJlbmRlcigpe1xuICBjb25zdHtpZCwgdHlwZSwgdGV4dH0gPSB0aGlzLnByb3BzLm1lc3NhZ2VcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOicwcHgnfX0gY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdhbGVydCcsIHtcbiAgICAgICAgJ2FsZXJ0LXN1Y2Nlc3MnOiB0eXBlPT09ICdzdWNjZXNzJyxcbiAgICAgICAgJ2FsZXJ0LWRhbmdlcicgOiB0eXBlPT09J2Vycm9yJ1xuICAgICAgfSl9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9IGNsYXNzTmFtZT1cImNsb3NlXCI+PHNwYW4+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cbiAgICAgIHt0ZXh0fVxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuXG5cbkZsYXNoTWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIG1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGVsZXRlRmxhc2hNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5leHBvcnQgZGVmYXVsdCBGbGFzaE1lc3NhZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9GbGFzaE1lc3NhZ2VzTGlzdC9GbGFzaE1lc3NhZ2UuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///614\n");

/***/ })

})