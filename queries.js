const {Client} = require('pg')

const client = new Client({
  user: 'dennismejia',
  host: 'localhost',
  password:'',
  database: 'qanda',
  port: 5432,
})

client.connect((err) => {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connected to Postgres!');
  }
})



const getQuestions = (id, cb) => {
  client.query(`SELECT * FROM questions WHERE product_id = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR GETTING QUESTIONS', err);
      cb(err, null)
    } else {
      cb(null, results);
    }
  });
};

const getAnswers = (id, cb) => {
  client.query(`SELECT * FROM answers WHERE questionId = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR GETTING QUESTIONS', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const getPhotos = (id, cb) => {
  client.query(`SELECT * FROM photos WHERE answerId = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR GETTING PHOTOS', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addQuestion = (name, body, email, product_id, cb) => {
  client.query(`INSERT INTO questions (question_body, asker_name, asker_email, product_id)  VALUES ('${body}', '${name}', '${email}', '${product_id}')`, (err, results) => {
    if (err) {
      console.log('ERR ADDING QUESTION', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addAnswer = (questionId, body, name, email, cb) => {
  client.query(`INSERT INTO answers (answer_body, answerer_name, answerer_email, questionId) VALUES ('${body}', '${name}', '${email}', '${questionId}')`, (err, results) => {
    if (err) {
      console.log('ERR ADDING QUESTION', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addHelpfulQ = (id, cb) => {
  client.query(`UPDATE questions SET question_helpful = question_helpful + 1 WHERE question_id = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR UPDATING HELPFUL', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const changeReportedQ = (id, cb) => {
  client.query(`UPDATE questions SET question_reported = true WHERE question_id = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR UPDATING REPORTED', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const changeReportedA = (id, cb) => {
  client.query(`UPDATE answers SET nswer_reported = true WHERE answer_id = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR UPDATING REPORTED', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const addHelpfulA = (id, cb) => {
  client.query(`UPDATE answers SET answer_helpful = answer_helpful + 1 WHERE answer_id = ${id}`, (err, results) => {
    if (err) {
      console.log('ERR UPDATING HELPFUL', err);
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports = {
  getQuestions,
  getAnswers,
  getPhotos,
  addQuestion,
  addAnswer,
  addHelpfulQ,
  changeReportedQ,
  changeReportedA,
  addHelpfulA
};