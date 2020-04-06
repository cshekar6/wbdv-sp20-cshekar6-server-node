const questionsModel = require('../models/questions/questions.models.server')

const findAllQuestions = () =>
    questionsModel.find()

module.exports = {
    findAllQuestions
}
