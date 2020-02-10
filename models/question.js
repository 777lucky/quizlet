const mongoose = require('mongoose')
const { Schema } = mongoose

const questionSchema = new Schema({
    quizId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: quiz
    },
    question: {
        type: 'string',
        required: true
    },
    options: {
        a:{
        type: 'string',
        required: true
        },
        b:{
        type: 'string',
        required: true
        },
        c:{
        type: 'string',
        required: true
        },
        d:{
        type: 'string',
        required: true,
        }
    },
    answer: {
        type: 'string',
        required: true,
        enum: ['a', 'b', 'c', 'd']
    }
})

class Question extends mongoose.model('Question', questionSchema) {
    /*
     * Ask this params from controller or whoever call me
     * quiz_id: ObjectID
     * question: string
     * answer: string
     * option: {
     *  a: string,
     *  b: string,
     *  c: string,
     *  d: string
     * }
     *
     * */
    static new({ quiz_id, question, options, answer}) {
      return new Promise((resolve, reject) => {
        this.create({
          quiz: quiz_id,
          question,
          answer,
          options
        }) 
          .then(data => {
            resolve(data) 
          })
          .catch(err => {
            reject(err)
          })  
      })
    }
}
  

module.exports = mongoose.model('Question', questionSchema)

