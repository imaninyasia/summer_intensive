webpackHotUpdate(0,{

/***/ 383:
/*!*****************************!*\
  !*** ./src/Routes/Main.jsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 33);var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _Dashboard=__webpack_require__(/*! ./Dashboard/Dashboard.jsx */ 384);var _Dashboard2=_interopRequireDefault(_Dashboard);var _Video_Answers=__webpack_require__(/*! ./Video_Answers/Video_Answers.jsx */ 543);var _Video_Answers2=_interopRequireDefault(_Video_Answers);var _Interactive_Zone=__webpack_require__(/*! ./Interactive_Zone/Interactive_Zone.jsx */ 544);var _Interactive_Zone2=_interopRequireDefault(_Interactive_Zone);var _Landing=__webpack_require__(/*! ./Landing/Landing.jsx */ 545);var _Landing2=_interopRequireDefault(_Landing);var _Whoops=__webpack_require__(/*! ../Components/404/Whoops404.jsx */ 548);var _Whoops2=_interopRequireDefault(_Whoops);var _AdminAnswers=__webpack_require__(/*! ./AdminAnswers/AdminAnswers.jsx */ 549);var _AdminAnswers2=_interopRequireDefault(_AdminAnswers);var _requireAuth=__webpack_require__(/*! ../../utils/requireAuth.js */ 738);var _requireAuth2=_interopRequireDefault(_requireAuth);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Main=function(_Component){_inherits(Main,_Component);function Main(props){_classCallCheck(this,Main);return _possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this,props));}_createClass(Main,[{key:'componentWillMount',value:function componentWillMount(){var token=localStorage.getItem('token');fetch('/user/verify',{method:'POST',headers:{'Authorization':'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({token:token})}).then(function(r){return r.json();}).then(function(data){});}},{key:'render',value:function render(){return _react2.default.createElement('main',null,_react2.default.createElement(_reactRouterDom.Switch,null,_react2.default.createElement(_reactRouterDom.Route,{exact:true,path:'/',component:_Landing2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/dashboard',component:(0,_requireAuth2.default)(_Dashboard2.default)}),_react2.default.createElement(_reactRouterDom.Route,{path:'/courses/:video_id',component:(0,_requireAuth2.default)(_Interactive_Zone2.default)}),_react2.default.createElement(_reactRouterDom.Route,{path:'/student/:student_id',component:(0,_requireAuth2.default)(_AdminAnswers2.default)}),_react2.default.createElement(_reactRouterDom.Route,{path:'/video/:vid_id',component:(0,_requireAuth2.default)(_Video_Answers2.default)}),_react2.default.createElement(_reactRouterDom.Route,{path:'*',component:_Whoops2.default})));}}]);return Main;}(_react.Component);exports.default=Main;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvTWFpbi5qc3g/Y2JjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeCc7XG5pbXBvcnQgVmlkZW9fQW5zd2VycyBmcm9tICcuL1ZpZGVvX0Fuc3dlcnMvVmlkZW9fQW5zd2Vycy5qc3gnO1xuaW1wb3J0IEludGVyYWN0aXZlX1pvbmUgZnJvbSAnLi9JbnRlcmFjdGl2ZV9ab25lL0ludGVyYWN0aXZlX1pvbmUuanN4JztcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4vTGFuZGluZy9MYW5kaW5nLmpzeCc7XG5pbXBvcnQgV2hvb3BzIGZyb20gJy4uL0NvbXBvbmVudHMvNDA0L1dob29wczQwNC5qc3gnO1xuaW1wb3J0IEFuc3dlcnMgZnJvbSAnLi9BZG1pbkFuc3dlcnMvQWRtaW5BbnN3ZXJzLmpzeCc7XG5pbXBvcnQgcmVxdWlyZUF1dGggZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWlyZUF1dGguanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbmNvbXBvbmVudFdpbGxNb3VudCgpe1xuIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgZmV0Y2goJy91c2VyL3ZlcmlmeScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgIH0pXG4gICAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8bWFpbiA+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtMYW5kaW5nfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiICBjb21wb25lbnQ9e3JlcXVpcmVBdXRoKERhc2hib2FyZCl9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY291cnNlcy86dmlkZW9faWRcIiBjb21wb25lbnQ9e3JlcXVpcmVBdXRoKEludGVyYWN0aXZlX1pvbmUpfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N0dWRlbnQvOnN0dWRlbnRfaWRcImNvbXBvbmVudD17cmVxdWlyZUF1dGgoQW5zd2Vycyl9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlkZW8vOnZpZF9pZFwiIGNvbXBvbmVudD17cmVxdWlyZUF1dGgoVmlkZW9fQW5zd2Vycyl9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtXaG9vcHN9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9tYWluPlxuXG4gICAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL01haW4uanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///383\n");

/***/ })

})