webpackHotUpdate(0,{

/***/ 529:
/*!**********************************************************!*\
  !*** ./src/Routes/Interactive_Zone/Interactive_Zone.jsx ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _VideoList=__webpack_require__(/*! ../../Components/VideoList/VideoList.jsx */ 180);var _VideoList2=_interopRequireDefault(_VideoList);var _Video=__webpack_require__(/*! ../../Components/Video/Video.jsx */ 181);var _Video2=_interopRequireDefault(_Video);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 33);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _QuizList=__webpack_require__(/*! ../../Components/QuizList/QuizList.jsx */ 109);var _QuizList2=_interopRequireDefault(_QuizList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Interactive_Zone=function(_Component){_inherits(Interactive_Zone,_Component);function Interactive_Zone(props){_classCallCheck(this,Interactive_Zone);var _this=_possibleConstructorReturn(this,(Interactive_Zone.__proto__||Object.getPrototypeOf(Interactive_Zone)).call(this,props));_this.state={history:{props:props},vid:[],loading:false,sr:[],wa:[]};_this.logoutnow=_this.logoutnow.bind(_this);return _this;}_createClass(Interactive_Zone,[{key:'logoutnow',value:function logoutnow(){localStorage.removeItem('userName');localStorage.removeItem('token');this.props.history.push('/');}},{key:'componentWillMount',value:function componentWillMount(){var _this2=this;var video_id=this.props.match.params.video_id;video_id.toString();this.setState({loading:true});(0,_isomorphicFetch2.default)('/videos/ind/'+video_id).then(function(response){return response.json();}).then(function(json){return json;}).then(function(video){return console.log(video,'this is what got loaded'),_this2.setState({vid:video.video_id,sr:video.source,wa:video.watched,vim:video.vimeo_id,loading:false});});}},{key:'render',value:function render(){var loading=this.props.loading;var _state=this.state,vid=_state.vid,sr=_state.sr,wa=_state.wa,vim=_state.vim;return _react2.default.createElement('section',{className:'content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('ul',{className:'nav nav-tabs text-center',role:'tablist',id:'myTab',style:{paddingBottom:'0px'}},_react2.default.createElement('li',{className:'active'},_react2.default.createElement('h1',{role:'tab','data-toggle':'tab'},'Course ',vid,' Video'))),_react2.default.createElement('div',{className:'tab-content'},_react2.default.createElement('div',{className:'tab-pane fade in active',id:'tab1'},_react2.default.createElement('div',{className:'row',style:{height:'375px'}},_react2.default.createElement('div',{className:'col-sm-10 col-sm-offset-1',style:{width:'812px',marginLeft:'0px'}},loading?_react2.default.createElement('span',null,'loading...'):null,vid!=undefined?_react2.default.createElement('div',null,_react2.default.createElement(_Video2.default,{video_id:vid,className:'youtube-frame',src:sr,watched:wa,course:true,video_num:vim})):_react2.default.createElement('span',null,' Currently ',video,' Videos ')),_react2.default.createElement('div',{className:'col-md-5 col-sm-6',style:{paddingRight:'0px',width:'354px',paddingLeft:'0px',height:'143px'}},_react2.default.createElement('div',null,_react2.default.createElement('h3',null,'Quiz')),_react2.default.createElement('div',null,_react2.default.createElement('p',null,'Quiz questions go here'),_react2.default.createElement(_QuizList2.default,{video_id:this.props.match.params.video_id}))))))));}}]);return Interactive_Zone;}(_react.Component);exports.default=Interactive_Zone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTI5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvSW50ZXJhY3RpdmVfWm9uZS9JbnRlcmFjdGl2ZV9ab25lLmpzeD8zNDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmlkZW9MaXN0IGZyb20gJy4uLy4uL0NvbXBvbmVudHMvVmlkZW9MaXN0L1ZpZGVvTGlzdC5qc3gnXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9WaWRlby9WaWRlby5qc3gnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBRdWl6TGlzdCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1F1aXpMaXN0L1F1aXpMaXN0LmpzeCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aXZlX1pvbmUgZXh0ZW5kcyBDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhpc3Rvcnk6IHtwcm9wc30sXG4gICAgICB2aWQ6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzcjogW10sXG4gICAgICB3YTogW11cbiAgICB9XG4gICAgdGhpcy5sb2dvdXRub3cgPSB0aGlzLmxvZ291dG5vdy5iaW5kKHRoaXMpXG4gIH1cblxuIGxvZ291dG5vdygpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyTmFtZScpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpXG4gIH1cbiAgICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgbGV0IHZpZGVvX2lkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudmlkZW9faWRcbiAgICAgIHZpZGVvX2lkLnRvU3RyaW5nKClcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcbiAgICBmZXRjaCgnL3ZpZGVvcy9pbmQvJyt2aWRlb19pZClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKHZpZGVvID0+KFxuICAgICAgY29uc29sZS5sb2codmlkZW8sICd0aGlzIGlzIHdoYXQgZ290IGxvYWRlZCcpLFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aWQ6IHZpZGVvLnZpZGVvX2lkLFxuICAgICAgc3I6IHZpZGVvLnNvdXJjZSxcbiAgICAgIHdhOiB2aWRlby53YXRjaGVkLFxuICAgICAgdmltOiB2aWRlby52aW1lb19pZCxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSlcbiAgICAgICkpXG4gIH1cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHt2aWQsIHNyLCB3YSwgdmltfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4oXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50LWJsb2NrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgdGV4dC1jZW50ZXJcIiByb2xlPVwidGFibGlzdFwiIGlkPVwibXlUYWJcIiBzdHlsZT17e1xuICAgIHBhZGRpbmdCb3R0b206ICcwcHgnXG59fT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGgxIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkNvdXJzZSB7dmlkfSBWaWRlbzwvaDE+PC9saT5cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBmYWRlIGluIGFjdGl2ZVwiIGlkPVwidGFiMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3toZWlnaHQ6ICczNzVweCd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwIGNvbC1zbS1vZmZzZXQtMVwiIHN0eWxlPXt7d2lkdGg6ICc4MTJweCcsIG1hcmdpbkxlZnQ6ICcwcHgnfX0+XG4gICAgICAgICAgICAgIHsobG9hZGluZyk/PHNwYW4+bG9hZGluZy4uLjwvc3Bhbj46IG51bGwgfVxuICAgICAgICB7KHZpZCE9IHVuZGVmaW5lZCk/XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8VmlkZW9cblxuICAgICAgICAgICAgICAgICAgICB2aWRlb19pZD17dmlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ5b3V0dWJlLWZyYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzcn1cbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hlZD17d2F9XG4gICAgICAgICAgICAgICAgICAgIGNvdXJzZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgdmlkZW9fbnVtPXt2aW19IC8+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPHNwYW4+IEN1cnJlbnRseSB7dmlkZW99IFZpZGVvcyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IGNvbC1zbS02XCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6ICcwcHgnLCB3aWR0aDogJzM1NHB4JywgcGFkZGluZ0xlZnQ6ICcwcHgnLCBoZWlnaHQ6ICcxNDNweCd9fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+UXVpejwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPlF1aXogcXVlc3Rpb25zIGdvIGhlcmU8L3A+XG4gICAgICAgICAgICAgICAgPFF1aXpMaXN0XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvX2lkPXt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy52aWRlb19pZH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICAgICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1JvdXRlcy9JbnRlcmFjdGl2ZV9ab25lL0ludGVyYWN0aXZlX1pvbmUuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///529\n");

/***/ })

})