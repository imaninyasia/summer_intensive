webpackHotUpdate(0,{

/***/ 543:
/*!****************************************************!*\
  !*** ./src/Routes/Video_Answers/Video_Answers.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);__webpack_require__(/*! ./Video_Answers.css */ 597);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 550);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video_Answers=function(_Component){_inherits(Video_Answers,_Component);function Video_Answers(props){_classCallCheck(this,Video_Answers);var _this=_possibleConstructorReturn(this,(Video_Answers.__proto__||Object.getPrototypeOf(Video_Answers)).call(this,props));_this.state={admin:null,vid:_this.props.match.params.vid_id,student:localStorage.getItem('ind')};return _this;}_createClass(Video_Answers,[{key:'componentDidMount',value:function componentDidMount(){this.forceUpdate();var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.off('play',onPlay);player.on('timeupdate',function(e){console.log('time is being upated the video!');console.log(e);if(e.percent==0.25){console.log('pause?');player.pause().then(function(){// the video was paused\n}).catch(function(error){switch(error.name){case'PasswordError':// the video is password-protected and the viewer needs to enter the\n// password first\nbreak;case'PrivacyError':// the video is private\nbreak;default:// some other error occurred\nbreak;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var vid_id=this.state.vid;(0,_isomorphicFetch2.default)('/videos/ind/'+vid_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(vid){return _this2.setState({vid:vid});});}},{key:'render',value:function render(){var _state=this.state,vid=_state.vid,admin=_state.admin,student=_state.student;return _react2.default.createElement('div',null,_react2.default.createElement('p',null,' Video Answers'),_react2.default.createElement('iframe',{src:'https://player.vimeo.com/video/'+vid.vimeo_id}),_react2.default.createElement(_UserAnswersList2.default,{user:student,video:vid.video_id}));}}]);return Video_Answers;}(_react.Component);exports.default=Video_Answers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeD81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuaW1wb3J0IFZpbWVvIGZyb20gJ3JlYWN0LXZpbWVvJztcbmltcG9ydCAnLi9WaWRlb19BbnN3ZXJzLmNzcyc7XG5pbXBvcnQgVXNlckFuc3dlcnNMaXN0IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvVXNlckxpc3QvVXNlckFuc3dlcnNMaXN0L1VzZXJBbnN3ZXJzTGlzdC5qc3gnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9fQW5zd2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpXG4gIHRoaXMuc3RhdGU9e1xuICAgIGFkbWluOiBudWxsLFxuICAgIHZpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudmlkX2lkLFxuICAgIHN0dWRlbnQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICB9XG59XG5cbmNvbXBvbmVudERpZE1vdW50KCl7XG4gIHRoaXMuZm9yY2VVcGRhdGUoKVxudmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKGlmcmFtZSk7XG5cbiAgICBwbGF5ZXIub2ZmKCdwbGF5Jywgb25QbGF5KTtcbiAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGltZSBpcyBiZWluZyB1cGF0ZWQgdGhlIHZpZGVvIScpO1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5wZXJjZW50PT0wLjI1KXtcbiAgICAgICAgICBjb25zb2xlLmxvZygncGF1c2U/JylcblxuICAgICAgICAgIHBsYXllci5wYXVzZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgLy8gdGhlIHZpZGVvIHdhcyBwYXVzZWRcbn0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgc3dpdGNoIChlcnJvci5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ1Bhc3N3b3JkRXJyb3InOlxuICAgICAgICAgICAgLy8gdGhlIHZpZGVvIGlzIHBhc3N3b3JkLXByb3RlY3RlZCBhbmQgdGhlIHZpZXdlciBuZWVkcyB0byBlbnRlciB0aGVcbiAgICAgICAgICAgIC8vIHBhc3N3b3JkIGZpcnN0XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdQcml2YWN5RXJyb3InOlxuICAgICAgICAgICAgLy8gdGhlIHZpZGVvIGlzIHByaXZhdGVcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBzb21lIG90aGVyIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG59XG5cbmNvbXBvbmVudFdpbGxNb3VudCgpe1xuXG4gIGxldCB2aWRfaWQgPSB0aGlzLnN0YXRlLnZpZFxuICBmZXRjaChgL3ZpZGVvcy9pbmQvJHt2aWRfaWR9YClcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGpzb24gPT4ganNvbilcbiAgLnRoZW4odmlkID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmlkfSkpXG59XG5yZW5kZXIoKXtcbiAgY29uc3Qge3ZpZCwgYWRtaW4sIHN0dWRlbnR9PSB0aGlzLnN0YXRlXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgIDxwPiBWaWRlbyBBbnN3ZXJzPC9wPlxuICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmlkLnZpbWVvX2lkfWB9PjwvaWZyYW1lPlxuICAgIDxVc2VyQW5zd2Vyc0xpc3RcbiAgICB1c2VyPXtzdHVkZW50fVxuICAgIHZpZGVvPXt2aWQudmlkZW9faWR9Lz5cbiAgICA8L2Rpdj5cbiAgICApXG5cbn1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL1ZpZGVvX0Fuc3dlcnMvVmlkZW9fQW5zd2Vycy5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBK0JBO0FBSUE7QUFDQTtBQUlBO0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///543\n");

/***/ })

})