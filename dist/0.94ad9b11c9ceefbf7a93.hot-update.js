webpackHotUpdate(0,{

/***/ 595:
/*!**************************************!*\
  !*** ./src/Routes/Redux/reducers.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _redux=__webpack_require__(/*! redux */ 87);var _findIndex=__webpack_require__(/*! lodash/findIndex */ 648);var _findIndex2=_interopRequireDefault(_findIndex);var _actions=__webpack_require__(/*! ./actions */ 596);var _shortid=__webpack_require__(/*! shortid */ 606);var _shortid2=_interopRequireDefault(_shortid);var _isEmpty=__webpack_require__(/*! lodash/isEmpty */ 734);var _isEmpty2=_interopRequireDefault(_isEmpty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var initialState={isAuthenticated:false,user:{}};function auth(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments[1];switch(action.type){case _actions.SET_CURRENT_USER:return[].concat(_toConsumableArray(state),[{isAuthenticated:!(0,_isEmpty2.default)(action.user),user:action.user}]);default:return state;}}function selectedSubreddit(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'reactjs';var action=arguments[1];switch(action.type){case _actions.SELECT_SUBREDDIT:return action.subreddit;default:return state;}}function addFlashMessage(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];switch(action.type){case _actions.ADD_FLASH_MESSAGE:return[].concat(_toConsumableArray(state),[{id:_shortid2.default.generate(),type:action.message.type,text:action.message.text}]);case _actions.DELETE_FLASH_MESSAGE:var index=(0,_findIndex2.default)(state,{id:action.id});if(index>=0){return[].concat(_toConsumableArray(state.slice(0,index)),_toConsumableArray(state.slice(index+1)));}return state;default:return state;}}function posts(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{isFetching:false,didInvalidate:false,items:[]};var action=arguments[1];switch(action.type){case _actions.INVALIDATE_SUBREDDIT:return Object.assign({},state,{didInvalidate:true});case _actions.REQUEST_POSTS:return Object.assign({},state,{isFetching:true,didInvalidate:false});case _actions.RECEIVE_POSTS:return Object.assign({},state,{isFetching:false,didInvalidate:false,items:action.posts,lastUpdated:action.receivedAt});default:return state;}}function postsBySubreddit(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];switch(action.type){case _actions.INVALIDATE_SUBREDDIT:case _actions.RECEIVE_POSTS:case _actions.REQUEST_POSTS:return Object.assign({},state,_defineProperty({},action.subreddit,posts(state[action.subreddit],action)));default:return state;}}var rootReducer=(0,_redux.combineReducers)({postsBySubreddit:postsBySubreddit,selectedSubreddit:selectedSubreddit,addFlashMessage:addFlashMessage,auth:auth});exports.default=rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvUmVkdXgvcmVkdWNlcnMuanM/NGNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnbG9kYXNoL2ZpbmRJbmRleCc7XG5pbXBvcnQge1xuICBBRERfRkxBU0hfTUVTU0FHRSxcbiAgU0VUX0NVUlJFTlRfVVNFUixcbiAgREVMRVRFX0ZMQVNIX01FU1NBR0UsXG4gIFNFTEVDVF9TVUJSRURESVQsXG4gIElOVkFMSURBVEVfU1VCUkVERElULFxuICBSRVFVRVNUX1BPU1RTLFxuICBSRUNFSVZFX1BPU1RTXG59IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSdcbmNvbnN0IGluaXRpYWxTdGF0ZT17XG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG4gIHVzZXI6e31cbn1cblxuZnVuY3Rpb24gYXV0aChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKXtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6XG4gICAgICByZXR1cm5bLi4uc3RhdGUsXG4gICAgICB7XG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogIWlzRW1wdHkoYWN0aW9uLnVzZXIpLFxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlclxuICAgICAgfV1cbiAgICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGVkU3VicmVkZGl0KHN0YXRlID0gJ3JlYWN0anMnLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VMRUNUX1NVQlJFRERJVDpcbiAgICAgIHJldHVybiBhY3Rpb24uc3VicmVkZGl0XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5mdW5jdGlvbiBhZGRGbGFzaE1lc3NhZ2UgKHN0YXRlPVtdLCBhY3Rpb24pXG57XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgQUREX0ZMQVNIX01FU1NBR0U6XG4gICAgcmV0dXJuIFtcbiAgICAuLi5zdGF0ZSxcbiAgICB7XG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgdHlwZTogYWN0aW9uLm1lc3NhZ2UudHlwZSxcbiAgICAgIHRleHQ6IGFjdGlvbi5tZXNzYWdlLnRleHRcbiAgICB9XG4gICAgXVxuICAgIGNhc2UgREVMRVRFX0ZMQVNIX01FU1NBR0U6XG4gICAgICBjb25zdCBpbmRleCA9IGZpbmRJbmRleChzdGF0ZSwgeyBpZDogYWN0aW9uLmlkIH0pO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBpbmRleCksXG4gICAgICAgICAgLi4uc3RhdGUuc2xpY2UoaW5kZXggKyAxKVxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBwb3N0cyhcbiAgc3RhdGUgPSB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgaXRlbXM6IFtdXG4gIH0sXG4gIGFjdGlvblxuKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOVkFMSURBVEVfU1VCUkVERElUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRpZEludmFsaWRhdGU6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1BPU1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9QT1NUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24ucG9zdHMsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24ucmVjZWl2ZWRBdFxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdHNCeVN1YnJlZGRpdChzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5WQUxJREFURV9TVUJSRURESVQ6XG4gICAgY2FzZSBSRUNFSVZFX1BPU1RTOlxuICAgIGNhc2UgUkVRVUVTVF9QT1NUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBbYWN0aW9uLnN1YnJlZGRpdF06IHBvc3RzKHN0YXRlW2FjdGlvbi5zdWJyZWRkaXRdLCBhY3Rpb24pXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHBvc3RzQnlTdWJyZWRkaXQsXG4gIHNlbGVjdGVkU3VicmVkZGl0LFxuICBhZGRGbGFzaE1lc3NhZ2UsXG4gIGF1dGhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1JvdXRlcy9SZWR1eC9yZWR1Y2Vycy5qcyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///595\n");

/***/ })

})