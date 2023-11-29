import { Box, Card, CardHeader, CardContent, Avatar } from '@mui/material'

export default function Profile() {
  return (
    <Box alignItems={'center'} sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' , bgcolor: '#585a64', color: '#2A2B2F' }}>
      <Card sx={{ flexDirection: 'column', width: 1200, height: 600 }}>
        <CardHeader title="Username" sx={{ textAlign: 'center', fontSize: 50 }} />
        <CardContent>
          <Avatar sx={{
            bgcolor: '#98FF00', 
          }} />
          <Card sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}>
            <CardHeader title="My posts" />
            <CardContent></CardContent>
          </Card>
          <Card sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}>
            <CardHeader title="My Guilds" />
            <CardContent></CardContent>
          </Card>
        </CardContent>
      </Card>
    </Box>
  )
}
