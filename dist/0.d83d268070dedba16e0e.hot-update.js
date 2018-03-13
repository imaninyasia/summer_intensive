webpackHotUpdate(0,{

/***/ 382:
/*!****************************!*\
  !*** ./src/Routes/App.jsx ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _Main=__webpack_require__(/*! ./Main.jsx */ 383);var _Main2=_interopRequireDefault(_Main);var _Header=__webpack_require__(/*! ./Header.jsx */ 553);var _Header2=_interopRequireDefault(_Header);var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ./App.css */ 556);var _RingLoader=__webpack_require__(/*! halogen/RingLoader */ 557);var _RingLoader2=_interopRequireDefault(_RingLoader);var _reactRedux=__webpack_require__(/*! react-redux */ 564);var _redux=__webpack_require__(/*! redux */ 87);var _FlashMessagesList=__webpack_require__(/*! ../Components/FlashMessagesList/FlashMessagesList.jsx */ 605);var _FlashMessagesList2=_interopRequireDefault(_FlashMessagesList);var _reactRouterRedux=__webpack_require__(/*! react-router-redux */ 589);var _actions=__webpack_require__(/*! ./Redux/actions.js */ 596);var action=_interopRequireWildcard(_actions);var _configureStore=__webpack_require__(/*! ./Redux/configureStore.js */ 592);var _configureStore2=_interopRequireDefault(_configureStore);var _jwtDecode=__webpack_require__(/*! jwt-decode */ 735);var _jwtDecode2=_interopRequireDefault(_jwtDecode);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var store=(0,_configureStore2.default)();if(localStorage.token){store.dispatch(action.auth({isVerified:true,user:(0,_jwtDecode2.default)(localStorage.token)}));}else{console.log('no token');}var App=function(_Component){_inherits(App,_Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:'render',value:function render(){console.log(store.getState(),'redux-store');return _react2.default.createElement(_reactRedux.Provider,{store:store},_react2.default.createElement('div',null,_react2.default.createElement(_Header2.default,null),_react2.default.createElement(_FlashMessagesList2.default,null),this.props.children,_react2.default.createElement(_Main2.default,null),_react2.default.createElement('div',{className:'copyright-bar bg-black the_footer'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'editContent',style:{outline:'none',cursor:'inherit'}},_react2.default.createElement('p',{className:'pull-left small'},'\\xA9 bskit - Bootstrap Starter Kit')),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',cursor:'inherit'}},_react2.default.createElement('p',{className:'pull-right small'},'Made with ',_react2.default.createElement('span',{className:'fa fa-heart pomegranate',style:{outline:'none',cursor:'inherit'}}),' in London'))))));}}]);return App;}(_react.Component);exports.default=App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvQXBwLmpzeD8zZmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluIGZyb20gJy4vTWFpbi5qc3gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzeCdcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BcHAuY3NzJ1xuaW1wb3J0IExvYWRlciBmcm9tICdoYWxvZ2VuL1JpbmdMb2FkZXInO1xuaW1wb3J0IHsgY29ubmVjdCwgUHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgRmxhc2hNZXNzYWdlc0xpc3QgZnJvbSAnLi4vQ29tcG9uZW50cy9GbGFzaE1lc3NhZ2VzTGlzdC9GbGFzaE1lc3NhZ2VzTGlzdC5qc3gnXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSwgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbiBmcm9tICcuL1JlZHV4L2FjdGlvbnMuanMnXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9SZWR1eC9jb25maWd1cmVTdG9yZS5qcydcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSdcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuaWYobG9jYWxTdG9yYWdlLnRva2VuKXtcbiAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uLmF1dGgoe2lzVmVyaWZpZWQ6IHRydWUsXG4gICAgdXNlcjogand0RGVjb2RlKGxvY2FsU3RvcmFnZS50b2tlbil9KSlcbn1lbHNle1xuICBjb25zb2xlLmxvZygnbm8gdG9rZW4nKVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbnJlbmRlcigpe1xuY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSwgJ3JlZHV4LXN0b3JlJylcbiAgcmV0dXJuKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxkaXY+XG5cbiAgICA8SGVhZGVyIC8+XG4gICAgPEZsYXNoTWVzc2FnZXNMaXN0IC8+XG4gICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgIDxNYWluIC8+XG5cblxuICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiY29weXJpZ2h0LWJhciBiZy1ibGFjayB0aGVfZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IHNtYWxsXCI+wqkgYnNraXQgLSBCb290c3RyYXAgU3RhcnRlciBLaXQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBzbWFsbFwiPk1hZGUgd2l0aCA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1oZWFydCBwb21lZ3JhbmF0ZVwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCBjdXJzb3I6ICdpbmhlcml0J319Pjwvc3Bhbj4gaW4gTG9uZG9uPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvQXBwLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///382\n");

/***/ })

})