import React from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../utils/queries'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  List,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

const GuildComponent = () => {
  const { loading, error, data } = useQuery(QUERY_ME)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  const { guilds } = data.me

  return (
    <Box>
      {guilds.map(guild => (
        <Card key={guild._id} className="guild-card">
          <CardHeader title={guild.name} />
          <CardContent>
            <TableContainer component={Card}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {guild.members.map(member => (
                    <TableRow key={member._id}>
                      <TableCell>{member.username}</TableCell>
                      <TableCell>{member.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default GuildComponent
