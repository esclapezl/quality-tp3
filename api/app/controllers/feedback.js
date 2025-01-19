const FeedbackModel = require('../models/feedback.js')

const Feedback = class Feedback {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} config
   */
  constructor (app, connect) {
    this.app = app
    this.FeedbackModel = connect.model('Feedback', FeedbackModel)

    this.run()
  }

  /**
   * Middleware
   */
  create () {
    this.app.post('/feedback/', (req, res) => {
      try {
        const feedbackModel = new this.FeedbackModel(req.body);

        feedbackModel.save().then((feedback) => {
          res.status(200).json(feedback || {})
        }).catch(() => {
          res.status(403).json({
            code: 403,
            message: 'Bad request'
          })
        })
      } catch (err) {
        console.error(`[ERROR] POST feedbacks/ -> ${err}`)

        res.status(500).json({
          code: 500,
          message: 'Internal server error'
        })
      }
    })
  }

    /**
   * Middleware
   */
    all () {
      this.app.get('/feedback/', (req, res) => {
        try {
          this.FeedbackModel.find().sort({ createdAt: -1 }).then((feedback) => {
            res.status(200).json(feedback || {})
          }).catch(() => {
            res.status(403).json({
              code: 403,
              message: 'Bad request'
            })
          })
        } catch (err) {
          console.error(`[ERROR] POST feedbacks/ -> ${err}`)
  
          res.status(500).json({
            code: 500,
            message: 'Internal server error'
          })
        }
      })
    }

    delete () {
      this.app.delete('/feedback/', (req, res) => {
        try {
          this.FeedbackModel.findByIdAndDelete(req.params.id).then((feedback) => {
            res.status(200).json(feedback || {})
          }).catch(() => {
            res.status(403).json({
              code: 403,
              message: 'Bad request'
            })
          })
        } catch (err) {
          console.error(`[ERROR] POST feedbacks/ -> ${err}`)
  
          res.status(500).json({
            code: 500,
            message: 'Internal server error'
          })
        }
      })
    }

  /**
   * Run
   */
  run () {
    this.delete()
    this.all()
    this.create()
  }
}

module.exports = Feedback
