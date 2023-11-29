import { useState } from 'react'
import {
  Button,
  Box,
  TextField,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth'

function Signup() {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  // set state for alert
  const [showAlert, setShowAlert] = useState(false)
  const [addUser] = useMutation(ADD_USER)
  const [disabled, setDisabled] = useState(true)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const handleFormBlur = event => {
    if (event.target.username == 'username' && !userFormData.username) {
      console.log('Please enter your username')
    }
    if (event.target.email == 'email' && !userFormData.email) {
      console.log('Please enter your email')
    }
    if (event.target.password == 'password' && !userFormData.password) {
      console.log('Please enter your password')
    }
    if (userFormData.username && userFormData.email && userFormData.password) {
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
      const { data } = await addUser({
        variables: { ...userFormData },
      })
      console.log(data)

      if (!data) {
        throw new Error('something went wrong!')
      }

      const { token, user } = data.addUser
      console.log(user)
      Auth.login(token)
    } catch (err) {
      console.error(err)
      setShowAlert(true)
    }

    setUserFormData({
      username: '',
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
      }}
    >
      <Card>
        <CardHeader title="Sign Up" />
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            <TextField
              className="form"
              type="text"
              placeholder="your username"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              required
              name="username"
            >
              Username
            </TextField>
            <TextField
              className="form"
              type="email"
              placeholder="your email"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              required
              name="email"
            >
              Email
            </TextField>
            <TextField
              className="form"
              type="password"
              placeholder="your password"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              required
              name="password"
            >
              Password
            </TextField>
            <Button
              className="form"
              disabled={disabled}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Signup
