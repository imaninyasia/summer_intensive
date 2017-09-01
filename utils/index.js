var jwt = require('jsonwebtoken');

function generateToken(user) {

  var u = {
    username: user.username,
    admin: user.admin,
    _id: user.user_id.toString(),
    email: user.email
//used to prevent creating posts w/o verifying emails
  };

  return token = jwt.sign(u, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

module.exports={
  generateToken
}
