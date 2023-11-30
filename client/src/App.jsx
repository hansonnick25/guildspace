import './App.css'
import { Outlet } from 'react-router-dom'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const componenets = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        borderRadius: 50,
        backgroundColor: '#008f11',
      },
    },
  },
  MuiDrawer: {
    defaultProps: {
      variant: 'persistent',
    },
    styleOverrides: {
      paper: {
        width: 250,
        flexShrink: 0,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        alignItems: 'center',
        margin: 5,
        borderRadius: 20,
        backgroundColor: '#003b00',
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        backgroundColor: '#',
        color: 'white',
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: 'filled',
    },
  },
}

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        main: '#fff',
        paper: '#008f11',
      },
      primary: {
        main: '#0d0208',
        text: '#ffffff',
      },
    },
    components: componenets,
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Outlet />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
