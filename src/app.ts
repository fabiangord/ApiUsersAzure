import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import dotenv from 'dotenv'
import { HandlerUserRouter } from './routes/handler-user.router'

class Server {
  private readonly app: express.Application
  private readonly port: number

  constructor() {
    this.app = express()
    this.port = 3000
    this.config()
    this.start()
  }

  private config(): void {
    dotenv.config()
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(fileUpload())
    this.app.use(morgan('dev'))
    this.app.use('/api', this.routes())
  }

  private routes(): express.Router[] {
    return [
      new HandlerUserRouter().route
    ]
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server on ${this.port}`)
    })
  }
}

void new Server()
