const UserModel = require('../models/user.js')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const Login = class Login {
  /**
   * @constructor
   * @param {Object} app
   * @param {Object} config
   */
  constructor (app, connect, authenticateToken) {
    this.app = app
    this.UserModel = connect.model('User', UserModel)
    this.authenticateToken = authenticateToken

    this.run()
  }

  auth() {
    this.app.get('/auth/', this.authenticateToken, (req, res) => {
      try {
        res.status(200).json({ 'message': 'ok' })
      } catch (err) {
        console.error(`[ERROR] POST logins/ -> ${err}`)
  
        res.status(500).json({
          code: 500,
          message: 'Internal server error'
        })
      }
    })
  }

  getByLoginPassword () {
    this.app.get('/login/', (req, res) => {
      try {
        this.UserModel.findOne({'$and': [{ login: req.query.login, password: req.query.password}]}).then((login) => {
          if (Object.keys(login).length) {
            const body = { id: login.id, email: login.email };
            const token = jwt.sign({ login: body }, 'SANDRA_SECRET');

            res.status(200).json({ token: token });
          } else {
            res.status(401).json({});
          }
        }).catch(() => {
          res.status(403).json({
            code: 403,
            message: 'Bad request'
          })
        })
      } catch (err) {
        console.error(`[ERROR] POST logins/ -> ${err}`)
  
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
    this.auth()
    this.getByLoginPassword()
  }
}

module.exports = Login
