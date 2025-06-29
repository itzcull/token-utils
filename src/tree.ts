import type { GroupProperties } from './group'
import type { DesignToken } from './types'

export type JSONTokenTree =
  | (GroupProperties & {
    [key: string]: DesignToken | JSONTokenTree | GroupProperties
  })
  | DesignToken
