webpackHotUpdate(0,{

/***/ 228:
/*!********************************************************!*\
  !*** ./src/Components/StudentDash/Badges/PartList.jsx ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);__webpack_require__(/*! ../StudentDash.css */ 60);var _Part=__webpack_require__(/*! ./Part.jsx */ 527);var _Part2=_interopRequireDefault(_Part);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PartList=function(_Component){_inherits(PartList,_Component);function PartList(props){_classCallCheck(this,PartList);var _this=_possibleConstructorReturn(this,(PartList.__proto__||Object.getPrototypeOf(PartList)).call(this,props));_this.state={parts:[],loading:false,final:false};return _this;}_createClass(PartList,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){var _this2=this;console.log(this.props.student,'yoooo');if(this.state.final==true){this.forceUpdate();return false;}if(!this.props.student){for(var i=0;i<6;i++){this.forceUpdate();i++;return true;}return false;}else{var user=this.props.student;var course=this.props.course;if(this.props.course){fetch('/badges/parts/'+user+'/'+course).then(function(response){return response.json();}).then(function(json){return json;}).then(function(parts){return _this2.setState({parts:parts,final:true});});this.forceUpdate();}}return true;}},{key:'componentWillMount',value:function componentWillMount(){var _this3=this;var user=localStorage.getItem('ind');var course=this.props.course;if(this.props.course){fetch('/badges/parts/'+user+'/'+course).then(function(response){return response.json();}).then(function(json){return json;}).then(function(parts){return _this3.setState({parts:parts});});}}},{key:'componentDidUpdate',value:function componentDidUpdate(){this.props.completeCourse(this.state.parts);}},{key:'render',value:function render(){var _this4=this;var _state=this.state,parts=_state.parts,loading=_state.loading;var _props=this.props,course=_props.course,completeCourse=_props.completeCourse;return _react2.default.createElement('div',null,loading?_react2.default.createElement('span',null,'loading...'):null,parts.length?parts.map(function(part,index){return _react2.default.createElement(_Part2.default,{key:index,course:part.course,check:course,name:part.name,progress:part.progress,videos:part.videos,video_show:_this4.props.trial,part_id:part.part_id,completeCourse:_this4.props.completeCourse});}):null);}}]);return PartList;}(_react.Component);exports.default=PartList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9QYXJ0TGlzdC5qc3g/NDJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4uL1N0dWRlbnREYXNoLmNzcydcbmltcG9ydCBQYXJ0IGZyb20gJy4vUGFydC5qc3gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0TGlzdCBleHRlbmRzIENvbXBvbmVudHtcblxuY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIHBhcnRzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmluYWw6IGZhbHNlXG4gICAgfVxuXG59XG5cbnNob3VsZENvbXBvbmVudFVwZGF0ZSgpe1xuICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLnN0dWRlbnQsICd5b29vbycpXG4gIGlmICh0aGlzLnN0YXRlLmZpbmFsPT10cnVlICl7XG4gIHRoaXMuZm9yY2VVcGRhdGUoKVxuICByZXR1cm4gZmFsc2Vcbn1cbmlmICghdGhpcy5wcm9wcy5zdHVkZW50KXtcbiAgZm9yIChsZXQgaT0wOyBpPDY7IGkrKyl7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgaSsrXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1lbHNlIHtcbiAgICBsZXQgdXNlciA9IHRoaXMucHJvcHMuc3R1ZGVudFxuICAgIGxldCBjb3Vyc2UgPSB0aGlzLnByb3BzLmNvdXJzZVxuICAgICBpZiAodGhpcy5wcm9wcy5jb3Vyc2Upe1xuZmV0Y2goYC9iYWRnZXMvcGFydHMvJHt1c2VyfS8ke2NvdXJzZX1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IGpzb24pXG4gICAgLnRoZW4ocGFydHMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFydHMsXG4gICAgICBmaW5hbDogdHJ1ZVxuICAgIH0pXG4gICAgICApXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgIH1cblxufVxucmV0dXJuIHRydWVcbn1cblxuY29tcG9uZW50V2lsbE1vdW50KCl7XG4gIGxldCB1c2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2luZCcpXG5cbiAgICAgbGV0IGNvdXJzZSA9IHRoaXMucHJvcHMuY291cnNlXG4gICAgIGlmICh0aGlzLnByb3BzLmNvdXJzZSl7XG5mZXRjaChgL2JhZGdlcy9wYXJ0cy8ke3VzZXJ9LyR7Y291cnNlfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbilcbiAgICAudGhlbihwYXJ0cyA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXJ0cyxcblxuICAgIH0pXG4gICAgICApXG4gICAgIH1cblxufVxuY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gIHRoaXMucHJvcHMuY29tcGxldGVDb3Vyc2UodGhpcy5zdGF0ZS5wYXJ0cylcbn1cbnJlbmRlcigpe1xuICBjb25zdCB7cGFydHMsIGxvYWRpbmd9ID0gdGhpcy5zdGF0ZVxuICBjb25zdCB7Y291cnNlLCBjb21wbGV0ZUNvdXJzZX0gPSB0aGlzLnByb3BzXG5cbnJldHVybihcbjxkaXY+XG57KGxvYWRpbmcpP1xuICAgICAgICAgICAgICAgICAgPHNwYW4+bG9hZGluZy4uLjwvc3Bhbj46XG4gICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxueyhwYXJ0cy5sZW5ndGgpP1xuICAgICAgICAgICAgICAgICAgcGFydHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAocGFydCwgaW5kZXgpPT5cbiAgICAgICAgICAgICAgICAgPFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGNvdXJzZT17cGFydC5jb3Vyc2V9XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2s9e2NvdXJzZX1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtwYXJ0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M9e3BhcnQucHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgdmlkZW9zPXtwYXJ0LnZpZGVvc31cbiAgICAgICAgICAgICAgICAgICAgICB2aWRlb19zaG93PXt0aGlzLnByb3BzLnRyaWFsfVxuICAgICAgICAgICAgICAgICAgICAgIHBhcnRfaWQ9e3BhcnQucGFydF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNvdXJzZT17dGhpcy5wcm9wcy5jb21wbGV0ZUNvdXJzZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG48L2Rpdj5cblxuXG4pXG59XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1N0dWRlbnREYXNoL0JhZGdlcy9QYXJ0TGlzdC5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///228\n");

/***/ })

})