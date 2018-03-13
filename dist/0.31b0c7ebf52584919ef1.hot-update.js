webpackHotUpdate(0,{

/***/ 547:
/*!******************************************!*\
  !*** ./src/Components/Signup/Signup.jsx ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if(\"value\"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ 0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(/*! prop-types */ 2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError(\"Cannot call a class as a function\");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return call&&(typeof call===\"object\"||typeof call===\"function\")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!==\"function\"&&superClass!==null){throw new TypeError(\"Super expression must either be null or a function, not \"+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Signup=function(_Component){_inherits(Signup,_Component);function Signup(props){_classCallCheck(this,Signup);var _this=_possibleConstructorReturn(this,(Signup.__proto__||Object.getPrototypeOf(Signup)).call(this,props));_this.state={validPasswords:true};_this.submit=_this.submit.bind(_this);return _this;}_createClass(Signup,[{key:'submit',value:function submit(e){e.preventDefault();this.props.userSignupRequest(this.state);var user=[];//   if (this.refs.password.value == this.refs.confirm.value) {\n//     if (this.refs.email!='admin.mail')\n//     {\n//       let admin = false\n//     fetch(`/user/signup/${admin}`, {\n//     method: 'POST',\n//     headers: {\n//       'content-type': 'application/json',\n//     },\n//     body: JSON.stringify({\n//       email: this.refs.email.value,\n//       password: this.refs.password.value\n//     })\n//   })\n//     .then((r)=>r.json())\n//     .then((data) =>{\n//       user=data.user_id\n//       localStorage.setItem('token', data.token)\n//     localStorage.setItem('ind', data.email)\n//      fetch('/user/user/'+user, {\n//     method: 'POST',\n//     headers: {\n//       'content-type': 'application/json',\n//     },\n//     body: JSON.stringify({\n//       email: this.refs.email.value,\n//       password: this.refs.password.value\n//     })\n//   })\n//      this.props.next.props.history.push('/dashboard')\n//     })\n//   } else if(this.refs.email=='admin.mail')\n//   {\n//     let admin = true\n//     fetch(`/user/signup/${admin}`, {\n//     method: 'POST',\n//     headers: {\n//       'content-type': 'application/json',\n//     },\n//     body: JSON.stringify({\n//       email: this.refs.email.value,\n//       password: this.refs.password.value\n//     })\n//   })\n//     .then(() =>{\n//     this.props.next.props.history.push('/dashboard')\n//     })\n//   }\n// }\n//   else\n//     this.setState({validPasswords: false})\n}},{key:'render',value:function render(){var _React$createElement;var validPasswords=this.state.validPasswords;return _react2.default.createElement('div',null,_react2.default.createElement('form',{onSubmit:this.submit},_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',{id:'signup-email',required:true,type:'email',ref:'email',placeholder:'Email',className:'form-control'})),_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',{id:'signup-password',ref:'password',type:'password',required:true,placeholder:'Password',className:'form-control'})),_react2.default.createElement('div',{className:'form-group'},_react2.default.createElement('input',(_React$createElement={id:'signup-password-confirm',required:true,ref:'confirm',type:'password',placeholder:'Confirm Password'},_defineProperty(_React$createElement,'required',true),_defineProperty(_React$createElement,'className','form-control'),_React$createElement))),_react2.default.createElement('button',{onClick:this.submit,className:'btn btn-primary btn-block',style:{outline:'none',cursor:'inherit',outlineOffset:'-2px',borderRadius:'4px',fontSize:'14px',backgroundColor:'rgb(22, 160, 133)'},src:'http://placehold.it/800x600'},'Signup')),validPasswords==true?null:_react2.default.createElement('h5',{style:{color:'red'}},'Passwords not the same'));}}]);return Signup;}(_react.Component);exports.default=Signup;Signup.defaultProps={email:\"imani\",password:\"imani\",confirm:\"imani\"};Signup.propTypes={userSignupRequest:_react2.default.PropTypes.func.isRequired,email:_propTypes.PropTypes.string.isRequired,password:_propTypes.PropTypes.string.isRequired,confirm:_propTypes.PropTypes.string.isRequired};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQ3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Db21wb25lbnRzL1NpZ251cC9TaWdudXAuanN4PzZmYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlc30gZnJvbSAncHJvcC10eXBlcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWdudXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsaWRQYXNzd29yZHM6IHRydWVcbiAgICB9XG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpXG4gIH1cblxuICBzdWJtaXQoZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy5wcm9wcy51c2VyU2lnbnVwUmVxdWVzdCh0aGlzLnN0YXRlKVxuICAgIGxldCB1c2VyID0gW11cbiAgLy8gICBpZiAodGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlID09IHRoaXMucmVmcy5jb25maXJtLnZhbHVlKSB7XG4gIC8vICAgICBpZiAodGhpcy5yZWZzLmVtYWlsIT0nYWRtaW4ubWFpbCcpXG4gIC8vICAgICB7XG4gIC8vICAgICAgIGxldCBhZG1pbiA9IGZhbHNlXG4gIC8vICAgICBmZXRjaChgL3VzZXIvc2lnbnVwLyR7YWRtaW59YCwge1xuICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIC8vICAgICB9LFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAvLyAgICAgICBlbWFpbDogdGhpcy5yZWZzLmVtYWlsLnZhbHVlLFxuICAvLyAgICAgICBwYXNzd29yZDogdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG4gIC8vICAgICB9KVxuICAvLyAgIH0pXG4gIC8vICAgICAudGhlbigocik9PnIuanNvbigpKVxuICAvLyAgICAgLnRoZW4oKGRhdGEpID0+e1xuICAvLyAgICAgICB1c2VyPWRhdGEudXNlcl9pZFxuICAvLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKVxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZCcsIGRhdGEuZW1haWwpXG4gIC8vICAgICAgZmV0Y2goJy91c2VyL3VzZXIvJyt1c2VyLCB7XG4gIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gIC8vICAgICAgIGVtYWlsOiB0aGlzLnJlZnMuZW1haWwudmFsdWUsXG4gIC8vICAgICAgIHBhc3N3b3JkOiB0aGlzLnJlZnMucGFzc3dvcmQudmFsdWVcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy8gICAgICB0aGlzLnByb3BzLm5leHQucHJvcHMuaGlzdG9yeS5wdXNoKCcvZGFzaGJvYXJkJylcbiAgLy8gICAgIH0pXG5cbiAgLy8gICB9IGVsc2UgaWYodGhpcy5yZWZzLmVtYWlsPT0nYWRtaW4ubWFpbCcpXG4gIC8vICAge1xuICAvLyAgICAgbGV0IGFkbWluID0gdHJ1ZVxuICAvLyAgICAgZmV0Y2goYC91c2VyL3NpZ251cC8ke2FkbWlufWAsIHtcbiAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgLy8gICAgICAgZW1haWw6IHRoaXMucmVmcy5lbWFpbC52YWx1ZSxcbiAgLy8gICAgICAgcGFzc3dvcmQ6IHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZVxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuICAvLyAgICAgLnRoZW4oKCkgPT57XG4gIC8vICAgICB0aGlzLnByb3BzLm5leHQucHJvcHMuaGlzdG9yeS5wdXNoKCcvZGFzaGJvYXJkJylcblxuICAvLyAgICAgfSlcblxuICAvLyAgIH1cblxuICAvLyB9XG4gIC8vICAgZWxzZVxuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRQYXNzd29yZHM6IGZhbHNlfSlcbiAgICAgICAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGxldCB2YWxpZFBhc3N3b3Jkcz10aGlzLnN0YXRlLnZhbGlkUGFzc3dvcmRzXG4gICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0fSA+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic2lnbnVwLWVtYWlsXCIgcmVxdWlyZWQgdHlwZT1cImVtYWlsXCIgcmVmPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzaWdudXAtcGFzc3dvcmRcIiByZWY9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic2lnbnVwLXBhc3N3b3JkLWNvbmZpcm1cIiByZXF1aXJlZCByZWY9XCJjb25maXJtXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCIgcmVxdWlyZWQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLWJsb2NrXCIgc3R5bGU9e3tvdXRsaW5lOiAnbm9uZScsIGN1cnNvcjogJ2luaGVyaXQnLCBvdXRsaW5lT2Zmc2V0OiAnLTJweCcsIGJvcmRlclJhZGl1czogJzRweCcsIGZvbnRTaXplOiAnMTRweCcsIGJhY2tncm91bmRDb2xvcjogJ3JnYigyMiwgMTYwLCAxMzMpJ319IHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvODAweDYwMFwiPlNpZ251cDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgeyh2YWxpZFBhc3N3b3JkcyA9PSB0cnVlKT8gbnVsbCA6IDxoNSBzdHlsZT17e2NvbG9yOiAncmVkJ319PlBhc3N3b3JkcyBub3QgdGhlIHNhbWU8L2g1PiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5TaWdudXAuZGVmYXVsdFByb3BzID0ge1xuICBlbWFpbDogXCJpbWFuaVwiLFxuICBwYXNzd29yZDogXCJpbWFuaVwiLFxuICBjb25maXJtOiBcImltYW5pXCJcbn1cblNpZ251cC5wcm9wVHlwZXMgPSB7XG4gIHVzZXJTaWdudXBSZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwYXNzd29yZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjb25maXJtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvQ29tcG9uZW50cy9TaWdudXAvU2lnbnVwLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///547\n");

/***/ })

})