DROP TABLE IF EXISTS user_quiz CASCADE;
DROP TABLE IF EXISTS answer_sheet CASCADE;
DROP TABLE IF EXISTS video_relations CASCADE;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS answer_sheet_long;
DROP TABLE IF EXISTS videos CASCADE;
DROP TABLE IF EXISTS progress CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS parts CASCADE;
DROP TABLE IF EXISTS part_relation CASCADE;
DROP TABLE IF EXISTS course_relation CASCADE;
BEGIN;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  password VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL UNIQUE,
  admin BOOLEAN NOT NULL,
  final_grade VARCHAR,
  profile_img TEXT,
  assessment_1 TEXT,
  assessment_2 TEXT,
  assessment_3 TEXT,
  assessment_4 TEXT,
  assessment_5 TEXT,
  assessment_6 TEXT

);

CREATE TABLE videos(
  video_id SERIAL PRIMARY KEY,
  source TEXT,
  watched BOOLEAN,
  vimeo_id TEXT,
  course INT,
  part INT
);

CREATE TABLE video_relations(
  id SERIAL PRIMARY KEY,
  video_id INT,
  user_id INT,
  watched BOOLEAN,
  FOREIGN KEY (video_id) REFERENCES videos(video_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)

);

CREATE TABLE parts(
  part_id SERIAL PRIMARY KEY,
  name TEXT,
  course INT,
  progress TEXT,
  videos INTEGER ARRAY
);
CREATE TABLE part_relation(
  id SERIAL PRIMARY KEY,
  user_id INT,
  part_id INT,
  progress TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (part_id) REFERENCES parts(part_id)
);

CREATE TABLE courses(
  course_id SERIAL PRIMARY KEY,
  name TEXT,
  replicate INT,
  modify INT,
  create_ INT,
  progress BOOLEAN
);

CREATE TABLE course_relation(
  id SERIAL PRIMARY KEY,
  user_id INT,
  course_id INT,
  progress TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);


CREATE TABLE answer_sheet(
  question_id SERIAL PRIMARY KEY,
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
