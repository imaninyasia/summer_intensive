webpackHotUpdate(0,{

/***/ 182:
/*!****************************************************!*\
  !*** ./src/Components/StudentDash/StudentDash.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _UserList=__webpack_require__(/*! ../../Components/UserList/UserList.jsx */ 178);var _UserList2=_interopRequireDefault(_UserList);__webpack_require__(/*! ./StudentDash.css */ 60);var _UnwatchedVideo=__webpack_require__(/*! ../../Components/UnwatchedVideo/UnwatchedVideo.jsx */ 183);var _UnwatchedVideo2=_interopRequireDefault(_UnwatchedVideo);var _VideoList=__webpack_require__(/*! ../../Components/VideoList/VideoList.jsx */ 186);var _VideoList2=_interopRequireDefault(_VideoList);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);var _Badges=__webpack_require__(/*! ./Badges/Badges.jsx */ 539);var _Badges2=_interopRequireDefault(_Badges);var _reactRedux=__webpack_require__(/*! react-redux */ 564);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var StudentDash=function(_Component){_inherits(StudentDash,_Component);function StudentDash(props){_classCallCheck(this,StudentDash);var _this=_possibleConstructorReturn(this,(StudentDash.__proto__||Object.getPrototypeOf(StudentDash)).call(this,props));_this.state={admin:false,history:{props:props},adminStudent:null,unwatched:0,loading:false,user:[],showModal:false,progress:\"http://www.pngmart.com/files/4/Circle-PNG-Transparent-Image.png\",showingVids:[],open:false,clicked:0,final:false};_this.changeImg=_this.changeImg.bind(_this);_this.openM=_this.openM.bind(_this);_this.closeM=_this.closeM.bind(_this);_this.showVids=_this.showVids.bind(_this);return _this;}_createClass(StudentDash,[{key:'changeImg',value:function changeImg(){console.log('clicked will change img');}},{key:'showVids',value:function showVids(part_videos){var _this2=this;var user=\"\";this.setState({showingVids:part_videos});if(this.state.adminStudent){user=this.state.adminStudent;}else if(!this.props.admin){user=localStorage.getItem('ind');}fetch('/videos/viewed/'+user+'/'+part_videos).then(function(response){return response.json();}).then(function(json){return json;}).then(function(showingVids){return _this2.setState({showingVids:showingVids});});}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){this.setState({showModal:false});}},{key:'openM',value:function openM(){this.setState({showModal:true});}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(props,state){var _this3=this;if(this.state.final==true){this.forceUpdate();return false;}if(this.props.admin==true&&this.props.student_id){fetch('/student/admin/'+this.props.student_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(email){return _this3.setState({adminStudent:email});});var user=this.state.adminStudent;fetch('/student/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(user){return _this3.setState({user:user,thumbnail:user.profile_img});});fetch('/videos/non/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(unwatched){return _this3.setState({unwatched:unwatched,final:true});}).catch(function(error){return console.log(error);});this.forceUpdate();return false;}return true;}},{key:'componentWillMount',value:function componentWillMount(){var _this4=this;console.log(this.props.user,'hiiiiiii');var user=void 0;if(this.props.user.admin==true){console.log('yea');console.log(this.props.student_id);this.props.dispatch(this.props);}this.setState({loading:true});user=localStorage.getItem('ind');fetch('/student/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(user){return _this4.setState({user:user,thumbnail:user.profile_img});});fetch('/videos/non/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(unwatched){return _this4.setState({unwatched:unwatched});});this.setState({loading:false});}},{key:'render',value:function render(){var _state=this.state,admin=_state.admin,unwatched=_state.unwatched,user=_state.user,progress=_state.progress;var classes=this.state.open?'show_vids':'vids hide';var tooltip=_react2.default.createElement(_reactBootstrap.Tooltip,{id:'tooltip'},_react2.default.createElement('strong',null,'Click to change: '),' profile image');return _react2.default.createElement('div',null,_react2.default.createElement(_reactBootstrap.Modal,{show:this.state.showModal,onHide:this.closeM},_react2.default.createElement(_reactBootstrap.Modal.Header,null,_react2.default.createElement(_reactBootstrap.Modal.Title,{style:{textAlign:'center'}},'Upload Profile Image')),_react2.default.createElement(_reactBootstrap.Modal.Body,null,_react2.default.createElement('div',null,_react2.default.createElement('label',null,'File '),_react2.default.createElement('input',{type:'file'}))),_react2.default.createElement(_reactBootstrap.Modal.Footer,null,_react2.default.createElement(_reactBootstrap.Button,{onClick:this.closeM},'Close'))),_react2.default.createElement('div',{className:'student_prof'},_react2.default.createElement(_reactBootstrap.OverlayTrigger,{placement:'top',overlay:tooltip},_react2.default.createElement('img',{src:user.profile_img,className:'student_dash_thumb',alt:'Profile Picture',style:_defineProperty({outline:'none',cursor:'inherit'},'cursor','pointer'),onClick:this.openM})),_react2.default.createElement('p',null,user.email)),_react2.default.createElement('section',{style:{height:'430px',paddingTop:'0px',paddingBottom:'0px'},className:'content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('ul',{className:'nav nav-tabs text-center',role:'tablist',id:'myTab'},_react2.default.createElement('li',{className:'active'},_react2.default.createElement('a',{style:{fontSize:'24px'},href:'#tab1',role:'tab','data-toggle':'tab'},'Next Video'))),_react2.default.createElement('div',{className:'tab-content'},_react2.default.createElement('div',{style:{padding:0},className:'tab-pane fade active in',id:'tab1'},_react2.default.createElement('div',{className:'row'},unwatched==0?_react2.default.createElement('div',{className:'col-md-5 col-md-offset-1 col-sm-6'},_react2.default.createElement('h1',null,'You\\'ve completed the course!')):_react2.default.createElement(_UnwatchedVideo2.default,{admin:this.state.adminStudent,video_id:unwatched.video_id,className:'',src:unwatched.source,watched:unwatched.watched,course:false,video_num:unwatched.vimeo_id})))))),_react2.default.createElement(_Badges2.default,{admin:this.props.admin,adminStudent:this.state.adminStudent,trial:this.showVids}),this.state.showingVids.length?_react2.default.createElement('section',{id:classes,className:'content-block gallery-2',style:{paddingTop:'0px'}},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'underlined-title',style:{paddingBottom:'0px'}},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,'Your Viewed Videos')),_react2.default.createElement('hr',null)),_react2.default.createElement('div',{className:'row'},_react2.default.createElement(_VideoList2.default,{history:this.props,changeVids:this.changeVids,showVids:this.state.showingVids})))):null);}}]);return StudentDash;}(_react.Component);function mapStateToProps(state){return{auth:state.auth.isAuthenticated,user:state.auth.user};}exports.default=(0,_reactRedux.connect)(mapStateToProps)(StudentDash);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1N0dWRlbnREYXNoLmpzeD8wZGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Vc2VyTGlzdC9Vc2VyTGlzdC5qc3gnO1xuaW1wb3J0ICcuL1N0dWRlbnREYXNoLmNzcydcbmltcG9ydCBVbndhdGNoZWR2aWRlbyBmcm9tICcuLi8uLi9Db21wb25lbnRzL1Vud2F0Y2hlZFZpZGVvL1Vud2F0Y2hlZFZpZGVvLmpzeCdcbmltcG9ydCBWaWRlb0xpc3QgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9WaWRlb0xpc3QvVmlkZW9MaXN0LmpzeCdcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7TW9kYWx9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgUHJvZmlsZUJhZGdlcyBmcm9tICcuL0JhZGdlcy9CYWRnZXMuanN4J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuY2xhc3MgU3R1ZGVudERhc2ggZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIGFkbWluOiBmYWxzZSxcbiAgICAgIGhpc3Rvcnk6IHtwcm9wc30sXG4gICAgICBhZG1pblN0dWRlbnQ6IG51bGwsXG4gICAgICB1bndhdGNoZWQ6IDAsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHVzZXI6IFtdLFxuICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgIHByb2dyZXNzOiBcImh0dHA6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvNC9DaXJjbGUtUE5HLVRyYW5zcGFyZW50LUltYWdlLnBuZ1wiLFxuICAgICAgc2hvd2luZ1ZpZHM6IFtdLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBjbGlja2VkOiAwLFxuICAgICAgZmluYWw6IGZhbHNlXG5cbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VJbWcgPSB0aGlzLmNoYW5nZUltZy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vcGVuTSA9IHRoaXMub3Blbk0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2xvc2VNID0gdGhpcy5jbG9zZU0uYmluZCh0aGlzKVxuICAgIHRoaXMuc2hvd1ZpZHMgPSB0aGlzLnNob3dWaWRzLmJpbmQodGhpcylcblxuICB9XG5cbmNoYW5nZUltZygpe1xuY29uc29sZS5sb2coJ2NsaWNrZWQgd2lsbCBjaGFuZ2UgaW1nJylcbn1cbnNob3dWaWRzKHBhcnRfdmlkZW9zKXtcbiAgbGV0IHVzZXI9XCJcIlxuICB0aGlzLnNldFN0YXRlKHtzaG93aW5nVmlkczogcGFydF92aWRlb3N9KVxuaWYgKHRoaXMuc3RhdGUuYWRtaW5TdHVkZW50KXtcbiAgIHVzZXI9dGhpcy5zdGF0ZS5hZG1pblN0dWRlbnRcbn1lbHNlIGlmICghdGhpcy5wcm9wcy5hZG1pbil7XG4gICB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG59XG4gICAgZmV0Y2goYC92aWRlb3Mvdmlld2VkLyR7dXNlcn0vJHtwYXJ0X3ZpZGVvc31gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24pXG4gICAgLnRoZW4oc2hvd2luZ1ZpZHMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd2luZ1ZpZHNcbiAgICB9KVxuICAgICAgKVxufVxuXG4gZ2V0SW5pdGlhbFN0YXRlKCl7XG4gICAgcmV0dXJuIHsgc2hvd01vZGFsOiBmYWxzZSB9O1xuICB9XG5cbiAgY2xvc2VNKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogZmFsc2UgfSk7XG4gIH1cblxuICBvcGVuTSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XG4gIH1cbnNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wcywgc3RhdGUpe1xuaWYgKHRoaXMuc3RhdGUuZmluYWw9PXRydWUpe1xuICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgcmV0dXJuIGZhbHNlXG59XG4gIGlmICh0aGlzLnByb3BzLmFkbWluPT10cnVlICYmIHRoaXMucHJvcHMuc3R1ZGVudF9pZCl7XG4gIGZldGNoKGAvc3R1ZGVudC9hZG1pbi8ke3RoaXMucHJvcHMuc3R1ZGVudF9pZH1gKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAudGhlbihlbWFpbCA9PlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWRtaW5TdHVkZW50OiBlbWFpbFxuICAgIH0pKVxuXG4gIGxldCB1c2VyID0gdGhpcy5zdGF0ZS5hZG1pblN0dWRlbnRcbiAgZmV0Y2goYC9zdHVkZW50LyR7dXNlcn1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24pXG4gICAgLnRoZW4odXNlciA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyLFxuICAgICAgdGh1bWJuYWlsOiB1c2VyLnByb2ZpbGVfaW1nXG4gICAgfSkpXG5cbmZldGNoKGAvdmlkZW9zL25vbi8ke3VzZXJ9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKHVud2F0Y2hlZCA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1bndhdGNoZWQsXG4gICAgICBmaW5hbDogdHJ1ZVxuICAgIH0pXG4gICAgICApLmNhdGNoKGVycm9yPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgcmV0dXJuIGZhbHNlXG4gIH1cblxucmV0dXJuIHRydWVcbn1cblxuXG5jb21wb25lbnRXaWxsTW91bnQoKXtcbmNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlciwgJ2hpaWlpaWlpJylcbmxldCB1c2VyXG5pZiAodGhpcy5wcm9wcy51c2VyLmFkbWluPT10cnVlKXtcbiAgY29uc29sZS5sb2coJ3llYScpXG4gIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc3R1ZGVudF9pZClcbiAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0aGlzLnByb3BzKVxufVxuXG4gICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcbiAgICAgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgIGZldGNoKGAvc3R1ZGVudC8ke3VzZXJ9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKHVzZXIgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcixcbiAgICAgIHRodW1ibmFpbDogdXNlci5wcm9maWxlX2ltZ1xuICAgIH0pKVxuXG4gICAgZmV0Y2goYC92aWRlb3Mvbm9uLyR7dXNlcn1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24pXG4gICAgLnRoZW4odW53YXRjaGVkID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVud2F0Y2hlZFxuICAgIH0pXG4gICAgICApXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxuICAgIH1cblxuICByZW5kZXIoKXtcbiAgICBsZXQgeyBhZG1pbiwgdW53YXRjaGVkLCB1c2VyLCBwcm9ncmVzcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuc3RhdGUub3BlbiA/ICdzaG93X3ZpZHMnIDogJ3ZpZHMgaGlkZSdcbiAgICBjb25zdCB0b29sdGlwID0gKFxuICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIj48c3Ryb25nPkNsaWNrIHRvIGNoYW5nZTogPC9zdHJvbmc+IHByb2ZpbGUgaW1hZ2U8L1Rvb2x0aXA+IClcblxuXG4gICAgcmV0dXJuKFxuICAgICA8ZGl2PlxuICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93TW9kYWx9IG9uSGlkZT17dGhpcy5jbG9zZU19PlxuICAgICAgICAgIDxNb2RhbC5IZWFkZXIgPlxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlIHN0eWxlPXt7dGV4dEFsaWduOiAnY2VudGVyJ319PlVwbG9hZCBQcm9maWxlIEltYWdlPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWw+RmlsZSA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlTX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHVkZW50X3Byb2ZcIj5cbiAgICAgPE92ZXJsYXlUcmlnZ2VyIHBsYWNlbWVudD1cInRvcFwiIG92ZXJsYXk9e3Rvb2x0aXB9PlxuICAgICAgPGltZyBzcmM9e3VzZXIucHJvZmlsZV9pbWd9IGNsYXNzTmFtZT1cInN0dWRlbnRfZGFzaF90aHVtYlwiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCBjdXJzb3I6ICdpbmhlcml0JywgY3Vyc29yOiAncG9pbnRlcid9fSBvbkNsaWNrPXt0aGlzLm9wZW5NfS8+XG4gICAgPC9PdmVybGF5VHJpZ2dlcj5cbiAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gc3R5bGU9e3toZWlnaHQ6ICc0MzBweCcsIHBhZGRpbmdUb3A6ICcwcHgnLCBwYWRkaW5nQm90dG9tOiAnMHB4J319IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgdGV4dC1jZW50ZXJcIiByb2xlPVwidGFibGlzdFwiIGlkPVwibXlUYWJcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGEgc3R5bGU9e3tmb250U2l6ZTogJzI0cHgnfX0gaHJlZj1cIiN0YWIxXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+TmV4dCBWaWRlbzwvYT48L2xpPlxuICAgICAgPC91bD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzowfX1jbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIGFjdGl2ZSBpblwiIGlkPVwidGFiMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgIHsodW53YXRjaGVkPT0gMCk/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgY29sLW1kLW9mZnNldC0xIGNvbC1zbS02XCI+XG4gICAgICAgICAgICA8aDE+WW91J3ZlIGNvbXBsZXRlZCB0aGUgY291cnNlITwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxVbndhdGNoZWR2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluPXt0aGlzLnN0YXRlLmFkbWluU3R1ZGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb19pZD0ge3Vud2F0Y2hlZC52aWRlb19pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dW53YXRjaGVkLnNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXRjaGVkPXt1bndhdGNoZWQud2F0Y2hlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vyc2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvX251bT0ge3Vud2F0Y2hlZC52aW1lb19pZH0gLz4gIH1cblxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG5cbiAgPFByb2ZpbGVCYWRnZXNcbiAgIGFkbWluPXt0aGlzLnByb3BzLmFkbWlufVxuICAgYWRtaW5TdHVkZW50PXt0aGlzLnN0YXRlLmFkbWluU3R1ZGVudH1cbiAgIHRyaWFsPXt0aGlzLnNob3dWaWRzfS8+XG5cblxuXG57KHRoaXMuc3RhdGUuc2hvd2luZ1ZpZHMubGVuZ3RoKSA/XG48c2VjdGlvbiAgaWQ9e2NsYXNzZXN9IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgZ2FsbGVyeS0yXCIgc3R5bGU9e3twYWRkaW5nVG9wOicwcHgnfX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLXRpdGxlXCIgc3R5bGU9e3twYWRkaW5nQm90dG9tOicwcHgnfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgICA8aDE+WW91ciBWaWV3ZWQgVmlkZW9zPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIgLz5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgPFZpZGVvTGlzdCBoaXN0b3J5PXt0aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgICBjaGFuZ2VWaWRzID0ge3RoaXMuY2hhbmdlVmlkc31cbiAgICAgICAgICAgICAgICBzaG93Vmlkcz17dGhpcy5zdGF0ZS5zaG93aW5nVmlkc30vPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICBudWxsfVxuXG5cblxuPC9kaXY+XG4gICAgICApXG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XG4gIHJldHVybiB7YXV0aDogc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQsIHVzZXI6c3RhdGUuYXV0aC51c2VyfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFN0dWRlbnREYXNoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL1N0dWRlbnREYXNoLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///182\n");

/***/ }),

