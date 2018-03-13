webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.onTimeUpdate=_this.onTimeUpdate.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(e){console.log('the video is playing');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'componentDidMount',value:function componentDidMount(){console.log(video_num,'is the video number');(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.'+json).then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return console.log(data,'lololol');});this.forceUpdate();var iframe=document.querySelector('iframe');var player=new _player2.default(iframe);player.off('play',onPlay);player.on('timeupdate',function(e){console.log('time is being upated the video!');console.log(e);if(e.percent==0.25){console.log('pause?');player.pause().then(function(){// the video was paused\n}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'onTimeUpdate',value:function onTimeUpdate(e){console.log(e);}},{key:'end',value:function end(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,_react2.default.createElement('iframe',{className:'vimeo_vid_course',src:src},' ')):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},_react2.default.createElement('iframe',{src:video_num},' '),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,className:'vimeo_vid'}),_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,'3'))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICB9XG5cblxucGxheShlKXtcbmNvbnNvbGUubG9nKCd0aGUgdmlkZW8gaXMgcGxheWluZycpXG5sZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxubGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbn1cbmNvbXBvbmVudERpZE1vdW50KCl7XG4gIGNvbnNvbGUubG9nKHZpZGVvX251bSwgICdpcyB0aGUgdmlkZW8gbnVtYmVyJylcbmZldGNoKGBodHRwOi8vdmltZW8uY29tL2FwaS92Mi92aWRlby8ke3RoaXMucHJvcHMudmlkZW9fbnVtfS4ke2pzb259YClcbi50aGVuKHJlcz0+cmVzLmpzb24oKSlcbi50aGVuKGpzb249Pmpzb24pXG4udGhlbihkYXRhPT5jb25zb2xlLmxvZyhkYXRhLCAnbG9sb2xvbCcpKVxuXG4gdGhpcy5mb3JjZVVwZGF0ZSgpXG52YXIgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKTtcblxuICAgIHBsYXllci5vZmYoJ3BsYXknLCBvblBsYXkpO1xuICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aW1lIGlzIGJlaW5nIHVwYXRlZCB0aGUgdmlkZW8hJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmIChlLnBlcmNlbnQ9PTAuMjUpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXVzZT8nKVxuXG4gICAgICAgICAgcGxheWVyLnBhdXNlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAvLyB0aGUgdmlkZW8gd2FzIHBhdXNlZFxufSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICBzd2l0Y2ggKGVycm9yLm5hbWUpIHtcbiAgICAgICAgY2FzZSAnUGFzc3dvcmRFcnJvcic6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUHJpdmFjeUVycm9yJzpcbiAgICAgICAgY29uc29sZS5sb2coJ3ByaXZhY3kgZXJyb3InKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjayBlcnJvciB2aWRlbycpXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5ZXIuZ2V0VmlkZW9UaXRsZSgpLnRoZW4oZnVuY3Rpb24odGl0bGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RpdGxlOicsIHRpdGxlKTtcbiAgICB9KTtcblxufVxub25UaW1lVXBkYXRlKGUpe1xuICBjb25zb2xlLmxvZyhlKVxufVxuXG5lbmQoKXtcbiAgY29uc29sZS5sb2coJ3ZpZGVvIGVuZGVkJylcbiAgbGV0IHZpZF9pZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbiAgICAgICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICBmZXRjaCgnL3ZpZGVvcy91cGRhdGUvJyt2aWRfaWQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgd2F0Y2hlZDogdHJ1ZSxcbiAgICAgICAgdXNlcjogdXNlclxuICAgICAgfSlcbiAgICB9KVxuXG5mZXRjaChgL2JhZGdlcy91cGRhdGVjLyR7dmlkX2lkfS8ke3VzZXJ9YCx7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOntcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9XG59KVxufVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtjbGFzc05hbWUsIHNyYywgYWxsb3dGdWxsU2NyZWVuLCB3YXRjaGVkLCB2aWRlb19pZCwgY291cnNlLCB2aWRlb19udW0sIGNvdXJzZV92YWwsIHBhcnRfdmFsfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gPlxuICAgICAgeyhjb3Vyc2U9PXRydWUpID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJ2aW1lb192aWRfY291cnNlXCIgc3JjPXtzcmN9PiA8L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJlZmZlY3QtbGlseVwiPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPXt2aWRlb19udW19PiA8L2lmcmFtZT5cbiAgICAgICAgICAgIDxWaW1lb1xuICAgICAgICAgICAgdmlkZW9JZD17IHZpZGVvX251bSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aW1lb192aWRcIiAvPlxuXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCAgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8aDI+SXRlbSA8c3Ryb25nPjM8L3N0cm9uZz48L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxwPkJlYXV0aWZ1bGx5IHN1YnRsZSBhbmltYXRlZCBob3ZlciBlZmZlY3QgZm9yIHlvdXIgZ2FsbGVyeTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsoKHdhdGNoZWQ9PWZhbHNlICYmIGNvdXJzZT09dHJ1ZSkgfHwod2F0Y2hlZD09dHJ1ZSkpPyBudWxsIDogPExpbmsgdG89e2AvY291cnNlcy8ke3ZpZGVvX2lkfWB9PlF1aXo8L0xpbms+fVxuICAgICAgICAgICAgICA8TGluayB0bz17YC92aWRlby8ke3ZpZGVvX2lkfWB9PjwvTGluaz5cbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFzREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})