webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false,jpeg:null};_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'iframeStuff',value:function iframeStuff(){var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.on('play',function(){console.log('is this even hitting?');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('ended',function(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _this2=this;if(this.props.course==true){this.iframeStuff();}if(this.state.jpeg!=null){(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+a.video_num+'.json').then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return _this2.setstate({jpeg:data[0].thumbnail_large});});console.log(this.state.jpeg,'hmmm');}}},{key:'componentWillUpdate',value:function componentWillUpdate(a,b){}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},this.state.jpebg?_react2.default.createElement('img',{src:this.state.jpeg,className:'vimeo_vid'}):null,_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,video_id))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgICAganBlZzogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuaWZyYW1lU3R1ZmYgPSB0aGlzLmlmcmFtZVN0dWZmLmJpbmQodGhpcylcbiAgfVxuaWZyYW1lU3R1ZmYoKXtcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihpZnJhbWUpO1xuXG4gICAgIHBsYXllci5vbigncGxheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgY29uc29sZS5sb2coJ2lzIHRoaXMgZXZlbiBoaXR0aW5nPycpXG4gICAgICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICAgICAgbGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbiAgICAgICAgIGZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbn0pXG4gICAgfSk7XG4gICAgIHBsYXllci5vbignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIGVuZGVkJylcbiAgICBsZXQgdmlkX2lkID0gdGhpcy5wcm9wcy52aWRlb19pZFxuICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gICAgIGZldGNoKCcvdmlkZW9zL3VwZGF0ZS8nK3ZpZF9pZCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB3YXRjaGVkOiB0cnVlLFxuICAgICAgICB1c2VyOiB1c2VyXG4gICAgICB9KVxuICAgIH0pXG5cbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZWMvJHt2aWRfaWR9LyR7dXNlcn1gLHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6e1xuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH1cbn0pXG4gICAgfSk7XG4gICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYgKGUucGVyY2VudD09MC4yNSl7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCkudGhlbihmdW5jdGlvbigpIHtcbn0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgc3dpdGNoIChlcnJvci5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ1Bhc3N3b3JkRXJyb3InOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ByaXZhY3lFcnJvcic6XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcml2YWN5IGVycm9yJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgZXJyb3IgdmlkZW8nKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG59XG5cbmNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICBpZiAodGhpcy5wcm9wcy5jb3Vyc2U9PXRydWUpe1xuICB0aGlzLmlmcmFtZVN0dWZmKClcbn1cblxuICBpZiAodGhpcy5zdGF0ZS5qcGVnIT1udWxsKXtcbiAgICAgZmV0Y2goYGh0dHA6Ly92aW1lby5jb20vYXBpL3YyL3ZpZGVvLyR7YS52aWRlb19udW19Lmpzb25gKVxuICAudGhlbihyZXM9PiByZXMuanNvbigpKVxuICAudGhlbihqc29uPT5qc29uKVxuICAudGhlbihkYXRhPT50aGlzLnNldHN0YXRlKHtqcGVnOiBkYXRhWzBdLnRodW1ibmFpbF9sYXJnZX0pKVxuICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpwZWcsICdobW1tJylcbiAgfVxuXG59XG5jb21wb25lbnRXaWxsVXBkYXRlKGEsIGIpe1xuXG59XG5cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7Y2xhc3NOYW1lLCBzcmMsIGFsbG93RnVsbFNjcmVlbiwgd2F0Y2hlZCwgdmlkZW9faWQsIGNvdXJzZSwgdmlkZW9fbnVtLCBjb3Vyc2VfdmFsLCBwYXJ0X3ZhbH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgIHsoY291cnNlPT10cnVlKSA/XG4gICAgICAgIDxkaXY+XG4gICAgICAgIHsoc3JjIT1udWxsKT88aWZyYW1lIGZyYW1lQm9yZGVyPVwiMFwiIGNsYXNzTmFtZT1cInZpbWVvX3ZpZF9jb3Vyc2VcIiBzcmM9e3NyY30+IDwvaWZyYW1lPiA6IG51bGwgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZWZmZWN0LWxpbHlcIj5cbiAgICAgICAgICB7KHRoaXMuc3RhdGUuanBlYmcpPyA8aW1nIHNyYz17dGhpcy5zdGF0ZS5qcGVnfVxuICAgICAgICAgICBjbGFzc05hbWU9XCJ2aW1lb192aWRcIi8+IDogbnVsbH1cblxuXG5cblxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPGgyPkl0ZW0gPHN0cm9uZz57dmlkZW9faWR9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8cD5CZWF1dGlmdWxseSBzdWJ0bGUgYW5pbWF0ZWQgaG92ZXIgZWZmZWN0IGZvciB5b3VyIGdhbGxlcnk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7KCh3YXRjaGVkPT1mYWxzZSAmJiBjb3Vyc2U9PXRydWUpIHx8KHdhdGNoZWQ9PXRydWUpKT8gbnVsbCA6IDxMaW5rIHRvPXtgL2NvdXJzZXMvJHt2aWRlb19pZH1gfT5RdWl6PC9MaW5rPn1cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvdmlkZW8vJHt2aWRlb19pZH1gfT48L0xpbms+XG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9WaWRlby9WaWRlby5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})