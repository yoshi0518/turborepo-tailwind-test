/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.Author[]
  }

  post: {
    status: 200
    /** Success */
    resBody: Types.Author
    reqBody: Types.Author
  }
}
