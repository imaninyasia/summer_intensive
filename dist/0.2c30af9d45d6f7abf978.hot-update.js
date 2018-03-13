webpackHotUpdate(0,{

/***/ 595:
/*!**************************************!*\
  !*** ./src/Routes/Redux/reducers.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});var _redux=__webpack_require__(/*! redux */ 87);var _actions=__webpack_require__(/*! ./actions */ 596);var _shortid=__webpack_require__(/*! shortid */ 606);var _shortid2=_interopRequireDefault(_shortid);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function selectedSubreddit(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'reactjs';var action=arguments[1];switch(action.type){case _actions.SELECT_SUBREDDIT:return action.subreddit;default:return state;}}function addFlashMessage(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];var action=arguments[1];switch(action.type){case _actions.ADD_FLASH_MESSAGE:return[].concat(_toConsumableArray(state),[{id:_shortid2.default.generate(),type:action.message.type,text:action.message.text}]);case DELETE_FLASH_MESSAGE:var index=findIndex(state,{id:action.id});if(index>=0){return[].concat(_toConsumableArray(state.slice(0,index)),_toConsumableArray(state.slice(index+1)));}return state;default:return state;}}function posts(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{isFetching:false,didInvalidate:false,items:[]};var action=arguments[1];switch(action.type){case _actions.INVALIDATE_SUBREDDIT:return Object.assign({},state,{didInvalidate:true});case _actions.REQUEST_POSTS:return Object.assign({},state,{isFetching:true,didInvalidate:false});case _actions.RECEIVE_POSTS:return Object.assign({},state,{isFetching:false,didInvalidate:false,items:action.posts,lastUpdated:action.receivedAt});default:return state;}}function postsBySubreddit(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var action=arguments[1];switch(action.type){case _actions.INVALIDATE_SUBREDDIT:case _actions.RECEIVE_POSTS:case _actions.REQUEST_POSTS:return Object.assign({},state,_defineProperty({},action.subreddit,posts(state[action.subreddit],action)));default:return state;}}var rootReducer=(0,_redux.combineReducers)({postsBySubreddit:postsBySubreddit,selectedSubreddit:selectedSubreddit,addFlashMessage:addFlashMessage});exports.default=rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvUmVkdXgvcmVkdWNlcnMuanM/NGNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7XG4gIEFERF9GTEFTSF9NRVNTQUdFLFxuICBTRUxFQ1RfU1VCUkVERElULFxuICBJTlZBTElEQVRFX1NVQlJFRERJVCxcbiAgUkVRVUVTVF9QT1NUUyxcbiAgUkVDRUlWRV9QT1NUU1xufSBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJ1xuZnVuY3Rpb24gc2VsZWN0ZWRTdWJyZWRkaXQoc3RhdGUgPSAncmVhY3RqcycsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRUxFQ1RfU1VCUkVERElUOlxuICAgICAgcmV0dXJuIGFjdGlvbi5zdWJyZWRkaXRcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbmZ1bmN0aW9uIGFkZEZsYXNoTWVzc2FnZSAoc3RhdGU9W10sIGFjdGlvbilcbntcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBBRERfRkxBU0hfTUVTU0FHRTpcbiAgICByZXR1cm4gW1xuICAgIC4uLnN0YXRlLFxuICAgIHtcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gICAgICB0eXBlOiBhY3Rpb24ubWVzc2FnZS50eXBlLFxuICAgICAgdGV4dDogYWN0aW9uLm1lc3NhZ2UudGV4dFxuICAgIH1cbiAgICBdXG4gICAgY2FzZSBERUxFVEVfRkxBU0hfTUVTU0FHRTpcbiAgICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4KHN0YXRlLCB7IGlkOiBhY3Rpb24uaWQgfSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKDAsIGluZGV4KSxcbiAgICAgICAgICAuLi5zdGF0ZS5zbGljZShpbmRleCArIDEpXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGU7XG5cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIHBvc3RzKFxuICBzdGF0ZSA9IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgYWN0aW9uXG4pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5WQUxJREFURV9TVUJSRURESVQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGlkSW52YWxpZGF0ZTogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfUE9TVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICAgICAgZGlkSW52YWxpZGF0ZTogZmFsc2VcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1BPU1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBkaWRJbnZhbGlkYXRlOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5wb3N0cyxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IGFjdGlvbi5yZWNlaXZlZEF0XG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0c0J5U3VicmVkZGl0KHN0YXRlID0ge30sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTlZBTElEQVRFX1NVQlJFRERJVDpcbiAgICBjYXNlIFJFQ0VJVkVfUE9TVFM6XG4gICAgY2FzZSBSRVFVRVNUX1BPU1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIFthY3Rpb24uc3VicmVkZGl0XTogcG9zdHMoc3RhdGVbYWN0aW9uLnN1YnJlZGRpdF0sIGFjdGlvbilcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgcG9zdHNCeVN1YnJlZGRpdCxcbiAgc2VsZWN0ZWRTdWJyZWRkaXQsXG4gIGFkZEZsYXNoTWVzc2FnZVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvUm91dGVzL1JlZHV4L3JlZHVjZXJzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///595\n");

/***/ })

})