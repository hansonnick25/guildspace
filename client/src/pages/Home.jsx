import Box from '@mui/material/Box'
import LeftDrawer from '../components/LeftBar'
import Post from '../components/Post'
import RightDrawer from '../components/RightBar'
import Login from '../components/Login';
// import Signup from '../components/Signup';

function Home() {
  return (
    <Box
      sx={{ display: 'flex', bgcolor: '#2A2B2F', color: '#FEF9F6' }}
      justifyContent={'space-evenly'}
    >
      <LeftDrawer />
      <Post />
      <Login />
      {/* <Signup /> */}
      <RightDrawer />
    </Box>
  )
}

// export Home function
export default Home
