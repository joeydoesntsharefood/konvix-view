export interface ResponseBase<T = any> {
  success: boolean
  message: string
  data?: T
}
