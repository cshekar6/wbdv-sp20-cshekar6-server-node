const questions = require('./questions')

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)
module.exports = {
    findQuestionsForQuiz
}
