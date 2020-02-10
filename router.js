const router = require('express').Router()

const authController = require('./controllers/authController.js')
const quizController = require('./controllers/quizController.js')
const questionController = require('./controllers/questionController.js')

const authenticate = require('./middleware/authenticate.js')

router.post('/auth/register', authController.create)
router.post('/auth/login', authController.login)
router.get('/auth/me', authenticate, authController.currentUser)

router.post('/quiz', authenticate, quizController.create)
router.get('/my-quiz', authenticate, quizController.findMyQuiz)

router.post('/questions', authenticate, questionController.create)

module.exports = router;