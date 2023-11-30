import { useState } from 'react'
import {
  Box,
  Avatar,
  IconButton,
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Button,
} from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import HomeIcon from '@mui/icons-material/Home'
import Person2Icon from '@mui/icons-material/Person2'
import SearchIcon from '@mui/icons-material/Search'
import ShieldIcon from '@mui/icons-material/Shield'

import { Link } from 'react-router-dom';

const pages = ['home', 'guild', 'profile'];

function LeftDrawer() {
  const icons = {
    home: <HomeIcon />,
    // Explore: <SearchIcon />,
    guild: <ShieldIcon />,
    profile: <Person2Icon />,
  }

  const drawerWidth = 250
  const [leftOpen, setLeftOpen] = useState(true)
  const handleLeftDrawerOpen = () => setLeftOpen(true)
  const handleLeftDrawerClose = () => setLeftOpen(false)
  return (
    <Box>
      <Drawer
        sx={{
          bgcolor: '#2A2B2F',
          color: '#FEF9F6',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        open={leftOpen}
        anchor="left"
      >
        <IconButton
          aria-label="open drawer"
          onClick={handleLeftDrawerClose}
          edge="start"
          sx={{ mr: 2, ...(!leftOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
        <Toolbar sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6' }} />
        <Divider sx={{ bgcolor: '#98FF00' }} />
        <List sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6' }}>
          {pages.map((page) => (
            <ListItem key={page} disablePadding>
              <ListItemButton component={Link} to={`/${page}`} sx={{ my: 2, color: '#fff1e6', display: 'flex', fontSize: 'medium' }}>
                <ListItemIcon sx={{ color: '#FEF9F6' }}>{icons[page]}</ListItemIcon>
                <ListItemText primary={page.charAt(0).toUpperCase() + page.slice(1)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
{/*         <List sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6' }}>
          {['Home', 'Explore', 'Guild', 'Profile'].map(text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#FEF9F6' }}>
                  {icons[text]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Button
          sx={{
            bgcolor: '#98FF00',
            color: '#2A2B2F',
            fontWeight: 'bolder',
            margin: 2,
            borderRadius: 5,
          }}
          variant="contained"
        >
          Post
        </Button>
        <Divider sx={{ bgcolor: '#98FF00', marginTop: 2 }} />
        <Avatar sx={{ bgcolor: '#98FF00', color: '#2A2B2F', margin: 2 }}>
          Profile
        </Avatar>
      </Drawer>
      <Box>
        <IconButton
          aria-label="open drawer"
          onClick={handleLeftDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default LeftDrawer
