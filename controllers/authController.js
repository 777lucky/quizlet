const User = require('../models/user.js')
const {
    success,
    error
} = require('../helper/response.js')

exports.create = async (req, res) => {
    try{
        let result = await User.register(req.body)
//        success(res, result, 201)
        res.status(201).json({
            status: true,
            data: result
        })
    }

    catch(err) {
//        error(res, err, 422)
        res.status(422).json({
            status: false,
            errors: err
        })
    }
} 

exports.login = async (req, res) => {
    try{
        let result = await User.authenticate(req.body)
        res.status(200).json({
            status: true,
            data: result
        })
    }
    catch(err) {
        res.status(401).json({
            status: false,
            errors: err
        })
    }
}

exports.currentUser = async (req, res) => {
    let result = await User.me(req.user._id)
//    success(res, result, 200)
    res.status(200).json({
        status: true,
        data: result
    })
  }