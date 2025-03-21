import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange as Orange } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      }
    },

    dark: {
      palette: {
        primary: cyan,
        secondary: Orange
      }
    }
  }
})

export default theme