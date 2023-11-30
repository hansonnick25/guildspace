// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
// import GuildCard from '../components/GuildCard';
// import PostCard from '../components/PostCard';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME)

  if (loading) {
    return <div>Loading...</div>
  }

  const { guilds, posts, username } = data.me

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
      <Typography variant="h1">{`${username}'s profile`}</Typography>
      <Card sx={{ minWidth: 600, minHeight: 300 }}>
        <CardHeader title="Guilds" />
        <Divider variant="middle" sx={{ bgcolor: 'black', height: 2 }} />
        <CardContent>
          <List>
            {guilds.map(guild => (
              <ListItem key={guild._id}>
                <ListItemText primary={guild.name} />
                <Divider variant="middle" sx={{ bgcolor: 'black' }} />
                <ListItemText primary={guild.description} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 600, minHeight: 300 }}>
        <CardHeader title="Posts" />
        <Divider variant="middle" sx={{ bgcolor: 'black', height: 2 }} />
        <CardContent>
          {posts && posts.length > 0 ? (
            <List>
              {posts.map(post => (
                <ListItem key={post._id}>
                  <ListItemText primary={post.title} />
                  <Divider variant="middle" sx={{ bgcolor: 'black' }} />
                  <ListItemText primary={post.author} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2">
              {"You haven't created any posts yet"}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile
