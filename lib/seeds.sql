BEGIN;


INSERT INTO videos (video_id, source, watched, vimeo_id, course, part) VALUES

(1, 'https://player.vimeo.com/video/216706579', FALSE, '216706579', 1, 1 ),
(2, 'https://player.vimeo.com/video/224011571', FALSE, '224011571', 1, 2 ),
(3, 'https://player.vimeo.com/video/203494889', FALSE, '203494889', 1, 3 ),
(4, 'https://player.vimeo.com/video/222729677', FALSE, '222729677', 2, 1 ),
(5, 'https://player.vimeo.com/video/153011731', FALSE, '153011731', 2, 2 ),
(6, 'https://player.vimeo.com/video/229856130', FALSE, '229856130', 2, 3 ),
(7,'https://player.vimeo.com/video/36820781', FALSE,'36820781' , 3, 1 ),
(8,'https://player.vimeo.com/video/214352663', FALSE,'214352663' , 3, 2 ),
(9, 'https://player.vimeo.com/video/230564722', FALSE, '230564722', 3, 3),
(10, 'https://player.vimeo.com/video/231289509', FALSE, '231289509', 1, 1);


INSERT INTO parts (part_id, name, course, progress, videos) VALUES
(1, 'replicate', 1, 'not started', '{1, 10}' ),
(2, 'modify', 1, 'not started', '{2}'),
(3, 'create', 1, 'not started', '{3}'),
(4, 'replicate', 2, 'not started', '{4}'),
(5, 'modify', 2, 'not started', '{5}'),
(6, 'create', 2,  'not started', '{6}'),
(7, 'replicate',3 , 'not started', '{7}'),
(8, 'modify', 3, 'not started', '{8}'),
(9, 'create', 3, 'not started', '{9}');
INSERT INTO courses (course_id, name, replicate, modify, create_, progress) VALUES
(1, '1', 1, 2, 3, FALSE),
(2, '2', 4, 5, 6, FALSE),
(3, '3', 7, 8, 9, FALSE);

INSERT INTO answer_sheet (question_id, question, answer_short, video_id, choice_1, choice_2, choice_3) VALUES

(1, 'What color are your shoes', 'black', 3, 'black', 'pink', 'grey'),
(2, 'How old are you?', '21', 3, '18', '21', '32' ),
(3, 'how was your day?', NULL, 3, NULL, NULL, NULL);

COMMIT;

