import type { JSONObject } from '@itzcull/json-utils'
import type { WithAliasValue } from './alias'
import type { TokenSignature } from './signature'

// Type declaration following the https://tr.designtokens.org/format specification

// 8.1 Color, following the https://tr.designtokens.org/color specification
const COLOR_TYPE_NAME = 'color'
export type ColorTypeName = typeof COLOR_TYPE_NAME

export const COLOR_SPACE_VALUES = [
  'srgb',
  'srgb-linear',
  'hsl',
  'hwb',
  'lab',
  'lch',
  'oklab',
  'oklch',
  'display-p3',
  'a98-rgb',
  'prophoto-rgb',
  'rec2020',
  'xyz-d65',
  'xyz-d50',
] as const
export type ColorSpaceValue = (typeof COLOR_SPACE_VALUES)[number]

export interface ColorRawValue {
  colorSpace: ColorSpaceValue
  components: [number | 'none', number | 'none', number | 'none']
  alpha?: number
  hex?: `#${string}`
}
export type ColorValue = WithAliasValue<ColorRawValue>
export type ColorToken<Extensions extends JSONObject = JSONObject> = TokenSignature<ColorTypeName, ColorValue, Extensions>

// 8.2 Dimension
const DIMENSION_TYPE_NAME = 'dimension'
export type DimensionTypeName = typeof DIMENSION_TYPE_NAME

export interface DimensionRawValue {
  value: number
  unit: 'px' | 'rem'
}
export type DimensionValue = WithAliasValue<DimensionRawValue>
export type DimensionToken<Extensions extends JSONObject = JSONObject> = TokenSignature<DimensionTypeName, DimensionValue, Extensions>

// 8.3 Font Family
const FONT_FAMILY_TYPE_NAME = 'fontFamily'
export type FontFamilyTypeName = typeof FONT_FAMILY_TYPE_NAME
export type FontFamilyRawValue = string | Array<string>
export type FontFamilyValue = WithAliasValue<FontFamilyRawValue>
export type FontFamilyToken<Extensions extends JSONObject = JSONObject> = TokenSignature<FontFamilyTypeName, FontFamilyValue, Extensions>

// 8.4 Font Weight
const FONT_WEIGHT_TYPE_NAME = 'fontWeight'
export type FontWeightTypeName = typeof FONT_WEIGHT_TYPE_NAME

export const FONT_WEIGHT_VALUES = [
  'thin',
  'hairline',
  'extra-light',
  'ultra-light',
  'light',
  'normal',
  'regular',
  'book',
  'medium',
  'semi-bold',
  'demi-bold',
  'bold',
  'extra-bold',
  'ultra-bold',
  'black',
  'heavy',
  'extra-black',
  'ultra-black',
] as const
export type FontWeightValue = WithAliasValue<FontWeightRawValue>

export type FontWeightRawValue = (typeof FONT_WEIGHT_VALUES)[number] | number
export type FontWeightToken<Extensions extends JSONObject = JSONObject> = TokenSignature<
  FontWeightTypeName,
  FontWeightValue,
  Extensions
>

// 8.5 Duration
const DURATION_TYPE_NAME = 'duration'
export type DurationTypeName = typeof DURATION_TYPE_NAME

export interface DurationRawValue {
  value: number
  unit: 'ms' | 's'
}
export type DurationValue = WithAliasValue<DurationRawValue>
export type DurationToken<Extensions extends JSONObject = JSONObject> = TokenSignature<DurationTypeName, DurationValue, Extensions>

// 8.6 Cubic Bezier
const CUBIC_BEZIER_TYPE_NAME = 'cubicBezier'
export type CubicBezierTypeName = typeof CUBIC_BEZIER_TYPE_NAME

export type CubicBezierRawValue = [number, number, number, number]
export type CubicBezierValue = WithAliasValue<CubicBezierRawValue>
export type CubicBezierToken<Extensions extends JSONObject = JSONObject> = TokenSignature<CubicBezierTypeName, CubicBezierValue, Extensions>

// 8.7 Number
const NUMBER_TYPE_NAME = 'number'
export type NumberTypeName = typeof NUMBER_TYPE_NAME

export type NumberRawValue = number
export type NumberValue = WithAliasValue<NumberRawValue>
export type NumberToken<Extensions extends JSONObject = JSONObject> = TokenSignature<NumberTypeName, NumberValue, Extensions>

/*
   9. Composite Types
   https://tr.designtokens.org/format/#composite-types
*/
// 9.2 Stroke Style
const STROKE_STYLE_TYPE_NAME = 'strokeStyle'
export const STROKE_STYLE_STRING_VALUES = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'groove',
  'ridge',
  'outset',
  'inset',
] as const

export const STROKE_STYLE_LINE_CAP_VALUES = ['round', 'butt', 'square'] as const
export type StrokeStyleLineCapValue = (typeof STROKE_STYLE_LINE_CAP_VALUES)[number]

export type StrokeStyleTypeName = typeof STROKE_STYLE_TYPE_NAME
export type StrokeStyleRawValue =
  | (typeof STROKE_STYLE_STRING_VALUES)[number]
  | {
    dashArray: DimensionValue[]
    lineCap: StrokeStyleLineCapValue
  }
export type StrokeStyleValue = WithAliasValue<StrokeStyleRawValue>
export type StrokeStyleToken<Extensions extends JSONObject = JSONObject> = TokenSignature<StrokeStyleTypeName, StrokeStyleValue, Extensions>

