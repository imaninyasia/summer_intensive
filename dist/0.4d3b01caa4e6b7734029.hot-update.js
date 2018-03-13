webpackHotUpdate(0,{

/***/ 739:
/*!************************************************!*\
  !*** ./src/Components/StudentDash/SideNav.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ./StudentDash.css */ 60);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);var _Badges=__webpack_require__(/*! ./Badges/Badges.jsx */ 539);var _Badges2=_interopRequireDefault(_Badges);var _reactRedux=__webpack_require__(/*! react-redux */ 564);__webpack_require__(/*! ./SideNav.css */ 740);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SideNav=function(_Component){_inherits(SideNav,_Component);function SideNav(props){_classCallCheck(this,SideNav);var _this=_possibleConstructorReturn(this,(SideNav.__proto__||Object.getPrototypeOf(SideNav)).call(this,props));_this.state={showModal:false};return _this;}_createClass(SideNav,[{key:'openNav',value:function openNav(){document.getElementById(\"mySidenav\").style.width=\"450px\";}},{key:'closeNav',value:function closeNav(){document.getElementById(\"mySidenav\").style.width=\"0px\";}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){this.setState({showModal:false});}},{key:'openM',value:function openM(){console.log('open');this.setState({showModal:true});}},{key:'render',value:function render(){var tooltip=_react2.default.createElement(_reactBootstrap.Tooltip,{id:'tooltip'},_react2.default.createElement('strong',null,'Click to change: '),' profile image');return _react2.default.createElement('div',null,_react2.default.createElement('span',{style:{fontSize:'30px',cursor:'pointer'},onClick:this.openNav.bind(this)},'\\u2630 open'),_react2.default.createElement('div',{id:'mySidenav',className:'sidenav'},_react2.default.createElement('a',{style:{paddingTop:'90px'},href:void 0,className:'closebtn',onClick:this.closeNav.bind(this)},'\\xD7'),_react2.default.createElement(_reactBootstrap.OverlayTrigger,{placement:'top',overlay:tooltip},_react2.default.createElement('img',{src:this.props.user.profile_img,className:'student_dash_thumb',alt:'Profile Picture',style:_defineProperty({outline:'none',cursor:'inherit'},'cursor','pointer'),onClick:this.openM.bind(this)})),_react2.default.createElement('a',{href:'#'},'About'),_react2.default.createElement('a',{href:'#'},'Services'),_react2.default.createElement('a',{href:'#'},'Clients'),_react2.default.createElement('a',{href:'#'},'Contact')));}}]);return SideNav;}(_react.Component);exports.default=SideNav;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4PzIxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFByb2ZpbGVCYWRnZXMgZnJvbSAnLi9CYWRnZXMvQmFkZ2VzLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgJy4vU2lkZU5hdi5jc3MnXG5jbGFzcyBTaWRlTmF2IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlPXtcbiAgICBzaG93TW9kYWw6IGZhbHNlXG4gIH1cblxufVxub3Blbk5hdigpe1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUud2lkdGggPSBcIjQ1MHB4XCJcbn1cbmNsb3NlTmF2KCl7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCJcbn1cbiBnZXRJbml0aWFsU3RhdGUoKXtcbiAgICByZXR1cm4geyBzaG93TW9kYWw6IGZhbHNlIH07XG4gIH1cblxuICBjbG9zZU0oKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiBmYWxzZSB9KTtcbiAgfVxuXG4gIG9wZW5NKCl7XG4gICAgY29uc29sZS5sb2coJ29wZW4nKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG4gIH1cbnJlbmRlcigpe1xuY29uc3QgdG9vbHRpcCA9IChcbiAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+PHN0cm9uZz5DbGljayB0byBjaGFuZ2U6IDwvc3Ryb25nPiBwcm9maWxlIGltYWdlPC9Ub29sdGlwPiApXG5cbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnLCBjdXJzb3I6J3BvaW50ZXInfX0gb25DbGljaz17dGhpcy5vcGVuTmF2LmJpbmQodGhpcyl9PiYjOTc3Njsgb3Blbjwvc3Bhbj5cbiAgICA8ZGl2IGlkPVwibXlTaWRlbmF2XCIgY2xhc3NOYW1lPVwic2lkZW5hdlwiPlxuICAgICAgPGEgc3R5bGU9e3twYWRkaW5nVG9wOic5MHB4J319aHJlZj17dm9pZCgwKX0gY2xhc3NOYW1lPVwiY2xvc2VidG5cIiBvbkNsaWNrPXt0aGlzLmNsb3NlTmF2LmJpbmQodGhpcyl9PiZ0aW1lczs8L2E+XG4gICAgICA8T3ZlcmxheVRyaWdnZXIgcGxhY2VtZW50PVwidG9wXCIgb3ZlcmxheT17dG9vbHRpcH0+XG5cbiAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLnVzZXIucHJvZmlsZV9pbWd9IGNsYXNzTmFtZT1cInN0dWRlbnRfZGFzaF90aHVtYlwiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCBjdXJzb3I6ICdpbmhlcml0JywgY3Vyc29yOiAncG9pbnRlcid9fSBvbkNsaWNrPXt0aGlzLm9wZW5NLmJpbmQodGhpcyl9Lz5cbiAgICAgIDwvT3ZlcmxheVRyaWdnZXI+XG4gICAgICA8YSBocmVmPVwiI1wiPkFib3V0PC9hPlxuICAgICAgPGEgaHJlZj1cIiNcIj5TZXJ2aWNlczwvYT5cbiAgICAgIDxhIGhyZWY9XCIjXCI+Q2xpZW50czwvYT5cbiAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG59XG59XG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvU3R1ZGVudERhc2gvU2lkZU5hdi5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///739\n");

/***/ })

})