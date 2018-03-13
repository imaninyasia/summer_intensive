webpackHotUpdate(0,{

/***/ 739:
/*!************************************************!*\
  !*** ./src/Components/StudentDash/SideNav.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ./StudentDash.css */ 60);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);var _Badges=__webpack_require__(/*! ./Badges/Badges.jsx */ 539);var _Badges2=_interopRequireDefault(_Badges);var _reactRedux=__webpack_require__(/*! react-redux */ 564);__webpack_require__(/*! ./SideNav.css */ 740);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SideNav=function(_Component){_inherits(SideNav,_Component);function SideNav(props){_classCallCheck(this,SideNav);var _this=_possibleConstructorReturn(this,(SideNav.__proto__||Object.getPrototypeOf(SideNav)).call(this,props));_this.state={showModal:false};return _this;}_createClass(SideNav,[{key:'openNav',value:function openNav(){document.getElementById(\"mySidenav\").style.width=\"620px\";}},{key:'closeNav',value:function closeNav(){document.getElementById(\"mySidenav\").style.width=\"0px\";}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){console.log('close');this.setState({showModal:false});}},{key:'openM',value:function openM(){console.log('open');this.setState({showModal:true});}},{key:'render',value:function render(){var tooltip=_react2.default.createElement(_reactBootstrap.Tooltip,{id:'tooltip'},_react2.default.createElement('strong',null,'Click to change: '),' profile image');return _react2.default.createElement('div',null,_react2.default.createElement(_reactBootstrap.Modal,{show:this.state.showModal,onHide:this.closeM},_react2.default.createElement(_reactBootstrap.Modal.Header,null,_react2.default.createElement(_reactBootstrap.Modal.Title,{style:{textAlign:'center'}},'Upload Profile Image')),_react2.default.createElement(_reactBootstrap.Modal.Body,null,_react2.default.createElement('div',null,_react2.default.createElement('label',null,'File '),_react2.default.createElement('input',{type:'file'}))),_react2.default.createElement(_reactBootstrap.Modal.Footer,null,_react2.default.createElement(_reactBootstrap.Button,{onClick:this.closeM},'Close'))),_react2.default.createElement('span',{style:{fontSize:'30px',cursor:'pointer'},onMouseOver:console.log('hei'),onClick:this.openNav.bind(this)},'\\u2630 open'),_react2.default.createElement('div',{id:'mySidenav',className:'sidenav'},_react2.default.createElement('a',{style:{paddingTop:'90px'},href:void 0,className:'closebtn',onClick:this.closeNav.bind(this)},'\\xD7'),_react2.default.createElement(_reactBootstrap.OverlayTrigger,{placement:'top',overlay:tooltip},_react2.default.createElement('img',{src:this.props.user.profile_img,className:'student_dash_thumb',alt:'Profile Picture',style:_defineProperty({outline:'none',cursor:'inherit'},'cursor','pointer'),onClick:this.openM.bind(this)})),_react2.default.createElement('p',{id:'email'},this.props.user.email),_react2.default.createElement(_Badges2.default,{admin:this.props.badgeAdmin,adminStudent:this.props.badgeAdminStudent,trial:this.props.badgeTrial}),_react2.default.createElement('a',{href:'#'},'About')));}}]);return SideNav;}(_react.Component);exports.default=SideNav;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4PzIxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFByb2ZpbGVCYWRnZXMgZnJvbSAnLi9CYWRnZXMvQmFkZ2VzLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgJy4vU2lkZU5hdi5jc3MnXG5jbGFzcyBTaWRlTmF2IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlPXtcbiAgICBzaG93TW9kYWw6IGZhbHNlXG4gIH1cblxufVxub3Blbk5hdigpe1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVNpZGVuYXZcIikuc3R5bGUud2lkdGggPSBcIjYyMHB4XCJcbn1cbmNsb3NlTmF2KCl7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiMHB4XCJcbn1cbiBnZXRJbml0aWFsU3RhdGUoKXtcbiAgICByZXR1cm4geyBzaG93TW9kYWw6IGZhbHNlIH07XG4gIH1cblxuICBjbG9zZU0oKXtcbiAgICBjb25zb2xlLmxvZygnY2xvc2UnKVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgb3Blbk0oKXtcbiAgICBjb25zb2xlLmxvZygnb3BlbicpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KTtcbiAgfVxucmVuZGVyKCl7XG5jb25zdCB0b29sdGlwID0gKFxuICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj48c3Ryb25nPkNsaWNrIHRvIGNoYW5nZTogPC9zdHJvbmc+IHByb2ZpbGUgaW1hZ2U8L1Rvb2x0aXA+IClcblxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IG9uSGlkZT17dGhpcy5jbG9zZU19PlxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgPlxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlVwbG9hZCBQcm9maWxlIEltYWdlPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+RmlsZSA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlTX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICA8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCcsIGN1cnNvcjoncG9pbnRlcid9fSBvbk1vdXNlT3Zlcj17Y29uc29sZS5sb2coJ2hlaScpfSBvbkNsaWNrPXt0aGlzLm9wZW5OYXYuYmluZCh0aGlzKX0+JiM5Nzc2OyBvcGVuPC9zcGFuPlxuICAgIDxkaXYgaWQ9XCJteVNpZGVuYXZcIiBjbGFzc05hbWU9XCJzaWRlbmF2XCI+XG4gICAgICA8YSBzdHlsZT17e3BhZGRpbmdUb3A6JzkwcHgnfX1ocmVmPXt2b2lkKDApfSBjbGFzc05hbWU9XCJjbG9zZWJ0blwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VOYXYuYmluZCh0aGlzKX0+JnRpbWVzOzwvYT5cbiAgICAgIDxPdmVybGF5VHJpZ2dlciBwbGFjZW1lbnQ9XCJ0b3BcIiBvdmVybGF5PXt0b29sdGlwfT5cblxuICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMudXNlci5wcm9maWxlX2ltZ30gY2xhc3NOYW1lPVwic3R1ZGVudF9kYXNoX3RodW1iXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIGN1cnNvcjogJ2luaGVyaXQnLCBjdXJzb3I6ICdwb2ludGVyJ319IG9uQ2xpY2s9e3RoaXMub3Blbk0uYmluZCh0aGlzKX0vPlxuICAgICAgPC9PdmVybGF5VHJpZ2dlcj5cbjxwIGlkPVwiZW1haWxcIj57dGhpcy5wcm9wcy51c2VyLmVtYWlsfTwvcD5cbiAgICAgICA8UHJvZmlsZUJhZGdlc1xuICAgYWRtaW49e3RoaXMucHJvcHMuYmFkZ2VBZG1pbn1cbiAgIGFkbWluU3R1ZGVudD17dGhpcy5wcm9wcy5iYWRnZUFkbWluU3R1ZGVudH1cbiAgIHRyaWFsPXt0aGlzLnByb3BzLmJhZGdlVHJpYWx9Lz5cblxuICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxufVxufVxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///739\n");

/***/ })

})