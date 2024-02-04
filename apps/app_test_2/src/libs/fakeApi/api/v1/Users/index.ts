/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.User[]
  }

  post: {
    status: 200
    reqBody: Types.User
  }
}
