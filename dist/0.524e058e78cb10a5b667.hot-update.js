webpackHotUpdate(0,{

/***/ 368:
/*!*****************************!*\
  !*** ./src/Routes/Main.jsx ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _reactRouterDom=__webpack_require__(/*! react-router-dom */ 32);var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _Dashboard=__webpack_require__(/*! ./Dashboard/Dashboard.jsx */ 369);var _Dashboard2=_interopRequireDefault(_Dashboard);var _VideoAnswers=__webpack_require__(/*! ./VideoAnswers/VideoAnswers.jsx */ 597);var _VideoAnswers2=_interopRequireDefault(_VideoAnswers);var _Interactive_Zone=__webpack_require__(/*! ./Interactive_Zone/Interactive_Zone.jsx */ 529);var _Interactive_Zone2=_interopRequireDefault(_Interactive_Zone);var _Landing=__webpack_require__(/*! ./Landing/Landing.jsx */ 530);var _Landing2=_interopRequireDefault(_Landing);var _Whoops=__webpack_require__(/*! ../Components/404/Whoops404.jsx */ 534);var _Whoops2=_interopRequireDefault(_Whoops);var _AdminAnswers=__webpack_require__(/*! ./AdminAnswers/AdminAnswers.jsx */ 535);var _AdminAnswers2=_interopRequireDefault(_AdminAnswers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Main=function(_Component){_inherits(Main,_Component);function Main(props){_classCallCheck(this,Main);return _possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this,props));}_createClass(Main,[{key:'componentDidUpdate',value:function componentDidUpdate(){var token=localStorage.getItem('token');fetch('/user/verify',{method:'POST',headers:{'Authorization':'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({token:token})}).then(function(r){return r.json();}).then(function(data){});}},{key:'componentWillMount',value:function componentWillMount(){var token=localStorage.getItem('token');fetch('/user/verify',{method:'POST',headers:{'Authorization':'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify({token:token})}).then(function(r){return r.json();}).then(function(data){});}},{key:'render',value:function render(){return _react2.default.createElement('main',null,_react2.default.createElement(_reactRouterDom.Switch,null,_react2.default.createElement(_reactRouterDom.Route,{exact:true,path:'/',component:_Landing2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/dashboard',component:_Dashboard2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/courses/:video_id',component:_Interactive_Zone2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/student/:student_id',component:_AdminAnswers2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'/video/:vid_id',component:_VideoAnswers2.default}),_react2.default.createElement(_reactRouterDom.Route,{path:'*',component:_Whoops2.default})));}}]);return Main;}(_react.Component);exports.default=Main;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvTWFpbi5qc3g/Y2JjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeCc7XG5pbXBvcnQgVmlkZW9BbnN3ZXJzIGZyb20gJy4vVmlkZW9BbnN3ZXJzL1ZpZGVvQW5zd2Vycy5qc3gnXG5pbXBvcnQgSW50ZXJhY3RpdmVfWm9uZSBmcm9tICcuL0ludGVyYWN0aXZlX1pvbmUvSW50ZXJhY3RpdmVfWm9uZS5qc3gnXG5pbXBvcnQgTGFuZGluZyBmcm9tICcuL0xhbmRpbmcvTGFuZGluZy5qc3gnXG5pbXBvcnQgV2hvb3BzIGZyb20gJy4uL0NvbXBvbmVudHMvNDA0L1dob29wczQwNC5qc3gnXG5pbXBvcnQgQW5zd2VycyBmcm9tICcuL0FkbWluQW5zd2Vycy9BZG1pbkFuc3dlcnMuanN4J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgZmV0Y2goJy91c2VyL3ZlcmlmeScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuXG4gICAgIH0pXG4gICAgfVxuXG5jb21wb25lbnRXaWxsTW91bnQoKXtcbiB2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIGZldGNoKCcvdXNlci92ZXJpZnknLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICB9KVxuICAgIH1cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuKFxuICAgICAgPG1haW4gPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TGFuZGluZ30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kYXNoYm9hcmRcIiAgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY291cnNlcy86dmlkZW9faWRcIiBjb21wb25lbnQ9e0ludGVyYWN0aXZlX1pvbmV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc3R1ZGVudC86c3R1ZGVudF9pZFwiY29tcG9uZW50PXtBbnN3ZXJzfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZGVvLzp2aWRfaWRcIiBjb21wb25lbnQ9e1ZpZGVvQW5zd2Vyc30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e1dob29wc30gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L21haW4+XG5cbiAgICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvTWFpbi5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///368\n");

/***/ })

})