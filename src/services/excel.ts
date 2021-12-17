import {arrayBufferRequest} from '../utils/request'

export const fetchExcel = () => {
  return arrayBufferRequest('/api/excel/test')
}
