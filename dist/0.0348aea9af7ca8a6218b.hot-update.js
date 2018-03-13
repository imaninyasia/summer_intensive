webpackHotUpdate(0,{

/***/ 549:
/*!**************************************************!*\
  !*** ./src/Routes/AdminAnswers/AdminAnswers.jsx ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _StudentDash=__webpack_require__(/*! ../../Components/StudentDash/StudentDash.jsx */ 182);var _StudentDash2=_interopRequireDefault(_StudentDash);var _UserAnswersList=__webpack_require__(/*! ../../Components/UserList/UserAnswersList/UserAnswersList.jsx */ 550);var _UserAnswersList2=_interopRequireDefault(_UserAnswersList);__webpack_require__(/*! ./AdminAnswers.css */ 601);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AdminAnswers=function(_Component){_inherits(AdminAnswers,_Component);function AdminAnswers(props){_classCallCheck(this,AdminAnswers);var _this=_possibleConstructorReturn(this,(AdminAnswers.__proto__||Object.getPrototypeOf(AdminAnswers)).call(this,props));_this.state={student:_this.props.match.params.student_id,assessment:null,url:null};_this.submit=_this.submit.bind(_this);_this.change=_this.change.bind(_this);_this.assess=_this.assess.bind(_this);return _this;}_createClass(AdminAnswers,[{key:'change',value:function change(e){this.setState({assessment:e.target.value});}},{key:'assess',value:function assess(e){this.setState({url:e.target.value});}},{key:'submit',value:function submit(e){e.preventDefault();console.log('submitting form for assessment');console.log(this.state.student);(0,_isomorphicFetch2.default)('/admin/assessment/'+this.state.student,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({assessment:this.state.assessment,url:this.state.url})});}},{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('form',{className:'AssessmentForm',onSubmit:this.submit},_react2.default.createElement('label',null,'Assessment\\'s corresponding course'),_react2.default.createElement('select',{onChange:this.change,name:'assessment'},_react2.default.createElement('option',{value:'1'},'1'),_react2.default.createElement('option',{value:'2'},'2'),_react2.default.createElement('option',{value:'3'},'3'),_react2.default.createElement('option',{value:'4'},'4'),_react2.default.createElement('option',{value:'5'},'5'),_react2.default.createElement('option',{value:'6'},'6')),_react2.default.createElement('br',null),_react2.default.createElement('input',{placeholder:'Assessment URL',className:'putAssess',onChange:this.assess,type:'text'}),_react2.default.createElement('button',{className:'btn btn-primary',type:'submit'},' Upload ')),_react2.default.createElement(_StudentDash2.default,{admin:true,student_id:this.state.student}),_react2.default.createElement('section',{id:'basic-1-17',className:'basic-1-17 content-block'},_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'underlined-title'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h1',null,'Long Answers')),_react2.default.createElement('hr',null),_react2.default.createElement('div',{className:'editContent'})),_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Column One')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'))),_react2.default.createElement('div',{className:'col-sm-6'},_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('h2',null,'Column Two')),_react2.default.createElement('div',{className:'editContent'},_react2.default.createElement('p',null,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.')))))));}}]);return AdminAnswers;}(_react.Component);exports.default=AdminAnswers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvQWRtaW5BbnN3ZXJzL0FkbWluQW5zd2Vycy5qc3g/ZTFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IFN0dWRlbnREYXNoIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvU3R1ZGVudERhc2gvU3R1ZGVudERhc2guanN4J1xuaW1wb3J0IFVzZXJBbnN3ZXJzTGlzdCBmcm9tICcuLi8uLi9Db21wb25lbnRzL1VzZXJMaXN0L1VzZXJBbnN3ZXJzTGlzdC9Vc2VyQW5zd2Vyc0xpc3QuanN4JztcbmltcG9ydCAnLi9BZG1pbkFuc3dlcnMuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRtaW5BbnN3ZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgc3R1ZGVudDogdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc3R1ZGVudF9pZCxcbiAgICAgIGFzc2Vzc21lbnQ6IG51bGwsXG4gICAgICB1cmw6IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmFzc2VzcyA9IHRoaXMuYXNzZXNzLmJpbmQodGhpcylcbiAgfVxuY2hhbmdlKGUpe1xuICB0aGlzLnNldFN0YXRlKHthc3Nlc3NtZW50OiBlLnRhcmdldC52YWx1ZX0pXG59XG5hc3Nlc3MoZSl7XG4gIHRoaXMuc2V0U3RhdGUoe3VybDogZS50YXJnZXQudmFsdWV9KVxufVxuc3VibWl0KGUpe1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgY29uc29sZS5sb2coJ3N1Ym1pdHRpbmcgZm9ybSBmb3IgYXNzZXNzbWVudCcpXG4gIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3R1ZGVudClcbiAgZmV0Y2goYC9hZG1pbi9hc3Nlc3NtZW50LyR7dGhpcy5zdGF0ZS5zdHVkZW50fWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYXNzZXNzbWVudDogdGhpcy5zdGF0ZS5hc3Nlc3NtZW50LFxuICAgICAgdXJsOiB0aGlzLnN0YXRlLnVybFxuICAgICAgfSlcbiAgfSlcblxufVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJBc3Nlc3NtZW50Rm9ybVwib25TdWJtaXQ9e3RoaXMuc3VibWl0fT5cbjxsYWJlbD5Bc3Nlc3NtZW50J3MgY29ycmVzcG9uZGluZyBjb3Vyc2U8L2xhYmVsPlxuICA8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZX1uYW1lPVwiYXNzZXNzbWVudFwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+NTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+Njwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPGJyIC8+XG4gIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkFzc2Vzc21lbnQgVVJMXCIgY2xhc3NOYW1lPVwicHV0QXNzZXNzXCJvbkNoYW5nZT17dGhpcy5hc3Nlc3N9dHlwZT1cInRleHRcIiAvPlxuICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj4gVXBsb2FkIDwvYnV0dG9uPlxuPC9mb3JtPlxuICAgICAgPFN0dWRlbnREYXNoIGFkbWluPXt0cnVlfVxuICAgICAgc3R1ZGVudF9pZD17dGhpcy5zdGF0ZS5zdHVkZW50fS8+XG5cbiAgPHNlY3Rpb24gaWQ9XCJiYXNpYy0xLTE3XCIgY2xhc3NOYW1lPVwiYmFzaWMtMS0xNyBjb250ZW50LWJsb2NrXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZWQtdGl0bGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICAgIDxoMT5Mb25nIEFuc3dlcnM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5Db2x1bW4gT25lPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBOYW0gbWFzc2EgZXgsIHN1c2NpcGl0IGlkIGxpZ3VsYSBhdCwgbHVjdHVzIHRlbXB1cyBkb2xvci4gRXRpYW0gc29kYWxlcyBwb3N1ZXJlIGxpZ3VsYSwgZXUgYWxpcXVldCBudW5jIGNvbW1vZG8gdml0YWUuIENsYXNzIGFwdGVudCB0YWNpdGkgc29jaW9zcXUgYWQgbGl0b3JhIHRvcnF1ZW50IHBlciBjb251YmlhIG5vc3RyYSwgcGVyIGluY2VwdG9zIGhpbWVuYWVvcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRDb250ZW50XCI+XG4gICAgICAgICAgICA8aDI+Q29sdW1uIFR3bzwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0Q29udGVudFwiPlxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIG1hc3NhIGV4LCBzdXNjaXBpdCBpZCBsaWd1bGEgYXQsIGx1Y3R1cyB0ZW1wdXMgZG9sb3IuIEV0aWFtIHNvZGFsZXMgcG9zdWVyZSBsaWd1bGEsIGV1IGFsaXF1ZXQgbnVuYyBjb21tb2RvIHZpdGFlLiBDbGFzcyBhcHRlbnQgdGFjaXRpIHNvY2lvc3F1IGFkIGxpdG9yYSB0b3JxdWVudCBwZXIgY29udWJpYSBub3N0cmEsIHBlciBpbmNlcHRvcyBoaW1lbmFlb3MuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL0FkbWluQW5zd2Vycy9BZG1pbkFuc3dlcnMuanN4Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///549\n");

/***/ })

})