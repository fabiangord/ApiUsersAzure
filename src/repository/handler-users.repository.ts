import { UserType } from '../types/user.type'
// import { prisma } from '../config/database'
import { BlobConfig } from '../config/blob'
import { UploadedFile } from 'express-fileupload'

export class HandlerUserRepository {
  async getUsers(): Promise<void> {

  }

  async getUser(): Promise<void> {

  }

  async addUser(_user: UserType): Promise<void> {

  }

  async updateUser(_user: UserType): Promise<void> {

  }

  async deleteUser(_id: string): Promise<void> {

  }

  async getImage(nameImage: string): Promise<NodeJS.ReadableStream> {
    const client = BlobConfig.getConnectionBlob('conteinesimages')

    const blob = (await client).getBlobClient(nameImage)

    const downloadBlob = await blob.download(0)

    if (!downloadBlob.readableStreamBody) {
      throw new Error('No se pudo obtener el stream del blob.')
    }

    return downloadBlob.readableStreamBody
  }

  async addImage(imageUser: UploadedFile, id: string): Promise<void> {
    const client = BlobConfig.getConnectionBlob('conteinesimages')

    const blob = (await client).getBlockBlobClient(id)
    console.log(imageUser)
    await blob.uploadData(imageUser.data)
  }
}
