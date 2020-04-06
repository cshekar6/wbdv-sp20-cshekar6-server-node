const quizService = require('../services/quiz.service.server')
module.exports = function (app) {

    app.get('/api/quizzes', (req, res) => {
        quizService.findAllQuizzes().then(quiz => res.json(quiz))
})
    app.get('/api/quizzes/:qid', (req, res) =>
        quizService.findQuizById(req.params['qid']).then(
            quiz => res.json(quiz)
        ))
}
