webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.onTimeUpdate=_this.onTimeUpdate.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(e){console.log('the video is playing');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'componentDidMount',value:function componentDidMount(){console.log(video_num);(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.'+json).then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return console.log(data,'lololol');});}},{key:'onTimeUpdate',value:function onTimeUpdate(e){console.log(e);}},{key:'end',value:function end(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,_react2.default.createElement('iframe',{src:video_num}),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,onPlay:this.play,className:'vimeo_vid_course',onTimeupdate:this.onTimeUpdate,onEnded:this.end})):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},_react2.default.createElement('iframe',{src:video_num},' '),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,className:'vimeo_vid'}),_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,'3'))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICB9XG5cblxucGxheShlKXtcbmNvbnNvbGUubG9nKCd0aGUgdmlkZW8gaXMgcGxheWluZycpXG5sZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxubGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbn1cbmNvbXBvbmVudERpZE1vdW50KCl7XG4gIGNvbnNvbGUubG9nKHZpZGVvX251bSlcbmZldGNoKGBodHRwOi8vdmltZW8uY29tL2FwaS92Mi92aWRlby8ke3RoaXMucHJvcHMudmlkZW9fbnVtfS4ke2pzb259YClcbi50aGVuKHJlcz0+cmVzLmpzb24oKSlcbi50aGVuKGpzb249Pmpzb24pXG4udGhlbihkYXRhPT5jb25zb2xlLmxvZyhkYXRhLCAnbG9sb2xvbCcpKVxufVxub25UaW1lVXBkYXRlKGUpe1xuICBjb25zb2xlLmxvZyhlKVxufVxuXG5lbmQoKXtcbiAgY29uc29sZS5sb2coJ3ZpZGVvIGVuZGVkJylcbiAgbGV0IHZpZF9pZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbiAgICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICBmZXRjaCgnL3ZpZGVvcy91cGRhdGUvJyt2aWRfaWQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgd2F0Y2hlZDogdHJ1ZSxcbiAgICAgICAgdXNlcjogdXNlclxuICAgICAgfSlcbiAgICB9KVxuXG5mZXRjaChgL2JhZGdlcy91cGRhdGVjLyR7dmlkX2lkfS8ke3VzZXJ9YCx7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOntcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9XG59KVxufVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtjbGFzc05hbWUsIHNyYywgYWxsb3dGdWxsU2NyZWVuLCB3YXRjaGVkLCB2aWRlb19pZCwgY291cnNlLCB2aWRlb19udW0sIGNvdXJzZV92YWwsIHBhcnRfdmFsfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gPlxuICAgICAgeyhjb3Vyc2U9PXRydWUpID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGlmcmFtZSBzcmM9e3ZpZGVvX251bX0+PC9pZnJhbWU+XG4gICAgICAgIDxWaW1lb1xuICAgICAgICAgICAgdmlkZW9JZD17IHZpZGVvX251bSB9XG4gICAgICAgICAgICBvblBsYXk9e3RoaXMucGxheX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpbWVvX3ZpZF9jb3Vyc2VcIlxuICAgICAgICAgICAgb25UaW1ldXBkYXRlPXt0aGlzLm9uVGltZVVwZGF0ZX1cbiAgICAgICAgICAgIG9uRW5kZWQ9e3RoaXMuZW5kfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZWZmZWN0LWxpbHlcIj5cbiAgICAgICAgICA8aWZyYW1lIHNyYz17dmlkZW9fbnVtfT4gPC9pZnJhbWU+XG4gICAgICAgICAgICA8VmltZW9cbiAgICAgICAgICAgIHZpZGVvSWQ9eyB2aWRlb19udW0gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmltZW9fdmlkXCIgLz5cblxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPGgyPkl0ZW0gPHN0cm9uZz4zPC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8cD5CZWF1dGlmdWxseSBzdWJ0bGUgYW5pbWF0ZWQgaG92ZXIgZWZmZWN0IGZvciB5b3VyIGdhbGxlcnk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7KCh3YXRjaGVkPT1mYWxzZSAmJiBjb3Vyc2U9PXRydWUpIHx8KHdhdGNoZWQ9PXRydWUpKT8gbnVsbCA6IDxMaW5rIHRvPXtgL2NvdXJzZXMvJHt2aWRlb19pZH1gfT5RdWl6PC9MaW5rPn1cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvdmlkZW8vJHt2aWRlb19pZH1gfT48L0xpbms+XG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9WaWRlby9WaWRlby5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})