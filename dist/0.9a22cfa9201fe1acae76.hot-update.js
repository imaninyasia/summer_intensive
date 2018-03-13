webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false,jpeg:null};_this.play=_this.play.bind(_this);_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(){console.log('is this even hitting?');var user=localStorage.getItem('ind');var vid=this.props.video_id;function heu(){(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}}).catch(function(error){return console.log(error);});console.log('did u do it?');}heu();}},{key:'iframeStuff',value:function iframeStuff(){var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.on('play',this.play);player.on('ended',function(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _this2=this;if(this.props.course==true){this.iframeStuff();}if(this.state.jpeg==null){(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.json').then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return _this2.setstate({jpeg:data[0].thumbnail_large});});}console.log(this.state.jpeg,'hmmm');}},{key:'componentWillUpdate',value:function componentWillUpdate(a,b){console.log(this.props,a,this.state,b);}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},this.state.jpeg?_react2.default.createElement('img',{src:this.state.jpeg,className:'vimeo_vid'}):null,_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,video_id))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgICAganBlZzogbnVsbFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuaWZyYW1lU3R1ZmYgPSB0aGlzLmlmcmFtZVN0dWZmLmJpbmQodGhpcylcbiAgfVxuICBwbGF5KCl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lzIHRoaXMgZXZlbiBoaXR0aW5nPycpXG4gICAgICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICAgICAgbGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbiAgICAgICAgIGZ1bmN0aW9uIGhldSgpe1xuICAgICAgICAgIGZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbn0pLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB1IGRvIGl0PycpXG4gICAgICAgICB9XG4gICAgICAgICBoZXUoKTtcblxuICB9XG5pZnJhbWVTdHVmZigpe1xudmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKGlmcmFtZSk7XG5cbiAgICAgcGxheWVyLm9uKCdwbGF5JywgdGhpcy5wbGF5KTtcbiAgICAgcGxheWVyLm9uKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gZW5kZWQnKVxuICAgIGxldCB2aWRfaWQgPSB0aGlzLnByb3BzLnZpZGVvX2lkXG4gICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICAgZmV0Y2goJy92aWRlb3MvdXBkYXRlLycrdmlkX2lkLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHdhdGNoZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHVzZXJcbiAgICAgIH0pXG4gICAgfSlcblxuZmV0Y2goYC9iYWRnZXMvdXBkYXRlYy8ke3ZpZF9pZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbiAgICB9KTtcbiAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5wZXJjZW50PT0wLjI1KXtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKS50aGVuKGZ1bmN0aW9uKCkge1xufSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBzd2l0Y2ggKGVycm9yLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGFzc3dvcmRFcnJvcic6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJpdmFjeUVycm9yJzpcbiAgICAgICAgY29uc29sZS5sb2coJ3ByaXZhY3kgZXJyb3InKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBlcnJvciB2aWRlbycpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXIuZ2V0VmlkZW9UaXRsZSgpLnRoZW4oZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpdGxlOicsIHRpdGxlKTtcbiAgICB9KTtcbn1cblxuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gIGlmICh0aGlzLnByb3BzLmNvdXJzZT09dHJ1ZSl7XG4gIHRoaXMuaWZyYW1lU3R1ZmYoKVxufVxuXG4gIGlmICh0aGlzLnN0YXRlLmpwZWc9PW51bGwpe1xuICAgICBmZXRjaChgaHR0cDovL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJHt0aGlzLnByb3BzLnZpZGVvX251bX0uanNvbmApXG4gIC50aGVuKHJlcz0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGpzb249Pmpzb24pXG4gIC50aGVuKGRhdGE9PnRoaXMuc2V0c3RhdGUoe2pwZWc6IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlfSkpXG4gIH1cbiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpwZWcsICdobW1tJylcblxufVxuY29tcG9uZW50V2lsbFVwZGF0ZShhLCBiKXtcbmNvbnNvbGUubG9nKHRoaXMucHJvcHMsYSx0aGlzLnN0YXRlLCBiKVxufVxuXG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge2NsYXNzTmFtZSwgc3JjLCBhbGxvd0Z1bGxTY3JlZW4sIHdhdGNoZWQsIHZpZGVvX2lkLCBjb3Vyc2UsIHZpZGVvX251bSwgY291cnNlX3ZhbCwgcGFydF92YWx9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICB7KGNvdXJzZT09dHJ1ZSkgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICB7KHNyYyE9bnVsbCk/PGlmcmFtZSBmcmFtZUJvcmRlcj1cIjBcIiBjbGFzc05hbWU9XCJ2aW1lb192aWRfY291cnNlXCIgc3JjPXtzcmN9PiA8L2lmcmFtZT4gOiBudWxsIH1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImVmZmVjdC1saWx5XCI+XG4gICAgICAgICAgeyh0aGlzLnN0YXRlLmpwZWcpPyA8aW1nIHNyYz17dGhpcy5zdGF0ZS5qcGVnfVxuICAgICAgICAgICBjbGFzc05hbWU9XCJ2aW1lb192aWRcIi8+IDogbnVsbH1cblxuXG5cblxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPGgyPkl0ZW0gPHN0cm9uZz57dmlkZW9faWR9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgdGV4dFNoYWRvdzonMXB4IDFweCAjMDAwMDAwJywgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8cD5CZWF1dGlmdWxseSBzdWJ0bGUgYW5pbWF0ZWQgaG92ZXIgZWZmZWN0IGZvciB5b3VyIGdhbGxlcnk8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7KCh3YXRjaGVkPT1mYWxzZSAmJiBjb3Vyc2U9PXRydWUpIHx8KHdhdGNoZWQ9PXRydWUpKT8gbnVsbCA6IDxMaW5rIHRvPXtgL2NvdXJzZXMvJHt2aWRlb19pZH1gfT5RdWl6PC9MaW5rPn1cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvdmlkZW8vJHt2aWRlb19pZH1gfT48L0xpbms+XG4gICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9WaWRlby9WaWRlby5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})