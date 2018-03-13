webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.onTimeUpdate=_this.onTimeUpdate.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(e){console.log('the video is playing');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){}},{key:'componentDidMount',value:function componentDidMount(){this.forceUpdate// fetch(`http://vimeo.com/api/v2/video/${this.props.video_num}.${json}`)\n// .then(res=>res.json())\n// .then(json=>json)\n// .then(data=>console.log(data, 'lololol'))\n();var iframe=document.querySelector('iframe');console.log(iframe);var player=new _player2.default(iframe);player.on('play',function(){console.log('played the video!');});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'onTimeUpdate',value:function onTimeUpdate(e){console.log(e);}},{key:'end',value:function end(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,_react2.default.createElement('iframe',{width:'640',height:'360',frameborder:'0',webkitallowfullscreen:true,mozallowfullscreen:true,allowfullscreenclassName:'vimeo_vid_course',src:src},' ')):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},_react2.default.createElement('iframe',{src:video_num},' '),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,className:'vimeo_vid'}),_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,'3'))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICB9XG5cblxucGxheShlKXtcbmNvbnNvbGUubG9nKCd0aGUgdmlkZW8gaXMgcGxheWluZycpXG5sZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxubGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbn1cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuXG59XG5jb21wb25lbnREaWRNb3VudCgpe1xuICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4vLyBmZXRjaChgaHR0cDovL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJHt0aGlzLnByb3BzLnZpZGVvX251bX0uJHtqc29ufWApXG4vLyAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4vLyAudGhlbihqc29uPT5qc29uKVxuLy8gLnRoZW4oZGF0YT0+Y29uc29sZS5sb2coZGF0YSwgJ2xvbG9sb2wnKSlcblxuXG52YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5jb25zb2xlLmxvZyhpZnJhbWUpXG4gICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKTtcblxuICAgICBwbGF5ZXIub24oJ3BsYXknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXllZCB0aGUgdmlkZW8hJyk7XG4gICAgfSk7XG4gICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYgKGUucGVyY2VudD09MC4yNSl7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCkudGhlbihmdW5jdGlvbigpIHtcbn0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgc3dpdGNoIChlcnJvci5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ1Bhc3N3b3JkRXJyb3InOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ByaXZhY3lFcnJvcic6XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcml2YWN5IGVycm9yJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgZXJyb3IgdmlkZW8nKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG5cbn1cbm9uVGltZVVwZGF0ZShlKXtcbiAgY29uc29sZS5sb2coZSlcbn1cblxuZW5kKCl7XG4gIGNvbnNvbGUubG9nKCd2aWRlbyBlbmRlZCcpXG4gIGxldCB2aWRfaWQgPSB0aGlzLnByb3BzLnZpZGVvX2lkXG4gICAgICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICAgZmV0Y2goJy92aWRlb3MvdXBkYXRlLycrdmlkX2lkLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHdhdGNoZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHVzZXJcbiAgICAgIH0pXG4gICAgfSlcblxuZmV0Y2goYC9iYWRnZXMvdXBkYXRlYy8ke3ZpZF9pZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbn1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7Y2xhc3NOYW1lLCBzcmMsIGFsbG93RnVsbFNjcmVlbiwgd2F0Y2hlZCwgdmlkZW9faWQsIGNvdXJzZSwgdmlkZW9fbnVtLCBjb3Vyc2VfdmFsLCBwYXJ0X3ZhbH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgIHsoY291cnNlPT10cnVlKSA/XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpZnJhbWUgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIzNjBcIiBmcmFtZWJvcmRlcj1cIjBcIiB3ZWJraXRhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93ZnVsbHNjcmVlbmNsYXNzTmFtZT1cInZpbWVvX3ZpZF9jb3Vyc2VcIiBzcmM9e3NyY30+IDwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImVmZmVjdC1saWx5XCI+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9e3ZpZGVvX251bX0+IDwvaWZyYW1lPlxuICAgICAgICAgICAgPFZpbWVvXG4gICAgICAgICAgICB2aWRlb0lkPXsgdmlkZW9fbnVtIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpbWVvX3ZpZFwiIC8+XG5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIHRleHRTaGFkb3c6JzFweCAxcHggIzAwMDAwMCcsICBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxoMj5JdGVtIDxzdHJvbmc+Mzwvc3Ryb25nPjwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIHRleHRTaGFkb3c6JzFweCAxcHggIzAwMDAwMCcsIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPHA+QmVhdXRpZnVsbHkgc3VidGxlIGFuaW1hdGVkIGhvdmVyIGVmZmVjdCBmb3IgeW91ciBnYWxsZXJ5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeygod2F0Y2hlZD09ZmFsc2UgJiYgY291cnNlPT10cnVlKSB8fCh3YXRjaGVkPT10cnVlKSk/IG51bGwgOiA8TGluayB0bz17YC9jb3Vyc2VzLyR7dmlkZW9faWR9YH0+UXVpejwvTGluaz59XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3ZpZGVvLyR7dmlkZW9faWR9YH0+PC9MaW5rPlxuICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvVmlkZW8vVmlkZW8uanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQXdDQTtBQUNBO0FBQ0E7QUFKQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})