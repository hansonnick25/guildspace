// imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

function Post() {
  return (
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
  )
}

export default Post
