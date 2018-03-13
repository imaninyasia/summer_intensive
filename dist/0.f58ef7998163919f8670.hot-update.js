webpackHotUpdate(0,{

/***/ 551:
/*!******************************************!*\
  !*** ./src/Components/Answer/Answer.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _User=__webpack_require__(/*! ../User/User.jsx */ 179);var _User2=_interopRequireDefault(_User);__webpack_require__(/*! ./Answer.css */ 552);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Answer=function(_Component){_inherits(Answer,_Component);function Answer(props){_classCallCheck(this,Answer);return _possibleConstructorReturn(this,(Answer.__proto__||Object.getPrototypeOf(Answer)).call(this,props));}_createClass(Answer,[{key:'render',value:function render(){var _props=this.props,user=_props.user,answer=_props.answer,question=_props.question,ques_num=_props.ques_num,answer_long=_props.answer_long,answer_short=_props.answer_short;var correct=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Approve.svg/256px-Approve.svg.png\";return _react2.default.createElement('div',null,answer_short?_react2.default.createElement('div',null,answer_long?_react2.default.createElement('span',null,'LONG'):null,answer_short?_react2.default.createElement('span',null,'SHORT'):null,_react2.default.createElement('h3',null,user),_react2.default.createElement('h1',null,'#',ques_num),_react2.default.createElement('h3',{style:{display:'inline-block'}},'Question: ',question,'  '),answer==answer_short?_react2.default.createElement('img',{style:{display:'inline-block',height:'30px'},src:correct}):_react2.default.createElement('div',null,_react2.default.createElement('h3',null,'Answer: ',answer),_react2.default.createElement('h3',null,'UserAnswer: ',answer_short))):null);}}]);return Answer;}(_react.Component);exports.default=Answer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL0Fuc3dlci9BbnN3ZXIuanN4P2U5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXIvVXNlci5qc3gnO1xuaW1wb3J0ICcuL0Fuc3dlci5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuc3dlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHt1c2VyLCBhbnN3ZXIsIHF1ZXN0aW9uLCBxdWVzX251bSwgYW5zd2VyX2xvbmcsIGFuc3dlcl9zaG9ydH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY29ycmVjdCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9mL2Y2L0FwcHJvdmUuc3ZnLzI1NnB4LUFwcHJvdmUuc3ZnLnBuZ1wiXG4gICAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAge2Fuc3dlcl9zaG9ydD9cbiAgICAgIDxkaXY+XG4gICAgeyhhbnN3ZXJfbG9uZyk/IDxzcGFuPkxPTkc8L3NwYW4+IDogbnVsbH1cbiAgICB7KGFuc3dlcl9zaG9ydCk/IDxzcGFuPlNIT1JUPC9zcGFuPjogbnVsbH1cbiAgICA8aDM+e3VzZXJ9PC9oMz5cbiAgICA8aDE+I3txdWVzX251bX08L2gxPlxuICAgIDxoMyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+UXVlc3Rpb246IHtxdWVzdGlvbn0gIDwvaDM+XG4gICAgeyhhbnN3ZXI9PWFuc3dlcl9zaG9ydCk/PGltZyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBoZWlnaHQ6JzMwcHgnfX1zcmM9e2NvcnJlY3R9IC8+IDpcbiAgICA8ZGl2PlxuICA8aDM+QW5zd2VyOiB7YW5zd2VyfTwvaDM+XG4gICAgPGgzPlVzZXJBbnN3ZXI6IHthbnN3ZXJfc2hvcnR9PC9oMz5cbiAgICA8L2Rpdj59XG4gICAgPC9kaXY+IDogbnVsbFxuICAgIH1cblxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvQW5zd2VyL0Fuc3dlci5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///551\n");

/***/ })

})