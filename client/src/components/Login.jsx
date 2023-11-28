import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
import { Button, Box, TextField, Typography } from '@mui/material';

import { useMutation } from '@apollo/client';
// need to add mutation for logging in user
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      if (!data) {
        throw new Error('something went wrong!');
      }

      const { token, user } = data.login;
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    //   setShowAlert(true);
    }

    setUserFormData({
      username: '',
      password: '',
    });
  };

  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        }}
        >
        <Typography>
            Login
        </Typography>
        <Box>
            <form onSubmit={handleFormSubmit}>
                <TextField
                className='text'
                type='text'
                placeholder='your username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
                >
                    Username
                </TextField>
                <TextField
                className='text'
                type='password'
                placeholder='your password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
                >
                    Password
                </TextField>
                <Button></Button>
            </form>
        </Box>
    </Box>
  );
};

export default Login;
