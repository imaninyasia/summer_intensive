webpackHotUpdate(0,{

/***/ 739:
/*!************************************************!*\
  !*** ./src/Components/StudentDash/SideNav.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ./StudentDash.css */ 60);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);var _Badges=__webpack_require__(/*! ./Badges/Badges.jsx */ 539);var _Badges2=_interopRequireDefault(_Badges);var _reactRedux=__webpack_require__(/*! react-redux */ 564);__webpack_require__(/*! ./SideNav.css */ 740);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SideNav=function(_Component){_inherits(SideNav,_Component);function SideNav(props){_classCallCheck(this,SideNav);var _this=_possibleConstructorReturn(this,(SideNav.__proto__||Object.getPrototypeOf(SideNav)).call(this,props));_this.state={showModal:false};return _this;}_createClass(SideNav,[{key:'openNav',value:function openNav(){document.getElementById(\"mySidenav\").style.width=\"620px\";}},{key:'closeNav',value:function closeNav(){document.getElementById(\"mySidenav\").style.width=\"0px\";}},{key:'mouseOver',value:function mouseOver(){console.log('hei');this.openNav();}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){this.setState({showModal:false});}},{key:'openM',value:function openM(){this.setState({showModal:true});}},{key:'render',value:function render(){var tooltip=_react2.default.createElement(_reactBootstrap.Tooltip,{id:'tooltip'},_react2.default.createElement('strong',null,'Click to change: '),' profile image');return _react2.default.createElement('div',{id:'hi',style:{backgroundImage:\"url('https://images-na.ssl-images-amazon.com/images/I/515tpV4cxBL._SX355_.jpg')\",height:'50px',width:'50px'}},_react2.default.createElement(_reactBootstrap.Modal,{show:this.state.showModal,onHide:this.closeM.bind(this)},_react2.default.createElement(_reactBootstrap.Modal.Header,null,_react2.default.createElement(_reactBootstrap.Modal.Title,{style:{textAlign:'center'}},'Upload Profile Image')),_react2.default.createElement(_reactBootstrap.Modal.Body,null,_react2.default.createElement('div',null,_react2.default.createElement('label',null,'File '),_react2.default.createElement('input',{type:'file'}))),_react2.default.createElement(_reactBootstrap.Modal.Footer,null,_react2.default.createElement(_reactBootstrap.Button,{onClick:this.closeM.bind(this)},'Close'))),_react2.default.createElement('div',{id:'edge',onMouseOver:this.openNav.bind(this),style:{display:'inline-block',position:'fixed',height:'100vh',width:'20px'}},_react2.default.createElement('span',{style:{fontSize:'30px',cursor:'pointer'}},'\\u2630')),_react2.default.createElement('div',{id:'mySidenav',style:{backgroundColor:'#0DC'},className:'sidenav'},_react2.default.createElement('a',{style:{paddingTop:'90px'},href:void 0,className:'closebtn',onClick:this.closeNav.bind(this)},'\\xD7'),_react2.default.createElement(_reactBootstrap.OverlayTrigger,{placement:'top',overlay:tooltip},_react2.default.createElement('img',{src:this.props.user.profile_img,className:'student_dash_thumb',alt:'Profile Picture',style:_defineProperty({outline:'none',cursor:'inherit'},'cursor','pointer'),onClick:this.openM.bind(this)})),_react2.default.createElement('p',{id:'email'},this.props.user.email),_react2.default.createElement(_Badges2.default,{admin:this.props.badgeAdmin,adminStudent:this.props.badgeAdminStudent,trial:this.props.badgeTrial}),_react2.default.createElement('a',{href:'#'},'About')));}}]);return SideNav;}(_react.Component);exports.default=SideNav;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4PzIxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFByb2ZpbGVCYWRnZXMgZnJvbSAnLi9CYWRnZXMvQmFkZ2VzLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgJy4vU2lkZU5hdi5jc3MnXG5jbGFzcyBTaWRlTmF2IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlPXtcbiAgICBzaG93TW9kYWw6IGZhbHNlXG4gIH1cblxufVxub3Blbk5hdigpe1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUud2lkdGggPSBcIjYyMHB4XCJcbn1cbmNsb3NlTmF2KCl7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCJcbn1cbm1vdXNlT3Zlcigpe1xuY29uc29sZS5sb2coJ2hlaScpXG50aGlzLm9wZW5OYXYoKVxufVxuIGdldEluaXRpYWxTdGF0ZSgpe1xuICAgIHJldHVybiB7IHNob3dNb2RhbDogZmFsc2UgfTtcbiAgfVxuXG4gIGNsb3NlTSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgb3Blbk0oKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuICB9XG5yZW5kZXIoKXtcbmNvbnN0IHRvb2x0aXAgPSAoXG4gIDxUb29sdGlwIGlkPVwidG9vbHRpcFwiPjxzdHJvbmc+Q2xpY2sgdG8gY2hhbmdlOiA8L3N0cm9uZz4gcHJvZmlsZSBpbWFnZTwvVG9vbHRpcD4gKVxuXG4gIHJldHVybihcbiAgICA8ZGl2IGlkPVwiaGlcInN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybCgnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxNXRwVjRjeEJMLl9TWDM1NV8uanBnJylcIiwgaGVpZ2h0OiAnNTBweCcsIHdpZHRoOic1MHB4J319PlxuICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmNsb3NlTS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8TW9kYWwuSGVhZGVyID5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5VcGxvYWQgUHJvZmlsZSBJbWFnZTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPkZpbGUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZU0uYmluZCh0aGlzKX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgIDxkaXYgaWQ9XCJlZGdlXCIgb25Nb3VzZU92ZXI9e3RoaXMub3Blbk5hdi5iaW5kKHRoaXMpfSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBwb3NpdGlvbjogJ2ZpeGVkJywgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDonMjBweCd9fT48c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCcsIGN1cnNvcjoncG9pbnRlcid9fSA+JiM5Nzc2Ozwvc3Bhbj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibXlTaWRlbmF2XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzBEQyd9fSBjbGFzc05hbWU9XCJzaWRlbmF2XCI+XG4gICAgICA8YSBzdHlsZT17e3BhZGRpbmdUb3A6JzkwcHgnfX1ocmVmPXt2b2lkKDApfSBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VOYXYuYmluZCh0aGlzKX0+JnRpbWVzOzwvYT5cbiAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJ0b3BcIiBvdmVybGF5PXt0b29sdGlwfT5cblxuICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudXNlci5wcm9maWxlX2ltZ30gY2xhc3NOYW1lPVwic3R1ZGVudF9kYXNoX3RodW1iXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIGN1cnNvcjogJ2luaGVyaXQnLCBjdXJzb3I6ICdwb2ludGVyJ319IG9uQ2xpY2s9e3RoaXMub3Blbk0uYmluZCh0aGlzKX0vPlxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbjxwIGlkPVwiZW1haWxcIj57dGhpcy5wcm9wcy51c2VyLmVtYWlsfTwvcD5cbiAgICAgICA8UHJvZmlsZUJhZGdlc1xuICAgYWRtaW49e3RoaXMucHJvcHMuYmFkZ2VBZG1pbn1cbiAgIGFkbWluU3R1ZGVudD17dGhpcy5wcm9wcy5iYWRnZUFkbWluU3R1ZGVudH1cbiAgIHRyaWFsPXt0aGlzLnByb3BzLmJhZGdlVHJpYWx9Lz5cblxuICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxufVxufVxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///739\n");

/***/ })

})