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
import ShieldIcon from '@mui/icons-material/Shield'

function RightDrawer() {
  const guildIcon = <ShieldIcon />

  const drawerWidth = 250
  const [rightOpen, setRightOpen] = useState(true)
  const handleRightDrawerOpen = () => setRightOpen(true)
  const handleRightDrawerClose = () => setRightOpen(false)

  const handleClickCreateGuild = () => {
    // do stuff
  }

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
        open={rightOpen}
        anchor="right"
      >
        <IconButton
          aria-label="open drawer"
          onClick={handleRightDrawerClose}
          edge="start"
          sx={{ mr: 2, ...(!rightOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
        <Toolbar sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6' }} />
        <Divider sx={{ bgcolor: '#98FF00' }} />
        <List sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6' }}>
          {['Guild1', 'Guild2', 'Guild3', 'Guild4'].map(text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#FEF9F6' }}>
                  {guildIcon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          sx={{
            bgcolor: '#98FF00',
            color: '#2A2B2F',
            fontWeight: 'bolder',
            margin: 2,
            borderRadius: 5,
          }}
          variant="contained"
          onClick={handleClickCreateGuild}
        >
          Create Guild
        </Button>
        <Divider sx={{ bgcolor: '#98FF00', marginTop: 2 }} />
      </Drawer>
      <Box>
        <IconButton
          aria-label="open drawer"
          onClick={handleRightDrawerOpen}
          edge="end"
          sx={{ mr: 2, ...(rightOpen && { display: 'none' }) }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default RightDrawer
