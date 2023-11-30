import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  CardHeader,
} from '@mui/material'

// TODO: Find a way to pull from data and fill in
function createData(username, email) {
  return { username, email }
}

// TODO: Find a way to join a guild based on context
function joinGuild() {
  console.log('Join Guild function called')
}

const rows = [createData('Owner', 'owner@gmail.com')]

function GuildComponent() {
  return (
    <Box>
      <Card 
      variant="outlined"
      sx={{
        bgcolor: '#FEF9F6',
        color: '#2A2B2F',
        padding: 2
      }}
      >
        <CardMedia sx={{ height: 100 }} image="" title="guild logo" />
        <CardHeader 
        sx={{
          textAlign: 'center'
        }}
        title="Guild Name"
        >
        </CardHeader>
        <CardContent>
          <Typography
            sx={{
              textAlign: 'center',
              padding: 2
            }}
           variant="body1"
           >
            Guild Desc
            </Typography>
          <Card
                sx={{
                  bgcolor: '#98FF00',
                }}
          >
            <CardHeader title="Guild Roster"></CardHeader>
            <CardContent>
              <TableContainer>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="guild roster"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Username</TableCell>
                      <TableCell>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow
                      sx={{
                        bgcolor: '#008F11',
                        opacity: 0.5
                      }} 
                      key={row.username}
                      >
                        <TableCell component="th" scope="row">
                          <Typography>{row.username}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography>{row.email}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          <Button
            sx={{
              "&:hover": { bgcolor: '#2A2B2F', color: '#FEF9F6' },
              bgcolor: '#98FF00',
              color: '#2A2B2F',
              fontWeight: 'bolder',
              margin: 2,
              borderRadius: 5,
            }}
            variant="contained"
            onClick={() => joinGuild()}
          >
            Join
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default GuildComponent
