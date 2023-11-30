import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import LeftDrawer from '../components/LeftBar'
import Post from '../components/Post'
import RightDrawer from '../components/RightBar'
import Login from '../components/Login'
import Signup from '../components/Signup'
import AuthService from '../utils/auth'

function Home() {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <LeftDrawer />
      {AuthService.loggedIn() ? (
        <Post />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Login />
          <Typography
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 5,
              fontWeight: 'bolder',
              fontSize: 'larger',
            }}
          >
            OR
          </Typography>
          <Signup />
        </Box>
      )}
      <RightDrawer />
    </Box>
  )
}

// export Home function
export default Home
