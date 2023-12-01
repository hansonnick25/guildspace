import LeftDrawer from '../components/LeftBar'
import GuildComponent from '../components/GuildComponent'
import CreateGuild from '../components/CreateGuild'
import RightDrawer from '../components/RightBar'
import { Box, Button } from '@mui/material'
import { useState } from 'react'

const GuildPage = () => {
  const [create, setCreate] = useState(false)
  return (
    <Box
      display={'flex'}
      justifyContent={'space-evenly'}
      sx={{
        backgroundImage: 'url("../../Untitled_Artwork.png")',
        backgroundSize: 50,
        height: '100%', // Adjust the height as needed
      }}
    >
      <LeftDrawer />
      {create ? (
        <Box>
          <Button onClick={() => setCreate(false)}>View Guilds</Button>
          <CreateGuild />
        </Box>
      ) : (
        <Box>
          <Button onClick={() => setCreate(true)}>Create Guild</Button>
          <GuildComponent />
        </Box>
      )}
      <RightDrawer />
    </Box>
  )
}

export default GuildPage
