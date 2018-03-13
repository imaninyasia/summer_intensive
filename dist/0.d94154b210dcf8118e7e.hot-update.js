webpackHotUpdate(0,{

/***/ 596:
/*!*************************************!*\
  !*** ./src/Routes/Redux/actions.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.INVALIDATE_SUBREDDIT=exports.SELECT_SUBREDDIT=exports.RECEIVE_POSTS=exports.REQUEST_POSTS=undefined;exports.userSignupRequest=userSignupRequest;exports.selectSubreddit=selectSubreddit;exports.invalidateSubreddit=invalidateSubreddit;exports.fetchPostsIfNeeded=fetchPostsIfNeeded;var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var REQUEST_POSTS=exports.REQUEST_POSTS='REQUEST_POSTS';var RECEIVE_POSTS=exports.RECEIVE_POSTS='RECEIVE_POSTS';var SELECT_SUBREDDIT=exports.SELECT_SUBREDDIT='SELECT_SUBREDDIT';var INVALIDATE_SUBREDDIT=exports.INVALIDATE_SUBREDDIT='INVALIDATE_SUBREDDIT';function userSignupRequest(userData){var _this=this;return function(dispatch){return(0,_isomorphicFetch2.default)('/user/signup/'+admin,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:_this.refs.email.value,password:_this.refs.password.value})});};}function selectSubreddit(subreddit){return{type:SELECT_SUBREDDIT,subreddit:subreddit};}function invalidateSubreddit(subreddit){return{type:INVALIDATE_SUBREDDIT,subreddit:subreddit};}function requestPosts(subreddit){return{type:REQUEST_POSTS,subreddit:subreddit};}function receivePosts(subreddit,json){return{type:RECEIVE_POSTS,subreddit:subreddit,posts:json.data.children.map(function(child){return child.data;}),receivedAt:Date.now()};}function fetchPosts(subreddit){return function(dispatch){dispatch(requestPosts(subreddit));return(0,_isomorphicFetch2.default)('https://www.reddit.com/r/'+subreddit+'.json').then(function(response){return response.json();}).then(function(json){return dispatch(receivePosts(subreddit,json));});};}function shouldFetchPosts(state,subreddit){var posts=state.postsBySubreddit[subreddit];if(!posts){return true;}else if(posts.isFetching){return false;}else{return posts.didInvalidate;}}function fetchPostsIfNeeded(subreddit){return function(dispatch,getState){if(shouldFetchPosts(getState(),subreddit)){return dispatch(fetchPosts(subreddit));}};}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvUmVkdXgvYWN0aW9ucy5qcz9iNTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUE9TVFMgPSAnUkVDRUlWRV9QT1NUUydcbmV4cG9ydCBjb25zdCBTRUxFQ1RfU1VCUkVERElUID0gJ1NFTEVDVF9TVUJSRURESVQnXG5leHBvcnQgY29uc3QgSU5WQUxJREFURV9TVUJSRURESVQgPSAnSU5WQUxJREFURV9TVUJSRURESVQnXG5leHBvcnQgZnVuY3Rpb24gdXNlclNpZ251cFJlcXVlc3QodXNlckRhdGEpe1xuXG5cbiAgcmV0dXJuIGRpc3BhdGNoPT4ge1xuICAgIHJldHVybiAoIGZldGNoKGAvdXNlci9zaWdudXAvJHthZG1pbn1gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiB0aGlzLnJlZnMuZW1haWwudmFsdWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnJlZnMucGFzc3dvcmQudmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgICApXG4gIH1cblxufVxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFN1YnJlZGRpdChzdWJyZWRkaXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRUxFQ1RfU1VCUkVERElULFxuICAgIHN1YnJlZGRpdFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlU3VicmVkZGl0KHN1YnJlZGRpdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IElOVkFMSURBVEVfU1VCUkVERElULFxuICAgIHN1YnJlZGRpdFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RQb3N0cyhzdWJyZWRkaXQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1BPU1RTLFxuICAgIHN1YnJlZGRpdFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlY2VpdmVQb3N0cyhzdWJyZWRkaXQsIGpzb24pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1BPU1RTLFxuICAgIHN1YnJlZGRpdCxcbiAgICBwb3N0czoganNvbi5kYXRhLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5kYXRhKSxcbiAgICByZWNlaXZlZEF0OiBEYXRlLm5vdygpXG4gIH1cbn1cblxuZnVuY3Rpb24gZmV0Y2hQb3N0cyhzdWJyZWRkaXQpIHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0UG9zdHMoc3VicmVkZGl0KSlcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vd3d3LnJlZGRpdC5jb20vci8ke3N1YnJlZGRpdH0uanNvbmApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IGRpc3BhdGNoKHJlY2VpdmVQb3N0cyhzdWJyZWRkaXQsIGpzb24pKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRGZXRjaFBvc3RzKHN0YXRlLCBzdWJyZWRkaXQpIHtcbiAgY29uc3QgcG9zdHMgPSBzdGF0ZS5wb3N0c0J5U3VicmVkZGl0W3N1YnJlZGRpdF1cbiAgaWYgKCFwb3N0cykge1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAocG9zdHMuaXNGZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwb3N0cy5kaWRJbnZhbGlkYXRlXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUG9zdHNJZk5lZWRlZChzdWJyZWRkaXQpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoc2hvdWxkRmV0Y2hQb3N0cyhnZXRTdGF0ZSgpLCBzdWJyZWRkaXQpKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2goZmV0Y2hQb3N0cyhzdWJyZWRkaXQpKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvUmVkdXgvYWN0aW9ucy5qcyJdLCJtYXBwaW5ncyI6IkFBTUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///596\n");

/***/ })

})