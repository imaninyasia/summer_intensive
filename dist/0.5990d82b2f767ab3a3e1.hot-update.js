webpackHotUpdate(0,{

/***/ 543:
/*!****************************************************!*\
  !*** ./src/Routes/Video_Answers/Video_Answers.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);__webpack_require__(/*! ./Video_Answers.css */ 597);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 550);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video_Answers=function(_Component){_inherits(Video_Answers,_Component);function Video_Answers(props){_classCallCheck(this,Video_Answers);var _this=_possibleConstructorReturn(this,(Video_Answers.__proto__||Object.getPrototypeOf(Video_Answers)).call(this,props));_this.state={admin:null,vid:_this.props.match.params.vid_id,student:localStorage.getItem('ind')};return _this;}_createClass(Video_Answers,[{key:'componentDidMount',value:function componentDidMount(){var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.off('play',onPlay);player.on('timeupdate',function(e){console.log('time is being upated the video!');console.log(e);if(e.percent==0.25){console.log('pause?');player.pause().then(function(){// the video was paused\n}).catch(function(error){switch(error.name){case'PasswordError':// the video is password-protected and the viewer needs to enter the\n// password first\nbreak;case'PrivacyError':// the video is private\nbreak;default:// some other error occurred\nbreak;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var vid_id=this.state.vid;(0,_isomorphicFetch2.default)('/videos/ind/'+vid_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(vid){return console.log(vid),_this2.setState({vid:vid});});}},{key:'render',value:function render(){var _state=this.state,vid=_state.vid,admin=_state.admin,student=_state.student;console.log(this.state.vid.vimeo_id);return _react2.default.createElement('div',null,_react2.default.createElement('p',null,' Video Answers'),_react2.default.createElement('iframe',{className:'peop',src:'https://player.vimeo.com/video/170955105'},' '),_react2.default.createElement(_UserAnswersList2.default,{user:student,video:vid.video_id}));}}]);return Video_Answers;}(_react.Component);exports.default=Video_Answers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeD81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuaW1wb3J0IFZpbWVvIGZyb20gJ3JlYWN0LXZpbWVvJ1xuaW1wb3J0ICcuL1ZpZGVvX0Fuc3dlcnMuY3NzJztcbmltcG9ydCBVc2VyQW5zd2Vyc0xpc3QgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Vc2VyTGlzdC9Vc2VyQW5zd2Vyc0xpc3QvVXNlckFuc3dlcnNMaXN0LmpzeCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb19BbnN3ZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuICBzdXBlcihwcm9wcylcbiAgdGhpcy5zdGF0ZT17XG4gICAgYWRtaW46IG51bGwsXG4gICAgdmlkOiB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy52aWRfaWQsXG4gICAgc3R1ZGVudDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gIH1cbn1cblxuY29tcG9uZW50RGlkTW91bnQoKXtcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihpZnJhbWUpO1xuXG4gICAgcGxheWVyLm9mZigncGxheScsIG9uUGxheSk7XG4gICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpbWUgaXMgYmVpbmcgdXBhdGVkIHRoZSB2aWRlbyEnKTtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYgKGUucGVyY2VudD09MC4yNSl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3BhdXNlPycpXG5cbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgIC8vIHRoZSB2aWRlbyB3YXMgcGF1c2VkXG59KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIHN3aXRjaCAoZXJyb3IubmFtZSkge1xuICAgICAgICBjYXNlICdQYXNzd29yZEVycm9yJzpcbiAgICAgICAgICAgIC8vIHRoZSB2aWRlbyBpcyBwYXNzd29yZC1wcm90ZWN0ZWQgYW5kIHRoZSB2aWV3ZXIgbmVlZHMgdG8gZW50ZXIgdGhlXG4gICAgICAgICAgICAvLyBwYXNzd29yZCBmaXJzdFxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUHJpdmFjeUVycm9yJzpcbiAgICAgICAgICAgIC8vIHRoZSB2aWRlbyBpcyBwcml2YXRlXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gc29tZSBvdGhlciBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG59XG5jb21wb25lbnRXaWxsTW91bnQoKXtcblxuICBsZXQgdmlkX2lkID0gdGhpcy5zdGF0ZS52aWRcbiAgZmV0Y2goYC92aWRlb3MvaW5kLyR7dmlkX2lkfWApXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihqc29uID0+IGpzb24pXG4gIC50aGVuKHZpZCA9PiAoXG4gICAgY29uc29sZS5sb2codmlkKSxcbiAgICB0aGlzLnNldFN0YXRlKHt2aWR9KSkpXG5cblxufVxucmVuZGVyKCl7XG4gIGNvbnN0IHt2aWQsIGFkbWluLCBzdHVkZW50fT0gdGhpcy5zdGF0ZVxuICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZpZC52aW1lb19pZClcbiAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAgPHA+IFZpZGVvIEFuc3dlcnM8L3A+XG4gICAgPGlmcmFtZSBjbGFzc05hbWU9XCJwZW9wXCIgc3JjPVwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzE3MDk1NTEwNVwiPiA8L2lmcmFtZT5cbiAgICA8VXNlckFuc3dlcnNMaXN0XG4gICAgdXNlcj17c3R1ZGVudH1cbiAgICB2aWRlbz17dmlkLnZpZGVvX2lkfS8+XG4gICAgPC9kaXY+XG4gICAgKVxuXG59XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1JvdXRlcy9WaWRlb19BbnN3ZXJzL1ZpZGVvX0Fuc3dlcnMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQThCQTtBQUlBO0FBQ0E7QUFJQTtBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///543\n");

/***/ })

})