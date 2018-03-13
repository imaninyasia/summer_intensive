webpackHotUpdate(0,{

/***/ 595:
/*!**************************************!*\
  !*** ./src/Routes/Redux/reducers.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _redux=__webpack_require__(/*! redux */ 87);var _findIndex=__webpack_require__(/*! lodash/findIndex */ 648);var _findIndex2=_interopRequireDefault(_findIndex);var _actions=__webpack_require__(/*! ./actions */ 596);var _shortid=__webpack_require__(/*! shortid */ 606);var _shortid2=_interopRequireDefault(_shortid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function selectedSubreddit(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'reactjs';var action=arguments[1];switch(action.type){case _actions.SELECT_SUBREDDIT:return action.subreddit;default:return state;}}function addFlashMessage(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];switch(action.type){case _actions.ADD_FLASH_MESSAGE:return[].concat(_toConsumableArray(state),[{id:_shortid2.default.generate(),type:action.message.type,text:action.message.text}]);case _actions.DELETE_FLASH_MESSAGE:var index=(0,_findIndex2.default)(state,{id:action.id});if(index>=0){return[].concat(_toConsumableArray(state.slice(0,index)),_toConsumableArray(state.slice(index+1)));}return state;default:return state;}}function posts(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{isFetching:false,didInvalidate:false,items:[]};var action=arguments[1];switch(action.type){case _actions.INVALIDATE_SUBREDDIT:return Object.assign({},state,{didInvalidate:true});case _actions.REQUEST_POSTS:return Object.assign({},state,{isFetching:true,didInvalidate:false});case _actions.RECEIVE_POSTS:return Object.assign({},state,{isFetching:false,didInvalidate:false,items:action.posts,lastUpdated:action.receivedAt});default:return state;}}function postsBySubreddit(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];switch(action.type){case _actions.INVALIDATE_SUBREDDIT:case _actions.RECEIVE_POSTS:case _actions.REQUEST_POSTS:return Object.assign({},state,_defineProperty({},action.subreddit,posts(state[action.subreddit],action)));default:return state;}}var rootReducer=(0,_redux.combineReducers)({postsBySubreddit:postsBySubreddit,selectedSubreddit:selectedSubreddit,addFlashMessage:addFlashMessage,auth:auth});exports.default=rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvUmVkdXgvcmVkdWNlcnMuanM/NGNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnbG9kYXNoL2ZpbmRJbmRleCc7XG5pbXBvcnQge1xuICBBRERfRkxBU0hfTUVTU0FHRSxcbiAgREVMRVRFX0ZMQVNIX01FU1NBR0UsXG4gIFNFTEVDVF9TVUJSRURESVQsXG4gIElOVkFMSURBVEVfU1VCUkVERElULFxuICBSRVFVRVNUX1BPU1RTLFxuICBSRUNFSVZFX1BPU1RTXG59IGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnXG5mdW5jdGlvbiBzZWxlY3RlZFN1YnJlZGRpdChzdGF0ZSA9ICdyZWFjdGpzJywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFTEVDVF9TVUJSRURESVQ6XG4gICAgICByZXR1cm4gYWN0aW9uLnN1YnJlZGRpdFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuZnVuY3Rpb24gYWRkRmxhc2hNZXNzYWdlIChzdGF0ZT1bXSwgYWN0aW9uKVxue1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIEFERF9GTEFTSF9NRVNTQUdFOlxuICAgIHJldHVybiBbXG4gICAgLi4uc3RhdGUsXG4gICAge1xuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlLnR5cGUsXG4gICAgICB0ZXh0OiBhY3Rpb24ubWVzc2FnZS50ZXh0XG4gICAgfVxuICAgIF1cbiAgICBjYXNlIERFTEVURV9GTEFTSF9NRVNTQUdFOlxuICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgoc3RhdGUsIHsgaWQ6IGFjdGlvbi5pZCB9KTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKGluZGV4ICsgMSlcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gcG9zdHMoXG4gIHN0YXRlID0ge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICBhY3Rpb25cbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTlZBTElEQVRFX1NVQlJFRERJVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkaWRJbnZhbGlkYXRlOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9QT1NUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfUE9TVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGRpZEludmFsaWRhdGU6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLnBvc3RzLFxuICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLnJlY2VpdmVkQXRcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvc3RzQnlTdWJyZWRkaXQoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElOVkFMSURBVEVfU1VCUkVERElUOlxuICAgIGNhc2UgUkVDRUlWRV9QT1NUUzpcbiAgICBjYXNlIFJFUVVFU1RfUE9TVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgW2FjdGlvbi5zdWJyZWRkaXRdOiBwb3N0cyhzdGF0ZVthY3Rpb24uc3VicmVkZGl0XSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBwb3N0c0J5U3VicmVkZGl0LFxuICBzZWxlY3RlZFN1YnJlZGRpdCxcbiAgYWRkRmxhc2hNZXNzYWdlLFxuICBhdXRoXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvUmVkdXgvcmVkdWNlcnMuanMiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///595\n");

/***/ })

})