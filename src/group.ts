import type { JSONObject } from '@itzcull/json-utils'
import type { TokenTypeName } from './types'

export interface GroupProperties {
  $type?: TokenTypeName
  $description?: string
  $extensions?: JSONObject
}
