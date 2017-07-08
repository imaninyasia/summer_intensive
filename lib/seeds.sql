BEGIN;


INSERT INTO videos (video_id, source, watched, vimeo_id) VALUES

(1, 'https://player.vimeo.com/video/216706579', FALSE, '216706579' ),
(2, 'https://player.vimeo.com/video/224011571', FALSE, '224011571'),
(3, 'https://player.vimeo.com/video/203494889', FALSE, '203494889'),
(4, 'https://player.vimeo.com/video/222729677', FALSE, '222729677');

INSERT INTO answer_sheet (question_id, question, answer_short, video_id, choice_1, choice_2, choice_3) VALUES

(1, 'What color are your shoes', 'black', 3, 'black', 'pink', 'grey'),
(2, 'How old are you?', '21', 3, '18', '21', '32' ),
(3, 'how was your day?', NULL, 3, NULL, NULL, NULL);

COMMIT;

