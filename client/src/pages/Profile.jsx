import { Box, Card, CardHeader, CardContent, Avatar } from '@mui/material'

import { Navigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { QUERY_ME, QUERY_USER } from '../utils/queries'

import Auth from '../utils/auth'
import GuildList from '../components/GuildList'

export default function Profile() {
  const { username: userParam } = useParams()

  console.log(`User param: ${userParam}`)

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  })
  console.log(`Query user: ${QUERY_USER}\nQuery me: ${QUERY_ME}`)

  const user = data?.me || data?.user || {}
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getUser().data.username === userParam) {
    return <Navigate to="/profile" />
  }

  console.log(`User: ${user}\nData: ${data}\nuserParams: ${userParam}`)

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Box
      alignItems={'center'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        bgcolor: '#585a64',
        color: '#2A2B2F',
      }}
    >
      <Card sx={{ flexDirection: 'column', width: 1200, height: 600 }}>
        <CardHeader
          title="Username"
          sx={{ textAlign: 'center', fontSize: 50 }}
        />
        <CardContent>
          <Avatar
            sx={{
              bgcolor: '#98FF00',
            }}
          />
          <Card
            sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}
          >
            <CardHeader title="My posts" />
            <CardContent>
              {/* get guild name and post it as a card(?) */}
              <GuildList
                guilds={user.guilds}
                title={`${user.username}'s guilds`}
                showTitle={false}
              />
            </CardContent>
          </Card>
          <Card
            sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}
          >
            <CardHeader title="My Guilds" />
            <CardContent></CardContent>
          </Card>
          <Card
            sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}
          >
            <CardHeader title="My Friends" />
            <CardContent></CardContent>
          </Card>
        </CardContent>
      </Card>
    </Box>
  )
}
