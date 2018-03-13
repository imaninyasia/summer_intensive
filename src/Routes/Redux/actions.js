 const SET_ADMIN = 'SET_ADMIN'
 const SET_CURRENT_USER = 'SET_CURRENT_USER'
 const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE'
 const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE'
 const GET_EMAIL='GET_EMAIL'

 function userSignupRequest(userData, admin){
  return dispatch=> {
    return ( fetch("/user/signup/"+admin, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    )
  }

}
function email(json){
  return{
    type: GET_EMAIL,
    email: json
  }
}
function getEmail(user_id){
  return dispatch=>{
    return( fetch("/student/admin/"+user_id)
      .then(res => res.json())
      .then(json=> dispatch(email(json)))
      )
  }
}
function getWatchedVideos(user, videos){
  return dispatch=>{
    return( fetch("/videos/viewed/"+user+"/"+videos)

      )
  }
}

function logout(){
 return dispatch=>{
  localStorage.removeItem('token');
  localStorage.removeItem('ind');
  dispatch(auth({}))
 }
}
function auth(user){
  return{
    type: SET_CURRENT_USER,
    user
  }
}


function addFlashMessage(message){
  return{
    type: ADD_FLASH_MESSAGE,
    message
  }
}
function deleteFlashMessage(id){
  return{
    type: DELETE_FLASH_MESSAGE,
    id
  }
}

function setAdmin(admin){
  return{
    type: SET_ADMIN,
    admin
  }
}
module.exports={
auth,
email,
getWatchedVideos,
logout,
getEmail,
addFlashMessage,
userSignupRequest,
deleteFlashMessage,
setAdmin,
SET_ADMIN,
GET_EMAIL,
SET_CURRENT_USER,
ADD_FLASH_MESSAGE,
DELETE_FLASH_MESSAGE
}