// 9.3 Border
const BORDER_TYPE_NAME = 'border'
export type BorderTypeName = typeof BORDER_TYPE_NAME

export interface BorderRawValue {
  color: ColorValue
  width: DimensionValue
  style: StrokeStyleValue
}
export type BorderValue = WithAliasValue<BorderRawValue>
export type BorderToken<Extensions extends JSONObject = JSONObject> = TokenSignature<BorderTypeName, BorderValue, Extensions>

// 9.4 Transition
const TRANSITION_TYPE_NAME = 'transition'
export type TransitionTypeName = typeof TRANSITION_TYPE_NAME

export interface TransitionRawValue {
  duration: DurationValue
  delay: DurationValue
  timingFunction: CubicBezierValue
}

export type TransitionValue = WithAliasValue<TransitionRawValue>
export type TransitionToken<Extensions extends JSONObject = JSONObject> = TokenSignature<TransitionTypeName, TransitionValue, Extensions>

// 9.5 Shadow
const SHADOW_TYPE_NAME = 'shadow'
export type ShadowTypeName = typeof SHADOW_TYPE_NAME

export type ShadowRawValue =
  | Array<{
    color: ColorValue
    offsetX: DimensionValue
    offsetY: DimensionValue
    blur: DimensionValue
    spread: DimensionValue
    inset?: boolean
  }>
  | {
    color: ColorValue
    offsetX: DimensionValue
    offsetY: DimensionValue
    blur: DimensionValue
    spread: DimensionValue
    inset?: boolean
  }
export type ShadowValue = WithAliasValue<ShadowRawValue>
export type ShadowToken<Extensions extends JSONObject = JSONObject> = TokenSignature<ShadowTypeName, ShadowValue, Extensions>

// 9.6 Gradient
const GRADIENT_TYPE_NAME = 'gradient'
export type GradientTypeName = typeof GRADIENT_TYPE_NAME
export type GradientRawValue = Array<{
  color: ColorValue
  position: NumberValue
}>
export type GradientValue = WithAliasValue<GradientRawValue>
export type GradientToken<Extensions extends JSONObject = JSONObject> = TokenSignature<GradientTypeName, GradientValue, Extensions>

// 9.7 Typography
const TYPOPGRAPHY_TYPE_NAME = 'typography'
export type TypographyTypeName = typeof TYPOPGRAPHY_TYPE_NAME
export interface TypographyRawValue {
  fontFamily: FontFamilyValue
  fontSize: DimensionValue
  fontWeight: FontWeightValue
  letterSpacing: DimensionValue
  lineHeight: NumberValue
}
export type TypographyValue = WithAliasValue<TypographyRawValue>
export type TypographyToken<Extensions extends JSONObject = JSONObject> = TokenSignature<TypographyTypeName, TypographyValue, Extensions>

/* ------------------------------------------
   Mapping Exports
--------------------------------------------- */
export const TOKEN_TYPE_NAMES = [
  COLOR_TYPE_NAME,
  DIMENSION_TYPE_NAME,
  FONT_FAMILY_TYPE_NAME,
  FONT_WEIGHT_TYPE_NAME,
  DURATION_TYPE_NAME,
  CUBIC_BEZIER_TYPE_NAME,
  NUMBER_TYPE_NAME,
  STROKE_STYLE_TYPE_NAME,
  BORDER_TYPE_NAME,
  TRANSITION_TYPE_NAME,
  SHADOW_TYPE_NAME,
  GRADIENT_TYPE_NAME,
  TYPOPGRAPHY_TYPE_NAME,
] as const

export const TOKEN_TYPE_NAMES_MAPPING = TOKEN_TYPE_NAMES.reduce<{
  [T in TokenTypeName]: T;
}>((acc: any, t) => {
  acc[t] = t
  return acc
}, {} as any)

export type TokenTypeName =
  | ColorTypeName
  | DimensionTypeName
  | FontFamilyTypeName
  | FontWeightTypeName
  | DurationTypeName
  | CubicBezierTypeName
  | NumberTypeName
  | StrokeStyleTypeName
  | BorderTypeName
  | TransitionTypeName
  | ShadowTypeName
  | GradientTypeName
  | TypographyTypeName

export type DesignToken<Extensions extends JSONObject = JSONObject> =
  | ColorToken<Extensions>
  | DimensionToken<Extensions>
  | FontFamilyToken<Extensions>
  | FontWeightToken<Extensions>
  | DurationToken<Extensions>
  | CubicBezierToken<Extensions>
  | NumberToken<Extensions>
  | StrokeStyleToken<Extensions>
  | BorderToken<Extensions>
  | TransitionToken<Extensions>
  | ShadowToken<Extensions>
  | GradientToken<Extensions>
  | TypographyToken<Extensions>

export type PickTokenByType<T extends TokenTypeName> = {
  color: ColorToken
  dimension: DimensionToken
  fontFamily: FontFamilyToken
  fontWeight: FontWeightToken
  duration: DurationToken
  cubicBezier: CubicBezierToken
  number: NumberToken
  strokeStyle: StrokeStyleToken
  border: BorderToken
  transition: TransitionToken
  shadow: ShadowToken
  gradient: GradientToken
  typography: TypographyToken
}[T]
