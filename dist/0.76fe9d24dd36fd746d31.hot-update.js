webpackHotUpdate(0,{

/***/ 609:
/*!************************************************!*\
  !*** ./src/Components/StudentDash/SideNav.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ./StudentDash.css */ 54);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 46);var _Badges=__webpack_require__(/*! ./Badges/Badges.jsx */ 266);var _Badges2=_interopRequireDefault(_Badges);var _reactRedux=__webpack_require__(/*! react-redux */ 26);var _masonryLayout=__webpack_require__(/*! masonry-layout */ 743);__webpack_require__(/*! ./SideNav.css */ 613);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SideNav=function(_Component){_inherits(SideNav,_Component);function SideNav(props){_classCallCheck(this,SideNav);var _this=_possibleConstructorReturn(this,(SideNav.__proto__||Object.getPrototypeOf(SideNav)).call(this,props));_this.state={showModal:false,currentRoom:null};_this.masonry=_this.masonry.bind(_this);return _this;}_createClass(SideNav,[{key:'openNav',value:function openNav(){document.getElementById(\"mySidenav\").style.width=\"620px\";}},{key:'componentDidMount',value:function componentDidMount(){console.log(this.masonry);}},{key:'masonry',value:function masonry(){var $grid=$('.grid').masonry({itemSelector:'.grid-item',columnWidth:160});$grid.on('click','.grid-item',function(){console.log('clicked');$grid.masonry();});}},{key:'closeNav',value:function closeNav(){document.getElementById(\"mySidenav\").style.width=\"0px\";}},{key:'mouseOver',value:function mouseOver(){console.log('hei');this.openNav();}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){this.setState({showModal:false});}},{key:'openM',value:function openM(){this.setState({showModal:true});}},{key:'render',value:function render(){var tooltip=_react2.default.createElement(_reactBootstrap.Tooltip,{id:'tooltip'},_react2.default.createElement('strong',null,'Click to change: '),' profile image');return _react2.default.createElement('div',null,_react2.default.createElement(_reactBootstrap.Modal,{show:this.state.showModal,onHide:this.closeM.bind(this)},_react2.default.createElement(_reactBootstrap.Modal.Header,null,_react2.default.createElement(_reactBootstrap.Modal.Title,{style:{textAlign:'center'}},'Upload Profile Image')),_react2.default.createElement(_reactBootstrap.Modal.Body,null,_react2.default.createElement('div',null,_react2.default.createElement('label',null,'File '),_react2.default.createElement('input',{type:'file'}))),_react2.default.createElement(_reactBootstrap.Modal.Footer,null,_react2.default.createElement(_reactBootstrap.Button,{onClick:this.closeM.bind(this)},'Close'))),_react2.default.createElement('div',{id:'edge',onMouseOver:this.openNav.bind(this),style:{display:'inline-block',position:'fixed',height:'100vh',width:'20px'}},_react2.default.createElement('span',{style:{fontSize:'30px',cursor:'pointer'}},'\\u2630')),_react2.default.createElement('div',{id:'mySidenav',style:{backgroundColor:'darkgrey',opacity:'0.95'},className:'sidenav'},_react2.default.createElement('a',{style:{paddingTop:'90px'},href:void 0,className:'closebtn',onClick:this.closeNav.bind(this)},'\\xD7'),_react2.default.createElement(_reactBootstrap.OverlayTrigger,{placement:'top',overlay:tooltip},_react2.default.createElement('img',{src:this.props.user.profile_img,className:'student_dash_thumb',alt:'Profile Picture',style:_defineProperty({outline:'none',cursor:'inherit'},'cursor','pointer'),onClick:this.openM.bind(this)})),_react2.default.createElement('p',{id:'email'},this.props.user.email),_react2.default.createElement('p',null,'Click to toggle item size'),_react2.default.createElement('div',{'class':'grid'},_react2.default.createElement('div',{'class':'grid-item dorm'},'library'),_react2.default.createElement('div',{'class':'grid-item hallway'},'hallway'),_react2.default.createElement('div',{'class':'grid-item   gym'},'gym'),_react2.default.createElement('div',{'class':'grid-item dormitory'},'dormitory'),_react2.default.createElement('div',{'class':'grid-item classroom'},'classroom'),_react2.default.createElement('div',{'class':'grid-item staircase'},_react2.default.createElement('span',null,'staircase'))),_react2.default.createElement(_Badges2.default,{admin:this.props.badgeAdmin,adminStudent:this.props.badgeAdminStudent,trial:this.props.badgeTrial}),_react2.default.createElement('a',{href:'#'},'About')));}}]);return SideNav;}(_react.Component);exports.default=SideNav;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1NpZGVOYXYuanN4PzIxNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFByb2ZpbGVCYWRnZXMgZnJvbSAnLi9CYWRnZXMvQmFkZ2VzLmpzeCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge21hc29ucnl9IGZyb20gJ21hc29ucnktbGF5b3V0J1xuaW1wb3J0ICcuL1NpZGVOYXYuY3NzJ1xuY2xhc3MgU2lkZU5hdiBleHRlbmRzIENvbXBvbmVudHtcblxuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZT17XG4gICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICBjdXJyZW50Um9vbTogbnVsbFxuICB9XG4gIHRoaXMubWFzb25yeSA9IHRoaXMubWFzb25yeS5iaW5kKHRoaXMpXG59XG5vcGVuTmF2KCl7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15U2lkZW5hdlwiKS5zdHlsZS53aWR0aCA9IFwiNjIwcHhcIlxufVxuY29tcG9uZW50RGlkTW91bnQoKXtcbiAgY29uc29sZS5sb2codGhpcy5tYXNvbnJ5KVxufVxubWFzb25yeSgpe1xudmFyICRncmlkID0gJCgnLmdyaWQnKS5tYXNvbnJ5KHtcbiAgaXRlbVNlbGVjdG9yOlxuICAgICcuZ3JpZC1pdGVtJyxcbiAgY29sdW1uV2lkdGg6IDE2MFxufSk7XG5cbiRncmlkLm9uKCAnY2xpY2snLCAnLmdyaWQtaXRlbScsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnY2xpY2tlZCcpXG4gICRncmlkLm1hc29ucnkoKTtcbn0pO1xufVxuY2xvc2VOYXYoKXtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlbmF2XCIpLnN0eWxlLndpZHRoID0gXCIwcHhcIlxufVxubW91c2VPdmVyKCl7XG5jb25zb2xlLmxvZygnaGVpJylcbnRoaXMub3Blbk5hdigpXG59XG4gZ2V0SW5pdGlhbFN0YXRlKCl7XG4gICAgcmV0dXJuIHsgc2hvd01vZGFsOiBmYWxzZSB9O1xuICB9XG5cbiAgY2xvc2VNKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG4gIH1cblxuICBvcGVuTSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG4gIH1cbnJlbmRlcigpe1xuY29uc3QgdG9vbHRpcCA9IChcbiAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCI+PHN0cm9uZz5DbGljayB0byBjaGFuZ2U6IDwvc3Ryb25nPiBwcm9maWxlIGltYWdlPC9Ub29sdGlwPiApXG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgPlxuICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmNsb3NlTS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8TW9kYWwuSGVhZGVyID5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fT5VcGxvYWQgUHJvZmlsZSBJbWFnZTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsPkZpbGUgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5jbG9zZU0uYmluZCh0aGlzKX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cblxuICAgIDxkaXYgaWQ9XCJlZGdlXCIgb25Nb3VzZU92ZXI9e3RoaXMub3Blbk5hdi5iaW5kKHRoaXMpfSBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBwb3NpdGlvbjogJ2ZpeGVkJywgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDonMjBweCd9fT48c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCcsIGN1cnNvcjoncG9pbnRlcid9fSA+JiM5Nzc2Ozwvc3Bhbj48L2Rpdj5cbiAgICA8ZGl2IGlkPVwibXlTaWRlbmF2XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZGFya2dyZXknLCBvcGFjaXR5OicwLjk1J319IGNsYXNzTmFtZT1cInNpZGVuYXZcIj5cbiAgICAgIDxhIHN0eWxlPXt7cGFkZGluZ1RvcDonOTBweCd9fWhyZWY9e3ZvaWQoMCl9IGNsYXNzTmFtZT1cImNsb3NlYnRuXCIgb25DbGljaz17dGhpcy5jbG9zZU5hdi5iaW5kKHRoaXMpfT4mdGltZXM7PC9hPlxuICAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cInRvcFwiIG92ZXJsYXk9e3Rvb2x0aXB9PlxuXG4gICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy51c2VyLnByb2ZpbGVfaW1nfSBjbGFzc05hbWU9XCJzdHVkZW50X2Rhc2hfdGh1bWJcIiBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgY3Vyc29yOiAnaW5oZXJpdCcsIGN1cnNvcjogJ3BvaW50ZXInfX0gb25DbGljaz17dGhpcy5vcGVuTS5iaW5kKHRoaXMpfS8+XG4gICAgICA8L092ZXJsYXlUcmlnZ2VyPlxuPHAgaWQ9XCJlbWFpbFwiPnt0aGlzLnByb3BzLnVzZXIuZW1haWx9PC9wPlxuXG48cD5DbGljayB0byB0b2dnbGUgaXRlbSBzaXplPC9wPlxuPGRpdiBjbGFzcz1cImdyaWRcIj5cbiAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbSBkb3JtXCI+bGlicmFyeTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtIGhhbGx3YXlcIj5oYWxsd2F5PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJncmlkLWl0ZW0gICBneW1cIj5neW08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImdyaWQtaXRlbSBkb3JtaXRvcnlcIj5kb3JtaXRvcnk8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtIGNsYXNzcm9vbVwiPmNsYXNzcm9vbTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZ3JpZC1pdGVtIHN0YWlyY2FzZVwiPjxzcGFuPnN0YWlyY2FzZTwvc3Bhbj48L2Rpdj5cbjwvZGl2PlxuXG4gICAgICAgPFByb2ZpbGVCYWRnZXNcbiAgIGFkbWluPXt0aGlzLnByb3BzLmJhZGdlQWRtaW59XG4gICBhZG1pblN0dWRlbnQ9e3RoaXMucHJvcHMuYmFkZ2VBZG1pblN0dWRlbnR9XG4gICB0cmlhbD17dGhpcy5wcm9wcy5iYWRnZVRyaWFsfS8+XG5cbiAgICAgIDxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9TdHVkZW50RGFzaC9TaWRlTmF2LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///609\n");

/***/ })

})