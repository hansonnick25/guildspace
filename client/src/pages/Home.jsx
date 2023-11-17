// imports 

const Home = () => {
    return (
<div>
    {/* left bar */}
    <div className='left-side'>
        <h1>App Name</h1>
        <nav>
            <ul>
                <a><li>Home</li></a>
                <a><li>Explore</li></a>
                <a><li>Guild</li></a>
                <a><li>Profile</li></a>
            </ul>
        </nav>
        <div className='post-btn'>Post</div>
        <div className='user-profile'>
            {/* image or avatar? */}
            <p>Profile Name</p> 
            <p>@name</p>
        </div>
        {/* middle bar */}
        <div className='middle'>
            {/* add middle content */}
            <div className="feed">
                <p>For you</p>
                <p>Following</p>
            </div>
            <div className="post-card"></div>
        </div>
        {/* right bar */}
        <div className='right-side'>
            {/* search button (text input element) */}
            {/* guilds to join */}
            <div className='guilds-to-join'>
                <ul>
                    <a><li>Guild</li></a>
                    <a><li>Guild</li></a>
                    <a><li>Guild</li></a>
                    <a><li>Guild</li></a>
                    <a><li>Guild</li></a>
                </ul>
            </div>
        </div>
    </div>

</div>
    );
};

// export Home function
export default Home;