import { Request, Response } from "express";
import { HandlerUserService } from "../service/handler-user.service";
import { UserType } from "../types/user.type";

export class HandlerUserController {
  constructor(private readonly service: HandlerUserService = new HandlerUserService()) { }

  async getUsers(_req: Request, res: Response): Promise<void> {
    try {
      res.status(200).json(await this.service.getUsers())
    } catch (error) {
      error instanceof Error ? res.status(400).json({ message: error.message }) : res.status(400).json(`unexpected error ${error}`)
    }
  }

  async getUser(_req: Request, res: Response): Promise<void> {
    try {
      res.status(200).json(await this.service.getUser());
    } catch (error) {
      error instanceof Error ? res.status(400).json({ message: error.message }) : res.status(400).json(`unexpected error ${error}`)
    }
  }

  async addUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body as UserType;

      res.status(200).json(this.service.addUser(user));
    } catch (error) {
      error instanceof Error ? res.status(400).json({ message: error.message }) : res.status(400).json(`unexpected error ${error}`)
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body as UserType;

      res.status(200).json(this.service.updateUser(user));
    } catch (error) {
      error instanceof Error ? res.status(400).json({ message: error.message }) : res.status(400).json(`unexpected error ${error}`)
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const idUser: string = req.params.idUser

      res.status(200).json(this.service.deleteUser(idUser));
    } catch (error) {
      error instanceof Error ? res.status(400).json({ message: error.message }) : res.status(400).json(`unexpected error ${error}`)
    }
  }

  async getImage(req: Request, res: Response): Promise<void> {
    try {
      const idUser: string = req.params.idUser

      const stream = await this.service.getImage(idUser)

      stream.pipe(res)
    } catch (error) {
      error instanceof Error ? res.status(400).json({ message: error.message }) : res.status(400).json(`unexpected error ${error}`)
    }
  }

}