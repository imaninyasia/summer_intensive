const db = require('../lib/db');


function getUnwatched(req, res, next){
  let user = req.params.user
  db.any(`SELECT DISTINCT videos.video_id, video_relations.watched, videos.vimeo_id, videos.source
FROM videos
JOIN video_relations on videos.video_id = video_relations.video_id
JOIN users on video_relations.user_id= users.user_id
WHERE users.email = ($1) and video_relations.watched=false;`,[user])
 .then((video) => {
      res.video = video[0];
      next();
    })
    .catch(error => next(error));
}


function getWatched(req, res, next){
    let user = req.params.user
    let videos =req.params.videos
    let video_ids=[]
    let parts = videos.split(',');
    parts.forEach(function(num){
    Number(num)
    video_ids.push(Number(num));
  })
  console.log(video_ids)
  db.any('SELECT  videos.video_id, videos.vimeo_id, videos.course, videos.part,video_relations.watched,videos.source FROM videos JOIN video_relations on videos.video_id = video_relations.video_id JOIN users on video_relations.user_id= users.user_id WHERE users.email =($1) and video_relations.watched=true and videos.video_id=ANY(ARRAY[($2)]);',[user, video_ids])
 .then((videos) => {
  console.log(videos, 'watched')
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
  console.log(req.body)
db.none('UPDATE video_relations SET watched = ($3) WHERE user_id = (select user_id from users where email=($1) and video_id=($2));',[req.body.user, req.params.vid_id, req.body.watched])
.catch(error=> (console.log(error), next(error)));
}

module.exports = {
  getUnwatched,
  course_vid,
  update_watched,
  getWatched,
}
