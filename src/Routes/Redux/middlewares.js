import jwt from 'jsonwebtoken'
import config from '../config'
export default (req, res, next)=> {
  const authorizationH = req.headers['authorization']
  let token;
  if (authorizationH){
    token = authorizationH.split(' ')[1];
  }
  if(token) {

  }else{
    res.status(403).json({
      error: 'no token'
    })
  }
}
