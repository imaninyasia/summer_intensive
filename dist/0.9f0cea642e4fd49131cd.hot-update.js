webpackHotUpdate(0,{

/***/ 551:
/*!******************************************!*\
  !*** ./src/Components/Answer/Answer.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _User=__webpack_require__(/*! ../User/User.jsx */ 179);var _User2=_interopRequireDefault(_User);__webpack_require__(/*! ./Answer.css */ 552);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Answer=function(_Component){_inherits(Answer,_Component);function Answer(props){_classCallCheck(this,Answer);return _possibleConstructorReturn(this,(Answer.__proto__||Object.getPrototypeOf(Answer)).call(this,props));}_createClass(Answer,[{key:'render',value:function render(){var _props=this.props,user=_props.user,answer=_props.answer,question=_props.question,ques_num=_props.ques_num,answer_long=_props.answer_long,answer_short=_props.answer_short;var correct=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Approve.svg/256px-Approve.svg.png\";return _react2.default.createElement('div',null,answer_short?_react2.default.createElement('div',null,answer_long?_react2.default.createElement('span',null,'LONG'):null,answer_short?_react2.default.createElement('span',null,'SHORT'):null,_react2.default.createElement('h3',null,user),_react2.default.createElement('h1',null,'#',ques_num),_react2.default.createElement('h3',{style:{display:'inline-block'}},'Question: ',question,'  '),answer==answer_short?_react2.default.createElement('img',{style:{display:'inline-block',height:'30px'},src:correct}):_react2.default.createElement('div',null,_react2.default.createElement('h3',null,'Answer: ',answer),_react2.default.createElement('h3',null,'UserAnswer: ',answer_short)),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-lg-8 col-md-7 col-sm-12'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,ques_num,' ',question)),_react2.default.createElement('div',{className:'editContent',style:{outline:'rgba(233, 94, 94, 0.5) solid 2px',outlineOffset:'-2px',cursor:'pointer'},'data-medium-editor-element':'true',role:'textbox','aria-multiline':'true','data-placeholder':'Type your text','data-medium-focused':'true'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-lg-4 col-md-5 col-sm-12'}))):_react2.default.createElement('section',{id:'basic-1-17',className:'basic-1-17 content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{style:{paddingBottom:'0px'},className:'underlined-title'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,question)),_react2.default.createElement('hr',null),_react2.default.createElement('div',{className:'editContent'})),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Student Response')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Admin Comment')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.')))))));}}]);return Answer;}(_react.Component);exports.default=Answer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL0Fuc3dlci9BbnN3ZXIuanN4P2U5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXIvVXNlci5qc3gnO1xuaW1wb3J0ICcuL0Fuc3dlci5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuc3dlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHt1c2VyLCBhbnN3ZXIsIHF1ZXN0aW9uLCBxdWVzX251bSwgYW5zd2VyX2xvbmcsIGFuc3dlcl9zaG9ydH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY29ycmVjdCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9mL2Y2L0FwcHJvdmUuc3ZnLzI1NnB4LUFwcHJvdmUuc3ZnLnBuZ1wiXG4gICAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAge2Fuc3dlcl9zaG9ydD9cbiAgICAgIDxkaXY+XG4gICAgeyhhbnN3ZXJfbG9uZyk/IDxzcGFuPkxPTkc8L3NwYW4+IDogbnVsbH1cbiAgICB7KGFuc3dlcl9zaG9ydCk/IDxzcGFuPlNIT1JUPC9zcGFuPjogbnVsbH1cbiAgICA8aDM+e3VzZXJ9PC9oMz5cbiAgICA8aDE+I3txdWVzX251bX08L2gxPlxuICAgIDxoMyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX0+UXVlc3Rpb246IHtxdWVzdGlvbn0gIDwvaDM+XG4gICAgeyhhbnN3ZXI9PWFuc3dlcl9zaG9ydCk/PGltZyBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBoZWlnaHQ6JzMwcHgnfX1zcmM9e2NvcnJlY3R9IC8+IDpcbiAgICA8ZGl2PlxuICA8aDM+QW5zd2VyOiB7YW5zd2VyfTwvaDM+XG4gICAgPGgzPlVzZXJBbnN3ZXI6IHthbnN3ZXJfc2hvcnR9PC9oMz5cbiAgICA8L2Rpdj59XG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtNyBjb2wtc20tMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+e3F1ZXNfbnVtfSB7cXVlc3Rpb259PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCIgc3R5bGU9e3tvdXRsaW5lOiAncmdiYSgyMzMsIDk0LCA5NCwgMC41KSBzb2xpZCAycHgnLCBvdXRsaW5lT2Zmc2V0OiAnLTJweCcsIGN1cnNvcjogJ3BvaW50ZXInfX0gZGF0YS1tZWRpdW0tZWRpdG9yLWVsZW1lbnQ9XCJ0cnVlXCIgcm9sZT1cInRleHRib3hcIiBhcmlhLW11bHRpbGluZT1cInRydWVcIiBkYXRhLXBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHRleHRcIiBkYXRhLW1lZGl1bS1mb2N1c2VkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIG1hc3NhIGV4LCBzdXNjaXBpdCBpZCBsaWd1bGEgYXQsIGx1Y3R1cyB0ZW1wdXMgZG9sb3IuIEV0aWFtIHNvZGFsZXMgcG9zdWVyZSBsaWd1bGEsIGV1IGFsaXF1ZXQgbnVuYyBjb21tb2RvIHZpdGFlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuPC9wPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIG1hc3NhIGV4LCBzdXNjaXBpdCBpZCBsaWd1bGEgYXQsIGx1Y3R1cyB0ZW1wdXMgZG9sb3IuIEV0aWFtIHNvZGFsZXMgcG9zdWVyZSBsaWd1bGEsIGV1IGFsaXF1ZXQgbnVuYyBjb21tb2RvIHZpdGFlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC01IGNvbC1zbS0xMlwiPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj4gOiA8c2VjdGlvbiBpZD1cImJhc2ljLTEtMTdcIiBjbGFzc05hbWU9XCJiYXNpYy0xLTE3IGNvbnRlbnQtYmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOicwcHgnfX1jbGFzc05hbWU9XCJ1bmRlcmxpbmVkLXRpdGxlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgICA8aDE+e3F1ZXN0aW9ufTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgPGgyPlN0dWRlbnQgUmVzcG9uc2U8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSBtYXNzYSBleCwgc3VzY2lwaXQgaWQgbGlndWxhIGF0LCBsdWN0dXMgdGVtcHVzIGRvbG9yLiBFdGlhbSBzb2RhbGVzIHBvc3VlcmUgbGlndWxhLCBldSBhbGlxdWV0IG51bmMgY29tbW9kbyB2aXRhZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5BZG1pbiBDb21tZW50PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuICAgIH1cblxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvQW5zd2VyL0Fuc3dlci5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///551\n");

/***/ })

})