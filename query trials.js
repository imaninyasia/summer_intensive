SELECT users.email, answer_sheet.video_id, user_quiz.answer, answer_sheet.question_id, answer_sheet.question, answer_sheet.answer_long, answer_sheet.answer_short
FROM users JOIN user_quiz on user_quiz.user_id = users.user_id
JOIN answer_sheet on user_quiz.question_id = answer_sheet.question_id
WHERE users.user_id=3 ORDER BY question_id ASC;
