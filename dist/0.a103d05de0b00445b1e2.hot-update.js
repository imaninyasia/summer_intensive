webpackHotUpdate(0,{

/***/ 543:
/*!****************************************************!*\
  !*** ./src/Routes/Video_Answers/Video_Answers.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);__webpack_require__(/*! ./Video_Answers.css */ 597);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 550);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video_Answers=function(_Component){_inherits(Video_Answers,_Component);function Video_Answers(props){_classCallCheck(this,Video_Answers);var _this=_possibleConstructorReturn(this,(Video_Answers.__proto__||Object.getPrototypeOf(Video_Answers)).call(this,props));_this.state={admin:null,vid:_this.props.match.params.vid_id,student:localStorage.getItem('ind')};return _this;}_createClass(Video_Answers,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var vid_id=this.state.vid;(0,_isomorphicFetch2.default)('/videos/ind/'+vid_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(vid){return _this2.setState({vid:vid});});}},{key:'render',value:function render(){var _state=this.state,vid=_state.vid,admin=_state.admin,student=_state.student;return _react2.default.createElement('div',null,_react2.default.createElement('iframe',{style:{marginTop:'20px'},src:'https://player.vimeo.com/video/'+vid.vimeo_id}),_react2.default.createElement(_UserAnswersList2.default,{user:student,video:vid.video_id}));}}]);return Video_Answers;}(_react.Component);exports.default=Video_Answers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeD81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuaW1wb3J0IFZpbWVvIGZyb20gJ3JlYWN0LXZpbWVvJztcbmltcG9ydCAnLi9WaWRlb19BbnN3ZXJzLmNzcyc7XG5pbXBvcnQgVXNlckFuc3dlcnNMaXN0IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvVXNlckxpc3QvVXNlckFuc3dlcnNMaXN0L1VzZXJBbnN3ZXJzTGlzdC5qc3gnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9fQW5zd2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpXG4gIHRoaXMuc3RhdGU9e1xuICAgIGFkbWluOiBudWxsLFxuICAgIHZpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudmlkX2lkLFxuICAgIHN0dWRlbnQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICB9XG59XG5cblxuXG5jb21wb25lbnRXaWxsTW91bnQoKXtcblxuICBsZXQgdmlkX2lkID0gdGhpcy5zdGF0ZS52aWRcbiAgZmV0Y2goYC92aWRlb3MvaW5kLyR7dmlkX2lkfWApXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAudGhlbihqc29uID0+IGpzb24pXG4gIC50aGVuKHZpZCA9PlxuICAgIHRoaXMuc2V0U3RhdGUoe3ZpZH0pKVxufVxucmVuZGVyKCl7XG4gIGNvbnN0IHt2aWQsIGFkbWluLCBzdHVkZW50fT0gdGhpcy5zdGF0ZVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICA8aWZyYW1lIHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fXNyYz17YGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZC52aW1lb19pZH1gfT48L2lmcmFtZT5cbiAgICA8VXNlckFuc3dlcnNMaXN0XG4gICAgdXNlcj17c3R1ZGVudH1cbiAgICB2aWRlbz17dmlkLnZpZGVvX2lkfS8+XG4gICAgPC9kaXY+XG4gICAgKVxuXG59XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1JvdXRlcy9WaWRlb19BbnN3ZXJzL1ZpZGVvX0Fuc3dlcnMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///543\n");

/***/ })

})