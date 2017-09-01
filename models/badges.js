const db = require('../lib/db');

function getCourses(req, res, next){
  db.one('SELECT * from users where email=($1)',[req.params.user])
  .then((user)=>{

    db.any('SELECT courses.name, courses.replicate, courses.modify, courses.create_, course_relation.progress, users.email, users.admin FROM courses JOIN course_relation on courses.course_id = course_relation.course_id JOIN users on course_relation.user_id = users.user_id WHERE users.user_id =($1) order by name asc;',[user.user_id])
    .then((courses)=> {
      res.courses = courses;
      next();
    })
    .catch(error => console.log(error))
  }).catch(error => console.log(error))
}

function getParts(req, res, next){
   db.one('SELECT * from users where email=($1)',[req.params.user_v])
  .then((user)=>{

    db.any('SELECT parts.name, parts.course, part_relation.progress, parts.videos, users.email, parts.part_id FROM parts JOIN part_relation on parts.part_id = part_relation.part_id JOIN users on part_relation.user_id = users.user_id WHERE users.user_id = ($1) and course=($2) ORDER BY part_relation.part_id ASC;',[user.user_id, req.params.course])
    .then((parts)=> {
      console.log(parts, 'parts')
      res.parts = parts;
      next();
    })
    .catch(error => console.log(error))
  }).catch(error => console.log(error))
}

function updateProgress(req, res, next){
  db.one('select user_id from users where email=($1)', [req.params.user_e])
  .then((user_id)=>{
    db.one('select parts.part_id, parts.videos, parts.course, part_relation.id, part_relation.progress, part_relation.user_id from parts join part_relation on parts.part_id = part_relation.part_id where ($1)=any(parts.videos) and part_relation.user_id=($2);',[req.params.vid_id, user_id.user_id])
    .then((part)=>{
    if(req.params.vid_id!=part.videos[part.videos.length-1]){
      progress='begun'
      console.log('updating part to begun')
      db.none('UPDATE part_relation SET progress = ($3) where part_id=($1) and user_id=($2);',[part.part_id, part.user_id, progress])
      .catch(error => console.log(error))
    }

    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
}

function updateComplete(req, res, next){
console.log('going to update progress to started')
  db.one('select user_id from users where email=($1)', [req.params.user_c])
  .then((user_id)=>{
    db.one('select parts.part_id, parts.videos, parts.course, part_relation.id, part_relation.progress, part_relation.user_id from parts join part_relation on parts.part_id = part_relation.part_id where ($1)=any(parts.videos) and part_relation.user_id=($2);',[req.params.video_id, user_id.user_id])
    .then((part)=>{
    if(req.params.video_id==part.videos[part.videos.length-1]){
      progress='completed'
      console.log('updating part to completed')

      db.none('UPDATE part_relation SET progress = ($1) where part_id=($2) and user_id=($3);',[progress, part.part_id, part.user_id, ])
      .catch(error => console.log(error))
    }
    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))
}

function completeCourse(){

}
module.exports = {
  getCourses,
  getParts,
  updateProgress,
  updateComplete,
  completeCourse
}
