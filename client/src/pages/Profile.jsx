import { 
  Box, 
  Card, 
  CardHeader, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
import LeftDrawer from '../components/LeftBar'
import RightDrawer from '../components/RightBar'


const pages = ['my posts', 'my guilds'];

export default function Profile() {
  return (
    <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
            <LeftDrawer />
      <Card sx={{ width: 800, height: 1000 }}>
        <CardHeader title="Username" sx={{ textAlign: 'center' }} />
        <CardContent>
        <List>
              {pages.map(page => (
                <ListItem key={page} disablePadding>
                  <ListItemButton component={Link} to={`/${page}`}>
                    <ListItemText
                      primary={page.charAt(0).toUpperCase() + page.slice(1)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </CardContent>
      </Card>
      <RightDrawer />
    </Box>
  )
}
