const mongoose = require('mongoose')

const questionsSchema = mongoose.Schema({
    title: String,
    question: String,
    answer: String,
    correct: {type:String,required:true},
    type: {type: String, enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'ESSAY']},
    choices: [String]
}, {collection: "questions"})
module.exports = questionsSchema
