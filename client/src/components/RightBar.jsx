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
function RightDrawer() {
  const guildIcon = <SecurityIcon />

  const [rightOpen, setRightOpen] = useState(true)
  const handleRightDrawerOpen = () => setRightOpen(true)
  const handleRightDrawerClose = () => setRightOpen(false)

  const handleClickCreateGuild = () => {
    // do stuff
  }

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
              {['Guild1', 'Guild2', 'Guild3', 'Guild4'].map(text => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon sx={{ color: 'white' }}>
                      {guildIcon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
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
