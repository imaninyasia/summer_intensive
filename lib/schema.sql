DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_quiz;
DROP TABLE IF EXISTS answer_sheet;
DROP TABLE IF EXISTS answer_sheet_long;

BEGIN;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  admin BOOLEAN
  final_grade VARCHAR,
  profile_img VARCHAR
);

CREATE TABLE user_quiz(
  user_id INT PRIMARY KEY,
  question TEXT,
  answer TEXT
);

CREATE TABLE answer_sheet(
  question_id INT PRIMARY KEY,
  question VARCHAR NOT NULL,
  answer_short VARCHAR,
  answer_long TEXT
);

CREATE TABLE answer_sheet_long(
  question_id INT PRIMARY KEY,
  question_long VARCHAR NOT NULL,
  answer_long VARCHAR NOT NULL
);



COMMIT;
