import { useState } from 'react'

// post imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

// leftBar imports
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import Person2Icon from '@mui/icons-material/Person2'
import SearchIcon from '@mui/icons-material/Search'
import ShieldIcon from '@mui/icons-material/Shield'
import Button from '@mui/material/Button'

function Home() {
  // sets the correct icon for the nav
  const icons = {
    Home: <HomeIcon />,
    Explore: <SearchIcon />,
    Guild: <ShieldIcon />,
    Profile: <Person2Icon />,
  }

  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)

  const handleLeftDrawerOpen = () => setLeftOpen(true)
  const handleLeftDrawerClose = () => setLeftOpen(false)
  const handleRightDrawerOpen = () => setRightOpen(true)
  const handleRightDrawerClose = () => setRightOpen(false)

  // sets drawer width
  const drawerWidth = 250

  return (
    <Box
      sx={{ display: 'flex', bgcolor: '#2A2B2F', color: '#FEF9F6' }}
      justifyContent={'space-evenly'}
    >
      {/* left drawer */}
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
            onClick={handleLeftDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
          >
            <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
      {/* posts */}
      <Box alignItems={'center'}>
        <Card sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6', minWidth: 400 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: '#98FF00', color: '#2A2B2F' }}>
                rofile
              </Avatar>
            }
            title="Profile Name  @gamertag"
          />
          <CardContent>
            <Typography>Post Content...</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <CardActions
              sx={{ display: 'flex', justifyContent: 'space-evenly' }}
              disableSpacing
            >
              <IconButton aria-label="add to favorites">
                <ModeCommentIcon sx={{ color: '#FEF9F6' }} />
              </IconButton>
              <IconButton aria-label="share">
                <FavoriteIcon sx={{ color: '#FEF9F6' }} />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      {/* right drawer */}
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
    </Box>
  )
}

// export Home function
export default Home
