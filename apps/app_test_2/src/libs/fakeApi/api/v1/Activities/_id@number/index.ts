/* eslint-disable */
import type * as Types from '../../../../@types'

export type Methods = {
  get: {
    status: 200
    /** Success */
    resBody: Types.Activity
  }

  put: {
    status: 200
    /** Success */
    resBody: Types.Activity
    reqBody: Types.Activity
  }

  delete: {
    status: 200
  }
}
