webpackHotUpdate(0,{

/***/ 553:
/*!*******************************!*\
  !*** ./src/Routes/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _Logout=__webpack_require__(/*! ../Components/Logout/Logout.jsx */ 554);var _Logout2=_interopRequireDefault(_Logout);var _redux=__webpack_require__(/*! redux */ 87);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Header=function(_Component){_inherits(Header,_Component);function Header(props){_classCallCheck(this,Header);return _possibleConstructorReturn(this,(Header.__proto__||Object.getPrototypeOf(Header)).call(this,props));}_createClass(Header,[{key:'render',value:function render(){var user=localStorage.getItem('ind');var isAuthenticated=this.props.auth.isAuthenticated;var userLinks=_react2.default.createElement('ul',{className:'nav navbar-nav navbar-right'},_react2.default.createElement('li',{className:'nav-item'},_react2.default.createElement('a',{href:'/dashboard',style:{color:\"rgba(255, 255, 255, 0.8)\",fontWeight:\"400\",textTransform:\"uppercase\"},src:'images/brand/bskit-logo-white-nostrap.png'},'Dashboard')),_react2.default.createElement('li',{className:'nav-item'},_react2.default.createElement(_Logout2.default,null)));var guestLinks=_react2.default.createElement('span',null,'not loggedin');return _react2.default.createElement('header',{id:'header-1'},_react2.default.createElement('nav',{className:'main-nav navbar-fixed-top headroom headroom--pinned'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'navbar-header'},_react2.default.createElement('button',{type:'button',className:'navbar-toggle','data-toggle':'collapse','data-target':'.navbar-collapse'},_react2.default.createElement('span',{className:'sr-only'},'Toggle navigation'),_react2.default.createElement('span',{className:'icon-bar'}),_react2.default.createElement('span',{className:'icon-bar'}),_react2.default.createElement('span',{className:'icon-bar'})),_react2.default.createElement('img',{style:{width:'53%',paddingTop:'5%'},src:'http://www.urbanarts.org/wp-content/themes/urbanarts/img/UAP-full-logo.png',className:'brand-img img-responsive'})),_react2.default.createElement('div',{className:'collapse navbar-collapse'},_react2.default.createElement('ul',{className:'nav navbar-nav navbar-right'},!user?null:_react2.default.createElement('li',{className:'nav-item'},_react2.default.createElement('a',{href:'/dashboard',style:{color:\"rgba(255, 255, 255, 0.8)\",fontWeight:\"400\",textTransform:\"uppercase\"},src:'images/brand/bskit-logo-white-nostrap.png'},'Dashboard')),!user?null:_react2.default.createElement('li',{className:'nav-item'},_react2.default.createElement(_Logout2.default,null)))))));}}]);return Header;}(_react.Component);Header.propTypes={auth:_react2.default.PropTypes.object.isRequired};function mapStateToProps(state){return{auth:state.auth};}exports.default=(0,_redux.connect)(mapStateToProps)(Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvSGVhZGVyLmpzeD8yMjJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9Mb2dvdXQvTG9nb3V0LmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVkdXgnXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnR7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbnN1cGVyKHByb3BzKTtcbn1cblxuXG5yZW5kZXIoKXtcbiAgICBsZXQgdXNlcj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICBjb25zdHtpc0F1dGhlbnRpY2F0ZWR9ID0gdGhpcy5wcm9wcy5hdXRoXG4gICAgY29uc3QgdXNlckxpbmtzPShcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj48YSBocmVmPVwiL2Rhc2hib2FyZFwiIHN0eWxlPXt7Y29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpXCIsIGZvbnRXZWlnaHQ6IFwiNDAwXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCJ9fSBzcmM9XCJpbWFnZXMvYnJhbmQvYnNraXQtbG9nby13aGl0ZS1ub3N0cmFwLnBuZ1wiPkRhc2hib2FyZDwvYT48L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj48TG9nb3V0IC8+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgKVxuICAgIGNvbnN0IGd1ZXN0TGlua3M9KFxuICAgICAgICA8c3Bhbj5ub3QgbG9nZ2VkaW48L3NwYW4+XG4gICAgICAgIClcbiAgcmV0dXJuKFxuXG4gICAgPGhlYWRlciBpZD1cImhlYWRlci0xXCI+XG4gICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW5hdiBuYXZiYXItZml4ZWQtdG9wIGhlYWRyb29tIGhlYWRyb29tLS1waW5uZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzUzJScsIHBhZGRpbmdUb3A6ICc1JSd9fXNyYz1cImh0dHA6Ly93d3cudXJiYW5hcnRzLm9yZy93cC1jb250ZW50L3RoZW1lcy91cmJhbmFydHMvaW1nL1VBUC1mdWxsLWxvZ28ucG5nXCIgY2xhc3NOYW1lPVwiYnJhbmQtaW1nIGltZy1yZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICB7IXVzZXIgPyBudWxsIDogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+PGEgaHJlZj1cIi9kYXNoYm9hcmRcIiBzdHlsZT17e2NvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVwiLCBmb250V2VpZ2h0OiBcIjQwMFwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwifX0gc3JjPVwiaW1hZ2VzL2JyYW5kL2Jza2l0LWxvZ28td2hpdGUtbm9zdHJhcC5wbmdcIj5EYXNoYm9hcmQ8L2E+PC9saT59XG5cbiAgICAgICAgICAgIHshdXNlciA/IG51bGwgOjxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPjxMb2dvdXQgLz48L2xpPiB9XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAgKVxufVxufVxuSGVhZGVyLnByb3BUeXBlcz0ge1xuICAgIGF1dGg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufVxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcbiAgICByZXR1cm57XG4gICAgICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZGVyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL0hlYWRlci5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///553\n");

/***/ })

})