// imports 
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

const Home = () => {
    return (
        <Box>
            <Card sx={{ bgcolor: '#2A2B2F', color: '#FEF9F6', maxWidth: 400 }}>
                <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: '#98FF00', color: '#2A2B2F' }}>
                        Profile
                    </Avatar>
                }
                title="Profile Name"
                subheader="@gamertag"
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