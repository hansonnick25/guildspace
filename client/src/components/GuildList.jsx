import { Box, Card, CardContent, CardHeader } from '@mui/material'
import { Link } from 'react-router-dom'

const GuildList = ({
  guilds,
  title,
  showTitle = true,
}) => {
  if (!guilds.length) {
    return <h3> No Guilds Yet</h3>
  }

  return (
    <Box>
      {showTitle && <h3>{title}</h3>}
      {guilds &&
        guilds.map(guild => (
          <Box key={guild._id}>
            <Card>
              <CardHeader>
                <Link to={`/guilds/${guild.id}`}>{guild.name}</Link>
              </CardHeader>
              <CardContent>
                {guild.members.length} members in this guild
              </CardContent>
            </Card>
          </Box>
        ))}
    </Box>
  )
}

export default GuildList
