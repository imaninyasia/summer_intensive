webpackHotUpdate(0,{

/***/ 550:
/*!*********************************************************************!*\
  !*** ./src/Components/UserList/UserAnswersList/UserAnswersList.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _Answer=__webpack_require__(/*! ../../Answer/Answer.jsx */ 551);var _Answer2=_interopRequireDefault(_Answer);__webpack_require__(/*! ../UserList.css */ 181);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UserAnswersList=function(_Component){_inherits(UserAnswersList,_Component);function UserAnswersList(props){_classCallCheck(this,UserAnswersList);var _this=_possibleConstructorReturn(this,(UserAnswersList.__proto__||Object.getPrototypeOf(UserAnswersList)).call(this,props));_this.state={answers:null,loading:false};return _this;}_createClass(UserAnswersList,[{key:'ComponentDidMount',value:function ComponentDidMount(){console.log(this.state.answers,'hmmm');}},{key:'componentDidUpdate',value:function componentDidUpdate(){var _this2=this;var user=this.props.user;var video=this.props.video;console.log(this.state.answers,'do tell');if(this.state.answers!=null){console.log('nothis');}else{(0,_isomorphicFetch2.default)('/admin/answers/'+user+'/'+video).then(function(response){return response.json();}).then(function(json){return json;}).then(function(answers){return _this2.setState({answers:answers,loading:false});});}}},{key:'render',value:function render(){var _state=this.state,answers=_state.answers,loading=_state.loading;var user=this.props.user;return _react2.default.createElement('div',{className:'answers-list'},loading?_react2.default.createElement('span',null,'loading...'):_react2.default.createElement('span',null,' answers'),answers?answers.map(function(answer,index){return _react2.default.createElement(_Answer2.default,{key:index,user:answer.username,answer:answer.answer,question:answer.question,ques_num:answer.question_id});}):null);}}]);return UserAnswersList;}(_react.Component);exports.default=UserAnswersList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4P2FhZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyYW5zd2VyIGZyb20gJy4uLy4uL0Fuc3dlci9BbnN3ZXIuanN4JztcbmltcG9ydCAnLi4vVXNlckxpc3QuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFuc3dlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBhbnN3ZXJzOiBudWxsLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cblxuQ29tcG9uZW50RGlkTW91bnQoKXtcbiAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXJzLCAnaG1tbScpXG59XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgIGxldCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG4gICAgbGV0IHZpZGVvID0gdGhpcy5wcm9wcy52aWRlb1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VycywnZG8gdGVsbCcpXG4gICAgaWYgKHRoaXMuc3RhdGUuYW5zd2VycyE9bnVsbCl7XG4gICAgICBjb25zb2xlLmxvZygnbm90aGlzJylcbiAgICB9ZWxzZXtcbiAgICAgIGZldGNoKGAvYWRtaW4vYW5zd2Vycy8ke3VzZXJ9LyR7dmlkZW99YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKGFuc3dlcnMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYW5zd2VycyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSkpXG4gICAgfVxuXG4gIH1cblxucmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7YW5zd2VycywgbG9hZGluZ30gPSB0aGlzLnN0YXRlXG4gICAgICAgIGNvbnN0IHsgdXNlciB9PSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnMtbGlzdFwiPlxuXG4gICAgICAgICAgICAgICAgeyhsb2FkaW5nKT9cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmxvYWRpbmcuLi48L3NwYW4+OlxuICAgICAgICAgICAgICAgICAgPHNwYW4+IGFuc3dlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsoYW5zd2Vycyk/XG4gICAgICAgICAgICAgICAgICBhbnN3ZXJzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGFuc3dlciwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPFVzZXJhbnN3ZXJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2Fuc3dlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e2Fuc3dlci5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e2Fuc3dlci5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVzX251bT0ge2Fuc3dlci5xdWVzdGlvbl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///550\n");

/***/ })

})