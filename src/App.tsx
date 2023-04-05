import { Container, createTheme, ThemeProvider } from '@mui/material'
import { DragDrop } from './features/dragDrop'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontWeightBold: 800,
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#5D5FEF',
      dark: '#000',
    },
  },
  shape: {
    borderRadius: 6,
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ pt: '5rem' }}>
        <DragDrop />
      </Container>
    </ThemeProvider>
  )
}

export default App
