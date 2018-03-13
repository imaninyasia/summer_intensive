webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.onTimeUpdate=_this.onTimeUpdate.bind(_this);_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'iframeStuff',value:function iframeStuff(){var iframe=document.querySelector('iframe');console.log(iframe);var player=new _player2.default(iframe);player.on('play',function(){console.log('the video is playing');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'play',value:function play(e){}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){console.log('updating again');if(this.props.src){console.log(this.props.src,'meo');for(var i=0;i<10;i++){console.log(this.props.src,'source');if(i=9){console.log('hooooo');}return true;}iframeStuff();return false;}return true;}},{key:'componentDidMount',value:function componentDidMount(){console.log(this.props.src,'meowww'// fetch(`http://vimeo.com/api/v2/video/${this.props.video_num}.${json}`)\n// .then(res=>res.json())\n// .then(json=>json)\n// .then(data=>console.log(data, 'lololol'))\n// var iframe = document.querySelector('iframe');\n// console.log(iframe, 'meoooow')\n//     var player = new Player(iframe);\n//      player.on('play', function() {\n//         console.log('played the video!');\n//     });\n//      player.on('timeupdate', function(e) {\n//         console.log(e)\n//         if (e.percent==0.25){\n//           player.pause().then(function() {\n// }).catch(function(error) {\n//     switch (error.name) {\n//         case 'PasswordError':\n//             break;\n//         case 'PrivacyError':\n//         console.log('privacy error')\n//             break;\n//         default:\n//         console.log('check error video')\n//             break;\n//     }\n// });\n//         }\n//     });\n//     player.getVideoTitle().then(function(title) {\n//         console.log('title:', title);\n//     });\n);}},{key:'onTimeUpdate',value:function onTimeUpdate(e){console.log(e);}},{key:'end',value:function end(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;console.log(this.props.src);return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},_react2.default.createElement('iframe',{src:video_num},' '),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,className:'vimeo_vid'}),_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,'3'))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuaWZyYW1lU3R1ZmYgPSB0aGlzLmlmcmFtZVN0dWZmLmJpbmQodGhpcylcbiAgfVxuaWZyYW1lU3R1ZmYoKXtcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbmNvbnNvbGUubG9nKGlmcmFtZSlcbiAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihpZnJhbWUpO1xuXG4gICAgIHBsYXllci5vbigncGxheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhlIHZpZGVvIGlzIHBsYXlpbmcnKVxubGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbmxldCB2aWQgPSB0aGlzLnByb3BzLnZpZGVvX2lkXG5mZXRjaChgL2JhZGdlcy91cGRhdGUvJHt2aWR9LyR7dXNlcn1gLHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6e1xuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH1cbn0pXG4gICAgfSk7XG4gICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgaWYgKGUucGVyY2VudD09MC4yNSl7XG4gICAgICAgICAgcGxheWVyLnBhdXNlKCkudGhlbihmdW5jdGlvbigpIHtcbn0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgc3dpdGNoIChlcnJvci5uYW1lKSB7XG4gICAgICAgIGNhc2UgJ1Bhc3N3b3JkRXJyb3InOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ByaXZhY3lFcnJvcic6XG4gICAgICAgIGNvbnNvbGUubG9nKCdwcml2YWN5IGVycm9yJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgZXJyb3IgdmlkZW8nKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG59XG5cbnBsYXkoZSl7XG5cbn1cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICBjb25zb2xlLmxvZygndXBkYXRpbmcgYWdhaW4nKVxuICBpZiAodGhpcy5wcm9wcy5zcmMpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc3JjLCdtZW8nKVxuICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMsICdzb3VyY2UnKVxuICAgICAgIGlmIChpPTkpe1xuICAgICAgICBjb25zb2xlLmxvZygnaG9vb29vJylcbiAgICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGlmcmFtZVN0dWZmKClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxucmV0dXJuIHRydWVcbn1cbmNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5zcmMsICdtZW93d3cnKVxuLy8gZmV0Y2goYGh0dHA6Ly92aW1lby5jb20vYXBpL3YyL3ZpZGVvLyR7dGhpcy5wcm9wcy52aWRlb19udW19LiR7anNvbn1gKVxuLy8gLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuLy8gLnRoZW4oanNvbj0+anNvbilcbi8vIC50aGVuKGRhdGE9PmNvbnNvbGUubG9nKGRhdGEsICdsb2xvbG9sJykpXG5cbi8vIHZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbi8vIGNvbnNvbGUubG9nKGlmcmFtZSwgJ21lb29vb3cnKVxuLy8gICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKGlmcmFtZSk7XG5cbi8vICAgICAgcGxheWVyLm9uKCdwbGF5JywgZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZWQgdGhlIHZpZGVvIScpO1xuLy8gICAgIH0pO1xuLy8gICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgICAgIGlmIChlLnBlcmNlbnQ9PTAuMjUpe1xuLy8gICAgICAgICAgIHBsYXllci5wYXVzZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4vLyB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuLy8gICAgIHN3aXRjaCAoZXJyb3IubmFtZSkge1xuLy8gICAgICAgICBjYXNlICdQYXNzd29yZEVycm9yJzpcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICBjYXNlICdQcml2YWN5RXJyb3InOlxuLy8gICAgICAgICBjb25zb2xlLmxvZygncHJpdmFjeSBlcnJvcicpXG4vLyAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIGVycm9yIHZpZGVvJylcbi8vICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyAgICAgICAgIH1cbi8vICAgICB9KTtcblxuLy8gICAgIHBsYXllci5nZXRWaWRlb1RpdGxlKCkudGhlbihmdW5jdGlvbih0aXRsZSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGl0bGU6JywgdGl0bGUpO1xuLy8gICAgIH0pO1xuXG59XG5vblRpbWVVcGRhdGUoZSl7XG4gIGNvbnNvbGUubG9nKGUpXG59XG5cbmVuZCgpe1xuICBjb25zb2xlLmxvZygndmlkZW8gZW5kZWQnKVxuICBsZXQgdmlkX2lkID0gdGhpcy5wcm9wcy52aWRlb19pZFxuICAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gICAgIGZldGNoKCcvdmlkZW9zL3VwZGF0ZS8nK3ZpZF9pZCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB3YXRjaGVkOiB0cnVlLFxuICAgICAgICB1c2VyOiB1c2VyXG4gICAgICB9KVxuICAgIH0pXG5cbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZWMvJHt2aWRfaWR9LyR7dXNlcn1gLHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6e1xuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH1cbn0pXG59XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge2NsYXNzTmFtZSwgc3JjLCBhbGxvd0Z1bGxTY3JlZW4sIHdhdGNoZWQsIHZpZGVvX2lkLCBjb3Vyc2UsIHZpZGVvX251bSwgY291cnNlX3ZhbCwgcGFydF92YWx9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc3JjKVxuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICB7KGNvdXJzZT09dHJ1ZSkgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICB7KHNyYyE9bnVsbCk/PGlmcmFtZSBmcmFtZUJvcmRlcj1cIjBcIiBjbGFzc05hbWU9XCJ2aW1lb192aWRfY291cnNlXCIgc3JjPXtzcmN9PiA8L2lmcmFtZT4gOiBudWxsIH1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImVmZmVjdC1saWx5XCI+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9e3ZpZGVvX251bX0+IDwvaWZyYW1lPlxuICAgICAgICAgICAgPFZpbWVvXG4gICAgICAgICAgICB2aWRlb0lkPXsgdmlkZW9fbnVtIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpbWVvX3ZpZFwiIC8+XG5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIHRleHRTaGFkb3c6JzFweCAxcHggIzAwMDAwMCcsICBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxoMj5JdGVtIDxzdHJvbmc+Mzwvc3Ryb25nPjwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIHRleHRTaGFkb3c6JzFweCAxcHggIzAwMDAwMCcsIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPHA+QmVhdXRpZnVsbHkgc3VidGxlIGFuaW1hdGVkIGhvdmVyIGVmZmVjdCBmb3IgeW91ciBnYWxsZXJ5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeygod2F0Y2hlZD09ZmFsc2UgJiYgY291cnNlPT10cnVlKSB8fCh3YXRjaGVkPT10cnVlKSk/IG51bGwgOiA8TGluayB0bz17YC9jb3Vyc2VzLyR7dmlkZW9faWR9YH0+UXVpejwvTGluaz59XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3ZpZGVvLyR7dmlkZW9faWR9YH0+PC9MaW5rPlxuICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvVmlkZW8vVmlkZW8uanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQXNGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFuQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})