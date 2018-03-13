webpackHotUpdate(0,{

/***/ 540:
/*!**********************************************************!*\
  !*** ./src/Components/StudentDash/Badges/CourseList.jsx ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);__webpack_require__(/*! ../StudentDash.css */ 60);var _PartList=__webpack_require__(/*! ./PartList.jsx */ 234);var _Course=__webpack_require__(/*! ./Course.jsx */ 542);var _Course2=_interopRequireDefault(_Course);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CourseList=function(_Component){_inherits(CourseList,_Component);function CourseList(props){_classCallCheck(this,CourseList);var _this=_possibleConstructorReturn(this,(CourseList.__proto__||Object.getPrototypeOf(CourseList)).call(this,props));_this.state={loading:false,courses:[],final:false};return _this;}_createClass(CourseList,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){var _this2=this;if(!this.props.student){for(var i=0;i<7;i++){this.forceUpdate();i++;}this.setState({final:true});}else{var user=this.props.student;this.setState({loading:true});fetch('/badges/courses/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(courses){return _this2.setState({courses:courses,loading:false});});this.forceUpdate();return false;}return true;}},{key:'componentWillMount',value:function componentWillMount(){var _this3=this;var user=localStorage.getItem('ind');this.setState({loading:true});fetch('/badges/courses/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(courses){return _this3.setState({courses:courses,loading:false});});}},{key:'render',value:function render(){var _this4=this;var _state=this.state,loading=_state.loading,courses=_state.courses;return _react2.default.createElement('div',{style:{height:'500px'},id:'isIt'},_react2.default.createElement(_Course2.default,null),loading?_react2.default.createElement('span',null,'loading...'):null,courses.length?courses.map(function(course,index){return _react2.default.createElement(_Course2.default,{key:index,name:course.name,replicate:course.replicate,modify:course.modify,create:course.create_,progress:course.progress,trial:_this4.props.trial,student:_this4.props.student});}):_react2.default.createElement('span',null,' Currently 0 Courses '));}}]);return CourseList;}(_react.Component);exports.default=CourseList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9Db3Vyc2VMaXN0LmpzeD82OTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0ICcuLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnR7UGFydExpc3R9IGZyb20gJy4vUGFydExpc3QuanN4J1xuaW1wb3J0IENvdXJzZSBmcm9tICcuL0NvdXJzZS5qc3gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3Vyc2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBjb3Vyc2VzOiBbXSxcbiAgICAgIGZpbmFsOiBmYWxzZVxuICAgIH1cbn1cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuaWYoIXRoaXMucHJvcHMuc3R1ZGVudCl7XG4gIGZvcihsZXQgaT0wOyBpPDc7IGkrKyl7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgaSsrXG4gIH1cbiAgdGhpcy5zZXRTdGF0ZSh7ZmluYWw6dHJ1ZX0pXG59ZWxzZVxue1xuICBsZXQgdXNlcj10aGlzLnByb3BzLnN0dWRlbnRcbiAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgZmV0Y2goYC9iYWRnZXMvY291cnNlcy8ke3VzZXJ9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKGNvdXJzZXMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291cnNlcyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIH0pXG4gICAgICApXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgcmV0dXJuIGZhbHNlXG59XG5yZXR1cm4gdHJ1ZVxufVxuY29tcG9uZW50V2lsbE1vdW50KCl7XG4gIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG4gICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAgIGZldGNoKGAvYmFkZ2VzL2NvdXJzZXMvJHt1c2VyfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbilcbiAgICAudGhlbihjb3Vyc2VzID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvdXJzZXMsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pXG4gICAgICApXG59XG5yZW5kZXIoKXtcbiAgY29uc3Qge2xvYWRpbmcsIGNvdXJzZXN9ID0gdGhpcy5zdGF0ZVxucmV0dXJuKFxuPGRpdiBzdHlsZT17e2hlaWdodDonNTAwcHgnfX1pZD1cImlzSXRcIj5cbjxDb3Vyc2UgLz5cbnsobG9hZGluZyk/XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPjpcbiAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG57KGNvdXJzZXMubGVuZ3RoKT9cbiAgICAgICAgICAgICAgICAgIGNvdXJzZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAoY291cnNlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICA8Q291cnNlXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtjb3Vyc2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXBsaWNhdGU9e2NvdXJzZS5yZXBsaWNhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5ID0ge2NvdXJzZS5tb2RpZnl9XG4gICAgICAgICAgICAgICAgICAgICAgY3JlYXRlID0ge2NvdXJzZS5jcmVhdGVffVxuICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzPXtjb3Vyc2UucHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgdHJpYWw9e3RoaXMucHJvcHMudHJpYWx9XG4gICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudD17dGhpcy5wcm9wcy5zdHVkZW50fS8+XG4gICAgICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEN1cnJlbnRseSAwIENvdXJzZXMgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cblxuPC9kaXY+XG5cbilcbn1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9TdHVkZW50RGFzaC9CYWRnZXMvQ291cnNlTGlzdC5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///540\n");

/***/ })

})