import type { JSONObject } from '../json'

export interface TokenSignature<Type extends string, Value, Extensions extends JSONObject = JSONObject> {
  $type: Type
  $value: Value
  $deprecated?: boolean | string
  $description?: string
  $extensions?: Extensions
}
