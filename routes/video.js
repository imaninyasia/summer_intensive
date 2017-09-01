const videoRouter = require('express').Router()
const { getUnwatched, course_vid, update_watched, getWatched } = require('../models/video.js')

videoRouter.route('/viewed/:user/:videos')
  .get(getWatched, (req, res) => res.json(res.videos || []));

videoRouter.route('/non/:user')
  .get(getUnwatched, (req, res) => res.json(res.video || []));

videoRouter.route('/ind/:vid_id')
  .get(course_vid, (req, res) => res.json(res.video || []));

videoRouter.route('/update/:vid_id')
  .post(update_watched, (req, res)=> res.json({message: "video watched value updated"}))
module.exports = videoRouter;
