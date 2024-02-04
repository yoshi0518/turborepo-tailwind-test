/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.CoverPhoto[]
  }

  post: {
    status: 200
    /** Success */
    resBody: Types.CoverPhoto
    reqBody: Types.CoverPhoto
  }
}
