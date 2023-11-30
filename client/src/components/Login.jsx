import { useState } from 'react'
import {
  Button,
  Box,
  TextField,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'

function Login() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  })
  // set state for alert
  const [showAlert, setShowAlert] = useState(false)
  const [login] = useMutation(LOGIN_USER)
  const [disabled, setDisabled] = useState(true)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormBlur = event => {
    if (event.target.email == 'email' && !userFormData.email) {
      console.log('Please enter your email')
    }
    if (event.target.password == 'password' && !userFormData.password) {
      console.log('Please enter your password')
    }
    if (userFormData.email && userFormData.password) {
      setDisabled(false)
    }
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      })

      if (!data) {
        throw new Error('something went wrong!')
      }

      const { token, user } = data.login
      console.log(user)
      Auth.login(token)
    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setUserFormData({
      email: '',
      password: '',
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
      }}
    >
      <Card>
        <CardHeader title="Login" />
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            <div className="form-content">
              <TextField
                className="form"
                type="text"
                placeholder="your email"
                onChange={handleInputChange}
                onBlur={handleFormBlur}
                required
                name="email"
                sx={{
                  marginBottom: 2,
                }}
              />
              <TextField
                className="form"
                type="password"
                placeholder="your password"
                onChange={handleInputChange}
                onBlur={handleFormBlur}
                required
                name="password"
                sx={{
                  marginBottom: 2,
                }}
              />
              <Button className="form" disabled={disabled} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Login
