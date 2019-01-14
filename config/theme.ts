export type Color = 'black' | 'white' | 'orange'
export type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl'
export type FontWeight = 'light' | 'regular' | 'semibold' | 'bold'
export type Spacing = 'xxs' |'xs' | 's' | 'm' | 'l' | 'xl'

export interface Theme {
  colors: {[key in Color]: string}
  fontSizes: {[key in FontSize]: number}
  fontWeights: {[key in FontWeight]: number}
  maxSiteWidth: number
  spacings: {[key in Spacing]: string}
} 

const theme: Theme = {
  colors: {
    black: '#282E34',
    white: '#FFFFFF',
    orange: '#f8ad79',
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
  spacings: {
    xxs: 5,
    xs: 10,
    s: 15,
    m: 20,
    l: 30,
    xl: 40,
    xxl: 60,
  },
}

export default theme