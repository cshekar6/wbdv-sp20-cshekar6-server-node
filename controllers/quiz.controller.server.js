const quizService = require('../services/quiz.service.server')
module.exports = function (app) {

    app.get('/api/quizzes', (req, res) => res.json(quizService.findAllQuizzes()))
    app.get('/api/quizzes/:qid', (req, res) => res.json(quizService.findQuizById(req.params['qid'])))
}
