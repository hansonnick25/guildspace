import { Box, Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'

const pages = ['my posts', 'my guilds'];

export default function Profile() {
  return (
    <Box alignItems={'center'} sx={{ bgcolor: '#585a64', color: '#2A2B2F' }}>
      <Card sx={{ width: 1200, height: 1000 }}>
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
          {/* <Card>
            <CardHeader title="My posts" />
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardHeader title="My Guilds" />
            <CardContent></CardContent>
          </Card> */}
        </CardContent>
      </Card>
    </Box>
  )
}
