import { createTheme } from "@mui/material";

export const theme = createTheme( Object.freeze({
  palette: {
    primary: {
      main: '#ff4000',
    }, 
    secondary: {
      main: '#ebe2dd'
    },
    mode: 'light'
  }
}))

 // colors: {
  //   white: '#ffffff',
  //   black: '#010101',
  //   green: '#4caf50',
  //   red: '#f44336',
  //   blue: '#2196f3',
  //   primaryText: '#212121',
  //   secondaryText: '#757575'
  // },
  // spacing: value => `${4 * value}px`
