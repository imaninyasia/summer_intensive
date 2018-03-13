webpackHotUpdate(0,{

/***/ 553:
/*!*******************************!*\
  !*** ./src/Routes/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _Logout=__webpack_require__(/*! ../Components/Logout/Logout.jsx */ 554);var _Logout2=_interopRequireDefault(_Logout);var _redux=__webpack_require__(/*! redux */ 87);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Header=function(_Component){_inherits(Header,_Component);function Header(props){_classCallCheck(this,Header);return _possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).call(this,props));}_createClass(Header,[{key:'render',value:function render(){var user=localStorage.getItem('ind');return _react2.default.createElement('header',{id:'header-1'},_react2.default.createElement('nav',{className:'main-nav navbar-fixed-top headroom headroom--pinned'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'navbar-header'},_react2.default.createElement('button',{type:'button',className:'navbar-toggle','data-toggle':'collapse','data-target':'.navbar-collapse'},_react2.default.createElement('span',{className:'sr-only'},'Toggle navigation'),_react2.default.createElement('span',{className:'icon-bar'}),_react2.default.createElement('span',{className:'icon-bar'}),_react2.default.createElement('span',{className:'icon-bar'})),_react2.default.createElement('img',{style:{width:'53%',paddingTop:'5%'},src:'http://www.urbanarts.org/wp-content/themes/urbanarts/img/UAP-full-logo.png',className:'brand-img img-responsive'})),_react2.default.createElement('div',{className:'collapse navbar-collapse'},_react2.default.createElement('ul',{className:'nav navbar-nav navbar-right'},!user?null:_react2.default.createElement('li',{className:'nav-item'},_react2.default.createElement('a',{href:'/dashboard',style:{color:\"rgba(255, 255, 255, 0.8)\",fontWeight:\"400\",textTransform:\"uppercase\"},src:'images/brand/bskit-logo-white-nostrap.png'},'Dashboard')),!user?null:_react2.default.createElement('li',{className:'nav-item'},_react2.default.createElement(_Logout2.default,null)))))));}}]);return Header;}(_react.Component);Navig;function mapStateToProps(state){return{auth:state.auth};}exports.default=(0,_redux.connect)(mapStateToProps)(Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvSGVhZGVyLmpzeD8yMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IExvZ291dCBmcm9tICcuLi9Db21wb25lbnRzL0xvZ291dC9Mb2dvdXQuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWR1eCdcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuc3VwZXIocHJvcHMpO1xufVxuXG5cbnJlbmRlcigpe1xuICAgIGxldCB1c2VyPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICByZXR1cm4oXG5cbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyLTFcIj5cbiAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4tbmF2IG5hdmJhci1maXhlZC10b3AgaGVhZHJvb20gaGVhZHJvb20tLXBpbm5lZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAnNTMlJywgcGFkZGluZ1RvcDogJzUlJ319c3JjPVwiaHR0cDovL3d3dy51cmJhbmFydHMub3JnL3dwLWNvbnRlbnQvdGhlbWVzL3VyYmFuYXJ0cy9pbWcvVUFQLWZ1bGwtbG9nby5wbmdcIiBjbGFzc05hbWU9XCJicmFuZC1pbWcgaW1nLXJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcIj5cbiAgICAgICAgICAgIHshdXNlciA/IG51bGwgOiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj48YSBocmVmPVwiL2Rhc2hib2FyZFwiIHN0eWxlPXt7Y29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fSBzcmM9XCJpbWFnZXMvYnJhbmQvYnNraXQtbG9nby13aGl0ZS1ub3N0cmFwLnBuZ1wiPkRhc2hib2FyZDwvYT48L2xpPn1cblxuICAgICAgICAgICAgeyF1c2VyID8gbnVsbCA6PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+PExvZ291dCAvPjwvbGk+IH1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgICApXG59XG59XG5OYXZpZ1xuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcbiAgICByZXR1cm57XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL0hlYWRlci5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///553\n");

/***/ })

})