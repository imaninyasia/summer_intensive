webpackHotUpdate(0,{

/***/ 526:
/*!**********************************************************!*\
  !*** ./src/Components/StudentDash/Badges/CourseList.jsx ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);__webpack_require__(/*! ../StudentDash.css */ 60);var _PartList=__webpack_require__(/*! ./PartList.jsx */ 228);var _Course=__webpack_require__(/*! ./Course.jsx */ 528);var _Course2=_interopRequireDefault(_Course);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CourseList=function(_Component){_inherits(CourseList,_Component);function CourseList(props){_classCallCheck(this,CourseList);var _this=_possibleConstructorReturn(this,(CourseList.__proto__||Object.getPrototypeOf(CourseList)).call(this,props));_this.state={loading:false,courses:[],final:false};return _this;}_createClass(CourseList,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){var _this2=this;if(this.state.final==true){this.forceUpdate();return false;}console.log(this.props.student,'meoeooo');if(!this.props.student){for(var i=0;i<3;i++){this.forceUpdate();i++;console.log(this.state.courses);}this.setState({final:true});}else{console.log('should not happen');var user=this.props.student;this.setState({loading:true});fetch('/badges/courses/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(courses){return _this2.setState({courses:courses,loading:false,final:true});});this.forceUpdate();}return true;}},{key:'componentWillMount',value:function componentWillMount(){var _this3=this;var user=localStorage.getItem('ind');this.setState({loading:true});fetch('/badges/courses/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(courses){return _this3.setState({courses:courses,loading:false});});}},{key:'render',value:function render(){var _this4=this;var _state=this.state,loading=_state.loading,courses=_state.courses;return _react2.default.createElement('div',null,_react2.default.createElement(_Course2.default,null),loading?_react2.default.createElement('span',null,'loading...'):null,courses.length?courses.map(function(course,index){return _react2.default.createElement(_Course2.default,{key:index,name:course.name,replicate:course.replicate,modify:course.modify,create:course.create_,progress:course.progress,trial:_this4.props.trial,student:_this4.props.student});}):_react2.default.createElement('span',null,' Currently 0 Courses '));}}]);return CourseList;}(_react.Component);exports.default=CourseList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9Db3Vyc2VMaXN0LmpzeD82OTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0ICcuLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnR7UGFydExpc3R9IGZyb20gJy4vUGFydExpc3QuanN4J1xuaW1wb3J0IENvdXJzZSBmcm9tICcuL0NvdXJzZS5qc3gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3Vyc2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBjb3Vyc2VzOiBbXSxcbiAgICAgIGZpbmFsOiBmYWxzZVxuICAgIH1cbn1cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICBpZiAodGhpcy5zdGF0ZS5maW5hbD09dHJ1ZSApe1xuICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgcmV0dXJuIGZhbHNlXG59XG5jb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0dWRlbnQsJ21lb2Vvb28nKVxuaWYoIXRoaXMucHJvcHMuc3R1ZGVudCl7XG4gIGZvcihsZXQgaT0wOyBpPDM7IGkrKyl7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgaSsrXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3Vyc2VzKVxuICB9XG4gIHRoaXMuc2V0U3RhdGUoe2ZpbmFsOnRydWV9KVxufWVsc2VcbntcbiAgY29uc29sZS5sb2coJ3Nob3VsZCBub3QgaGFwcGVuJylcbiAgbGV0IHVzZXI9dGhpcy5wcm9wcy5zdHVkZW50XG4gIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxuICAgIGZldGNoKGAvYmFkZ2VzL2NvdXJzZXMvJHt1c2VyfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbilcbiAgICAudGhlbihjb3Vyc2VzID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvdXJzZXMsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZpbmFsOnRydWVcbiAgICB9KVxuICAgICAgKVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxufVxucmV0dXJuIHRydWVcbn1cbmNvbXBvbmVudFdpbGxNb3VudCgpe1xuICBsZXQgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmQnKVxuICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcbiAgICBmZXRjaChgL2JhZGdlcy9jb3Vyc2VzLyR7dXNlcn1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24pXG4gICAgLnRoZW4oY291cnNlcyA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3Vyc2VzLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9KVxuICAgICAgKVxufVxucmVuZGVyKCl7XG4gIGNvbnN0IHtsb2FkaW5nLCBjb3Vyc2VzfSA9IHRoaXMuc3RhdGVcbnJldHVybihcbjxkaXY+XG48Q291cnNlIC8+XG57KGxvYWRpbmcpP1xuICAgICAgICAgICAgICAgICAgPHNwYW4+bG9hZGluZy4uLjwvc3Bhbj46XG4gICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxueyhjb3Vyc2VzLmxlbmd0aCk/XG4gICAgICAgICAgICAgICAgICBjb3Vyc2VzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGNvdXJzZSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPENvdXJzZVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17Y291cnNlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcmVwbGljYXRlPXtjb3Vyc2UucmVwbGljYXRlfVxuICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeSA9IHtjb3Vyc2UubW9kaWZ5fVxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZSA9IHtjb3Vyc2UuY3JlYXRlX31cbiAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17Y291cnNlLnByb2dyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgIHRyaWFsPXt0aGlzLnByb3BzLnRyaWFsfVxuICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnQ9e3RoaXMucHJvcHMuc3R1ZGVudH0vPlxuICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiBDdXJyZW50bHkgMCBDb3Vyc2VzIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG5cbjwvZGl2PlxuXG4pXG59XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvU3R1ZGVudERhc2gvQmFkZ2VzL0NvdXJzZUxpc3QuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///526\n");

/***/ })

})