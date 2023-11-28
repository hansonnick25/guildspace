import { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';


// import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Signup() {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    // const [addUser] = useMutation(ADD_USER);
  
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
        const { data } = await addUser({
          variables: { ...userFormData }
        });
  
        if (!data) {
          throw new Error('something went wrong!');
        }
  
        const { token, user } = data.addUser;
        console.log(user);
        Auth.login(token);
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
  
      setUserFormData({
        username: '',
        email: '',
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
                Sign-up
            </Typography>
            <Box>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                    className='form'
                    type='text'
                    placeholder='your username'
                    onChange={handleInputChange}
                    value={userFormData.username}
                    required
                    >
                        Username
                    </TextField>
                    <TextField
                    className='form'
                    type='email'
                    placeholder='your email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                    required
                    >
                        Email
                    </TextField>
                    <TextField
                    className='form'
                    type='password'
                    placeholder='your password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                    required
                    >
                        Password
                    </TextField>
                    <Button
                    className='form'
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    variant='contained'
                    type='submit'
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
  }
  
  export default Signup;
  