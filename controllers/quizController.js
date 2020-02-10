const {
    success,
    error
} = require('../helper/response.js')
const Quiz = require('../models/quiz.js')
const Question = require('../models/question.js')

exports.create = async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            owner: req.user._id
        }

        let result = await Quiz.create(data)
        success(res, result, 201) 
    }

    catch(err) {
        error(res, err, 422)
    }
    // Quiz.create(req.body)
    // let data = {
    //     name:req.body.name,
    //     owner: req.user._id
    // }
    // let result = await Quiz.create(data) 
}
exports.findMyQuiz = async (req, res) => {
    // try {
    //     Quiz.find = owner
    //     success(res, await, 200)
    // }
    let results = await Quiz
        .find({ owner: req.user._id})
        .select(["-__v", "-owner"])
    success(res, result, 200)
}