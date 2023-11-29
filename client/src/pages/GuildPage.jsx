import Box from '@mui/material/Box'
import LeftDrawer from '../components/LeftBar'
import GuildComponent from '../components/GuildComponent'
import RightDrawer from '../components/RightBar'

const GuildPage = () => {
  return (
    <Box>
      <LeftDrawer />
      <GuildComponent />
      <RightDrawer />
    </Box>
  )
}

export default GuildPage
