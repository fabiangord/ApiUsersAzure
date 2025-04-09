import { BlobServiceClient, ContainerClient } from '@azure/storage-blob'

export class BlobConfig {
  static async getConnectionBlob(nameContainer: string): Promise<ContainerClient> {
    if (!process.env.AZURE_CONTAINER) {
      throw new Error('Recurse not found')
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_CONTAINER)

    return blobServiceClient.getContainerClient(nameContainer)
  }
}
