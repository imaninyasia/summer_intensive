webpackHotUpdate(0,{

/***/ 738:
/*!******************************!*\
  !*** ./utils/requireAuth.js ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=function(ComposedComponent){var Authenticate=function(_Component){_inherits(Authenticate,_Component);function Authenticate(){_classCallCheck(this,Authenticate);return _possibleConstructorReturn(this,(Authenticate.__proto__||Object.getPrototypeOf(Authenticate)).apply(this,arguments));}_createClass(Authenticate,[{key:'componentWillMount',value:function componentWillMount(){if(!this.props.isAuthenticated){this.props.addFlashMessage({type:'error',text:'You need to login to access this page'});this.props.history.push('/');}}},{key:'render',value:function render(){return _react2.default.createElement(ComposedComponent,this.props);}}]);return Authenticate;}(_react.Component);Authenticate.propTypes={isAuthenticated:_react2.default.PropTypes.bool.isRequired,addFlashMessage:_react2.default.PropTypes.func.isRequired};Authenticate.contextTypes={router:_react2.default.PropTypes.object.isRequired};function mapStateToProps(state){return{isAuthenticated:state.auth.isAuthenticated};}return(0,_reactRedux.connect)(mapStateToProps,{addFlashMessage:_actions.addFlashMessage})(Authenticate);};var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRedux=__webpack_require__(/*! react-redux */ 564);var _actions=__webpack_require__(/*! ../src/Routes/Redux/actions.js */ 596);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3V0aWxzL3JlcXVpcmVBdXRoLmpzPzI2NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBwcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHthZGRGbGFzaE1lc3NhZ2V9IGZyb20gJy4uL3NyYy9Sb3V0ZXMvUmVkdXgvYWN0aW9ucy5qcydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKENvbXBvc2VkQ29tcG9uZW50KXtcbiAgY2xhc3MgQXV0aGVudGljYXRlIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgICAgaWYoIXRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkKXtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgdGV4dDogJ1lvdSBuZWVkIHRvIGxvZ2luIHRvIGFjY2VzcyB0aGlzIHBhZ2UnXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJylcbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICApXG4gICAgfVxuICB9XG4gIEF1dGhlbnRpY2F0ZS5wcm9wVHlwZXMgPSB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGFkZEZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9XG4gIEF1dGhlbnRpY2F0ZS5jb250ZXh0VHlwZXMgPSB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuICBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xuICAgIHJldHVybiB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkLFxuICAgIH1cbiAgfVxuICByZXR1cm4gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHthZGRGbGFzaE1lc3NhZ2V9KShBdXRoZW50aWNhdGUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHV0aWxzL3JlcXVpcmVBdXRoLmpzIl0sIm1hcHBpbmdzIjoiQUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///738\n");

/***/ })

})