import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { BulbOutlined, StarOutlined } from '@ant-design/icons'; // Import StarOutlined or any other valid icon




function MusicLibrary() {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <>
    <div>
      
      <Menu  theme={theme} mode="vertical" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/album/list">Album</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/playlist">Playlist</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/artist">Artist</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/songs">Songs</Link>
        </Menu.Item>
        <h4>Recently Added</h4>
      </Menu>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        {/* Theme select button */}
        <Button onClick={toggleTheme}>
          {theme === 'light' ? <BulbOutlined /> : <StarOutlined />}
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </Button>
      </div>
    </div>
    </>
  );
}

export default MusicLibrary;














// import {Link} from "react-router-dom"





// function MusicLibery (){
//     return(
//         <> 
//         {/* <Playlist/> */}
// <Link to="/album/list">Album</Link><br>
// </br>
// <Link to="/playlist"> PLaylist</Link><br>
// </br>
// <Link to="/artist">Artist</Link><br>
// </br>
// <Link to="/songs">Songs</Link>

//         </>
//     )
// }

// export default MusicLibery;




