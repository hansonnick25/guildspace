import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_GUILDS, QUERY_ME } from '../utils/queries'
import { JOIN_GUILD } from '../utils/mutations'
import Auth from '../utils/auth'
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Button,
} from '@mui/material'

const AllGuilds = () => {
  const { loading, error, data } = useQuery(QUERY_GUILDS)
  const { data: meData } = useQuery(QUERY_ME)
  const [joinGuild, { data: mutationData }] = useMutation(JOIN_GUILD)
  const [guilds, setGuilds] = useState([])

  const handleClick = async guildId => {
    const token = Auth.loggedIn() ? Auth.getToken() : null
    console.log(token)
    if (!token) {
      return false
    }

    try {
      const { data } = await joinGuild({
        variables: { guildId },
      })
      console.log(data)

      if (!data) {
        throw new Error('something went wrong!')
      }
    } catch (err) {
      console.error(err)
      //   setShowAlert(true)
    }
  }

  useEffect(() => {
    if (data) {
      setGuilds(data.getAllGuilds) // replace 'guilds' with the correct property name
    }
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <Box display={'flex'} justifyContent={'space-evenly'}>
      <Box>
        <Typography variant="h1">guildspace</Typography>
        {guilds.map(guild => (
          <Card key={guild._id}>
            <CardHeader title={guild.name}></CardHeader>
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
              <Button onClick={() => handleClick(guild._id)}>Join Guild</Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default AllGuilds
