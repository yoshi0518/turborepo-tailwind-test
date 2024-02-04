/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.Activity[]
  }

  post: {
    status: 200
    /** Success */
    resBody: Types.Activity
    reqBody: Types.Activity
  }
}
