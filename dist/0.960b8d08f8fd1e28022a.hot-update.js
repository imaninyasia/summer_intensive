webpackHotUpdate(0,{

/***/ 383:
/*!*****************************!*\
  !*** ./src/Routes/Main.jsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _Dashboard=__webpack_require__(/*! ./Dashboard/Dashboard.jsx */ 384);var _Dashboard2=_interopRequireDefault(_Dashboard);var _Video_Answers=__webpack_require__(/*! ./Video_Answers/Video_Answers.jsx */ 543);var _Video_Answers2=_interopRequireDefault(_Video_Answers);var _Interactive_Zone=__webpack_require__(/*! ./Interactive_Zone/Interactive_Zone.jsx */ 544);var _Interactive_Zone2=_interopRequireDefault(_Interactive_Zone);var _Landing=__webpack_require__(/*! ./Landing/Landing.jsx */ 545);var _Landing2=_interopRequireDefault(_Landing);var _Whoops=__webpack_require__(/*! ../Components/404/Whoops404.jsx */ 548);var _Whoops2=_interopRequireDefault(_Whoops);var _AdminAnswers=__webpack_require__(/*! ./AdminAnswers/AdminAnswers.jsx */ 549);var _AdminAnswers2=_interopRequireDefault(_AdminAnswers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Main=function(_Component){_inherits(Main,_Component);function Main(props){_classCallCheck(this,Main);return _possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this,props));}_createClass(Main,[{key:'componentDidUpdate',value:function componentDidUpdate(){var token=localStorage.getItem('token');fetch('/user/verify',{method:'POST',headers:{'Authorization':'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({token:token})}).then(function(r){return r.json();}).then(function(data){});}},{key:'componentWillMount',value:function componentWillMount(){var token=localStorage.getItem('token');fetch('/user/verify',{method:'POST',headers:{'Authorization':'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({token:token})}).then(function(r){return r.json();}).then(function(data){});}},{key:'render',value:function render(){return _react2.default.createElement('main',null,_react2.default.createElement(_reactRouterDom.Switch,null,_react2.default.createElement(_reactRouterDom.Route,{exact:true,path:'/',component:_Landing2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/dashboard',component:_Dashboard2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/courses/:video_id',component:_Interactive_Zone2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/student/:student_id',component:_AdminAnswers2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/video/:vid_id/:student_id',component:_Video_Answers2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'*',component:_Whoops2.default})));}}]);return Main;}(_react.Component);exports.default=Main;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvTWFpbi5qc3g/Y2JjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeCc7XG5pbXBvcnQgVmlkZW9fQW5zd2VycyBmcm9tICcuL1ZpZGVvX0Fuc3dlcnMvVmlkZW9fQW5zd2Vycy5qc3gnO1xuaW1wb3J0IEludGVyYWN0aXZlX1pvbmUgZnJvbSAnLi9JbnRlcmFjdGl2ZV9ab25lL0ludGVyYWN0aXZlX1pvbmUuanN4JztcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vTGFuZGluZy9MYW5kaW5nLmpzeCc7XG5pbXBvcnQgV2hvb3BzIGZyb20gJy4uL0NvbXBvbmVudHMvNDA0L1dob29wczQwNC5qc3gnO1xuaW1wb3J0IEFuc3dlcnMgZnJvbSAnLi9BZG1pbkFuc3dlcnMvQWRtaW5BbnN3ZXJzLmpzeCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgdmFyIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICBmZXRjaCgnL3VzZXIvdmVyaWZ5Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgfSlcbiAgICB9XG5cbmNvbXBvbmVudFdpbGxNb3VudCgpe1xuIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgZmV0Y2goJy91c2VyL3ZlcmlmeScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgIH0pXG4gICAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiA+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYW5kaW5nfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiICBjb21wb25lbnQ9e0Rhc2hib2FyZH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb3Vyc2VzLzp2aWRlb19pZFwiIGNvbXBvbmVudD17SW50ZXJhY3RpdmVfWm9uZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zdHVkZW50LzpzdHVkZW50X2lkXCJjb21wb25lbnQ9e0Fuc3dlcnN9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlkZW8vOnZpZF9pZC86c3R1ZGVudF9pZFwiIGNvbXBvbmVudD17VmlkZW9fQW5zd2Vyc30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e1dob29wc30gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L21haW4+XG5cbiAgICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvTWFpbi5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///383\n");

/***/ })

})