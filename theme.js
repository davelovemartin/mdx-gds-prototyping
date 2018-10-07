import theme from 'mdx-deck/themes'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: '"GDS Transport Website", sans-serif',
  // custom colors
  colors: {
    text: '#000',
    background: 'white',
    link: '#005EA5',
  },
  blockquote: {
    textAlignment: 'centre'
  },
  transitionTimingFunction: 'linear',
  transitionDuration: '.1s'
}