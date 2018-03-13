webpackHotUpdate(0,{

/***/ 550:
/*!*********************************************************************!*\
  !*** ./src/Components/UserList/UserAnswersList/UserAnswersList.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _Answer=__webpack_require__(/*! ../../Answer/Answer.jsx */ 551);var _Answer2=_interopRequireDefault(_Answer);__webpack_require__(/*! ../UserList.css */ 181);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UserAnswersList=function(_Component){_inherits(UserAnswersList,_Component);function UserAnswersList(props){_classCallCheck(this,UserAnswersList);var _this=_possibleConstructorReturn(this,(UserAnswersList.__proto__||Object.getPrototypeOf(UserAnswersList)).call(this,props));_this.state={answers:[],loading:false};return _this;}_createClass(UserAnswersList,[{key:'componentDidUpdate',value:function componentDidUpdate(){var _this2=this;var user=this.props.user;var video=this.props.video;(0,_isomorphicFetch2.default)('/admin/answers/'+user+'/'+video).then(function(response){return response.json();}).then(function(json){return json;}).then(function(answers){return _this2.setState({answers:answers,loading:false});});}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(){if(this.props.video&&this.props.user&&this.state.answers){this.forceUpdate();return false;}return fale;}},{key:'render',value:function render(){var _state=this.state,answers=_state.answers,loading=_state.loading;var user=this.props.user;return _react2.default.createElement('div',{className:'answers-list'},loading?_react2.default.createElement('span',null,'loading...'):_react2.default.createElement('span',null,answers.length,' answers'),answers.length?answers.map(function(answer,index){return _react2.default.createElement(_Answer2.default,{Key:index,user:answer.username,answer:answer.answer,question:answer.question,ques_num:answer.question_id});}):null);}}]);return UserAnswersList;}(_react.Component);exports.default=UserAnswersList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4P2FhZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyYW5zd2VyIGZyb20gJy4uLy4uL0Fuc3dlci9BbnN3ZXIuanN4JztcbmltcG9ydCAnLi4vVXNlckxpc3QuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFuc3dlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBhbnN3ZXJzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuICB9XG5cblxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICBsZXQgdXNlciA9IHRoaXMucHJvcHMudXNlclxuICAgIGxldCB2aWRlbyA9IHRoaXMucHJvcHMudmlkZW9cblxuICAgIGZldGNoKGAvYWRtaW4vYW5zd2Vycy8ke3VzZXJ9LyR7dmlkZW99YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKGFuc3dlcnMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYW5zd2VycyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSkpXG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCl7XG4gICAgaWYgKHRoaXMucHJvcHMudmlkZW8gJiYgdGhpcy5wcm9wcy51c2VyICYmIHRoaXMuc3RhdGUuYW5zd2Vycyl7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gZmFsZVxuICB9XG5cbnJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2Fuc3dlcnMsIGxvYWRpbmd9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCB7IHVzZXIgfT0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzLWxpc3RcIj5cblxuICAgICAgICAgICAgICAgIHsobG9hZGluZyk/XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5sb2FkaW5nLi4uPC9zcGFuPjpcbiAgICAgICAgICAgICAgICAgIDxzcGFuPnthbnN3ZXJzLmxlbmd0aH0gYW5zd2Vyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyhhbnN3ZXJzLmxlbmd0aCk/XG4gICAgICAgICAgICAgICAgICBhbnN3ZXJzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGFuc3dlciwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPFVzZXJhbnN3ZXJcbiAgICAgICAgICAgICAgICAgICAgICBLZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2Fuc3dlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXI9e2Fuc3dlci5hbnN3ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e2Fuc3dlci5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVzX251bT0ge2Fuc3dlci5xdWVzdGlvbl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICk6XG4gICAgICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///550\n");

/***/ })

})