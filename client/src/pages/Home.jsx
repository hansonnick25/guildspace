import Box from '@mui/material/Box'
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
        <Box>
          <Login /> <Signup />
        </Box>
      )}
      <RightDrawer />
    </Box>
  )
}

// export Home function
export default Home
