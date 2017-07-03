const db = require('../lib/db');


function getUnwatched(req, res, next){
  let user = req.params.user
  db.any(`SELECT videos.video_id,video_relations.watched,videos.source
FROM videos
JOIN video_relations on videos.video_id = video_relations.video_id
JOIN users on video_relations.user_id= users.user_id
WHERE users.username = ($1) and video_relations.watched=false;`,[user])
 .then((video) => {
      res.video = video[0];
      next();
    })
    .catch(error => next(error));
}

function getWatched(req, res, next){
    let user = req.params.user
  db.any(`SELECT videos.video_id,video_relations.watched,videos.source
FROM videos
JOIN video_relations on videos.video_id = video_relations.video_id
JOIN users on video_relations.user_id= users.user_id
WHERE users.username = ($1) and video_relations.watched=true;`,[user])
 .then((videos) => {
      res.videos = videos;
      next();
    })
    .catch(error => next(error));
}

function course_vid(req, res, next){
  let int = req.params.vid_id
  int.toString()
  console.log(int)
  db.one('SELECT * from videos WHERE video_id=($1);', [int])
 .then((video) => {
      res.video = video;
      next();
    })
    .catch(error => (console.log(error), next(error)));
}

function update_watched(req, res, next){
  console.log('huh')
//   UPDATE videos
// SET watched = TRUE
// WHERE
//  last_update IS NULL;
}

module.exports = {
  getUnwatched,
  course_vid,
  update_watched,
  getWatched,
}
