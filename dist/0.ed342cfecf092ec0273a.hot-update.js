webpackHotUpdate(0,{

/***/ 550:
/*!*********************************************************************!*\
  !*** ./src/Components/UserList/UserAnswersList/UserAnswersList.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _Answer=__webpack_require__(/*! ../../Answer/Answer.jsx */ 551);var _Answer2=_interopRequireDefault(_Answer);__webpack_require__(/*! ../UserList.css */ 181);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UserAnswersList=function(_Component){_inherits(UserAnswersList,_Component);function UserAnswersList(props){_classCallCheck(this,UserAnswersList);var _this=_possibleConstructorReturn(this,(UserAnswersList.__proto__||Object.getPrototypeOf(UserAnswersList)).call(this,props));_this.state={answers:null,loading:false};return _this;}_createClass(UserAnswersList,[{key:'componentDidMount',value:function componentDidMount(){}},{key:'componentDidUpdate',value:function componentDidUpdate(){var _this2=this;var user=this.props.user;var video=this.props.video;if(this.state.answers!=null){}else{(0,_isomorphicFetch2.default)('/admin/answers/'+user+'/'+video).then(function(response){return response.json();}).then(function(json){return json;}).then(function(answers){return _this2.setState({answers:answers,loading:false});});}}},{key:'render',value:function render(){var _state=this.state,answers=_state.answers,loading=_state.loading;var user=this.props.user;return _react2.default.createElement('div',{className:'answers-list'},loading?_react2.default.createElement('span',null,'loading...'):_react2.default.createElement('span',null,' answers'),answers?answers.map(function(answer,index){return _react2.default.createElement(_Answer2.default,{key:index,user:answer.username,answer:answer.answer,question:answer.question,ques_num:answer.question_id,answer_long:answer.answer_long});}):null);}}]);return UserAnswersList;}(_react.Component);exports.default=UserAnswersList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4P2FhZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyYW5zd2VyIGZyb20gJy4uLy4uL0Fuc3dlci9BbnN3ZXIuanN4JztcbmltcG9ydCAnLi4vVXNlckxpc3QuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFuc3dlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBhbnN3ZXJzOiBudWxsLFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgbGV0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXJcbiAgICBsZXQgdmlkZW8gPSB0aGlzLnByb3BzLnZpZGVvXG4gICAgaWYgKHRoaXMuc3RhdGUuYW5zd2VycyE9bnVsbCl7XG4gICAgfWVsc2V7XG4gICAgICBmZXRjaChgL2FkbWluL2Fuc3dlcnMvJHt1c2VyfS8ke3ZpZGVvfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ganNvbilcbiAgICAudGhlbihhbnN3ZXJzID0+XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFuc3dlcnMsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH0pKVxuICAgIH1cblxuICB9XG5cbnJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2Fuc3dlcnMsIGxvYWRpbmd9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCB7IHVzZXIgfT0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzLWxpc3RcIj5cblxuICAgICAgICAgICAgICAgIHsobG9hZGluZyk/XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPjpcbiAgICAgICAgICAgICAgICAgIDxzcGFuPiBhbnN3ZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7KGFuc3dlcnMpP1xuICAgICAgICAgICAgICAgICAgYW5zd2Vycy5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChhbnN3ZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIDxVc2VyYW5zd2VyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXthbnN3ZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyPXthbnN3ZXIuYW5zd2VyfVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uPXthbnN3ZXIucXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgcXVlc19udW09IHthbnN3ZXIucXVlc3Rpb25faWR9XG4gICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcl9sb25nPXthbnN3ZXIuYW5zd2VyX2xvbmd9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///550\n");

/***/ })

})