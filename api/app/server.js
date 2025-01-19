// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');

// Dependencies middleware
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// Core
const config = require('./config.js')
const routes = require('./controllers/routes.js')

/**
 * Server
 */
module.exports = class Server {
  constructor () {
    this.app = express()
    this.config = config[process.argv[2]] || config.development
  }

  /*
   * db connect
   * @return {Object} connect
   */
  dbConnect () {
    const host = this.config.mongodb
    const connect = mongoose.createConnection(host)

    connect.on('error', (err) => {
      setTimeout(() => {
        console.log('[ERROR] users api dbConnect() -> mongodb error')
        this.connect = this.dbConnect(host)
      }, 5000)

      console.error(`[ERROR] users api dbConnect() -> ${err}`)
    })

    connect.on('disconnected', (err) => {
      setTimeout(() => {
        console.log('[DISCONNECTED] users api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000)
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] users api dbConnect() -> close mongodb connection')
        process.exit(0)
      })
    })

    return connect
  }

  authenticateToken(req, res, next) {
    const token = req.headers['authorization']
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, 'SANDRA_SECRET', (err, user) => {
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }

  /**
   * Middleware
   */
  middleware () {
    this.app.use(cookieParser())
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
  }

  /**
   * Routes
   */
  routes () {
    new routes.Login(this.app, this.connect, this.authenticateToken)
    new routes.Contact(this.app, this.connect, this.authenticateToken)
    new routes.Feedback(this.app, this.connect)
    
    // If route not exist
    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not Found'
      })
    })
  }

  /**
   * Security
   */
  security () {
    this.app.use(helmet())
    this.app.disable('x-powered-by')
  }

  /**
   * Run
   */
  run () {
    try {
      this.connect = this.dbConnect()
      this.security()
      this.middleware()
      this.routes()
      this.app.listen(this.config.port)
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}
