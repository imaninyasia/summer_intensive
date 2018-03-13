webpackHotUpdate(0,{

/***/ 551:
/*!******************************************!*\
  !*** ./src/Components/Answer/Answer.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _User=__webpack_require__(/*! ../User/User.jsx */ 179);var _User2=_interopRequireDefault(_User);__webpack_require__(/*! ./Answer.css */ 552);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Answer=function(_Component){_inherits(Answer,_Component);function Answer(props){_classCallCheck(this,Answer);return _possibleConstructorReturn(this,(Answer.__proto__||Object.getPrototypeOf(Answer)).call(this,props));}_createClass(Answer,[{key:'render',value:function render(){var _props=this.props,user=_props.user,answer=_props.answer,question=_props.question,ques_num=_props.ques_num,answer_long=_props.answer_long,answer_short=_props.answer_short;var correct=\"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Approve.svg/256px-Approve.svg.png\";return _react2.default.createElement('div',null,answer_short?_react2.default.createElement('div',null,answer_long?_react2.default.createElement('span',null,'LONG'):null,answer_short?_react2.default.createElement('span',null,'SHORT'):null,_react2.default.createElement('h3',null,user),_react2.default.createElement('h1',null,'#'),_react2.default.createElement('h3',{style:{display:'inline-block'}},'Question: ',question,'  '),answer==answer_short?_react2.default.createElement('img',{style:{display:'inline-block',height:'30px'},src:correct}):_react2.default.createElement('div',null,_react2.default.createElement('h3',null,'Answer: ',answer),_react2.default.createElement('h3',null,'UserAnswer: ',answer_short)),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-lg-8 col-md-7 col-sm-12'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,ques_num,' ',question)),_react2.default.createElement('div',{className:'editContent',style:{outline:'rgba(233, 94, 94, 0.5) solid 2px',outlineOffset:'-2px',cursor:'pointer'},'data-medium-editor-element':'true',role:'textbox','aria-multiline':'true','data-placeholder':'Type your text','data-medium-focused':'true'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-lg-4 col-md-5 col-sm-12'}))):_react2.default.createElement('section',{id:'basic-1-17',className:'basic-1-17 content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{style:{paddingBottom:'0px'},className:'underlined-title'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,question)),_react2.default.createElement('hr',null),_react2.default.createElement('div',{className:'editContent'})),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Student Response')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Admin Comment')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.')))))));}}]);return Answer;}(_react.Component);exports.default=Answer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTUxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL0Fuc3dlci9BbnN3ZXIuanN4P2U5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBVc2VyIGZyb20gJy4uL1VzZXIvVXNlci5qc3gnO1xuaW1wb3J0ICcuL0Fuc3dlci5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuc3dlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHt1c2VyLCBhbnN3ZXIsIHF1ZXN0aW9uLCBxdWVzX251bSwgYW5zd2VyX2xvbmcsIGFuc3dlcl9zaG9ydH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY29ycmVjdCA9IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9mL2Y2L0FwcHJvdmUuc3ZnLzI1NnB4LUFwcHJvdmUuc3ZnLnBuZ1wiXG4gICAgcmV0dXJuKFxuICAgIDxkaXY+XG4gICAge2Fuc3dlcl9zaG9ydD9cbiAgICAgIDxkaXY+XG4gICAgeyhhbnN3ZXJfbG9uZyk/IDxzcGFuPkxPTkc8L3NwYW4+IDogbnVsbH1cbiAgICB7KGFuc3dlcl9zaG9ydCk/IDxzcGFuPlNIT1JUPC9zcGFuPjogbnVsbH1cbiAgICA8aDM+e3VzZXJ9PC9oMz5cbiAgICA8aDE+IzwvaDE+XG4gICAgPGgzIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jayd9fT5RdWVzdGlvbjoge3F1ZXN0aW9ufSAgPC9oMz5cbiAgICB7KGFuc3dlcj09YW5zd2VyX3Nob3J0KT88aW1nIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGhlaWdodDonMzBweCd9fXNyYz17Y29ycmVjdH0gLz4gOlxuICAgIDxkaXY+XG4gIDxoMz5BbnN3ZXI6IHthbnN3ZXJ9PC9oMz5cbiAgICA8aDM+VXNlckFuc3dlcjoge2Fuc3dlcl9zaG9ydH08L2gzPlxuICAgIDwvZGl2Pn1cbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC03IGNvbC1zbS0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj57cXVlc19udW19IHtxdWVzdGlvbn08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdyZ2JhKDIzMywgOTQsIDk0LCAwLjUpIHNvbGlkIDJweCcsIG91dGxpbmVPZmZzZXQ6ICctMnB4JywgY3Vyc29yOiAncG9pbnRlcid9fSBkYXRhLW1lZGl1bS1lZGl0b3ItZWxlbWVudD1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIGFyaWEtbXVsdGlsaW5lPVwidHJ1ZVwiIGRhdGEtcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgdGV4dFwiIGRhdGEtbWVkaXVtLWZvY3VzZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTUgY29sLXNtLTEyXCI+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiA6IDxzZWN0aW9uIGlkPVwiYmFzaWMtMS0xN1wiIGNsYXNzTmFtZT1cImJhc2ljLTEtMTcgY29udGVudC1ibG9ja1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206JzBweCd9fWNsYXNzTmFtZT1cInVuZGVybGluZWQtdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMT57cXVlc3Rpb259PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+U3R1ZGVudCBSZXNwb25zZTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIG1hc3NhIGV4LCBzdXNjaXBpdCBpZCBsaWd1bGEgYXQsIGx1Y3R1cyB0ZW1wdXMgZG9sb3IuIEV0aWFtIHNvZGFsZXMgcG9zdWVyZSBsaWd1bGEsIGV1IGFsaXF1ZXQgbnVuYyBjb21tb2RvIHZpdGFlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgPGgyPkFkbWluIENvbW1lbnQ8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSBtYXNzYSBleCwgc3VzY2lwaXQgaWQgbGlndWxhIGF0LCBsdWN0dXMgdGVtcHVzIGRvbG9yLiBFdGlhbSBzb2RhbGVzIHBvc3VlcmUgbGlndWxhLCBldSBhbGlxdWV0IG51bmMgY29tbW9kbyB2aXRhZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG4gICAgfVxuXG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9BbnN3ZXIvQW5zd2VyLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///551\n");

/***/ })

})