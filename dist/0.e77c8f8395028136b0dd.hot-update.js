webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.onTimeUpdate=_this.onTimeUpdate.bind(_this);_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'iframeStuff',value:function iframeStuff(){console.log('show me the mnoey');var iframe=document.querySelector('iframe');console.log(iframe,'show me the mnoey');var player=new _player2.default(iframe);player.on('play',function(){console.log('the video is playing');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'play',value:function play(e){}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){console.log('updating again');if(this.props.src){console.log(this.props.src,'meo');if(this.props.src.length==0){console.log('hmm');this.forceUpdate();return true;}else{console.log(this.props.src,'show');this.iframeStuff();return false;}for(var i=0;i<10;i++){console.log(this.props.src,'source');if(i=9){this.iframeStuff();this.forceUpdate();console.log('hooooo');}return true;}return true;}this.iframeStuff();return true;}},{key:'componentDidMount',value:function componentDidMount(){// fetch(`http://vimeo.com/api/v2/video/${this.props.video_num}.${json}`)\n// .then(res=>res.json())\n// .then(json=>json)\n// .then(data=>console.log(data, 'lololol'))\n// var iframe = document.querySelector('iframe');\n// console.log(iframe, 'meoooow')\n//     var player = new Player(iframe);\n//      player.on('play', function() {\n//         console.log('played the video!');\n//     });\n//      player.on('timeupdate', function(e) {\n//         console.log(e)\n//         if (e.percent==0.25){\n//           player.pause().then(function() {\n// }).catch(function(error) {\n//     switch (error.name) {\n//         case 'PasswordError':\n//             break;\n//         case 'PrivacyError':\n//         console.log('privacy error')\n//             break;\n//         default:\n//         console.log('check error video')\n//             break;\n//     }\n// });\n//         }\n//     });\n//     player.getVideoTitle().then(function(title) {\n//         console.log('title:', title);\n//     });\n}},{key:'onTimeUpdate',value:function onTimeUpdate(e){console.log(e);}},{key:'end',value:function end(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;console.log(this.props.src);return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},_react2.default.createElement('iframe',{src:video_num},' '),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,className:'vimeo_vid'}),_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,'3'))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuaWZyYW1lU3R1ZmYgPSB0aGlzLmlmcmFtZVN0dWZmLmJpbmQodGhpcylcbiAgfVxuaWZyYW1lU3R1ZmYoKXtcbiAgY29uc29sZS5sb2coICdzaG93IG1lIHRoZSBtbm9leScpXG5cbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICAgIGNvbnNvbGUubG9nKGlmcmFtZSwgJ3Nob3cgbWUgdGhlIG1ub2V5JylcblxuICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKGlmcmFtZSk7XG5cbiAgICAgcGxheWVyLm9uKCdwbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGUgdmlkZW8gaXMgcGxheWluZycpXG5sZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxubGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbiAgICB9KTtcbiAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5wZXJjZW50PT0wLjI1KXtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKS50aGVuKGZ1bmN0aW9uKCkge1xufSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBzd2l0Y2ggKGVycm9yLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGFzc3dvcmRFcnJvcic6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJpdmFjeUVycm9yJzpcbiAgICAgICAgY29uc29sZS5sb2coJ3ByaXZhY3kgZXJyb3InKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBlcnJvciB2aWRlbycpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXIuZ2V0VmlkZW9UaXRsZSgpLnRoZW4oZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpdGxlOicsIHRpdGxlKTtcbiAgICB9KTtcbn1cblxucGxheShlKXtcblxufVxuc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gIGNvbnNvbGUubG9nKCd1cGRhdGluZyBhZ2FpbicpXG4gIGlmICh0aGlzLnByb3BzLnNyYyl7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMsJ21lbycpXG4gICAgaWYodGhpcy5wcm9wcy5zcmMubGVuZ3RoPT0wKXtcbiAgICAgIGNvbnNvbGUubG9nKCdobW0nKVxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMsICdzaG93JylcbiAgICAgIHRoaXMuaWZyYW1lU3R1ZmYoKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMsICdzb3VyY2UnKVxuICAgICAgIGlmIChpPTkpe1xuICAgICAgICB0aGlzLmlmcmFtZVN0dWZmKClcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG5cbiAgICAgICAgY29uc29sZS5sb2coJ2hvb29vbycpXG5cbiAgICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHRoaXMuaWZyYW1lU3R1ZmYoKVxucmV0dXJuIHRydWVcbn1cbmNvbXBvbmVudERpZE1vdW50KCl7XG4vLyBmZXRjaChgaHR0cDovL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJHt0aGlzLnByb3BzLnZpZGVvX251bX0uJHtqc29ufWApXG4vLyAudGhlbihyZXM9PnJlcy5qc29uKCkpXG4vLyAudGhlbihqc29uPT5qc29uKVxuLy8gLnRoZW4oZGF0YT0+Y29uc29sZS5sb2coZGF0YSwgJ2xvbG9sb2wnKSlcblxuLy8gdmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuLy8gY29uc29sZS5sb2coaWZyYW1lLCAnbWVvb29vdycpXG4vLyAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKTtcblxuLy8gICAgICBwbGF5ZXIub24oJ3BsYXknLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllZCB0aGUgdmlkZW8hJyk7XG4vLyAgICAgfSk7XG4vLyAgICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coZSlcbi8vICAgICAgICAgaWYgKGUucGVyY2VudD09MC4yNSl7XG4vLyAgICAgICAgICAgcGxheWVyLnBhdXNlKCkudGhlbihmdW5jdGlvbigpIHtcbi8vIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4vLyAgICAgc3dpdGNoIChlcnJvci5uYW1lKSB7XG4vLyAgICAgICAgIGNhc2UgJ1Bhc3N3b3JkRXJyb3InOlxuLy8gICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgIGNhc2UgJ1ByaXZhY3lFcnJvcic6XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdwcml2YWN5IGVycm9yJylcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgZXJyb3IgdmlkZW8nKVxuLy8gICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gfSk7XG5cbi8vICAgICAgICAgfVxuLy8gICAgIH0pO1xuXG4vLyAgICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4vLyAgICAgfSk7XG5cbn1cbm9uVGltZVVwZGF0ZShlKXtcbiAgY29uc29sZS5sb2coZSlcbn1cblxuZW5kKCl7XG4gIGNvbnNvbGUubG9nKCd2aWRlbyBlbmRlZCcpXG4gIGxldCB2aWRfaWQgPSB0aGlzLnByb3BzLnZpZGVvX2lkXG4gICAgICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICAgZmV0Y2goJy92aWRlb3MvdXBkYXRlLycrdmlkX2lkLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHdhdGNoZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHVzZXJcbiAgICAgIH0pXG4gICAgfSlcblxuZmV0Y2goYC9iYWRnZXMvdXBkYXRlYy8ke3ZpZF9pZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbn1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7Y2xhc3NOYW1lLCBzcmMsIGFsbG93RnVsbFNjcmVlbiwgd2F0Y2hlZCwgdmlkZW9faWQsIGNvdXJzZSwgdmlkZW9fbnVtLCBjb3Vyc2VfdmFsLCBwYXJ0X3ZhbH0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMpXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgIHsoY291cnNlPT10cnVlKSA/XG4gICAgICAgIDxkaXY+XG4gICAgICAgIHsoc3JjIT1udWxsKT88aWZyYW1lIGZyYW1lQm9yZGVyPVwiMFwiIGNsYXNzTmFtZT1cInZpbWVvX3ZpZF9jb3Vyc2VcIiBzcmM9e3NyY30+IDwvaWZyYW1lPiA6IG51bGwgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZWZmZWN0LWxpbHlcIj5cbiAgICAgICAgICA8aWZyYW1lIHNyYz17dmlkZW9fbnVtfT4gPC9pZnJhbWU+XG4gICAgICAgICAgICA8VmltZW9cbiAgICAgICAgICAgIHZpZGVvSWQ9eyB2aWRlb19udW0gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmltZW9fdmlkXCIgLz5cblxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPGgyPkl0ZW0gPHN0cm9uZz4zPC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8cD5CZWF1dGlmdWxseSBzdWJ0bGUgYW5pbWF0ZWQgaG92ZXIgZWZmZWN0IGZvciB5b3VyIGdhbGxlcnk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7KCh3YXRjaGVkPT1mYWxzZSAmJiBjb3Vyc2U9PXRydWUpIHx8KHdhdGNoZWQ9PXRydWUpKT8gbnVsbCA6IDxMaW5rIHRvPXtgL2NvdXJzZXMvJHt2aWRlb19pZH1gfT5RdWl6PC9MaW5rPn1cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvdmlkZW8vJHt2aWRlb19pZH1gfT48L0xpbms+XG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9WaWRlby9WaWRlby5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBdUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})