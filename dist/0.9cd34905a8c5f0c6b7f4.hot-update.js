webpackHotUpdate(0,{

/***/ 543:
/*!****************************************************!*\
  !*** ./src/Routes/Video_Answers/Video_Answers.jsx ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video_Answers=function(_Component){_inherits(Video_Answers,_Component);function Video_Answers(props){_classCallCheck(this,Video_Answers);var _this=_possibleConstructorReturn(this,(Video_Answers.__proto__||Object.getPrototypeOf(Video_Answers)).call(this,props));_this.state={admin:null,vid:_this.props.match.params.vid_id};return _this;}_createClass(Video_Answers,[{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var vid_id=this.state.vid;(0,_isomorphicFetch2.default)('/videos/ind/'+vid_id).then(function(res){return res.json();}).then(function(json){return json;}).then(function(vid){return console.log(vid),_this2.setState({vid:vid});});}},{key:'render',value:function render(){var _state=this.state,vid=_state.vid,admin=_state.admin;console.log(this.state.vid);return _react2.default.createElement('div',null,_react2.default.createElement('p',null,' Video Answers'),_react2.default.createElement(_reactVimeo2.default,{videoId:vid.vimeo_id}));}}]);return Video_Answers;}(_react.Component);exports.default=Video_Answers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvVmlkZW9fQW5zd2Vycy9WaWRlb19BbnN3ZXJzLmpzeD81OGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgVmltZW8gZnJvbSAncmVhY3QtdmltZW8nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9fQW5zd2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpXG4gIHRoaXMuc3RhdGU9e1xuICAgIGFkbWluOiBudWxsLFxuICAgIHZpZDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudmlkX2lkXG4gIH1cbn1cblxuY29tcG9uZW50V2lsbE1vdW50KCl7XG4gIGxldCB2aWRfaWQgPSB0aGlzLnN0YXRlLnZpZFxuICBmZXRjaChgL3ZpZGVvcy9pbmQvJHt2aWRfaWR9YClcbiAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGpzb24gPT4ganNvbilcbiAgLnRoZW4odmlkID0+IChcbiAgICBjb25zb2xlLmxvZyh2aWQpLFxuICAgIHRoaXMuc2V0U3RhdGUoe3ZpZH0pKSlcblxuXG59XG5yZW5kZXIoKXtcbiAgY29uc3Qge3ZpZCwgYWRtaW59PSB0aGlzLnN0YXRlXG4gIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudmlkKVxuICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICA8cD4gVmlkZW8gQW5zd2VyczwvcD5cbiAgICA8VmltZW9cbiAgICB2aWRlb0lkPXt2aWQudmltZW9faWR9Lz5cbiAgICA8L2Rpdj5cbiAgICApXG5cbn1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL1ZpZGVvX0Fuc3dlcnMvVmlkZW9fQW5zd2Vycy5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///543\n");

/***/ })

})