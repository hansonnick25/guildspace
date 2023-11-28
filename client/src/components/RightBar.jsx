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
  const icons = {
    Guild: <ShieldIcon />,
  }

  const drawerWidth = 250
  const [rightOpen, setRightOpen] = useState(true)
  const handleRightDrawerOpen = () => setRightOpen(true)
  const handleRightDrawerClose = () => setRightOpen(false)
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
          {['Guild', 'Guild', 'Guild', 'Guild'].map(text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#FEF9F6' }}>
                  {icons[text]}
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
