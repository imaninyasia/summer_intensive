webpackHotUpdate(0,{

/***/ 609:
/*!************************************************!*\
  !*** ./src/Components/StudentDash/SideNav.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ./StudentDash.css */ 54);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 46);var _jquery=__webpack_require__(/*! jquery */ 748);var _jquery2=_interopRequireDefault(_jquery);var _Badges=__webpack_require__(/*! ./Badges/Badges.jsx */ 266);var _Badges2=_interopRequireDefault(_Badges);var _reactRedux=__webpack_require__(/*! react-redux */ 26);var _masonryLayout=__webpack_require__(/*! masonry-layout */ 743);var _masonryLayout2=_interopRequireDefault(_masonryLayout);__webpack_require__(/*! ./SideNav.css */ 613);var _mapDormTemp=__webpack_require__(/*! ../../../assets/map-dorm-temp.png */ 749);var _mapDormTemp2=_interopRequireDefault(_mapDormTemp);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SideNav=function(_Component){_inherits(SideNav,_Component);function SideNav(props){_classCallCheck(this,SideNav);var _this=_possibleConstructorReturn(this,(SideNav.__proto__||Object.getPrototypeOf(SideNav)).call(this,props));_this.state={showModal:false,currentRoom:null};_this.masonry=_this.masonry.bind(_this);return _this;}_createClass(SideNav,[{key:'openNav',value:function openNav(){document.getElementById(\"mySidenav\").style.width=\"620px\";}},{key:'componentDidMount',value:function componentDidMount(){this.masonry();}},{key:'masonry',value:function masonry(){var grid=document.getElementByClassName(\"grid\");var $grid=new _masonryLayout2.default(grid,{itemSelector:'.grid-item',columnWidth:70});$grid.on('click','.grid-item',function(){console.log('clicked');$grid.masonry();});}},{key:'closeNav',value:function closeNav(){document.getElementById(\"mySidenav\").style.width=\"0px\";}},{key:'mouseOver',value:function mouseOver(){this.openNav();}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){this.setState({showModal:false});}},{key:'openM',value:function openM(){this.setState({showModal:true});}},{key:'render',value:function render(){var tooltip=_react2.default.createElement(_reactBootstrap.Tooltip,{id:'tooltip'},_react2.default.createElement('strong',null,'Click to change: '),' profile image');return _react2.default.createElement('div',null,_react2.default.createElement(_reactBootstrap.Modal,{show:this.state.showModal,onHide:this.closeM.bind(this)},_react2.default.createElement(_reactBootstrap.Modal.Header,null,_react2.default.createElement(_reactBootstrap.Modal.Title,{style:{textAlign:'center'}},'Upload Profile Image')),_react2.default.createElement(_reactBootstrap.Modal.Body,null,_react2.default.createElement('div',null,_react2.default.createElement('label',null,'File '),_react2.default.createElement('input',{type:'file'}))),_react2.default.createElement(_reactBootstrap.Modal.Footer,null,_react2.default.createElement(_reactBootstrap.Button,{onClick:this.closeM.bind(this)},'Close'))),_react2.default.createElement('div',{id:'edge',onMouseOver:this.openNav.bind(this),style:{display:'inline-block',position:'fixed',height:'100vh',width:'20px'}},_react2.default.createElement('span',{style:{fontSize:'30px',cursor:'pointer'}},'\\u2630')),_react2.default.createElement('div',{id:'mySidenav',style:{backgroundColor:'darkgrey',opacity:'0.95'},className:'sidenav'},_react2.default.createElement('a',{style:{paddingTop:'90px'},href:void 0,className:'closebtn',onClick:this.closeNav.bind(this)},'\\xD7'),_react2.default.createElement(_reactBootstrap.OverlayTrigger,{placement:'top',overlay:tooltip},_react2.default.createElement('img',{src:this.props.user.profile_img,className:'student_dash_thumb',alt:'Profile Picture',style:_defineProperty({outline:'none',cursor:'inherit'},'cursor','pointer'),onClick:this.openM.bind(this)})),_react2.default.createElement('p',{id:'email'},this.props.user.email),_react2.default.createElement('div',{className:'grid'},_react2.default.createElement('div',{style:{backgroundImage:'url('+_mapDormTemp2.default+')'},className:'grid-item dorm'},'library'),_react2.default.createElement('div',{className:'grid-item hallway'},'hallway'),_react2.default.createElement('div',{className:'grid-item   gym'},'gym'),_react2.default.createElement('div',{className:'grid-item dormitory'},'dormitory'),_react2.default.createElement('div',{className:'grid-item classroom'},'classroom'),_react2.default.createElement('div',{className:'grid-item staircase'},_react2.default.createElement('span',null,'staircase'))),_react2.default.createElement(_Badges2.default,{admin:this.props.badgeAdmin,adminStudent:this.props.badgeAdminStudent,trial:this.props.badgeTrial}),_react2.default.createElement('a',{href:'#'},'About')));}}]);return SideNav;}(_react.Component);exports.default=SideNav;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4PzIxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFByb2ZpbGVCYWRnZXMgZnJvbSAnLi9CYWRnZXMvQmFkZ2VzLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgbXNucnkgZnJvbSAnbWFzb25yeS1sYXlvdXQnXG5pbXBvcnQgJy4vU2lkZU5hdi5jc3MnXG5pbXBvcnQgRG9ybSBmcm9tICcuLi8uLi8uLi9hc3NldHMvbWFwLWRvcm0tdGVtcC5wbmcnXG5jbGFzcyBTaWRlTmF2IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlPXtcbiAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgIGN1cnJlbnRSb29tOiBudWxsXG4gIH1cbiAgdGhpcy5tYXNvbnJ5ID0gdGhpcy5tYXNvbnJ5LmJpbmQodGhpcylcbn1cbm9wZW5OYXYoKXtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCI2MjBweFwiXG59XG5jb21wb25lbnREaWRNb3VudCgpe1xudGhpcy5tYXNvbnJ5KClcbn1cbm1hc29ucnkoKXtcbmxldCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5Q2xhc3NOYW1lKFwiZ3JpZFwiKVxudmFyICRncmlkID0gbmV3IG1zbnJ5KCBncmlkLCB7XG4gIGl0ZW1TZWxlY3RvcjpcbiAgICAnLmdyaWQtaXRlbScsXG4gIGNvbHVtbldpZHRoOiA3MFxufSk7XG5cbiRncmlkLm9uKCAnY2xpY2snLCAnLmdyaWQtaXRlbScsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICRncmlkLm1hc29ucnkoKTtcbn0pO1xufVxuY2xvc2VOYXYoKXtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCIwcHhcIlxufVxubW91c2VPdmVyKCl7XG50aGlzLm9wZW5OYXYoKVxufVxuIGdldEluaXRpYWxTdGF0ZSgpe1xuICAgIHJldHVybiB7IHNob3dNb2RhbDogZmFsc2UgfTtcbiAgfVxuXG4gIGNsb3NlTSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgb3Blbk0oKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuICB9XG5yZW5kZXIoKXtcbmNvbnN0IHRvb2x0aXAgPSAoXG4gIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPjxzdHJvbmc+Q2xpY2sgdG8gY2hhbmdlOiA8L3N0cm9uZz4gcHJvZmlsZSBpbWFnZTwvVG9vbHRpcD4gKVxuXG4gIHJldHVybihcbiAgICA8ZGl2ID5cbiAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IG9uSGlkZT17dGhpcy5jbG9zZU0uYmluZCh0aGlzKX0+XG4gICAgICAgICAgPE1vZGFsLkhlYWRlciA+XG4gICAgICAgICAgICA8TW9kYWwuVGl0bGUgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+VXBsb2FkIFByb2ZpbGUgSW1hZ2U8L01vZGFsLlRpdGxlPlxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD5GaWxlIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2VNLmJpbmQodGhpcyl9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICA8ZGl2IGlkPVwiZWRnZVwiIG9uTW91c2VPdmVyPXt0aGlzLm9wZW5OYXYuYmluZCh0aGlzKX0gc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgcG9zaXRpb246ICdmaXhlZCcsIGhlaWdodDogJzEwMHZoJywgd2lkdGg6JzIwcHgnfX0+PHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnLCBjdXJzb3I6J3BvaW50ZXInfX0gPiYjOTc3Njs8L3NwYW4+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm15U2lkZW5hdlwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2RhcmtncmV5Jywgb3BhY2l0eTonMC45NSd9fSBjbGFzc05hbWU9XCJzaWRlbmF2XCI+XG4gICAgICA8YSBzdHlsZT17e3BhZGRpbmdUb3A6JzkwcHgnfX1ocmVmPXt2b2lkKDApfSBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VOYXYuYmluZCh0aGlzKX0+JnRpbWVzOzwvYT5cbiAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJ0b3BcIiBvdmVybGF5PXt0b29sdGlwfT5cblxuICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudXNlci5wcm9maWxlX2ltZ30gY2xhc3NOYW1lPVwic3R1ZGVudF9kYXNoX3RodW1iXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIGN1cnNvcjogJ2luaGVyaXQnLCBjdXJzb3I6ICdwb2ludGVyJ319IG9uQ2xpY2s9e3RoaXMub3Blbk0uYmluZCh0aGlzKX0vPlxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbjxwIGlkPVwiZW1haWxcIj57dGhpcy5wcm9wcy51c2VyLmVtYWlsfTwvcD5cblxuPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtEb3JtfSlgfX1jbGFzc05hbWU9XCJncmlkLWl0ZW0gZG9ybVwiPmxpYnJhcnk8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0gaGFsbHdheVwiPmhhbGx3YXk8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0gICBneW1cIj5neW08L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0gZG9ybWl0b3J5XCI+ZG9ybWl0b3J5PC9kaXY+XG5cbiAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW0gY2xhc3Nyb29tXCI+Y2xhc3Nyb29tPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtIHN0YWlyY2FzZVwiPjxzcGFuPnN0YWlyY2FzZTwvc3Bhbj48L2Rpdj5cbjwvZGl2PlxuXG4gICAgICAgPFByb2ZpbGVCYWRnZXNcbiAgIGFkbWluPXt0aGlzLnByb3BzLmJhZGdlQWRtaW59XG4gICBhZG1pblN0dWRlbnQ9e3RoaXMucHJvcHMuYmFkZ2VBZG1pblN0dWRlbnR9XG4gICB0cmlhbD17dGhpcy5wcm9wcy5iYWRnZVRyaWFsfS8+XG5cbiAgICAgIDxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9TdHVkZW50RGFzaC9TaWRlTmF2LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///609\n");

/***/ }),

/***/ 749:
/*!**********************************!*\
  !*** ./assets/map-dorm-temp.png ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAAYUlEQVRIiWM01bPIY2BgmMRAO5DHREPD4YAFxjh18ThNLDDTt2Sgi09GLRm1ZNSSUUtGLRn2lrAQVkI8MNO3zKO5JVCA0V4YesEFA+jtheGTukYtGXyWwJJwnpm+Jc0sAQC1wQpb6cG0zgAAAABJRU5ErkJggg==\"//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21hcC1kb3JtLXRlbXAucG5nPzYzMzAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBZUNBWUFBQURaN0xYYkFBQUFZVWxFUVZSSWlXTTAxYlBJWTJCZ21NUkFPNURIUkVQRDRZQUZ4amgxOFRoTkxERFR0MlNnaTA5R0xSbTFaTlNTVVV0R0xSbjJsckFRVmtJOE1OTzN6S081SlZDQTBWNFllc0VGQStqdGhlR1R1a1l0R1h5V3dKSnducG0rSmMwc0FRQzF3UXBiNmNHMHpnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tYXAtZG9ybS10ZW1wLnBuZ1xuLy8gbW9kdWxlIGlkID0gNzQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///749\n");

/***/ })

})