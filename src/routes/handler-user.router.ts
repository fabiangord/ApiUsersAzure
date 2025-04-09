import { Router } from 'express'
import { HandlerUserController } from '../controllers/handler-users.controller'

export class HandlerUserRouter {
  public route: Router

  constructor(private readonly controller: HandlerUserController = new HandlerUserController()) {
    this.route = Router()
    this.routes()
  }

  public routes(): void {
    this.route.get('/users', async (req, res) => await this.controller.getUsers(req, res))
    this.route.get('/user', async (req, res) => await this.controller.getUser(req, res))
    this.route.post('/user', async (req, res) => await this.controller.addUser(req, res))
    this.route.patch('/user', async (req, res) => await this.controller.updateUser(req, res))
    this.route.delete('/user', async (req, res) => await this.controller.deleteUser(req, res))
    this.route.get('/image', async (req, res) => this.controller.getImage(req, res))
  }
}
