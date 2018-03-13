webpackHotUpdate(0,{

/***/ 543:
/*!****************************************************!*\
  !*** ./src/Routes/Video_Answers/Video_Answers.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);__webpack_require__(/*! ./Video_Answers.css */ 597);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 550);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video_Answers=function(_Component){_inherits(Video_Answers,_Component);function Video_Answers(props){_classCallCheck(this,Video_Answers);var _this=_possibleConstructorReturn(this,(Video_Answers.__proto__||Object.getPrototypeOf(Video_Answers)).call(this,props));_this.state={admin:null,vid:_this.props.match.params.vid_id,student:localStorage.getItem('ind')};return _this;}_createClass(Video_Answers,[{key:'componentDidMount',value:function componentDidMount(){var iframe=document.querySelector('iframe');console.log(iframe,'pleeeease');var player=new _reactVimeo.Vimeo.Player(iframe);player.on('play',function(){console.log('played the video!');});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var vid_id=this.state.vid;(0,_isomorphicFetch2.default)('/videos/ind/'+vid_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(vid){return console.log(vid),_this2.setState({vid:vid});});}},{key:'render',value:function render(){var _state=this.state,vid=_state.vid,admin=_state.admin,student=_state.student;console.log(this.state.vid.vimeo_id);return _react2.default.createElement('div',null,_react2.default.createElement('p',null,' Video Answers'),_react2.default.createElement('iframe',{src:'https://player.vimeo.com/video/170955105'},' '),_react2.default.createElement(_UserAnswersList2.default,{user:student,video:vid.video_id}));}}]);return Video_Answers;}(_react.Component);exports.default=Video_Answers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeD81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQge1ZpbWVvfSBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgJy4vVmlkZW9fQW5zd2Vycy5jc3MnO1xuaW1wb3J0IFVzZXJBbnN3ZXJzTGlzdCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvX0Fuc3dlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIHN1cGVyKHByb3BzKVxuICB0aGlzLnN0YXRlPXtcbiAgICBhZG1pbjogbnVsbCxcbiAgICB2aWQ6IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnZpZF9pZCxcbiAgICBzdHVkZW50OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgfVxufVxuXG5jb21wb25lbnREaWRNb3VudCgpe1xudmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuY29uc29sZS5sb2coaWZyYW1lLCAncGxlZWVlYXNlJylcbiAgICB2YXIgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllcihpZnJhbWUpO1xuXG4gICAgcGxheWVyLm9uKCdwbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZWQgdGhlIHZpZGVvIScpO1xuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG59XG5jb21wb25lbnRXaWxsTW91bnQoKXtcblxuICBsZXQgdmlkX2lkID0gdGhpcy5zdGF0ZS52aWRcbiAgZmV0Y2goYC92aWRlb3MvaW5kLyR7dmlkX2lkfWApXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihqc29uID0+IGpzb24pXG4gIC50aGVuKHZpZCA9PiAoXG4gICAgY29uc29sZS5sb2codmlkKSxcbiAgICB0aGlzLnNldFN0YXRlKHt2aWR9KSkpXG5cblxufVxucmVuZGVyKCl7XG4gIGNvbnN0IHt2aWQsIGFkbWluLCBzdHVkZW50fT0gdGhpcy5zdGF0ZVxuICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZpZC52aW1lb19pZClcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgPHA+IFZpZGVvIEFuc3dlcnM8L3A+XG4gICAgPGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMTcwOTU1MTA1XCI+IDwvaWZyYW1lPlxuICAgIDxVc2VyQW5zd2Vyc0xpc3RcbiAgICB1c2VyPXtzdHVkZW50fVxuICAgIHZpZGVvPXt2aWQudmlkZW9faWR9Lz5cbiAgICA8L2Rpdj5cbiAgICApXG5cbn1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL1ZpZGVvX0Fuc3dlcnMvVmlkZW9fQW5zd2Vycy5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///543\n");

/***/ })

})