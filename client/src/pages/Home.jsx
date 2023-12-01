import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import LeftDrawer from '../components/LeftBar'
import Post from '../components/Post'
import RightDrawer from '../components/RightBar'
import Login from '../components/Login'
import Signup from '../components/Signup'
import AuthService from '../utils/auth'
import AllGuilds from '../components/AllGuilds'

function Home() {
  return (
    <Box 
    display={'flex'} 
    justifyContent={'space-evenly'}
    sx={{
      backgroundImage: 'url("../../public/Untitled_Artwork.png")',
      backgroundSize: 50,
      height: '100vh', // Adjust the height as needed
    }}
    >
      <LeftDrawer />
      {/* <Box
      sx={{
        opacity: 0.3,
        display: 'inline-block',
        paddingTop: 10
      }}
      >
        <img src="../../public/png_trns_logo.png"></img>
      </Box> */}
      {AuthService.loggedIn() ? (
        <AllGuilds />
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
