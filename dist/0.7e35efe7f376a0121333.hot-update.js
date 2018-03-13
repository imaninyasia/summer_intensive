webpackHotUpdate(0,{

/***/ 228:
/*!********************************************************!*\
  !*** ./src/Components/StudentDash/Badges/PartList.jsx ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ../StudentDash.css */ 60);var _Part=__webpack_require__(/*! ./Part.jsx */ 527);var _Part2=_interopRequireDefault(_Part);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PartList=function(_Component){_inherits(PartList,_Component);function PartList(props){_classCallCheck(this,PartList);var _this=_possibleConstructorReturn(this,(PartList.__proto__||Object.getPrototypeOf(PartList)).call(this,props));_this.state={parts:[],loading:false,final:false};return _this;}_createClass(PartList,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){var _this2=this;if(this.state.final==true){this.forceUpdate();return false;}if(!this.props.student){return false;}else{var user=this.props.student;var course=this.props.course;if(this.props.course){fetch('/badges/parts/'+user+'/'+course).then(function(response){return response.json();}).then(function(json){return json;}).then(function(parts){return _this2.setState({parts:parts,final:true});});this.forceUpdate();}}return true;}},{key:'componentWillMount',value:function componentWillMount(){var _this3=this;var user=localStorage.getItem('ind');var course=this.props.course;if(this.props.course){fetch('/badges/parts/'+user+'/'+course).then(function(response){return response.json();}).then(function(json){return json;}).then(function(parts){return _this3.setState({parts:parts});});}}},{key:'componentDidUpdate',value:function componentDidUpdate(){this.props.completeCourse(this.state.parts);}},{key:'render',value:function render(){var _this4=this;var _state=this.state,parts=_state.parts,loading=_state.loading;var _props=this.props,course=_props.course,completeCourse=_props.completeCourse;return _react2.default.createElement('div',null,loading?_react2.default.createElement('span',null,'loading...'):null,parts.length?parts.map(function(part,index){return _react2.default.createElement(_Part2.default,{key:index,course:part.course,check:course,name:part.name,progress:part.progress,videos:part.videos,video_show:_this4.props.trial,part_id:part.part_id,completeCourse:_this4.props.completeCourse});}):null);}}]);return PartList;}(_react.Component);exports.default=PartList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9QYXJ0TGlzdC5qc3g/NDJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4uL1N0dWRlbnREYXNoLmNzcydcbmltcG9ydCBQYXJ0IGZyb20gJy4vUGFydC5qc3gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0TGlzdCBleHRlbmRzIENvbXBvbmVudHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIHBhcnRzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmluYWw6IGZhbHNlXG4gICAgfVxuXG59XG5cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICBpZiAodGhpcy5zdGF0ZS5maW5hbD09dHJ1ZSApe1xuICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgcmV0dXJuIGZhbHNlXG59XG5pZiAoIXRoaXMucHJvcHMuc3R1ZGVudCl7XG4gIHJldHVybiBmYWxzZVxufWVsc2Uge1xuICAgIGxldCB1c2VyID0gdGhpcy5wcm9wcy5zdHVkZW50XG4gICAgbGV0IGNvdXJzZSA9IHRoaXMucHJvcHMuY291cnNlXG4gICAgIGlmICh0aGlzLnByb3BzLmNvdXJzZSl7XG5mZXRjaChgL2JhZGdlcy9wYXJ0cy8ke3VzZXJ9LyR7Y291cnNlfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbilcbiAgICAudGhlbihwYXJ0cyA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXJ0cyxcbiAgICAgIGZpbmFsOiB0cnVlXG4gICAgfSlcbiAgICAgIClcbiAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgfVxuXG59XG5yZXR1cm4gdHJ1ZVxufVxuXG5jb21wb25lbnRXaWxsTW91bnQoKXtcbiAgbGV0IHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kJylcblxuICAgICBsZXQgY291cnNlID0gdGhpcy5wcm9wcy5jb3Vyc2VcbiAgICAgaWYgKHRoaXMucHJvcHMuY291cnNlKXtcbmZldGNoKGAvYmFkZ2VzL3BhcnRzLyR7dXNlcn0vJHtjb3Vyc2V9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKHBhcnRzID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhcnRzLFxuXG4gICAgfSlcbiAgICAgIClcbiAgICAgfVxuXG59XG5jb21wb25lbnREaWRVcGRhdGUoKXtcbiAgdGhpcy5wcm9wcy5jb21wbGV0ZUNvdXJzZSh0aGlzLnN0YXRlLnBhcnRzKVxufVxucmVuZGVyKCl7XG4gIGNvbnN0IHtwYXJ0cywgbG9hZGluZ30gPSB0aGlzLnN0YXRlXG4gIGNvbnN0IHtjb3Vyc2UsIGNvbXBsZXRlQ291cnNlfSA9IHRoaXMucHJvcHNcblxucmV0dXJuKFxuPGRpdj5cbnsobG9hZGluZyk/XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPjpcbiAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG57KHBhcnRzLmxlbmd0aCk/XG4gICAgICAgICAgICAgICAgICBwYXJ0cy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChwYXJ0LCBpbmRleCk9PlxuICAgICAgICAgICAgICAgICA8UGFydFxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY291cnNlPXtwYXJ0LmNvdXJzZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGVjaz17Y291cnNlfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3BhcnQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17cGFydC5wcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb3M9e3BhcnQudmlkZW9zfVxuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvX3Nob3c9e3RoaXMucHJvcHMudHJpYWx9XG4gICAgICAgICAgICAgICAgICAgICAgcGFydF9pZD17cGFydC5wYXJ0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ291cnNlPXt0aGlzLnByb3BzLmNvbXBsZXRlQ291cnNlfS8+XG4gICAgICAgICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgIH1cbjwvZGl2PlxuXG5cbilcbn1cbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvU3R1ZGVudERhc2gvQmFkZ2VzL1BhcnRMaXN0LmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///228\n");

/***/ })

})