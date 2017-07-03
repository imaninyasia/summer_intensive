BEGIN;


INSERT INTO videos (video_id, source, watched) VALUES

(1, 'https://player.vimeo.com/video/216706579', FALSE ),
(2, 'https://www.youtube.com/embed/9kOpgbYqkQk', FALSE),
(3, 'https://www.youtube.com/embed/YMQRFT4bZuc', FALSE),
(4, 'https://www.youtube.com/embed/XKqWnOtbSr8', FALSE);

INSERT INTO answer_sheet (question_id, question, answer_short, video_id, choice_1, choice_2, choice_3) VALUES

(1, 'What color are your shoes', 'black', 3, 'black', 'pink', 'grey'),
(2, 'How old are you?', '21', 3, '18', '21', '32' ),
(3, 'how was your day?', NULL, 3, NULL, NULL, NULL);

COMMIT;

