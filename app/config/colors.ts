const colors = {
  black: '#000000',
  darkgray: '#0c0c0c',
  gray: '#cccccc',
  light: '#f2f2f2', // background: rgba(242, 242, 242, 1);
  lightgray: '#d3d3d3',
  mediumgray: '#999999',
  medium: '#6e6969',
  primary: '#F83758', //background: rgba(248, 55, 88, 1);
  textColor: '#676767',
  white: '#ffffff',
} as const

export default colors

// Extracts the keys of Colors as a TypeScript type
export type ColorKeys = keyof typeof colors
