webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false,jpeg:null};_this.play=_this.play.bind(_this);_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(){console.log('is this even hitting?');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}}).catch(function(error){return console.log(error);});console.log('did u do it?');}},{key:'iframeStuff',value:function iframeStuff(){var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);var counter=0;player.on('play',this.play);player.on('ended',function(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});console.log(this);(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});});player.on('timeupdate',function(e){console.log(e);if(e.percent>=0.25&&e.percent<=0.257){if(counter==0){counter++;player.pause().then(function(){console.log(counter);}).catch(function(error){console.log(error);});}else{console.log('counter nppp',counter);}}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _this2=this;if(this.props.course==true&&prevProps!=this.props){this.iframeStuff();}if(this.state.jpeg==null||prevProps!=this.props){(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.json').then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return _this2.setState({jpeg:data[0].thumbnail_large});});}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(a,b){}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},this.state.jpeg?_react2.default.createElement('img',{style:{borderRadius:'0px'},src:this.state.jpeg}):null,_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,video_id))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgICAganBlZzogbnVsbFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuaWZyYW1lU3R1ZmYgPSB0aGlzLmlmcmFtZVN0dWZmLmJpbmQodGhpcylcbiAgfVxuICBwbGF5KCl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lzIHRoaXMgZXZlbiBoaXR0aW5nPycpXG4gICAgICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICAgICAgbGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcblxuICAgICAgICAgIGZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RpZCB1IGRvIGl0PycpXG5cblxuXG4gIH1cbmlmcmFtZVN0dWZmKCl7XG52YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKTtcbiAgICBsZXQgY291bnRlciA9IDBcbiAgICAgcGxheWVyLm9uKCdwbGF5JywgdGhpcy5wbGF5KTtcbiAgICAgcGxheWVyLm9uKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndmlkZW8gZW5kZWQnKVxuICAgIGxldCB2aWRfaWQgPSB0aGlzLnByb3BzLnZpZGVvX2lkXG4gICAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICAgZmV0Y2goJy92aWRlb3MvdXBkYXRlLycrdmlkX2lkLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHdhdGNoZWQ6IHRydWUsXG4gICAgICAgIHVzZXI6IHVzZXJcbiAgICAgIH0pXG4gICAgfSlcbmNvbnNvbGUubG9nKHRoaXMpXG5mZXRjaChgL2JhZGdlcy91cGRhdGVjLyR7dmlkX2lkfS8ke3VzZXJ9YCx7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOntcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9XG59KVxuICAgIH0pO1xuICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmIChlLnBlcmNlbnQ+PTAuMjUgJiZlLnBlcmNlbnQ8PTAuMjU3KXtcblxuICAgICAgICAgIGlmIChjb3VudGVyPT0wKXtcbiAgICAgICAgICAgIGNvdW50ZXIgKytcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuY29uc29sZS5sb2coY291bnRlcilcbn0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gIGNvbnNvbGUubG9nKGVycm9yKVxufSk7XG59ZWxzZXtcbiAgY29uc29sZS5sb2coJ2NvdW50ZXIgbnBwcCcsIGNvdW50ZXIpXG59XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllci5nZXRWaWRlb1RpdGxlKCkudGhlbihmdW5jdGlvbih0aXRsZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGl0bGU6JywgdGl0bGUpO1xuICAgIH0pO1xufVxuXG5jb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblxuICBpZiAodGhpcy5wcm9wcy5jb3Vyc2U9PXRydWUgJiYgcHJldlByb3BzICE9IHRoaXMucHJvcHMpe1xuICB0aGlzLmlmcmFtZVN0dWZmKClcbn1cbmlmICh0aGlzLnN0YXRlLmpwZWc9PW51bGwgfHwgcHJldlByb3BzICE9IHRoaXMucHJvcHMpe1xuICAgICBmZXRjaChgaHR0cDovL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJHt0aGlzLnByb3BzLnZpZGVvX251bX0uanNvbmApXG4gIC50aGVuKHJlcz0+IHJlcy5qc29uKCkpXG4gIC50aGVuKGpzb249Pmpzb24pXG4gIC50aGVuKGRhdGE9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7anBlZzogZGF0YVswXS50aHVtYm5haWxfbGFyZ2V9KVxuICAgIClcbiAgfVxuXG59XG5cbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYSxiKXtcbn1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtjbGFzc05hbWUsIHNyYywgYWxsb3dGdWxsU2NyZWVuLCB3YXRjaGVkLCB2aWRlb19pZCwgY291cnNlLCB2aWRlb19udW0sIGNvdXJzZV92YWwsIHBhcnRfdmFsfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gPlxuICAgICAgeyhjb3Vyc2U9PXRydWUpID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgeyhzcmMhPW51bGwpPzxpZnJhbWUgZnJhbWVCb3JkZXI9XCIwXCIgY2xhc3NOYW1lPVwidmltZW9fdmlkX2NvdXJzZVwiIHNyYz17c3JjfT4gPC9pZnJhbWU+IDogbnVsbCB9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJlZmZlY3QtbGlseVwiPlxuICAgICAgICAgIHsodGhpcy5zdGF0ZS5qcGVnKT8gPGltZyBzdHlsZT17e2JvcmRlclJhZGl1czogJzBweCd9fSBzcmM9e3RoaXMuc3RhdGUuanBlZ30gLz4gOiBudWxsfVxuXG5cblxuXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCAgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8aDI+SXRlbSA8c3Ryb25nPnt2aWRlb19pZH08L3N0cm9uZz48L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxwPkJlYXV0aWZ1bGx5IHN1YnRsZSBhbmltYXRlZCBob3ZlciBlZmZlY3QgZm9yIHlvdXIgZ2FsbGVyeTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsoKHdhdGNoZWQ9PWZhbHNlICYmIGNvdXJzZT09dHJ1ZSkgfHwod2F0Y2hlZD09dHJ1ZSkpPyBudWxsIDogPExpbmsgdG89e2AvY291cnNlcy8ke3ZpZGVvX2lkfWB9PlF1aXo8L0xpbms+fVxuICAgICAgICAgICAgICA8TGluayB0bz17YC92aWRlby8ke3ZpZGVvX2lkfWB9PjwvTGluaz5cbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})