/***/ 384:
/*!********************************************!*\
  !*** ./src/Routes/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _UserList=__webpack_require__(/*! ../../Components/UserList/UserList.jsx */ 178);var _UserList2=_interopRequireDefault(_UserList);var _StudentDash=__webpack_require__(/*! ../../Components/StudentDash/StudentDash.jsx */ 182);var _StudentDash2=_interopRequireDefault(_StudentDash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Dashboard=function(_Component){_inherits(Dashboard,_Component);function Dashboard(props){_classCallCheck(this,Dashboard);var _this=_possibleConstructorReturn(this,(Dashboard.__proto__||Object.getPrototypeOf(Dashboard)).call(this,props));_this.state={admin:false,history:{props:props}};return _this;}_createClass(Dashboard,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var token=localStorage.getItem('token');fetch('/user/verify',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({token:token})}).then(function(r){return r.json();}).then(function(data){_this2.setState({admin:data.admin});});}},{key:'render',value:function render(){var admin=this.state.admin;return _react2.default.createElement('div',null,admin==true||admin===\"admin\"?_react2.default.createElement('div',null,_react2.default.createElement('section',{className:'content-block gallery-1'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'underlined-title'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,'Students')),_react2.default.createElement('hr',null),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Hand-picked just for you'))),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('ul',{className:'filter'},_react2.default.createElement('br',null))),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{id:'isotope-gallery-container'},_react2.default.createElement(_UserList2.default,null)))))):_react2.default.createElement(_StudentDash2.default,{history:this.props}));}}]);return Dashboard;}(_react.Component);Landing.propTypes={getEmail:_react2.default.PropTypes.func.isRequired};exports.default=connect(function(state){return{};},{getEmail:getEmail})(Dashboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qc3g/YjU4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvVXNlckxpc3QvVXNlckxpc3QuanN4J1xuaW1wb3J0IFN0dWRlbnREYXNoIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU3R1ZGVudERhc2gvU3R1ZGVudERhc2guanN4J1xuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID17XG4gICAgICBhZG1pbjogZmFsc2UsXG4gICAgICBoaXN0b3J5OiB7cHJvcHN9XG4gICAgfVxuXG4gIH1cblxuY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICBmZXRjaCgnL3VzZXIvdmVyaWZ5Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlbjogdG9rZW5cbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFkbWluOiBkYXRhLmFkbWluXG4gICAgICB9KVxuICAgICB9KVxuICAgIH1cblxuICByZW5kZXIoKXtcblxuICAgIGNvbnN0IGFkbWluID0gdGhpcy5zdGF0ZS5hZG1pblxuICAgIHJldHVybihcbiAgICAgPGRpdj5cbiAgICB7KGFkbWluPT10cnVlIHx8IGFkbWluPT09XCJhZG1pblwiKSA/XG4gICAgPGRpdj5cblxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2sgZ2FsbGVyeS0xXCI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLXRpdGxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgICA8aDE+U3R1ZGVudHM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5IYW5kLXBpY2tlZCBqdXN0IGZvciB5b3U8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmaWx0ZXJcIj48YnIgLz48L3VsPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpc290b3BlLWdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyTGlzdCAvPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgPFN0dWRlbnREYXNoIGhpc3Rvcnk9e3RoaXMucHJvcHN9Lz59XG48L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5MYW5kaW5nLnByb3BUeXBlcyA9IHtcbiAgZ2V0RW1haWw6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSk9PntyZXR1cm4ge30gfSwge2dldEVtYWlsfSkoRGFzaGJvYXJkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///384\n");

/***/ })

})