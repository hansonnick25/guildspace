import Box from '@mui/material/Box'
import LeftDrawer from '../components/LeftBar'
import Guild from '../components/GuildComponent'
import RightDrawer from '../components/RightBar'

const GuildPage = () => {
  return (
    <Box>
      <LeftDrawer />
      <Guild />
      <RightDrawer />
    </Box>
  )
}

export default GuildPage
