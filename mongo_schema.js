{
  product_id: Number,
  questions: [
    {
      question_id: Number,
      question_body: String,
      question_date: Date,
      asker_name: String,
      question_helpfulness: Number,
      reported: Boolean,
      answers: {
        "answer_id" : {
          id: Number,
          answer_body: String,
          answer_date: Date,
          answerer_name: String,
          answer_helpfulness: Number,
          photos: [
            photo_id: Number
            url: String
          ]
        }
      }

  }]
}