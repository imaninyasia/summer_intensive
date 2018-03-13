webpackHotUpdate(0,{

/***/ 187:
/*!****************************************!*\
  !*** ./src/Components/Video/Video.jsx ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _QuizList=__webpack_require__(/*! ../QuizList/QuizList.jsx */ 110);var _QuizList2=_interopRequireDefault(_QuizList);__webpack_require__(/*! ./Video.css */ 401);var _reactVimeo=__webpack_require__(/*! react-vimeo */ 184);var _reactVimeo2=_interopRequireDefault(_reactVimeo);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _player=__webpack_require__(/*! @vimeo/player */ 598);var _player2=_interopRequireDefault(_player);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Video=function(_Component){_inherits(Video,_Component);function Video(props){_classCallCheck(this,Video);var _this=_possibleConstructorReturn(this,(Video.__proto__||Object.getPrototypeOf(Video)).call(this,props));_this.state={loading:false,duration:0,currentTime:0,courseVal:false,jpeg:null,inner:0,showModal:false};_this.play=_this.play.bind(_this);_this.end=_this.end.bind(_this);_this.iframeStuff=_this.iframeStuff.bind(_this);return _this;}_createClass(Video,[{key:'play',value:function play(){var user=localStorage.getItem('ind');var vid=this.props.video_id;(0,_isomorphicFetch2.default)('/badges/update/'+vid+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'end',value:function end(){console.log('endedddd');var vid_id=this.props.video_id;var user=localStorage.getItem('ind');(0,_isomorphicFetch2.default)('/videos/update/'+vid_id,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({watched:true,user:user})});(0,_isomorphicFetch2.default)('/badges/updatec/'+vid_id+'/'+user,{method:'POST',headers:{'content-type':'application/json'}});}},{key:'iframeStuff',value:function iframeStuff(){// on time update on condition add to this.state.inner variable\n// if variable >0 don't pause\n// on pause modal display value setState=true\n// on quiz.submit => video.play\n// ***make sure video doesn't pause more than once***\nvar iframe=document.querySelector('iframe');var counter=0;var player=new _player2.default(iframe);player.on('play',this.play);player.on('ended',this.end);player.on('timeupdate',function(e){console.log(e);var trial=Math.floor(e.seconds);if(trial==4){if(counter==0){counter++;player.pause().then(function(){console.log(counter);this.openM();console.log(this);}).catch(function(error){console.log(error);});}else{'';console.log('counter nppp',counter);}}});player.getVideoTitle().then(function(title){console.log('title:',title);});}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _this2=this;if(this.props.course==true&&prevProps!=this.props){this.iframeStuff();}if(this.state.jpeg==null||prevProps!=this.props){(0,_isomorphicFetch2.default)('http://vimeo.com/api/v2/video/'+this.props.video_num+'.json').then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){return _this2.setState({jpeg:data[0].thumbnail_large});});}}},{key:'getInitialState',value:function getInitialState(){return{showModal:false};}},{key:'closeM',value:function closeM(){this.setState({showModal:false});}},{key:'openM',value:function openM(){this.setState({showModal:true});}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(a,b){}},{key:'render',value:function render(){var _props=this.props,className=_props.className,src=_props.src,allowFullScreen=_props.allowFullScreen,watched=_props.watched,video_id=_props.video_id,course=_props.course,video_num=_props.video_num,course_val=_props.course_val,part_val=_props.part_val;return _react2.default.createElement('div',{className:className},course==true?_react2.default.createElement('div',null,_react2.default.createElement(_reactBootstrap.Modal,{show:this.state.showModal,onHide:this.closeM},_react2.default.createElement(_reactBootstrap.Modal.Header,null,_react2.default.createElement(_reactBootstrap.Modal.Title,{style:{textAlign:'center'}},'Upload Profile Image')),_react2.default.createElement(_reactBootstrap.Modal.Body,null,_react2.default.createElement('div',null,_react2.default.createElement('label',null,'File '),_react2.default.createElement('input',{type:'file'}))),_react2.default.createElement(_reactBootstrap.Modal.Footer,null,_react2.default.createElement(_reactBootstrap.Button,{onClick:this.closeM},'Close'))),src!=null?_react2.default.createElement('iframe',{frameBorder:'0',className:'vimeo_vid_course',src:src},' '):null):_react2.default.createElement('div',{className:'grid col-md-4 col-sm-6 col-xs-12'},_react2.default.createElement('figure',{className:'effect-lily'},this.state.jpeg?_react2.default.createElement('img',{style:{borderRadius:'0px'},src:this.state.jpeg}):null,_react2.default.createElement('figcaption',null,_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('h2',null,'Item ',_react2.default.createElement('strong',null,video_id))),_react2.default.createElement('div',{className:'editContent',style:{outline:'none',textShadow:'1px 1px #000000',cursor:'inherit'}},_react2.default.createElement('p',null,'Beautifully subtle animated hover effect for your gallery')),watched==false&&course==true||watched==true?null:_react2.default.createElement(_reactRouterDom.Link,{to:'/courses/'+video_id},'Quiz'),_react2.default.createElement(_reactRouterDom.Link,{to:'/video/'+video_id})))));}}]);return Video;}(_react.Component);exports.default=Video;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzeD81Y2VmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUXVpekxpc3QgZnJvbSAnLi4vUXVpekxpc3QvUXVpekxpc3QuanN4J1xuaW1wb3J0ICcuL1ZpZGVvLmNzcydcbmltcG9ydCBWaW1lbyBmcm9tICdyZWFjdC12aW1lbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJ0B2aW1lby9wbGF5ZXInO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZHVyYXRpb246IDAsXG4gICAgICBjdXJyZW50VGltZTogMCxcbiAgICAgIGNvdXJzZVZhbDogZmFsc2UsXG4gICAgICBqcGVnOiBudWxsLFxuICAgICAgaW5uZXI6IDAsXG4gICAgICBzaG93TW9kYWw6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMucGxheSA9IHRoaXMucGxheS5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbmQgPSB0aGlzLmVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5pZnJhbWVTdHVmZiA9IHRoaXMuaWZyYW1lU3R1ZmYuYmluZCh0aGlzKVxuICB9XG4gIHBsYXkoKXtcbiAgICAgICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gICAgICAgICBsZXQgdmlkID0gdGhpcy5wcm9wcy52aWRlb19pZFxuICAgICAgICAgIGZldGNoKGAvYmFkZ2VzL3VwZGF0ZS8ke3ZpZH0vJHt1c2VyfWAse1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gIH1cbiAgZW5kKCl7XG4gICAgY29uc29sZS5sb2coJ2VuZGVkZGRkJylcbiAgICBsZXQgdmlkX2lkID0gdGhpcy5wcm9wcy52aWRlb19pZFxuICAgIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gICAgIGZldGNoKCcvdmlkZW9zL3VwZGF0ZS8nK3ZpZF9pZCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB3YXRjaGVkOiB0cnVlLFxuICAgICAgICB1c2VyOiB1c2VyXG4gICAgICB9KVxuICAgIH0pXG5mZXRjaChgL2JhZGdlcy91cGRhdGVjLyR7dmlkX2lkfS8ke3VzZXJ9YCx7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOntcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9XG59KVxuICB9XG5pZnJhbWVTdHVmZigpe1xuICAvLyBvbiB0aW1lIHVwZGF0ZSBvbiBjb25kaXRpb24gYWRkIHRvIHRoaXMuc3RhdGUuaW5uZXIgdmFyaWFibGVcbiAgLy8gaWYgdmFyaWFibGUgPjAgZG9uJ3QgcGF1c2VcbiAgLy8gb24gcGF1c2UgbW9kYWwgZGlzcGxheSB2YWx1ZSBzZXRTdGF0ZT10cnVlXG4gIC8vIG9uIHF1aXouc3VibWl0ID0+IHZpZGVvLnBsYXlcbiAgLy8gKioqbWFrZSBzdXJlIHZpZGVvIGRvZXNuJ3QgcGF1c2UgbW9yZSB0aGFuIG9uY2UqKipcbnZhciBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcbiAgbGV0IGNvdW50ZXIgPSAwXG4gICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoaWZyYW1lKTtcbiAgICAgcGxheWVyLm9uKCdwbGF5JywgdGhpcy5wbGF5KTtcbiAgICAgcGxheWVyLm9uKCdlbmRlZCcsIHRoaXMuZW5kKTtcbiAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBsZXQgdHJpYWwgPSBNYXRoLmZsb29yKGUuc2Vjb25kcylcbiAgICAgICAgaWYgKHRyaWFsPT00KXtcbiAgICAgICAgICBpZiAoY291bnRlcj09MCl7XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgICBwbGF5ZXIucGF1c2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY291bnRlcilcbiAgICAgICAgICAgIHRoaXMub3Blbk0oKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcylcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9ZWxzZXtgYFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY291bnRlciBucHBwJywgY291bnRlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyLmdldFZpZGVvVGl0bGUoKS50aGVuKGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aXRsZTonLCB0aXRsZSk7XG4gICAgfSk7XG59XG5cbmNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuXG4gIGlmICh0aGlzLnByb3BzLmNvdXJzZT09dHJ1ZSAmJiBwcmV2UHJvcHMgIT0gdGhpcy5wcm9wcyl7XG4gIHRoaXMuaWZyYW1lU3R1ZmYoKVxufVxuaWYgKHRoaXMuc3RhdGUuanBlZz09bnVsbCB8fCBwcmV2UHJvcHMgIT0gdGhpcy5wcm9wcyl7XG4gICAgIGZldGNoKGBodHRwOi8vdmltZW8uY29tL2FwaS92Mi92aWRlby8ke3RoaXMucHJvcHMudmlkZW9fbnVtfS5qc29uYClcbiAgLnRoZW4ocmVzPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oanNvbj0+anNvbilcbiAgLnRoZW4oZGF0YT0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtqcGVnOiBkYXRhWzBdLnRodW1ibmFpbF9sYXJnZX0pXG4gICAgKVxuICB9XG5cbn1cblxuIGdldEluaXRpYWxTdGF0ZSgpe1xuICAgIHJldHVybiB7IHNob3dNb2RhbDogZmFsc2UgfTtcbiAgfVxuXG4gIGNsb3NlTSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IGZhbHNlIH0pO1xuICB9XG5cbiAgb3Blbk0oKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xuICB9XG5cbmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYSxiKXtcbn1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtjbGFzc05hbWUsIHNyYywgYWxsb3dGdWxsU2NyZWVuLCB3YXRjaGVkLCB2aWRlb19pZCwgY291cnNlLCB2aWRlb19udW0sIGNvdXJzZV92YWwsIHBhcnRfdmFsfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gPlxuICAgICAgeyhjb3Vyc2U9PXRydWUpID9cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dNb2RhbH0gb25IaWRlPXt0aGlzLmNsb3NlTX0+XG4gICAgICAgICAgPE1vZGFsLkhlYWRlciA+XG4gICAgICAgICAgICA8TW9kYWwuVGl0bGUgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+VXBsb2FkIFByb2ZpbGUgSW1hZ2U8L01vZGFsLlRpdGxlPlxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD5GaWxlIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2VNfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgICB7KHNyYyE9bnVsbCk/PGlmcmFtZSBmcmFtZUJvcmRlcj1cIjBcIiBjbGFzc05hbWU9XCJ2aW1lb192aWRfY291cnNlXCIgc3JjPXtzcmN9PiA8L2lmcmFtZT4gOiBudWxsIH1cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBjb2wtbWQtNCBjb2wtc20tNiBjb2wteHMtMTJcIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImVmZmVjdC1saWx5XCI+XG4gICAgICAgICAgeyh0aGlzLnN0YXRlLmpwZWcpPyA8aW1nIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnMHB4J319IHNyYz17dGhpcy5zdGF0ZS5qcGVnfSAvPiA6IG51bGx9XG5cblxuXG5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIHRleHRTaGFkb3c6JzFweCAxcHggIzAwMDAwMCcsICBjdXJzb3I6ICdpbmhlcml0J319PlxuICAgICAgICAgICAgICAgIDxoMj5JdGVtIDxzdHJvbmc+e3ZpZGVvX2lkfTwvc3Ryb25nPjwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIHRleHRTaGFkb3c6JzFweCAxcHggIzAwMDAwMCcsIGN1cnNvcjogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgPHA+QmVhdXRpZnVsbHkgc3VidGxlIGFuaW1hdGVkIGhvdmVyIGVmZmVjdCBmb3IgeW91ciBnYWxsZXJ5PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeygod2F0Y2hlZD09ZmFsc2UgJiYgY291cnNlPT10cnVlKSB8fCh3YXRjaGVkPT10cnVlKSk/IG51bGwgOiA8TGluayB0bz17YC9jb3Vyc2VzLyR7dmlkZW9faWR9YH0+UXVpejwvTGluaz59XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL3ZpZGVvLyR7dmlkZW9faWR9YH0+PC9MaW5rPlxuICAgICAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvVmlkZW8vVmlkZW8uanN4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQTBEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///187\n");

/***/ })

})