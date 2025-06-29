import type { JSONObject } from '@itzcull/json-utils'

export interface TokenSignature<Type extends string, Value, Extensions extends JSONObject = JSONObject> {
  $type: Type
  $value: Value
  $deprecated?: boolean | string
  $description?: string
  $extensions?: Extensions
}
