import { 
  Box, 
  Card, 
  CardHeader, 
  CardContent, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton } from '@mui/material'
import { Link } from 'react-router-dom'
import LeftDrawer from '../components/LeftBar'
import RightDrawer from '../components/RightBar'


const pages = ['my posts', 'my guilds'];

export default function Profile() {
  // Step 2: Use useQuery to fetch data
  const { loading, error, data } = useQuery(QUERY_ME)

  // Step 3: Check for loading and error states
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const user = data ? data.me : null

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn()) {
    return <Navigate to="/profile" />
  }

  return (
    <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}>
            <LeftDrawer />
      <Card sx={{ width: 800, height: 1000 }}>
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
        </CardContent>
      </Card>
      <RightDrawer />
    </Box>
  )
}

// export default function Profile() {
//   const { error, data } = useQuery(QUERY_ME);

//   if (error) return `Error! ${error.message}`;

//   console.log(`Data: ${data}`)

//   const user = data.me

//   // navigate to personal profile page if username is yours
//   if (Auth.loggedIn()) {
//     return <Navigate to="/profile" />
//   }

//   return (
//     <Box
//       alignItems={'center'}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         flexWrap: 'wrap',
//         bgcolor: '#585a64',
//         color: '#2A2B2F',
//       }}
//     >
//       <Card sx={{ flexDirection: 'column', width: 1200, height: 600 }}>
//         <CardHeader
//           title="Username"
//           sx={{ textAlign: 'center', fontSize: 50 }}
//         />
//         <CardContent>
//           <Avatar
//             sx={{
//               bgcolor: '#98FF00',
//             }}
//           />
//           <Card
//             sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}
//           >
//             <CardHeader title="My posts" />
//             <CardContent>
//               {/* get guild name and post it as a card(?) */}
//               <GuildList
//                 guilds={user.guilds}
//                 title={`${user.username}'s guilds`}
//                 showTitle={false}
//               />
//             </CardContent>
//           </Card>
//           <Card
//             sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}
//           >
//             <CardHeader title="My Guilds" />
//             <CardContent></CardContent>
//           </Card>
//           <Card
//             sx={{ display: 'flex', flexDirection: 'row', p: 1, mx: 2, my: 10 }}
//           >
//             <CardHeader title="My Friends" />
//             <CardContent></CardContent>
//           </Card>
//         </CardContent>
//       </Card>
//     </Box>
//   )
// }
