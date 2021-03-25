-- ---
-- Globals
-- ---
DROP DATABASE IF EXISTS qanda

CREATE DATABASE qanda;

\c qanda

-- ---
-- Table 'Questions'
--
-- ---


CREATE TABLE IF NOT EXISTS questions (
  question_id BIGSERIAL PRIMARY KEY,
  product_id INTEGER,
  question_body VARCHAR(250),
  question_date_written TIMESTAMP,
  asker_name VARCHAR(50),
  asker_email VARCHAR(50),
  question_reported BOOLEAN,
  question_helpful INTEGER
);

-- ---
-- Table 'Answers'
--
-- ---

CREATE TABLE IF NOT EXISTS answers (
  answer_id BIGSERIAL PRIMARY KEY,
  questionId INTEGER,
  answer_body VARCHAR(250),
  answer_date_written TIMESTAMP,
  answerer_name VARCHAR(50),
  answerer_email VARCHAR(50),
  nswer_reported BOOLEAN,
  answer_helpful INTEGER,
  FOREIGN KEY(questionId)
    REFERENCES questions(question_id)
);

-- ---
-- Table 'photos'
--
-- ---


CREATE TABLE IF NOT EXISTS photos (
  photos_id BIGSERIAL PRIMARY KEY,
  answerId INTEGER,
  url VARCHAR(200),
  FOREIGN KEY(answerId)
    REFERENCES answers(answer_id)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `Answers` ADD FOREIGN KEY (question_id) REFERENCES `Questions` (`question_id`);
-- ALTER TABLE `photos` ADD FOREIGN KEY (answer_id) REFERENCES `Answers` (`answers_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Questions` (`question_id`,`Product_id`,`question_body`,`question_date`,`asker_name`,`question_helpfulness`,`reported`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Answers` (`answers_id`,`question_id`,`answer_body`,`answer_date`,`answerer_name`,`answer_helpfulness `) VALUES
-- ('','','','','','');
-- INSERT INTO `photos` (`photos_id`,`answer_id`,`url`) VALUES
-- ('','','');