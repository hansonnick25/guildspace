import { useState } from 'react'
import {
  Box,
  IconButton,
  Drawer,
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
import HomeIcon from '@mui/icons-material/Home'
import Person2Icon from '@mui/icons-material/Person2'
import SecurityIcon from '@mui/icons-material/Security'
import AddIcon from '@mui/icons-material/Add'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'

const pages = ['guild', 'profile']

function LeftDrawer() {
  const handleLogout = () => {
    Auth.logout()
  }

  const icons = {
    home: <HomeIcon />,
    guild: <SecurityIcon />,
    profile: <Person2Icon />,
    logout: <LogoutIcon />,
  }

  const [leftOpen, setLeftOpen] = useState(true)
  const handleLeftDrawerOpen = () => setLeftOpen(true)
  const handleLeftDrawerClose = () => setLeftOpen(false)

  return (
    <Box>
      <Drawer variant="persistent" open={leftOpen} anchor="left">
        <IconButton
          aria-label="close drawer"
          onClick={handleLeftDrawerClose}
          edge="start"
          sx={{ mr: 2, ...(!leftOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ color: 'white' }} />
        </IconButton>
        <Card>
          <CardContent>
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to={'/'}>
                  <ListItemIcon sx={{ color: 'white' }}>
                    {icons.home}
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              {pages.map(page => (
                <ListItem key={page} disablePadding>
                  <ListItemButton component={Link} to={`/${page}`}>
                    <ListItemIcon sx={{ color: 'white' }}>
                      {icons[page]}
                    </ListItemIcon>
                    <ListItemText
                      primary={page.charAt(0).toUpperCase() + page.slice(1)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon sx={{ color: 'white' }}>
                  {icons.logout}
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </List>
            <Button endIcon={<AddIcon />}>Post</Button>
          </CardContent>
        </Card>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '100vh',
          }}
        ></Box>
      </Drawer>
      <Box>
        <IconButton
          aria-label="open drawer"
          onClick={handleLeftDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowRightIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default LeftDrawer
