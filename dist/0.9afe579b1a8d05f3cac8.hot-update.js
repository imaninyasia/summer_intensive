webpackHotUpdate(0,{

/***/ 183:
/*!**********************************************************!*\
  !*** ./src/Components/UnwatchedVideo/UnwatchedVideo.jsx ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./UnwatchedVideo.css */ 394);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UnwatchedVideo=function(_Component){_inherits(UnwatchedVideo,_Component);function UnwatchedVideo(props){_classCallCheck(this,UnwatchedVideo);var _this=_possibleConstructorReturn(this,(UnwatchedVideo.__proto__||Object.getPrototypeOf(UnwatchedVideo)).call(this,props));_this.state={loading:false,jpeg:null};return _this;}_createClass(UnwatchedVideo,[{key:'componentDidUpdate',value:function componentDidUpdate(){var _this2=this;if(this.state.jpeg==null||prevProps!=this.props){(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.json').then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return _this2.setState({jpeg:data[0].thumbnail_large});});}}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num;return _react2.default.createElement('div',{className:className},_react2.default.createElement('div',{className:'col-md-5 col-md-offset-1 col-sm-6'},_react2.default.createElement(_reactVimeo2.default,{onPlay:this.play,className:'vimeo_vid',videoId:video_num})),_react2.default.createElement('div',{className:'col-md-5 col-sm-6',style:{marginLeft:'7%',marginTop:'8%'}},_react2.default.createElement('div',{className:'editContent',style:{outline:'none',cursor:'inherit'}},_react2.default.createElement('h3',null,'Video content chapter')),_react2.default.createElement('div',{className:'editContent',style:{fontSize:'40px',outline:'none',cursor:'inherit',leftMargin:'10%'}},this.props.admin&&watched==false&&course==true||watched==true||this.props.admin?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'))));}}]);return UnwatchedVideo;}(_react.Component);exports.default=UnwatchedVideo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1Vud2F0Y2hlZFZpZGVvL1Vud2F0Y2hlZFZpZGVvLmpzeD83M2NhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1Vud2F0Y2hlZFZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbndhdGNoZWRWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGpwZWc6IG51bGxcbiAgICB9XG4gIH1cbmNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICBpZiAodGhpcy5zdGF0ZS5qcGVnPT1udWxsIHx8IHByZXZQcm9wcyAhPSB0aGlzLnByb3BzKXtcbiAgICAgZmV0Y2goYGh0dHA6Ly92aW1lby5jb20vYXBpL3YyL3ZpZGVvLyR7dGhpcy5wcm9wcy52aWRlb19udW19Lmpzb25gKVxuICAudGhlbihyZXM9PiByZXMuanNvbigpKVxuICAudGhlbihqc29uPT5qc29uKVxuICAudGhlbihkYXRhPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe2pwZWc6IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlfSlcbiAgICApXG4gIH1cbn1cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge2NsYXNzTmFtZSwgc3JjLCBhbGxvd0Z1bGxTY3JlZW4sIHdhdGNoZWQsIHZpZGVvX2lkLCBjb3Vyc2UsIHZpZGVvX251bX0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgY29sLW1kLW9mZnNldC0xIGNvbC1zbS02XCI+XG5cbiAgICAgICAgICAgIDxWaW1lb1xuICAgICAgICAgICAgb25QbGF5PXt0aGlzLnBsYXl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aW1lb192aWRcIlxuICAgICAgICAgICAgdmlkZW9JZD17IHZpZGVvX251bSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgY29sLXNtLTZcIiBzdHlsZT17e21hcmdpbkxlZnQ6ICc3JScsIG1hcmdpblRvcDogJzglJ319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPGgzPlZpZGVvIGNvbnRlbnQgY2hhcHRlcjwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tmb250U2l6ZTogJzQwcHgnLG91dGxpbmU6ICdub25lJywgY3Vyc29yOiAnaW5oZXJpdCcsIGxlZnRNYXJnaW46ICcxMCUnfX0+XG4gICAgICAgICAgICAgICAgeygodGhpcy5wcm9wcy5hZG1pbiAmJiB3YXRjaGVkPT1mYWxzZSAmJiBjb3Vyc2U9PXRydWUpIHx8KHdhdGNoZWQ9PXRydWUpfHwodGhpcy5wcm9wcy5hZG1pbikpPyBudWxsIDpcbiAgICAgICAgPExpbmsgdG89e2AvY291cnNlcy8ke3ZpZGVvX2lkfWB9PlF1aXo8L0xpbms+IH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1Vud2F0Y2hlZFZpZGVvL1Vud2F0Y2hlZFZpZGVvLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///183\n");

/***/ })

})