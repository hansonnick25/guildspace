import Box from '@mui/material/Box'
import LeftDrawer from '../components/LeftBar'
import Post from '../components/Post'
import RightDrawer from '../components/RightBar'
// import Login from '../components/Login'
// import Signup from '../components/Signup'
import Profile from '../pages/Profile'
import AuthService from '../utils/auth'

function Home() {
  return (
    <Box
      sx={{ display: 'flex', bgcolor: '#2A2B2F', color: '#FEF9F6' }}
      justifyContent={'space-evenly'}
    >
      <LeftDrawer />
      {AuthService.loggedIn ? (
        <Post />
      ) : (
        <Box>
          {/* <Login /> <Signup /> */}
          <Profile />
        </Box>
      )}
      <RightDrawer />
    </Box>
  )
}

// export Home function
export default Home
