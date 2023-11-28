import { Box, Card, CardHeader, CardContent } from '@mui/material'

export default function Profile() {
  return (
    <Box alignItems={'center'} sx={{ bgcolor: '#585a64', color: '#2A2B2F' }}>
      <Card sx={{ width: 1200, height: 1000 }}>
        <CardHeader title="Username" sx={{textAlign: 'center'}} />
        <CardContent>          
          <Card>
            <CardHeader title="My posts" />
            <CardContent></CardContent>
          </Card>
          <Card>
            <CardHeader title="My Guilds" />
            <CardContent></CardContent>
          </Card>
        </CardContent>
      </Card>
    </Box>
  )
}
