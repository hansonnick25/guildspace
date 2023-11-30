import { useState } from 'react'
import {
  Box,
  IconButton,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
  Card,
  CardContent,
} from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import SecurityIcon from '@mui/icons-material/Security'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'

const RightDrawer = () => {
  const guildIcon = <SecurityIcon />

  const [rightOpen, setRightOpen] = useState(true)
  const handleRightDrawerOpen = () => setRightOpen(true)
  const handleRightDrawerClose = () => setRightOpen(false)

  const handleClickCreateGuild = () => {
    // do stuff
  }
  const { loading, error, data } = useQuery(QUERY_ME)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <Box>
      <Drawer open={rightOpen} anchor="right">
        <IconButton
          aria-label="open drawer"
          onClick={handleRightDrawerClose}
          edge="start"
          sx={{ mr: 2, ...(!rightOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowRightIcon sx={{ color: 'white' }} />
        </IconButton>
        <Card sx={{ bgcolor: '#003b00', boxShadow: 5 }}>
          <CardContent>
            <List>
              {data.me.guilds.map((guild, index) => (
                <ListItem key={index}>
                  <ListItemButton>
                    <ListItemIcon>{guildIcon}</ListItemIcon>
                    <ListItemText primary={guild.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Button component={Link} to={'/guild'}>
              Create Guild
            </Button>
          </CardContent>
        </Card>
      </Drawer>
      <Box>
        <IconButton
          aria-label="open drawer"
          onClick={handleRightDrawerOpen}
          edge="end"
          sx={{ mr: 2, ...(rightOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default RightDrawer
