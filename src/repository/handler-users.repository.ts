import { UserType } from "../types/user.type";
import { prisma } from "../config/database";
import { BlobConfig } from "../config/blob";

export class HandlerUserRepository {
  async getUsers() {

  }
  async getUser() {

  }
  async addUser(_user: UserType) {

  }
  async updateUser(_user: UserType) {

  }
  async deleteUser(_id: string) {

  }

  async getImage(nameImage: string): Promise<NodeJS.ReadableStream> {
    const client = BlobConfig.getConnectionBlob('conteinesimages')

    const blob = (await client).getBlobClient(nameImage)

    const downloadBlob = await blob.download(0)

    if (!downloadBlob.readableStreamBody) {
      throw new Error('No se pudo obtener el stream del blob.');
    }

    return downloadBlob.readableStreamBody
  }

  async addImage(nameImage: string): Promise<NodeJS.ReadableStream> {
    const client = BlobConfig.getConnectionBlob('conteinesimages')

    const blob = (await client).getBlobClient(nameImage)

    const downloadBlob = await blob.download(0)

    if (!downloadBlob.readableStreamBody) {
      throw new Error('No se pudo obtener el stream del blob.');
    }

    return downloadBlob.readableStreamBody
  }
}