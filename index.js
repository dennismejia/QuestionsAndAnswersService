const express = require('express');
const cors = require('cors');
const queries = require('./queries.js');


const app = express();

app.use(express.json()); // => req.body
app.use(cors());


//ROUTES

app.get('/questions/:id', (req, res) => {
  queries.getQuestions(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/answers/:id', (req, res) => {
  queries.getAnswers(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/photos/:id', (req, res) => {
  queries.getPhotos(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/questions/', (req, res) => {
  queries.addQuestion(req.body.body, req.body.name, req.body.email, req.body.product_id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/answers', (req, res) => {
  queries.addAnswer(req.body.body, req.body.name, req.body.email, req.body.questionId, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/questions/:id/helpful', (req, res) => {
  queries.addHelpfulQ(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/questions/:id/reported', (req, res) => {
  queries.changeReportedQ(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/answers/:id/helpful', (req, res) => {
  queries.addHelpfulA(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});


app.put('/answers/:id/reported', (req, res) => {
  queries.changeReportedA(req.params.id, (err, results) => {
    if (err) {
      console.log('err', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

//how to listen
app.listen(3000, () => {
  console.log('Server is listening on 3000');
});