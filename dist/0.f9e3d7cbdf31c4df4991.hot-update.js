webpackHotUpdate(0,{

/***/ 550:
/*!*********************************************************************!*\
  !*** ./src/Components/UserList/UserAnswersList/UserAnswersList.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _Answer=__webpack_require__(/*! ../../Answer/Answer.jsx */ 551);var _Answer2=_interopRequireDefault(_Answer);__webpack_require__(/*! ../UserList.css */ 181);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UserAnswersList=function(_Component){_inherits(UserAnswersList,_Component);function UserAnswersList(props){_classCallCheck(this,UserAnswersList);var _this=_possibleConstructorReturn(this,(UserAnswersList.__proto__||Object.getPrototypeOf(UserAnswersList)).call(this,props));_this.state={answers:[],loading:false};return _this;}_createClass(UserAnswersList,[{key:'componentDidUpdate',value:function componentDidUpdate(){var _this2=this;var user=this.props.user;var video=this.props.video;console.log(video,'huuuuhhhh');(0,_isomorphicFetch2.default)('/admin/answers/'+user+'/'+video).then(function(response){return response.json();}).then(function(json){return json;}).then(function(answers){return _this2.setState({answers:answers,loading:false});});}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextprops,nextstate){if(this.state==nextstate&&this.props==nextprops){return false;}return true;}},{key:'componentWillMount',value:function componentWillMount(){}},{key:'render',value:function render(){var _state=this.state,answers=_state.answers,loading=_state.loading;var user=this.props.user;console.log(this.props.video);return _react2.default.createElement('div',{className:'answers-list'},loading?_react2.default.createElement('span',null,'loading...'):_react2.default.createElement('span',null,answers.length,' answers'),answers.length?answers.map(function(answer,index){return _react2.default.createElement(_Answer2.default,{Key:index,user:answer.username,answer:answer.answer,question:answer.question,ques_num:answer.question_id});}):_react2.default.createElement('span',null,' This user hasn\\'t answered any questions '));}}]);return UserAnswersList;}(_react.Component);exports.default=UserAnswersList;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4P2FhZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyYW5zd2VyIGZyb20gJy4uLy4uL0Fuc3dlci9BbnN3ZXIuanN4JztcbmltcG9ydCAnLi4vVXNlckxpc3QuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFuc3dlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlPSB7XG4gICAgICBhbnN3ZXJzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuICB9XG5cblxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbmxldCB1c2VyID0gdGhpcy5wcm9wcy51c2VyXG4gICAgbGV0IHZpZGVvID0gdGhpcy5wcm9wcy52aWRlb1xuICAgIGNvbnNvbGUubG9nKHZpZGVvLCdodXV1dWhoaGgnKVxuICAgIGZldGNoKGAvYWRtaW4vYW5zd2Vycy8ke3VzZXJ9LyR7dmlkZW99YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBqc29uKVxuICAgIC50aGVuKGFuc3dlcnMgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYW5zd2VycyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSkpXG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRwcm9wcywgbmV4dHN0YXRlKXtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PSBuZXh0c3RhdGUgJiYgdGhpcy5wcm9wcyA9PW5leHRwcm9wcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG5cbiAgfVxuXG5yZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHthbnN3ZXJzLCBsb2FkaW5nfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgeyB1c2VyIH09IHRoaXMucHJvcHNcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy52aWRlbylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vycy1saXN0XCI+XG4gICAgICAgICAgICAgICAgeyhsb2FkaW5nKT9cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmxvYWRpbmcuLi48L3NwYW4+OlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Fuc3dlcnMubGVuZ3RofSBhbnN3ZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7KGFuc3dlcnMubGVuZ3RoKT9cbiAgICAgICAgICAgICAgICAgIGFuc3dlcnMubWFwKFxuICAgICAgICAgICAgICAgICAgICAoYW5zd2VyLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICA8VXNlcmFuc3dlclxuICAgICAgICAgICAgICAgICAgICAgIEtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17YW5zd2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcj17YW5zd2VyLmFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbj17YW5zd2VyLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXNfbnVtPSB7YW5zd2VyLnF1ZXN0aW9uX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKTpcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+IFRoaXMgdXNlciBoYXNuJ3QgYW5zd2VyZWQgYW55IHF1ZXN0aW9ucyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///550\n");

/***/ })

})