import { httpRequest } from './client'
import HM from '../utils/httpMethods'
import { doSetForwardslash as sf } from '../utils/helpers'
import ep from '../config/constants'

const { FILES, UPLOAD, UPLOADS } = ep

const uploadFiles = (data: any, onUploadProgress: any) => {
  const imageData: any = new FormData()
  data?.images.forEach((image: any, index: number) => {
    const fileUri = image.uri
    const fileName = 'image' + index + image.fileName
    const fileType = image.mimeType
    imageData.append('files', {
      type: fileType,
      uri: fileUri,
      name: fileName,
    })
  })
  //todo use httpRequest later
  return httpRequest(sf(FILES, UPLOADS), HM.POST, imageData, {
    onUploadProgress: (progress: any) => {
      onUploadProgress && onUploadProgress(progress.loaded / progress.total)
    },
    headers: {
      Accept: 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    },
  })
}
function uploadFilesHandler() {}

export default {
  uploadFiles,
  uploadFilesHandler,
}
