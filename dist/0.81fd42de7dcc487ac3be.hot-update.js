webpackHotUpdate(0,{

/***/ 596:
/*!*************************************!*\
  !*** ./src/Routes/Redux/actions.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var SET_ADMIN='SET_ADMIN';var SET_CURRENT_USER='SET_CURRENT_USER';var ADD_FLASH_MESSAGE='ADD_FLASH_MESSAGE';var DELETE_FLASH_MESSAGE='DELETE_FLASH_MESSAGE';function userSignupRequest(userData,admin){return function(dispatch){return fetch(\"/user/signup/\"+admin,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(userData)});};}function auth(user){return{type:SET_CURRENT_USER,user:user};}function addFlashMessage(message){return{type:ADD_FLASH_MESSAGE,message:message};}function deleteFlashMessage(id){return{type:DELETE_FLASH_MESSAGE,id:id};}function setAdmin(admin){return{type:SET_ADMIN,admin:admin};}module.exports={auth:auth,addFlashMessage:addFlashMessage,userSignupRequest:userSignupRequest,deleteFlashMessage:deleteFlashMessage,setAdmin:setAdmin,SET_ADMIN:SET_ADMIN,SET_CURRENT_USER:SET_CURRENT_USER,ADD_FLASH_MESSAGE:ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE:DELETE_FLASH_MESSAGE};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTk2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9Sb3V0ZXMvUmVkdXgvYWN0aW9ucy5qcz9iNTA3Il0sInNvdXJjZXNDb250ZW50IjpbIiBjb25zdCBTRVRfQURNSU4gPSAnU0VUX0FETUlOJ1xuIGNvbnN0IFNFVF9DVVJSRU5UX1VTRVIgPSAnU0VUX0NVUlJFTlRfVVNFUidcbiBjb25zdCBBRERfRkxBU0hfTUVTU0FHRSA9ICdBRERfRkxBU0hfTUVTU0FHRSdcbiBjb25zdCBERUxFVEVfRkxBU0hfTUVTU0FHRSA9ICdERUxFVEVfRkxBU0hfTUVTU0FHRSdcblxuIGZ1bmN0aW9uIHVzZXJTaWdudXBSZXF1ZXN0KHVzZXJEYXRhLCBhZG1pbil7XG4gIHJldHVybiBkaXNwYXRjaD0+IHtcbiAgICByZXR1cm4gKCBmZXRjaChcIi91c2VyL3NpZ251cC9cIithZG1pbiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpXG4gICAgfSlcbiAgICApXG4gIH1cblxufVxuXG5mdW5jdGlvbiBhdXRoKHVzZXIpe1xuICByZXR1cm57XG4gICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcbiAgICB1c2VyXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRmxhc2hNZXNzYWdlKG1lc3NhZ2Upe1xuICByZXR1cm57XG4gICAgdHlwZTogQUREX0ZMQVNIX01FU1NBR0UsXG4gICAgbWVzc2FnZVxuICB9XG59XG5mdW5jdGlvbiBkZWxldGVGbGFzaE1lc3NhZ2UoaWQpe1xuICByZXR1cm57XG4gICAgdHlwZTogREVMRVRFX0ZMQVNIX01FU1NBR0UsXG4gICAgaWRcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBZG1pbihhZG1pbil7XG4gIHJldHVybntcbiAgICB0eXBlOiBTRVRfQURNSU4sXG4gICAgYWRtaW5cbiAgfVxufVxubW9kdWxlLmV4cG9ydHM9e1xuYXV0aCxcbmFkZEZsYXNoTWVzc2FnZSxcbnVzZXJTaWdudXBSZXF1ZXN0LFxuZGVsZXRlRmxhc2hNZXNzYWdlLFxuc2V0QWRtaW4sXG5TRVRfQURNSU4sXG5TRVRfQ1VSUkVOVF9VU0VSLFxuQUREX0ZMQVNIX01FU1NBR0UsXG5ERUxFVEVfRkxBU0hfTUVTU0FHRVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Sb3V0ZXMvUmVkdXgvYWN0aW9ucy5qcyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///596\n");

/***/ })

})