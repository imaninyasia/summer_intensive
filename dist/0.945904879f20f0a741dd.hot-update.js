webpackHotUpdate(0,{

/***/ 547:
/*!******************************************!*\
  !*** ./src/Components/Signup/Signup.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(/*! prop-types */ 2);var _reactRedux=__webpack_require__(/*! react-redux */ 564);var _actions=__webpack_require__(/*! ../../Routes/Redux/actions.js */ 596);var actions=_interopRequireWildcard(_actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var createHandlers=function createHandlers(dispatch){var onClick=function onClick(node,data){dispatch(actions.auth);};return{onClick:onClick// other handlers\n};};var Signup=function(_Component){_inherits(Signup,_Component);function Signup(props){_classCallCheck(this,Signup);var _this=_possibleConstructorReturn(this,(Signup.__proto__||Object.getPrototypeOf(Signup)).call(this,props));_this.state={validPasswords:true,email:null,password:null,passwordConfirm:null};_this.submit=_this.submit.bind(_this);_this.email=_this.email.bind(_this);_this.password=_this.password.bind(_this);_this.passwordConfirm=_this.passwordConfirm.bind(_this);_this.handler=createHandlers(_this.props.dispatch);return _this;}_createClass(Signup,[{key:'email',value:function email(e){this.setState({email:e.target.value});}},{key:'password',value:function password(e){this.setState({password:e.target.value});}},{key:'passwordConfirm',value:function passwordConfirm(e){this.setState({passwordConfirm:e.target.value});}},{key:'submit',value:function submit(e){var _this2=this;e.preventDefault();var user=[];if(this.state.password==this.state.passwordConfirm){if(this.state.email!='admin.mail'){var admin=false;this.props.userSignupRequest(this.state,admin).then(function(res){return res.json();}).then(function(data){user=data.user_id;localStorage.setItem('token',data.token);localStorage.setItem('ind',data.email);fetch('/user/user/'+user,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:_this2.state.email,password:_this2.state.password})});dispatch(actions.auth(data));_this2.props.addFlashMessage({type:'success',text:'you have signed up successfully'});_this2.props.next.props.history.push('/dashboard');});}else if(this.state.email=='admin.mail'){var _admin=true;this.props.userSignupRequest(this.state,_admin).then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){_this2.props.addFlashMessage({type:'success',text:'Admin has signed up successfully'});localStorage.setItem('token',data.token);localStorage.setItem('ind',data.email);_this2.props.next.props.history.push('/dashboard');});}}else this.setState({validPasswords:false});}},{key:'render',value:function render(){var _React$createElement;var validPasswords=this.state.validPasswords;return _react2.default.createElement('div',null,_react2.default.createElement('form',{onSubmit:this.submit},_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',{id:'signup-email',onChange:this.email,required:true,type:'email',placeholder:'Email',className:'form-control'})),_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',{id:'signup-password',onChange:this.password,type:'password',required:true,placeholder:'Password',className:'form-control'})),_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',(_React$createElement={id:'signup-password-confirm',onChange:this.passwordConfirm,required:true,type:'password',placeholder:'Confirm Password'},_defineProperty(_React$createElement,'required',true),_defineProperty(_React$createElement,'className','form-control'),_React$createElement))),_react2.default.createElement('button',{onClick:this.submit,className:'btn btn-primary btn-block',style:{outline:'none',cursor:'inherit',outlineOffset:'-2px',borderRadius:'4px',fontSize:'14px',backgroundColor:'rgb(22, 160, 133)'},src:'http://placehold.it/800x600'},'Signup')),validPasswords==true?null:_react2.default.createElement('h5',{style:{color:'red'}},'Passwords not the same'));}}]);return Signup;}(_react.Component);Signup.defaultProps={email:\"imani\",password:\"imani\",confirm:\"imani\"};Signup.propTypes={userSignupRequest:_react2.default.PropTypes.func.isRequired,addFlashMessage:_react2.default.PropTypes.func.isRequired,email:_propTypes.PropTypes.string.isRequired,password:_propTypes.PropTypes.string.isRequired,confirm:_propTypes.PropTypes.string.isRequired};exports.default=(0,_reactRedux.connect)()(Signup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1NpZ251cC9TaWdudXAuanN4PzZmYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlc30gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vLi4vUm91dGVzL1JlZHV4L2FjdGlvbnMuanMnXG5sZXQgY3JlYXRlSGFuZGxlcnMgPSBmdW5jdGlvbihkaXNwYXRjaCl7XG4gIGxldCBvbkNsaWNrPWZ1bmN0aW9uKG5vZGUsIGRhdGEpe1xuICAgIGRpc3BhdGNoKGFjdGlvbnMuYXV0aClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25DbGljayxcbiAgICAvLyBvdGhlciBoYW5kbGVyc1xuICB9O1xufVxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbGlkUGFzc3dvcmRzOiB0cnVlLFxuICAgICAgZW1haWw6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIHBhc3N3b3JkQ29uZmlybTogbnVsbFxuICAgIH1cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcylcbiAgICB0aGlzLmVtYWlsID0gdGhpcy5lbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQuYmluZCh0aGlzKVxuICAgIHRoaXMucGFzc3dvcmRDb25maXJtID0gdGhpcy5wYXNzd29yZENvbmZpcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlciA9IGNyZWF0ZUhhbmRsZXJzKHRoaXMucHJvcHMuZGlzcGF0Y2gpXG4gIH1cblxuICBlbWFpbChlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtlbWFpbDogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHBhc3N3b3JkKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgcGFzc3dvcmRDb25maXJtKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkQ29uZmlybTogZS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGxldCB1c2VyID0gW11cbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PSB0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwhPSdhZG1pbi5tYWlsJylcbiAgICAgIHtcbiAgICAgICAgbGV0IGFkbWluID0gZmFsc2VcbiAgICAgICB0aGlzLnByb3BzLnVzZXJTaWdudXBSZXF1ZXN0KHRoaXMuc3RhdGUsIGFkbWluKVxuICAgICAgLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT57XG4gICAgICAgIHVzZXI9ZGF0YS51c2VyX2lkXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5kJywgZGF0YS5lbWFpbClcbiAgICAgICBmZXRjaCgnL3VzZXIvdXNlci8nK3VzZXIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hdXRoKGRhdGEpKVxuICAgICAgIHRoaXMucHJvcHMuYWRkRmxhc2hNZXNzYWdlKHtcbiAgICAgICAgdHlwZTonc3VjY2VzcycsXG4gICAgICAgIHRleHQ6ICd5b3UgaGF2ZSBzaWduZWQgdXAgc3VjY2Vzc2Z1bGx5J30pXG4gICAgICAgdGhpcy5wcm9wcy5uZXh0LnByb3BzLmhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICB9KVxuXG4gICAgfSBlbHNlIGlmKHRoaXMuc3RhdGUuZW1haWw9PSdhZG1pbi5tYWlsJylcbiAgICB7XG4gICAgICBsZXQgYWRtaW4gPSB0cnVlXG4gICAgICB0aGlzLnByb3BzLnVzZXJTaWdudXBSZXF1ZXN0KHRoaXMuc3RhdGUsIGFkbWluKVxuICAgICAgLnRoZW4oKHJlcykgPT5yZXMuanNvbigpKVxuICAgICAgLnRoZW4oanNvbj0+anNvbilcbiAgICAgIC50aGVuKGRhdGE9PntcbiAgICAgIHRoaXMucHJvcHMuYWRkRmxhc2hNZXNzYWdlKHtcbiAgICAgICAgdHlwZTonc3VjY2VzcycsXG4gICAgICAgIHRleHQ6ICdBZG1pbiBoYXMgc2lnbmVkIHVwIHN1Y2Nlc3NmdWxseSd9KVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbilcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmQnLCBkYXRhLmVtYWlsKVxuICAgICAgdGhpcy5wcm9wcy5uZXh0LnByb3BzLmhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpXG4gIH0pXG5cbiAgICB9XG5cbiAgfVxuICAgIGVsc2VcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkUGFzc3dvcmRzOiBmYWxzZX0pXG4gICAgICAgIH1cblxuICByZW5kZXIoKXtcbiAgICBsZXQgdmFsaWRQYXNzd29yZHM9dGhpcy5zdGF0ZS52YWxpZFBhc3N3b3Jkc1xuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSA+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic2lnbnVwLWVtYWlsXCIgb25DaGFuZ2U9e3RoaXMuZW1haWx9IHJlcXVpcmVkIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInNpZ251cC1wYXNzd29yZFwiIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkfSB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInNpZ251cC1wYXNzd29yZC1jb25maXJtXCIgb25DaGFuZ2U9e3RoaXMucGFzc3dvcmRDb25maXJtfSByZXF1aXJlZCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIiByZXF1aXJlZCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBzdHlsZT17e291dGxpbmU6ICdub25lJywgY3Vyc29yOiAnaW5oZXJpdCcsIG91dGxpbmVPZmZzZXQ6ICctMnB4JywgYm9yZGVyUmFkaXVzOiAnNHB4JywgZm9udFNpemU6ICcxNHB4JywgYmFja2dyb3VuZENvbG9yOiAncmdiKDIyLCAxNjAsIDEzMyknfX0gc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC84MDB4NjAwXCI+U2lnbnVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICB7KHZhbGlkUGFzc3dvcmRzID09IHRydWUpPyBudWxsIDogPGg1IHN0eWxlPXt7Y29sb3I6ICdyZWQnfX0+UGFzc3dvcmRzIG5vdCB0aGUgc2FtZTwvaDU+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblNpZ251cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVtYWlsOiBcImltYW5pXCIsXG4gIHBhc3N3b3JkOiBcImltYW5pXCIsXG4gIGNvbmZpcm06IFwiaW1hbmlcIlxufVxuU2lnbnVwLnByb3BUeXBlcyA9IHtcbiAgdXNlclNpZ251cFJlcXVlc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGFkZEZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGFzc3dvcmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29uZmlybTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoU2lnbnVwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9TaWdudXAvU2lnbnVwLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFTQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///547\n");

/***/ })

})