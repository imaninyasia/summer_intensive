DROP TABLE IF EXISTS user_quiz;
DROP TABLE IF EXISTS answer_sheet;
DROP TABLE IF EXISTS video_relations;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS answer_sheet_long;
DROP TABLE IF EXISTS videos;
BEGIN;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  admin BOOLEAN,
  final_grade VARCHAR,
  profile_img TEXT
);

CREATE TABLE videos(
  video_id INT PRIMARY KEY,
  source TEXT,
  watched BOOLEAN,
  vimeo_id TEXT
);

CREATE TABLE video_relations(
  id SERIAL PRIMARY KEY,
  video_id INT,
  user_id INT,
  watched BOOLEAN,
  FOREIGN KEY (video_id) REFERENCES videos(video_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)

);

CREATE TABLE answer_sheet(
  question_id INT PRIMARY KEY,
  question TEXT NOT NULL,
  answer_short VARCHAR,
  answer_long TEXT,
  video_id INT,
  choice_1 TEXT,
  choice_2 TEXT,
  choice_3 TEXT,
  FOREIGN KEY (video_id) REFERENCES videos(video_id)
);


CREATE TABLE user_quiz(
  id SERIAL PRIMARY KEY,
  user_id INT ,
  answer TEXT,
  question_id INT,
  FOREIGN KEY (question_id) REFERENCES answer_sheet(question_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)

);





COMMIT;
