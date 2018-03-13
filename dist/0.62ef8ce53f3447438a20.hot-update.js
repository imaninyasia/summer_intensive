webpackHotUpdate(0,{

/***/ 535:
/*!**************************************************!*\
  !*** ./src/Routes/AdminAnswers/AdminAnswers.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 33);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _StudentDash=__webpack_require__(/*! ../../Components/StudentDash/StudentDash.jsx */ 378);var _StudentDash2=_interopRequireDefault(_StudentDash);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 536);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AdminAnswers=function(_Component){_inherits(AdminAnswers,_Component);function AdminAnswers(props){_classCallCheck(this,AdminAnswers);var _this=_possibleConstructorReturn(this,(AdminAnswers.__proto__||Object.getPrototypeOf(AdminAnswers)).call(this,props));_this.state={student:_this.props.match.params.student_id};return _this;}_createClass(AdminAnswers,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h1',null,' User '),_react2.default.createElement(_StudentDash2.default,{admin:true,student_id:this.state.student}),_react2.default.createElement('section',{id:'basic-1-6',className:'basic-1-6 content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'underlined-title'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,'Short Answers')),_react2.default.createElement('hr',null),_react2.default.createElement('div',{className:'editContent'})),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-lg-8 col-md-7 col-sm-12'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Question One')),_react2.default.createElement('div',{className:'editContent',style:{outline:'rgba(233, 94, 94, 0.5) solid 2px',outlineOffset:'-2px',cursor:'pointer'},'data-medium-editor-element':'true',role:'textbox','aria-multiline':'true','data-placeholder':'Type your text','data-medium-focused':'true'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-lg-4 col-md-5 col-sm-12'})),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-lg-8 col-md-7 col-sm-12'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Question Two')),_react2.default.createElement('div',{className:'editContent',style:{outline:'rgba(233, 94, 94, 0.5) solid 2px',outlineOffset:'-2px',cursor:'pointer'},spellCheck:'true','data-medium-editor-element':'true',role:'textbox','aria-multiline':'true','data-placeholder':'Type your text','data-medium-focused':'true'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'),_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-lg-4 col-md-5 col-sm-12'})))),_react2.default.createElement('section',{id:'basic-1-17',className:'basic-1-17 content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'underlined-title'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,'Long Answers')),_react2.default.createElement('hr',null),_react2.default.createElement('div',{className:'editContent'})),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Column One')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Column Two')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.')))))),_react2.default.createElement(_UserAnswersList2.default,{user:this.state.student}),_react2.default.createElement('label',null,'User Assesment'),_react2.default.createElement('input',{type:'text',ref:'user_assesment'}));}}]);return AdminAnswers;}(_react.Component);exports.default=AdminAnswers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTM1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvQWRtaW5BbnN3ZXJzL0FkbWluQW5zd2Vycy5qc3g/ZTFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IFN0dWRlbnREYXNoIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU3R1ZGVudERhc2gvU3R1ZGVudERhc2guanN4J1xuaW1wb3J0IFVzZXJBbnN3ZXJzTGlzdCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkbWluQW5zd2VycyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPXtcbiAgICAgIHN0dWRlbnQ6IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnN0dWRlbnRfaWRcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgPGgxPiBVc2VyIDwvaDE+XG4gICAgICA8U3R1ZGVudERhc2ggYWRtaW49e3RydWV9XG4gICAgICBzdHVkZW50X2lkPXt0aGlzLnN0YXRlLnN0dWRlbnR9Lz5cbiAgICAgIDxzZWN0aW9uIGlkPVwiYmFzaWMtMS02XCIgY2xhc3NOYW1lPVwiYmFzaWMtMS02IGNvbnRlbnQtYmxvY2tcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZWQtdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMT5TaG9ydCBBbnN3ZXJzPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC03IGNvbC1zbS0xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5RdWVzdGlvbiBPbmU8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIiBzdHlsZT17e291dGxpbmU6ICdyZ2JhKDIzMywgOTQsIDk0LCAwLjUpIHNvbGlkIDJweCcsIG91dGxpbmVPZmZzZXQ6ICctMnB4JywgY3Vyc29yOiAncG9pbnRlcid9fSBkYXRhLW1lZGl1bS1lZGl0b3ItZWxlbWVudD1cInRydWVcIiByb2xlPVwidGV4dGJveFwiIGFyaWEtbXVsdGlsaW5lPVwidHJ1ZVwiIGRhdGEtcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgdGV4dFwiIGRhdGEtbWVkaXVtLWZvY3VzZWQ9XCJ0cnVlXCI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLW1kLTUgY29sLXNtLTEyXCI+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTcgY29sLXNtLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgPGgyPlF1ZXN0aW9uIFR3bzwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiIHN0eWxlPXt7b3V0bGluZTogJ3JnYmEoMjMzLCA5NCwgOTQsIDAuNSkgc29saWQgMnB4Jywgb3V0bGluZU9mZnNldDogJy0ycHgnLCBjdXJzb3I6ICdwb2ludGVyJ319ICBzcGVsbENoZWNrPVwidHJ1ZVwiIGRhdGEtbWVkaXVtLWVkaXRvci1lbGVtZW50PVwidHJ1ZVwiIHJvbGU9XCJ0ZXh0Ym94XCIgYXJpYS1tdWx0aWxpbmU9XCJ0cnVlXCIgZGF0YS1wbGFjZWhvbGRlcj1cIlR5cGUgeW91ciB0ZXh0XCIgZGF0YS1tZWRpdW0tZm9jdXNlZD1cInRydWVcIj5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSBtYXNzYSBleCwgc3VzY2lwaXQgaWQgbGlndWxhIGF0LCBsdWN0dXMgdGVtcHVzIGRvbG9yLiBFdGlhbSBzb2RhbGVzIHBvc3VlcmUgbGlndWxhLCBldSBhbGlxdWV0IG51bmMgY29tbW9kbyB2aXRhZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLjwvcD5cbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSBtYXNzYSBleCwgc3VzY2lwaXQgaWQgbGlndWxhIGF0LCBsdWN0dXMgdGVtcHVzIGRvbG9yLiBFdGlhbSBzb2RhbGVzIHBvc3VlcmUgbGlndWxhLCBldSBhbGlxdWV0IG51bmMgY29tbW9kbyB2aXRhZS4gQ2xhc3MgYXB0ZW50IHRhY2l0aSBzb2Npb3NxdSBhZCBsaXRvcmEgdG9ycXVlbnQgcGVyIGNvbnViaWEgbm9zdHJhLCBwZXIgaW5jZXB0b3MgaGltZW5hZW9zLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNSBjb2wtc20tMTJcIj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgPHNlY3Rpb24gaWQ9XCJiYXNpYy0xLTE3XCIgY2xhc3NOYW1lPVwiYmFzaWMtMS0xNyBjb250ZW50LWJsb2NrXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZWQtdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMT5Mb25nIEFuc3dlcnM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5Db2x1bW4gT25lPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+Q29sdW1uIFR3bzwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIG1hc3NhIGV4LCBzdXNjaXBpdCBpZCBsaWd1bGEgYXQsIGx1Y3R1cyB0ZW1wdXMgZG9sb3IuIEV0aWFtIHNvZGFsZXMgcG9zdWVyZSBsaWd1bGEsIGV1IGFsaXF1ZXQgbnVuYyBjb21tb2RvIHZpdGFlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgICAgIDxVc2VyQW5zd2Vyc0xpc3QgdXNlcj17dGhpcy5zdGF0ZS5zdHVkZW50fS8+XG4gICAgICA8bGFiZWw+VXNlciBBc3Nlc21lbnQ8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPSd1c2VyX2Fzc2VzbWVudCcgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL0FkbWluQW5zd2Vycy9BZG1pbkFuc3dlcnMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///535\n");

/***/ })

})