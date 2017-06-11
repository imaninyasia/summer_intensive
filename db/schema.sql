DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_quiz;
DROP TABLE IF EXISTS rooms;

BEGIN;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL UNIQUE,
  userToken VARCHAR
  final_grade VARCHAR
);

CREATE TABLE user_quiz(
  user_id INT PRIMARY KEY,
  question TEXT
  answer TEXT
);

CREATE TABLE answer_sheet(
  description TEXT NOT NULL,
  price VARCHAR NOT NULL,
  room_id INT,
  username VARCHAR
);



COMMIT;
