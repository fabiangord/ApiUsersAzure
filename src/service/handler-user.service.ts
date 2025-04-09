import { HandlerUserRepository } from '../repository/handler-users.repository'
import { UserType } from '../types/user.type'

export class HandlerUserService {
  constructor(private readonly repository: HandlerUserRepository = new HandlerUserRepository()) { }

  async getUsers(): Promise<void> {
    return await this.repository.getUsers()
  }

  async getUser(): Promise<void> {
    return await this.repository.getUser()
  }

  async addUser(user: UserType): Promise<void> {
    return await this.repository.addUser(user)
  }

  async updateUser(user: UserType): Promise<void> {
    return await this.repository.updateUser(user)
  }

  async deleteUser(id: string): Promise<void> {
    return await this.repository.deleteUser(id)
  }

  async getImage(id: string): Promise<NodeJS.ReadableStream> {
    return this.repository.getImage(id)
  }
}
