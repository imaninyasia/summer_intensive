
SELECT  videos.video_id, videos.vimeo_id ,video_relations.watched,videos.source
FROM videos
JOIN video_relations on videos.video_id = video_relations.video_id
JOIN users on video_relations.user_id= users.user_id
WHERE users.email ='l' and video_relations.watched=true and videos.video_id=ANY(ARRAY[ 1, 2 ]);


select parts.part_id, parts.videos, parts.course, part_relation.id, part_relation.progress, part_relation.user_id from parts join part_relation on parts.part_id = part_relation.part_id where 6=any(parts.videos) and part_relation.user_id=1


SELECT DISTINCT videos.video_id, video_relations.watched, videos.vimeo_id, videos.source, course, part
FROM videos
JOIN video_relations on videos.video_id = video_relations.video_id
JOIN users on video_relations.user_id= users.user_id
WHERE users.email = 'po' and video_relations.watched=false
********NOTE ******
should i make assesments into an array
********NOTE ******
-> just add "AND answer_sheet.video_id=($2)" to answer query <-
SELECT answer_sheet.question_id, answer_sheet.question, answer_sheet.answer_short, answer_sheet.answer_long, user_quiz.answer, users.email, answer_sheet.video_id
FROM answer_sheet
JOIN user_quiz on answer_sheet.question_id = user_quiz.question_id
JOIN users on user_quiz.user_id = users.user_id
WHERE users.email='jade@hotmail.com' and answer_sheet.video_id=3
SELECT users.email, user_quiz.answer, answer_sheet.question_id, answer_sheet.question, answer_sheet.answer_long, answer_sheet.answer_short FROM users JOIN user_quiz on user_quiz.user_id = users.user_id JOIN answer_sheet on user_quiz.question_id = answer_sheet.question_id WHERE users.email='po' and answer_sheet.video_id=3 ORDER BY question_id ASC;

for vimeo video thumbnail, make api call with the videoid, only render the iframe when you are at the course or at the answered questions page
