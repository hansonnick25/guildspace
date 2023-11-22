// post imports 
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// leftBar imports
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
import ShieldIcon from '@mui/icons-material/Shield';
import Button from '@mui/material/Button';

const Home = () => {

    const icons = {
        'Home': <HomeIcon />,
        'Explore': <SearchIcon />,
        'Guild': <ShieldIcon />,
        'Profile': <Person2Icon />
    }

    const drawerWidth = 200;
    
    return (
        <Box sx={{ display: 'flex', bgcolor: '#2A2B2F', color: '#FEF9F6', }}>

<Drawer
        sx={{
            // bgcolor: '#2A2B2F', 
            // color: '#FEF9F6',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6', }} />
        <Divider sx={{ bgcolor: '#98FF00' }} />
        <List sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6', }}>
          {['Home', 'Explore', 'Guild', 'Profile'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: '#FEF9F6' }}>
                  {icons[text]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button sx={{ bgcolor: '#98FF00', color: '#2A2B2F', fontWeight: 'bolder' }} variant="contained">Post</Button>
        <Divider sx={{ bgcolor: '#98FF00', marginTop: 2 }} />
        <Avatar sx={{ bgcolor: '#98FF00', color: '#2A2B2F', margin: 2 }}>
                        Profile
                    </Avatar>
      </Drawer>

            <Box>
            <Card sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6', minWidth: 400 }}>
                <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#98FF00', color: '#2A2B2F' }}>
                        Profile
                    </Avatar>
                }
                title="Profile Name  @gamertag"
                />
                <CardContent>
                    <Typography>
                        Post Content...
                    </Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly' }} disableSpacing>
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

        </Box>
    )
//     return (
// <div>
//     {/* left bar */}
//     <div className='left-side'>
//         <h1>App Name</h1>
//         <nav>
//             <ul>
//                 <a><li>Home</li></a>
//                 <a><li>Explore</li></a>
//                 <a><li>Guild</li></a>
//                 <a><li>Profile</li></a>
//             </ul>
//         </nav>
//         <div className='post-btn'>Post</div>
//         <div className='user-profile'>
//             {/* image or avatar? */}
//             <p>Profile Name</p> 
//             <p>@name</p>
//         </div>
//         {/* middle bar */}
//         <div className='middle'>
//             {/* add middle content */}
//             <div className="feed">
//                 <p>For you</p>
//                 <p>Following</p>
//             </div>
//             <div className="post-card"></div>
//         </div>
//         {/* right bar */}
//         <div className='right-side'>
//             {/* search button (text input element) */}
//             {/* guilds to join */}
//             <div className='guilds-to-join'>
//                 <ul>
//                     <a><li>Guild</li></a>
//                     <a><li>Guild</li></a>
//                     <a><li>Guild</li></a>
//                     <a><li>Guild</li></a>
//                     <a><li>Guild</li></a>
//                 </ul>
//             </div>
//         </div>
//     </div>

// </div>
//     );
};

// export Home function
export default Home;