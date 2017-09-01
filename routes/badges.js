const badgesRouter = require('express').Router()
const { getCourses, getParts, updateProgress, updateComplete, completeCourse} = require('../models/badges.js')

badgesRouter.route('/courses/:user')
  .get(getCourses, (req, res) => res.json(res.courses || []));

badgesRouter.route('/parts/:user_v/:course')
  .get(getParts, (req, res) => res.json(res.parts || []));

badgesRouter.route('/update/:vid_id/:user_e')
  .post(updateProgress, (req, res)=> res.json({message: "part progress updated:begun"}))

badgesRouter.route('/updatec/:video_id/:user_c')
.post(updateComplete, (req, res)=> res.json({ message: "part progress updated:complete"}))

badgesRouter.route('/course/:user_p')
.post(completeCourse, (req, res)=>({ message: "course progress to true"}))
module.exports = badgesRouter;
