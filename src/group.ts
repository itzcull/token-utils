import type { JSONObject } from '../json'
import type { TokenTypeName } from './types'

export interface GroupProperties {
  $type?: TokenTypeName
  $description?: string
  $extensions?: JSONObject
}
