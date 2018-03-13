webpackHotUpdate(0,{

/***/ 596:
/*!*************************************!*\
  !*** ./src/Routes/Redux/actions.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports,\"__esModule\",{value:true});exports.INVALIDATE_SUBREDDIT=exports.SELECT_SUBREDDIT=exports.RECEIVE_POSTS=exports.REQUEST_POSTS=undefined;exports.userSignupRequest=userSignupRequest;exports.selectSubreddit=selectSubreddit;exports.invalidateSubreddit=invalidateSubreddit;exports.fetchPostsIfNeeded=fetchPostsIfNeeded;var _isomorphicFetch=__webpack_require__(/*! isomorphic-fetch */ 26);var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var REQUEST_POSTS=exports.REQUEST_POSTS='REQUEST_POSTS';var RECEIVE_POSTS=exports.RECEIVE_POSTS='RECEIVE_POSTS';var SELECT_SUBREDDIT=exports.SELECT_SUBREDDIT='SELECT_SUBREDDIT';var INVALIDATE_SUBREDDIT=exports.INVALIDATE_SUBREDDIT='INVALIDATE_SUBREDDIT';function userSignupRequest(userData){}function selectSubreddit(subreddit){return{type:SELECT_SUBREDDIT,subreddit:subreddit};}function invalidateSubreddit(subreddit){return{type:INVALIDATE_SUBREDDIT,subreddit:subreddit};}function requestPosts(subreddit){return{type:REQUEST_POSTS,subreddit:subreddit};}function receivePosts(subreddit,json){return{type:RECEIVE_POSTS,subreddit:subreddit,posts:json.data.children.map(function(child){return child.data;}),receivedAt:Date.now()};}function fetchPosts(subreddit){return function(dispatch){dispatch(requestPosts(subreddit));return(0,_isomorphicFetch2.default)('https://www.reddit.com/r/'+subreddit+'.json').then(function(response){return response.json();}).then(function(json){return dispatch(receivePosts(subreddit,json));});};}function shouldFetchPosts(state,subreddit){var posts=state.postsBySubreddit[subreddit];if(!posts){return true;}else if(posts.isFetching){return false;}else{return posts.didInvalidate;}}function fetchPostsIfNeeded(subreddit){return function(dispatch,getState){if(shouldFetchPosts(getState(),subreddit)){return dispatch(fetchPosts(subreddit));}};}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvUmVkdXgvYWN0aW9ucy5qcz9iNTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9QT1NUUyA9ICdSRVFVRVNUX1BPU1RTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUE9TVFMgPSAnUkVDRUlWRV9QT1NUUydcbmV4cG9ydCBjb25zdCBTRUxFQ1RfU1VCUkVERElUID0gJ1NFTEVDVF9TVUJSRURESVQnXG5leHBvcnQgY29uc3QgSU5WQUxJREFURV9TVUJSRURESVQgPSAnSU5WQUxJREFURV9TVUJSRURESVQnXG5leHBvcnQgZnVuY3Rpb24gdXNlclNpZ251cFJlcXVlc3QodXNlckRhdGEpe1xuXG59XG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0U3VicmVkZGl0KHN1YnJlZGRpdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFTEVDVF9TVUJSRURESVQsXG4gICAgc3VicmVkZGl0XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVTdWJyZWRkaXQoc3VicmVkZGl0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogSU5WQUxJREFURV9TVUJSRURESVQsXG4gICAgc3VicmVkZGl0XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVxdWVzdFBvc3RzKHN1YnJlZGRpdCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUE9TVFMsXG4gICAgc3VicmVkZGl0XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjZWl2ZVBvc3RzKHN1YnJlZGRpdCwganNvbikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUE9TVFMsXG4gICAgc3VicmVkZGl0LFxuICAgIHBvc3RzOiBqc29uLmRhdGEuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLmRhdGEpLFxuICAgIHJlY2VpdmVkQXQ6IERhdGUubm93KClcbiAgfVxufVxuXG5mdW5jdGlvbiBmZXRjaFBvc3RzKHN1YnJlZGRpdCkge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RQb3N0cyhzdWJyZWRkaXQpKVxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly93d3cucmVkZGl0LmNvbS9yLyR7c3VicmVkZGl0fS5qc29uYClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4gZGlzcGF0Y2gocmVjZWl2ZVBvc3RzKHN1YnJlZGRpdCwganNvbikpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZEZldGNoUG9zdHMoc3RhdGUsIHN1YnJlZGRpdCkge1xuICBjb25zdCBwb3N0cyA9IHN0YXRlLnBvc3RzQnlTdWJyZWRkaXRbc3VicmVkZGl0XVxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChwb3N0cy5pc0ZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBvc3RzLmRpZEludmFsaWRhdGVcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb3N0c0lmTmVlZGVkKHN1YnJlZGRpdCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGlmIChzaG91bGRGZXRjaFBvc3RzKGdldFN0YXRlKCksIHN1YnJlZGRpdCkpIHtcbiAgICAgIHJldHVybiBkaXNwYXRjaChmZXRjaFBvc3RzKHN1YnJlZGRpdCkpXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL1JvdXRlcy9SZWR1eC9hY3Rpb25zLmpzIl0sIm1hcHBpbmdzIjoiQUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///596\n");

/***/ })

})