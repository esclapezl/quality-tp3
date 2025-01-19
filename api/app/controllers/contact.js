const ContactModel = require('../models/contact.js')

const Contact = class Contact {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} config
   */
  constructor (app, connect, authenticateToken) {
    this.app = app
    this.ContactModel = connect.model('Contact', ContactModel)
    this.authenticateToken = authenticateToken

    this.run()
  }

  /**
   * Middleware
   */
  create () {
    this.app.post('/contact/', (req, res) => {
      try {
        const contactModel = new this.ContactModel(req.body);

        contactModel.save().then((contact) => {
          res.status(200).json(contact || {})
        }).catch(() => {
          res.status(403).json({
            code: 403,
            message: 'Bad request'
          })
        })
      } catch (err) {
        console.error(`[ERROR] POST contacts/ -> ${err}`)

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
      this.app.get('/contacts/', this.authenticateToken, (req, res) => {
        try {
          this.ContactModel.find().sort({ createdAt: -1 }).then((contact) => {
            res.status(200).json(contact || {})
          }).catch(() => {
            res.status(403).json({
              code: 403,
              message: 'Bad request'
            })
          })
        } catch (err) {
          console.error(`[ERROR] POST contacts/ -> ${err}`)
  
          res.status(500).json({
            code: 500,
            message: 'Internal server error'
          })
        }
      })
    }

    delete () {
      this.app.delete('/contact/:id', (req, res) => {
        try {
          console.log(req.params);
          this.ContactModel.findByIdAndDelete(req.params.id).then((contact) => {
            res.status(200).json(contact || {})
          }).catch(() => {
            res.status(403).json({
              code: 403,
              message: 'Bad request'
            })
          })
        } catch (err) {
          console.error(`[ERROR] POST contacts/ -> ${err}`)
  
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

module.exports = Contact
