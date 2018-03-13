webpackHotUpdate(0,{

/***/ 547:
/*!******************************************!*\
  !*** ./src/Components/Signup/Signup.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.Signup=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(/*! prop-types */ 2);var _reactRedux=__webpack_require__(/*! react-redux */ 564);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Signup=exports.Signup=function(_Component){_inherits(Signup,_Component);function Signup(props){_classCallCheck(this,Signup);var _this=_possibleConstructorReturn(this,(Signup.__proto__||Object.getPrototypeOf(Signup)).call(this,props));_this.state={validPasswords:true,email:null,password:null,passwordConfirm:null};_this.submit=_this.submit.bind(_this);_this.email=_this.email.bind(_this);_this.password=_this.password.bind(_this);_this.passwordConfirm=_this.passwordConfirm.bind(_this);return _this;}_createClass(Signup,[{key:'email',value:function email(e){this.setState({email:e.target.value});}},{key:'password',value:function password(e){this.setState({password:e.target.value});}},{key:'passwordConfirm',value:function passwordConfirm(e){this.setState({passwordConfirm:e.target.value});}},{key:'submit',value:function submit(e){var _this2=this;e.preventDefault();this.props.dispatch(this.props.auth({her:'djsng'}));var user=[];if(this.state.password==this.state.passwordConfirm){if(this.state.email!='admin.mail'){var admin=false;this.props.userSignupRequest(this.state,admin).then(function(res){return res.json();}).then(function(data){user=data.user_id;localStorage.setItem('token',data.token);localStorage.setItem('ind',data.email);fetch('/user/user/'+user,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:_this2.state.email,password:_this2.state.password})});_this2.props.addFlashMessage({type:'success',text:'you have signed up successfully'});_this2.props.next.props.history.push('/dashboard');});}else if(this.state.email=='admin.mail'){var _admin=true;this.props.userSignupRequest(this.state,_admin).then(function(res){return res.json();}).then(function(json){return json;}).then(function(data){console.log(data);_this2.props.addFlashMessage({type:'success',text:'Admin has signed up successfully'});localStorage.setItem('token',data.token);localStorage.setItem('ind',data.email);_this2.props.next.props.history.push('/dashboard');});}}else this.setState({validPasswords:false});}},{key:'render',value:function render(){var _React$createElement;var validPasswords=this.state.validPasswords;return _react2.default.createElement('div',null,_react2.default.createElement('form',{onSubmit:this.submit},_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',{id:'signup-email',onChange:this.email,required:true,type:'email',placeholder:'Email',className:'form-control'})),_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',{id:'signup-password',onChange:this.password,type:'password',required:true,placeholder:'Password',className:'form-control'})),_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',(_React$createElement={id:'signup-password-confirm',onChange:this.passwordConfirm,required:true,type:'password',placeholder:'Confirm Password'},_defineProperty(_React$createElement,'required',true),_defineProperty(_React$createElement,'className','form-control'),_React$createElement))),_react2.default.createElement('button',{onClick:this.submit,className:'btn btn-primary btn-block',style:{outline:'none',cursor:'inherit',outlineOffset:'-2px',borderRadius:'4px',fontSize:'14px',backgroundColor:'rgb(22, 160, 133)'},src:'http://placehold.it/800x600'},'Signup')),validPasswords==true?null:_react2.default.createElement('h5',{style:{color:'red'}},'Passwords not the same'));}}]);return Signup;}(_react.Component);Signup.defaultProps={email:\"imani\",password:\"imani\",confirm:\"imani\"};Signup.propTypes={userSignupRequest:_react2.default.PropTypes.func.isRequired,addFlashMessage:_react2.default.PropTypes.func.isRequired,email:_propTypes.PropTypes.string.isRequired,password:_propTypes.PropTypes.string.isRequired,confirm:_propTypes.PropTypes.string.isRequired,dispatch:_propTypes.PropTypes.func.isRequired,auth:_propTypes.PropTypes.func.isRequired};exports.default=(0,_reactRedux.connect)()(Signup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1NpZ251cC9TaWdudXAuanN4PzZmYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlc30gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZXhwb3J0IGNsYXNzIFNpZ251cCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWxpZFBhc3N3b3JkczogdHJ1ZSxcbiAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICBwYXNzd29yZENvbmZpcm06IG51bGxcbiAgICB9XG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbWFpbCA9IHRoaXMuZW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMucGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkLmJpbmQodGhpcylcbiAgICB0aGlzLnBhc3N3b3JkQ29uZmlybSA9IHRoaXMucGFzc3dvcmRDb25maXJtLmJpbmQodGhpcylcbiAgfVxuXG4gIGVtYWlsKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2VtYWlsOiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgcGFzc3dvcmQoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBwYXNzd29yZENvbmZpcm0oZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmRDb25maXJtOiBlLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgc3VibWl0KGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxudGhpcy5wcm9wcy5kaXNwYXRjaCh0aGlzLnByb3BzLmF1dGgoe2hlcjogJ2Rqc25nJ30pKVxuICAgICAgIGxldCB1c2VyID0gW11cbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PSB0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZmlybSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZW1haWwhPSdhZG1pbi5tYWlsJylcbiAgICAgIHtcbiAgICAgICAgbGV0IGFkbWluID0gZmFsc2VcbiAgICAgICB0aGlzLnByb3BzLnVzZXJTaWdudXBSZXF1ZXN0KHRoaXMuc3RhdGUsIGFkbWluKVxuICAgICAgLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT57XG4gICAgICAgIHVzZXI9ZGF0YS51c2VyX2lkXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5kJywgZGF0YS5lbWFpbClcbiAgICAgICBmZXRjaCgnL3VzZXIvdXNlci8nK3VzZXIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAgdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOidzdWNjZXNzJyxcbiAgICAgICAgdGV4dDogJ3lvdSBoYXZlIHNpZ25lZCB1cCBzdWNjZXNzZnVsbHknfSlcbiAgICAgICB0aGlzLnByb3BzLm5leHQucHJvcHMuaGlzdG9yeS5wdXNoKCcvZGFzaGJvYXJkJylcbiAgICAgIH0pXG5cbiAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5lbWFpbD09J2FkbWluLm1haWwnKVxuICAgIHtcbiAgICAgIGxldCBhZG1pbiA9IHRydWVcbiAgICAgIHRoaXMucHJvcHMudXNlclNpZ251cFJlcXVlc3QodGhpcy5zdGF0ZSwgYWRtaW4pXG4gICAgICAudGhlbigocmVzKSA9PnJlcy5qc29uKCkpXG4gICAgICAudGhlbihqc29uPT5qc29uKVxuICAgICAgLnRoZW4oZGF0YT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgICB0aGlzLnByb3BzLmFkZEZsYXNoTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6J3N1Y2Nlc3MnLFxuICAgICAgICB0ZXh0OiAnQWRtaW4gaGFzIHNpZ25lZCB1cCBzdWNjZXNzZnVsbHknfSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4pXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW5kJywgZGF0YS5lbWFpbClcbiAgICAgIHRoaXMucHJvcHMubmV4dC5wcm9wcy5oaXN0b3J5LnB1c2goJy9kYXNoYm9hcmQnKVxuICB9KVxuXG4gICAgfVxuXG4gIH1cbiAgICBlbHNlXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFBhc3N3b3JkczogZmFsc2V9KVxuICAgICAgICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICBsZXQgdmFsaWRQYXNzd29yZHM9dGhpcy5zdGF0ZS52YWxpZFBhc3N3b3Jkc1xuICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdH0gPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInNpZ251cC1lbWFpbFwiIG9uQ2hhbmdlPXt0aGlzLmVtYWlsfSByZXF1aXJlZCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzaWdudXAtcGFzc3dvcmRcIiBvbkNoYW5nZT17dGhpcy5wYXNzd29yZH0gdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzaWdudXAtcGFzc3dvcmQtY29uZmlybVwiIG9uQ2hhbmdlPXt0aGlzLnBhc3N3b3JkQ29uZmlybX0gcmVxdWlyZWQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIGN1cnNvcjogJ2luaGVyaXQnLCBvdXRsaW5lT2Zmc2V0OiAnLTJweCcsIGJvcmRlclJhZGl1czogJzRweCcsIGZvbnRTaXplOiAnMTRweCcsIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMiwgMTYwLCAxMzMpJ319IHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvODAweDYwMFwiPlNpZ251cDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgeyh2YWxpZFBhc3N3b3JkcyA9PSB0cnVlKT8gbnVsbCA6IDxoNSBzdHlsZT17e2NvbG9yOiAncmVkJ319PlBhc3N3b3JkcyBub3QgdGhlIHNhbWU8L2g1PiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5TaWdudXAuZGVmYXVsdFByb3BzID0ge1xuICBlbWFpbDogXCJpbWFuaVwiLFxuICBwYXNzd29yZDogXCJpbWFuaVwiLFxuICBjb25maXJtOiBcImltYW5pXCJcbn1cblNpZ251cC5wcm9wVHlwZXMgPSB7XG4gIHVzZXJTaWdudXBSZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhZGRGbGFzaE1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBhc3N3b3JkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbmZpcm06IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGF1dGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShTaWdudXApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbXBvbmVudHMvU2lnbnVwL1NpZ251cC5qc3giXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///547\n");

/***/ })

})