webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false,jpeg:null};_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'iframeStuff',value:function iframeStuff(){var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.on('play',function(){console.log('is this even hitting?');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('ended',function(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _this2=this;if(this.props.course==true){this.iframeStuff();}if(this.state.jpeg==null){(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.json').then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return _this2.setstate({jpeg:data[0].thumbnail_large});});}console.log(this.state.jpeg,'hmmm');}},{key:'componentWillUpdate',value:function componentWillUpdate(a,b){console.log(a,b);}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},this.state.jpeg?_react2.default.createElement('img',{src:this.state.jpeg,className:'vimeo_vid'}):null,_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,video_id))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgICAganBlZzogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuaWZyYW1lU3R1ZmYgPSB0aGlzLmlmcmFtZVN0dWZmLmJpbmQodGhpcylcbiAgfVxuaWZyYW1lU3R1ZmYoKXtcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihpZnJhbWUpO1xuXG4gICAgIHBsYXllci5vbigncGxheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgY29uc29sZS5sb2coJ2lzIHRoaXMgZXZlbiBoaXR0aW5nPycpXG4gICAgICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICAgICAgbGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbiAgICAgICAgIGZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbn0pXG4gICAgfSk7XG4gICAgIHBsYXllci5vbignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ZpZGVvIGVuZGVkJylcbiAgICBsZXQgdmlkX2lkID0gdGhpcy5wcm9wcy52aWRlb19pZFxuXG4gICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICAgZmV0Y2goJy92aWRlb3MvdXBkYXRlLycrdmlkX2lkLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHdhdGNoZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHVzZXJcbiAgICAgIH0pXG4gICAgfSlcblxuZmV0Y2goYC9iYWRnZXMvdXBkYXRlYy8ke3ZpZF9pZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbiAgICB9KTtcbiAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5wZXJjZW50PT0wLjI1KXtcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKS50aGVuKGZ1bmN0aW9uKCkge1xufSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBzd2l0Y2ggKGVycm9yLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGFzc3dvcmRFcnJvcic6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJpdmFjeUVycm9yJzpcbiAgICAgICAgY29uc29sZS5sb2coJ3ByaXZhY3kgZXJyb3InKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBlcnJvciB2aWRlbycpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXIuZ2V0VmlkZW9UaXRsZSgpLnRoZW4oZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpdGxlOicsIHRpdGxlKTtcbiAgICB9KTtcbn1cblxuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gIGlmICh0aGlzLnByb3BzLmNvdXJzZT09dHJ1ZSl7XG4gIHRoaXMuaWZyYW1lU3R1ZmYoKVxufVxuXG4gIGlmICh0aGlzLnN0YXRlLmpwZWc9PW51bGwpe1xuICAgICBmZXRjaChgaHR0cDovL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJHt0aGlzLnByb3BzLnZpZGVvX251bX0uanNvbmApXG4gIC50aGVuKHJlcz0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGpzb249Pmpzb24pXG4gIC50aGVuKGRhdGE9PnRoaXMuc2V0c3RhdGUoe2pwZWc6IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlfSkpXG4gIH1cbiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmpwZWcsICdobW1tJylcbn1cbmNvbXBvbmVudFdpbGxVcGRhdGUoYSwgYil7XG5jb25zb2xlLmxvZyhhLGIpXG59XG5cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7Y2xhc3NOYW1lLCBzcmMsIGFsbG93RnVsbFNjcmVlbiwgd2F0Y2hlZCwgdmlkZW9faWQsIGNvdXJzZSwgdmlkZW9fbnVtLCBjb3Vyc2VfdmFsLCBwYXJ0X3ZhbH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9ID5cbiAgICAgIHsoY291cnNlPT10cnVlKSA/XG4gICAgICAgIDxkaXY+XG4gICAgICAgIHsoc3JjIT1udWxsKT88aWZyYW1lIGZyYW1lQm9yZGVyPVwiMFwiIGNsYXNzTmFtZT1cInZpbWVvX3ZpZF9jb3Vyc2VcIiBzcmM9e3NyY30+IDwvaWZyYW1lPiA6IG51bGwgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGNvbC1tZC00IGNvbC1zbS02IGNvbC14cy0xMlwiPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiZWZmZWN0LWxpbHlcIj5cbiAgICAgICAgICB7KHRoaXMuc3RhdGUuanBlZyk/IDxpbWcgc3JjPXt0aGlzLnN0YXRlLmpwZWd9XG4gICAgICAgICAgIGNsYXNzTmFtZT1cInZpbWVvX3ZpZFwiLz4gOiBudWxsfVxuXG5cblxuXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCAgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8aDI+SXRlbSA8c3Ryb25nPnt2aWRlb19pZH08L3N0cm9uZz48L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxwPkJlYXV0aWZ1bGx5IHN1YnRsZSBhbmltYXRlZCBob3ZlciBlZmZlY3QgZm9yIHlvdXIgZ2FsbGVyeTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsoKHdhdGNoZWQ9PWZhbHNlICYmIGNvdXJzZT09dHJ1ZSkgfHwod2F0Y2hlZD09dHJ1ZSkpPyBudWxsIDogPExpbmsgdG89e2AvY291cnNlcy8ke3ZpZGVvX2lkfWB9PlF1aXo8L0xpbms+fVxuICAgICAgICAgICAgICA8TGluayB0bz17YC92aWRlby8ke3ZpZGVvX2lkfWB9PjwvTGluaz5cbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})