/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.Book
  }

  put: {
    status: 200
    reqBody: Types.Book
  }

  delete: {
    status: 200
  }
}
