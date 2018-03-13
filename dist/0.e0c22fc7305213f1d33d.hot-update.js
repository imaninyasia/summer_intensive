webpackHotUpdate(0,{

/***/ 526:
/*!**********************************************************!*\
  !*** ./src/Components/StudentDash/Badges/CourseList.jsx ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _reactBootstrap=__webpack_require__(/*! react-bootstrap */ 61);__webpack_require__(/*! ../StudentDash.css */ 60);var _PartList=__webpack_require__(/*! ./PartList.jsx */ 228);var _Course=__webpack_require__(/*! ./Course.jsx */ 528);var _Course2=_interopRequireDefault(_Course);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CourseList=function(_Component){_inherits(CourseList,_Component);function CourseList(props){_classCallCheck(this,CourseList);var _this=_possibleConstructorReturn(this,(CourseList.__proto__||Object.getPrototypeOf(CourseList)).call(this,props));_this.state={loading:false,courses:[],final:false};return _this;}_createClass(CourseList,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){var _this2=this;if(this.state.final==true){this.forceUpdate();return false;}console.log(this.props.student,'meoeooo');if(!this.props.student){for(var i=0;i<3;i++){this.forceUpdate();i++;}this.setState({final:true});}else if(this.state.courses.length!=0){console.log('yooooooo');return false;}else{console.log('should not happen');var user=this.props.student;this.setState({loading:true});fetch('/badges/courses/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(courses){return _this2.setState({courses:courses,loading:false,final:true});});this.forceUpdate();}return true;}},{key:'componentWillMount',value:function componentWillMount(){var _this3=this;var user=localStorage.getItem('ind');this.setState({loading:true});fetch('/badges/courses/'+user).then(function(response){return response.json();}).then(function(json){return json;}).then(function(courses){return _this3.setState({courses:courses,loading:false});});}},{key:'render',value:function render(){var _this4=this;var _state=this.state,loading=_state.loading,courses=_state.courses;return _react2.default.createElement('div',null,_react2.default.createElement(_Course2.default,null),loading?_react2.default.createElement('span',null,'loading...'):null,courses.length?courses.map(function(course,index){return _react2.default.createElement(_Course2.default,{key:index,name:course.name,replicate:course.replicate,modify:course.modify,create:course.create_,progress:course.progress,trial:_this4.props.trial,student:_this4.props.student});}):_react2.default.createElement('span',null,' Currently 0 Courses '));}}]);return CourseList;}(_react.Component);exports.default=CourseList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9Db3Vyc2VMaXN0LmpzeD82OTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IHsgT3ZlcmxheVRyaWdnZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge01vZGFsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0ICcuLi9TdHVkZW50RGFzaC5jc3MnXG5pbXBvcnR7UGFydExpc3R9IGZyb20gJy4vUGFydExpc3QuanN4J1xuaW1wb3J0IENvdXJzZSBmcm9tICcuL0NvdXJzZS5qc3gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3Vyc2VMaXN0IGV4dGVuZHMgQ29tcG9uZW50e1xuXG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT0ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBjb3Vyc2VzOiBbXSxcbiAgICAgIGZpbmFsOiBmYWxzZVxuICAgIH1cbn1cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICBpZiAodGhpcy5zdGF0ZS5maW5hbD09dHJ1ZSApe1xuICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgcmV0dXJuIGZhbHNlXG59XG5jb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0dWRlbnQsJ21lb2Vvb28nKVxuaWYoIXRoaXMucHJvcHMuc3R1ZGVudCl7XG4gIGZvcihsZXQgaT0wOyBpPDM7IGkrKyl7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgaSsrXG4gIH1cblxuICB0aGlzLnNldFN0YXRlKHtmaW5hbDp0cnVlfSlcbn1lbHNlIGlmKHRoaXMuc3RhdGUuY291cnNlcy5sZW5ndGghPTApe1xuICBjb25zb2xlLmxvZygneW9vb29vb28nKVxuICByZXR1cm4gZmFsc2Vcbn1lbHNlXG57XG4gIGNvbnNvbGUubG9nKCdzaG91bGQgbm90IGhhcHBlbicpXG4gIGxldCB1c2VyPXRoaXMucHJvcHMuc3R1ZGVudFxuICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcbiAgICBmZXRjaChgL2JhZGdlcy9jb3Vyc2VzLyR7dXNlcn1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24pXG4gICAgLnRoZW4oY291cnNlcyA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3Vyc2VzLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBmaW5hbDp0cnVlXG4gICAgfSlcbiAgICAgIClcbiAgICB0aGlzLmZvcmNlVXBkYXRlKClcbn1cbnJldHVybiB0cnVlXG59XG5jb21wb25lbnRXaWxsTW91bnQoKXtcbiAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcbiAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXG4gICAgZmV0Y2goYC9iYWRnZXMvY291cnNlcy8ke3VzZXJ9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKGNvdXJzZXMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291cnNlcyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSlcbiAgICAgIClcbn1cbnJlbmRlcigpe1xuICBjb25zdCB7bG9hZGluZywgY291cnNlc30gPSB0aGlzLnN0YXRlXG5yZXR1cm4oXG48ZGl2PlxuPENvdXJzZSAvPlxueyhsb2FkaW5nKT9cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmxvYWRpbmcuLi48L3NwYW4+OlxuICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cbnsoY291cnNlcy5sZW5ndGgpP1xuICAgICAgICAgICAgICAgICAgY291cnNlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChjb3Vyc2UsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIDxDb3Vyc2VcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2NvdXJzZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcGxpY2F0ZT17Y291cnNlLnJlcGxpY2F0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBtb2RpZnkgPSB7Y291cnNlLm1vZGlmeX1cbiAgICAgICAgICAgICAgICAgICAgICBjcmVhdGUgPSB7Y291cnNlLmNyZWF0ZV99XG4gICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e2NvdXJzZS5wcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgICB0cmlhbD17dGhpcy5wcm9wcy50cmlhbH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50PXt0aGlzLnByb3BzLnN0dWRlbnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQ3VycmVudGx5IDAgQ291cnNlcyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuXG48L2Rpdj5cblxuKVxufVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9Db3Vyc2VMaXN0LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///526\n");

/***/ })

})