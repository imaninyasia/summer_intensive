webpackHotUpdate(0,{

/***/ 180:
/*!************************************************!*\
  !*** ./src/Components/VideoList/VideoList.jsx ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _Video=__webpack_require__(/*! ../Video/Video.jsx */ 181);var _Video2=_interopRequireDefault(_Video);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 33);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);__webpack_require__(/*! ./VideoList.css */ 388);var _UnwatchedVideo=__webpack_require__(/*! ../UnwatchedVideo/UnwatchedVideo.jsx */ 177);var _UnwatchedVideo2=_interopRequireDefault(_UnwatchedVideo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var VideoList=function(_Component){_inherits(VideoList,_Component);function VideoList(props){_classCallCheck(this,VideoList);var _this=_possibleConstructorReturn(this,(VideoList.__proto__||Object.getPrototypeOf(VideoList)).call(this,props));_this.state={videos:[],unwatched:[],loading:false,viewable:false};return _this;}_createClass(VideoList,[{key:'onLoad',value:function onLoad(data){console.log(data.duration);}},{key:'componentDidMount',value:function componentDidMount(){console.log('showing these',this.props.showVids);}//  componentWillMount() {\n//       let user = localStorage.getItem('ind')\n//    this.setState({loading: true})\n//   fetch(`/videos/viewed/${user}/${this.props.showVids}`)\n//   .then(response => response.json())\n//   .then(json => json)\n//   .then(videos =>\n//     this.setState({\n//     videos,\n//     loading: false\n//   })\n//     )\n// }\n},{key:'render',value:function render(){var _state=this.state,videos=_state.videos,loading=_state.loading,viewable=_state.viewable;var showVids=this.props.showVids;console.log(this.props.showVids,'shoi');return _react2.default.createElement('div',null,loading?_react2.default.createElement('span',null,'loading...'):null,showVids?showVids.map(function(video,index){return _react2.default.createElement(_Video2.default,{key:index,video_id:video.video_id,className:'youtube-frame',src:video.source,watched:video.watched,course:false,video_num:video.vimeo_id,viewable:viewable});}):_react2.default.createElement('span',null,' Currently 0 Videos '));}}]);return VideoList;}(_react.Component);exports.default=VideoList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvTGlzdC9WaWRlb0xpc3QuanN4P2U3YWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi9WaWRlby9WaWRlby5qc3gnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0ICcuL1ZpZGVvTGlzdC5jc3MnXG5pbXBvcnQgVW53YXRjaGVkVmlkZW8gZnJvbSAnLi4vVW53YXRjaGVkVmlkZW8vVW53YXRjaGVkVmlkZW8uanN4J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9MaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpZGVvczogW10sXG4gICAgICB1bndhdGNoZWQ6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB2aWV3YWJsZTogZmFsc2VcbiAgICB9XG5cbiAgfVxub25Mb2FkKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZHVyYXRpb24pXG59XG5jb21wb25lbnREaWRNb3VudCgpe1xuICBjb25zb2xlLmxvZygnc2hvd2luZyB0aGVzZScsIHRoaXMucHJvcHMuc2hvd1ZpZHMpXG59XG4gIC8vICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gIC8vICAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gIC8vICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAvLyAgIGZldGNoKGAvdmlkZW9zL3ZpZXdlZC8ke3VzZXJ9LyR7dGhpcy5wcm9wcy5zaG93Vmlkc31gKVxuICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gICAudGhlbihqc29uID0+IGpzb24pXG4gIC8vICAgLnRoZW4odmlkZW9zID0+XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgIHZpZGVvcyxcbiAgLy8gICAgIGxvYWRpbmc6IGZhbHNlXG4gIC8vICAgfSlcbiAgLy8gICAgIClcbiAgLy8gfVxuXG5cbiAgcmVuZGVyKCl7XG4gICAgbGV0IHsgIHZpZGVvcywgbG9hZGluZywgdmlld2FibGUgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQge3Nob3dWaWRzfSA9IHRoaXMucHJvcHNcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNob3dWaWRzLCdzaG9pJylcbiAgICByZXR1cm4oXG4gICAgPGRpdj5cbiAgICAgICAgeyhsb2FkaW5nKT9cbiAgICAgICAgICA8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPjpcbiAgICAgICAgICBudWxsXG4gICAgICAgIH1cbiAgICAgIHsoc2hvd1ZpZHMpP1xuICAgICAgICBzaG93Vmlkcy5tYXAoXG4gICAgICAgICAgZnVuY3Rpb24odmlkZW8sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8VmlkZW8gIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvX2lkPXt2aWRlby52aWRlb19pZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwieW91dHViZS1mcmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dmlkZW8uc291cmNlfVxuICAgICAgICAgICAgICAgICAgICB3YXRjaGVkPXt2aWRlby53YXRjaGVkfVxuICAgICAgICAgICAgICAgICAgICBjb3Vyc2U9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICB2aWRlb19udW09e3ZpZGVvLnZpbWVvX2lkfVxuICAgICAgICAgICAgICAgICAgICB2aWV3YWJsZT17dmlld2FibGV9Lz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgfSk6XG4gICAgICAgICAgICAgIDxzcGFuPiBDdXJyZW50bHkgMCBWaWRlb3MgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuICAgIDwvZGl2PlxuXG4gIClcbn1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9WaWRlb0xpc3QvVmlkZW9MaXN0LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///180\n");

/***/ })

})