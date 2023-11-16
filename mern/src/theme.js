import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight : '48px',
    boardBarHeight : '70px',
    boardContentHeight : 'calc(100vh - 48px - 70px)'
  },
  colorSchemes: {

  }
  // ...other properties
})

export default theme