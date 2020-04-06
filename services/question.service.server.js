const questionsDao = require('../daos/questions.dao.server')

const findQuestionsForQuiz = () =>
    questionsDao.findAllQuestions()

module.exports = {
    findQuestionsForQuiz
}
