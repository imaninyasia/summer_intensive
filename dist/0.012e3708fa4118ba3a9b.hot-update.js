webpackHotUpdate(0,{

/***/ 543:
/*!****************************************************!*\
  !*** ./src/Routes/Video_Answers/Video_Answers.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);__webpack_require__(/*! ./Video_Answers.css */ 597);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 550);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video_Answers=function(_Component){_inherits(Video_Answers,_Component);function Video_Answers(props){_classCallCheck(this,Video_Answers);var _this=_possibleConstructorReturn(this,(Video_Answers.__proto__||Object.getPrototypeOf(Video_Answers)).call(this,props));_this.state={admin:null,vid:_this.props.match.params.vid_id,student:localStorage.getItem('ind')};return _this;}_createClass(Video_Answers,[{key:'componentDidMount',value:function componentDidMount(){var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.on('play',function(){console.log('played the video!');});player.on('timeupdate',function(e){console.log('time is being upated the video!');console.log(e);if(e.percent==0.25){console.log('pause?');player.pause().then(function(){// the video was paused\n}).catch(function(error){switch(error.name){case'PasswordError':// the video is password-protected and the viewer needs to enter the\n// password first\nbreak;case'PrivacyError':// the video is private\nbreak;default:// some other error occurred\nbreak;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var vid_id=this.state.vid;(0,_isomorphicFetch2.default)('/videos/ind/'+vid_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(vid){return console.log(vid),_this2.setState({vid:vid});});}},{key:'render',value:function render(){var _state=this.state,vid=_state.vid,admin=_state.admin,student=_state.student;console.log(this.state.vid.vimeo_id);return _react2.default.createElement('div',null,_react2.default.createElement('p',null,' Video Answers'),_react2.default.createElement('iframe',{classname:'peop',src:'https://player.vimeo.com/video/170955105'},' '),_react2.default.createElement(_UserAnswersList2.default,{user:student,video:vid.video_id}));}}]);return Video_Answers;}(_react.Component);exports.default=Video_Answers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeD81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuaW1wb3J0ICcuL1ZpZGVvX0Fuc3dlcnMuY3NzJztcbmltcG9ydCBVc2VyQW5zd2Vyc0xpc3QgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Vc2VyTGlzdC9Vc2VyQW5zd2Vyc0xpc3QvVXNlckFuc3dlcnNMaXN0LmpzeCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb19BbnN3ZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuICBzdXBlcihwcm9wcylcbiAgdGhpcy5zdGF0ZT17XG4gICAgYWRtaW46IG51bGwsXG4gICAgdmlkOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy52aWRfaWQsXG4gICAgc3R1ZGVudDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gIH1cbn1cblxuY29tcG9uZW50RGlkTW91bnQoKXtcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihpZnJhbWUpO1xuXG4gICAgcGxheWVyLm9uKCdwbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZWQgdGhlIHZpZGVvIScpO1xuICAgIH0pO1xuICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aW1lIGlzIGJlaW5nIHVwYXRlZCB0aGUgdmlkZW8hJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmIChlLnBlcmNlbnQ9PTAuMjUpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZT8nKVxuXG4gICAgICAgICAgcGxheWVyLnBhdXNlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAvLyB0aGUgdmlkZW8gd2FzIHBhdXNlZFxufSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBzd2l0Y2ggKGVycm9yLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGFzc3dvcmRFcnJvcic6XG4gICAgICAgICAgICAvLyB0aGUgdmlkZW8gaXMgcGFzc3dvcmQtcHJvdGVjdGVkIGFuZCB0aGUgdmlld2VyIG5lZWRzIHRvIGVudGVyIHRoZVxuICAgICAgICAgICAgLy8gcGFzc3dvcmQgZmlyc3RcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1ByaXZhY3lFcnJvcic6XG4gICAgICAgICAgICAvLyB0aGUgdmlkZW8gaXMgcHJpdmF0ZVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIC8vIHNvbWUgb3RoZXIgZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllci5nZXRWaWRlb1RpdGxlKCkudGhlbihmdW5jdGlvbih0aXRsZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGl0bGU6JywgdGl0bGUpO1xuICAgIH0pO1xufVxuY29tcG9uZW50V2lsbE1vdW50KCl7XG5cbiAgbGV0IHZpZF9pZCA9IHRoaXMuc3RhdGUudmlkXG4gIGZldGNoKGAvdmlkZW9zL2luZC8ke3ZpZF9pZH1gKVxuICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAudGhlbih2aWQgPT4gKFxuICAgIGNvbnNvbGUubG9nKHZpZCksXG4gICAgdGhpcy5zZXRTdGF0ZSh7dmlkfSkpKVxuXG5cbn1cbnJlbmRlcigpe1xuICBjb25zdCB7dmlkLCBhZG1pbiwgc3R1ZGVudH09IHRoaXMuc3RhdGVcbiAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52aWQudmltZW9faWQpXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgIDxwPiBWaWRlbyBBbnN3ZXJzPC9wPlxuICAgIDxpZnJhbWUgY2xhc3NuYW1lPVwicGVvcFwiIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8xNzA5NTUxMDVcIj4gPC9pZnJhbWU+XG4gICAgPFVzZXJBbnN3ZXJzTGlzdFxuICAgIHVzZXI9e3N0dWRlbnR9XG4gICAgdmlkZW89e3ZpZC52aWRlb19pZH0vPlxuICAgIDwvZGl2PlxuICAgIClcblxufVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUErQkE7QUFJQTtBQUNBO0FBSUE7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///543\n");

/***/ })

})