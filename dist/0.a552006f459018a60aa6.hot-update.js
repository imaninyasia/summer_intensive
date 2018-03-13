webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.onTimeUpdate=_this.onTimeUpdate.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(e){console.log('the video is playing');var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){if(this.props.src){for(var i=0;i<5;i++){this.forceUpdate();i++;}return false;}return true;}},{key:'componentDidMount',value:function componentDidMount(){console.log(this.props.src);this.forceUpdate// fetch(`http://vimeo.com/api/v2/video/${this.props.video_num}.${json}`)\n// .then(res=>res.json())\n// .then(json=>json)\n// .then(data=>console.log(data, 'lololol'))\n();var iframe=document.querySelector('iframe');console.log(iframe);var player=new _player2.default(iframe);player.on('play',function(){console.log('played the video!');});player.on('timeupdate',function(e){console.log(e);if(e.percent==0.25){player.pause().then(function(){}).catch(function(error){switch(error.name){case'PasswordError':break;case'PrivacyError':console.log('privacy error');break;default:console.log('check error video');break;}});}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'onTimeUpdate',value:function onTimeUpdate(e){console.log(e);}},{key:'end',value:function end(){console.log('video ended');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,src=='unkown'?_react2.default.createElement('iframe',{frameborder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},_react2.default.createElement('iframe',{src:video_num},' '),_react2.default.createElement(_reactVimeo2.default,{videoId:video_num,className:'vimeo_vid'}),_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,'3'))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgY3VycmVudFRpbWU6IDAsXG4gICAgICBjb3Vyc2VWYWw6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kID0gdGhpcy5lbmQuYmluZCh0aGlzKVxuICAgIHRoaXMub25UaW1lVXBkYXRlID0gdGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKVxuICB9XG5cblxucGxheShlKXtcbmNvbnNvbGUubG9nKCd0aGUgdmlkZW8gaXMgcGxheWluZycpXG5sZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxubGV0IHZpZCA9IHRoaXMucHJvcHMudmlkZW9faWRcbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczp7XG4gICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfVxufSlcbn1cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICBpZiAodGhpcy5wcm9wcy5zcmMpe1xuICAgIGZvciAobGV0IGk9MDsgaTw1OyBpKyspe1xuICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgaSsrXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbnJldHVybiB0cnVlXG59XG5jb21wb25lbnREaWRNb3VudCgpe1xuICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnNyYylcbiAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuLy8gZmV0Y2goYGh0dHA6Ly92aW1lby5jb20vYXBpL3YyL3ZpZGVvLyR7dGhpcy5wcm9wcy52aWRlb19udW19LiR7anNvbn1gKVxuLy8gLnRoZW4ocmVzPT5yZXMuanNvbigpKVxuLy8gLnRoZW4oanNvbj0+anNvbilcbi8vIC50aGVuKGRhdGE9PmNvbnNvbGUubG9nKGRhdGEsICdsb2xvbG9sJykpXG5cblxudmFyIGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuY29uc29sZS5sb2coaWZyYW1lKVxuICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKGlmcmFtZSk7XG5cbiAgICAgcGxheWVyLm9uKCdwbGF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZWQgdGhlIHZpZGVvIScpO1xuICAgIH0pO1xuICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmIChlLnBlcmNlbnQ9PTAuMjUpe1xuICAgICAgICAgIHBsYXllci5wYXVzZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG59KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIHN3aXRjaCAoZXJyb3IubmFtZSkge1xuICAgICAgICBjYXNlICdQYXNzd29yZEVycm9yJzpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdQcml2YWN5RXJyb3InOlxuICAgICAgICBjb25zb2xlLmxvZygncHJpdmFjeSBlcnJvcicpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrIGVycm9yIHZpZGVvJylcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllci5nZXRWaWRlb1RpdGxlKCkudGhlbihmdW5jdGlvbih0aXRsZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGl0bGU6JywgdGl0bGUpO1xuICAgIH0pO1xuXG59XG5vblRpbWVVcGRhdGUoZSl7XG4gIGNvbnNvbGUubG9nKGUpXG59XG5cbmVuZCgpe1xuICBjb25zb2xlLmxvZygndmlkZW8gZW5kZWQnKVxuICBsZXQgdmlkX2lkID0gdGhpcy5wcm9wcy52aWRlb19pZFxuICAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gICAgIGZldGNoKCcvdmlkZW9zL3VwZGF0ZS8nK3ZpZF9pZCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB3YXRjaGVkOiB0cnVlLFxuICAgICAgICB1c2VyOiB1c2VyXG4gICAgICB9KVxuICAgIH0pXG5cbmZldGNoKGAvYmFkZ2VzL3VwZGF0ZWMvJHt2aWRfaWR9LyR7dXNlcn1gLHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIGhlYWRlcnM6e1xuICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH1cbn0pXG59XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3Qge2NsYXNzTmFtZSwgc3JjLCBhbGxvd0Z1bGxTY3JlZW4sIHdhdGNoZWQsIHZpZGVvX2lkLCBjb3Vyc2UsIHZpZGVvX251bSwgY291cnNlX3ZhbCwgcGFydF92YWx9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSA+XG4gICAgICB7KGNvdXJzZT09dHJ1ZSkgP1xuICAgICAgICA8ZGl2PlxuICAgICAgICB7KHNyYz09J3Vua293bicpPzxpZnJhbWUgZnJhbWVib3JkZXI9XCIwXCIgY2xhc3NOYW1lPVwidmltZW9fdmlkX2NvdXJzZVwiIHNyYz17c3JjfT4gPC9pZnJhbWU+IDogbnVsbCB9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyXCI+XG4gICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJlZmZlY3QtbGlseVwiPlxuICAgICAgICAgIDxpZnJhbWUgc3JjPXt2aWRlb19udW19PiA8L2lmcmFtZT5cbiAgICAgICAgICAgIDxWaW1lb1xuICAgICAgICAgICAgdmlkZW9JZD17IHZpZGVvX251bSB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ2aW1lb192aWRcIiAvPlxuXG4gICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCAgY3Vyc29yOiAnaW5oZXJpdCd9fT5cbiAgICAgICAgICAgICAgICA8aDI+SXRlbSA8c3Ryb25nPjM8L3N0cm9uZz48L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ25vbmUnLCB0ZXh0U2hhZG93OicxcHggMXB4ICMwMDAwMDAnLCBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxwPkJlYXV0aWZ1bGx5IHN1YnRsZSBhbmltYXRlZCBob3ZlciBlZmZlY3QgZm9yIHlvdXIgZ2FsbGVyeTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsoKHdhdGNoZWQ9PWZhbHNlICYmIGNvdXJzZT09dHJ1ZSkgfHwod2F0Y2hlZD09dHJ1ZSkpPyBudWxsIDogPExpbmsgdG89e2AvY291cnNlcy8ke3ZpZGVvX2lkfWB9PlF1aXo8L0xpbms+fVxuICAgICAgICAgICAgICA8TGluayB0bz17YC92aWRlby8ke3ZpZGVvX2lkfWB9PjwvTGluaz5cbiAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFpREE7QUFDQTtBQUNBO0FBSkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})