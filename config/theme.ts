export type Color =
  | 'black'
  | 'white'
export type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl'
export type FontWeight = 'light' | 'regular' | 'semibold' | 'bold'

export interface Theme {
  colors: {[key in Color]: String}
  fontSizes: {[key in FontSize]: number}
  fontWeights: {[key in FontWeight]: number}
  maxSiteWidth: number
} 

const theme: Theme = {
  colors: {
    black: '#282E34',
    white: '#FFFFFF',
  },
  fontSizes: {
    xs: 11,
    s: 13,
    m: 16,
    l: 25,
    xl: 50,
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  maxSiteWidth: 1200,
}

export default theme