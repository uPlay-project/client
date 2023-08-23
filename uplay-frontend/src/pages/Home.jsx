import React, {useContext} from 'react';
import { ThemeContext } from "../context/theme.context";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
      <div className={`home-content ${theme}`}>
        <h1>Welcome to uPlay!</h1>
        <h3>Play your fav songs, build your playlist, and share with your friends!</h3>
      </div>
  );
};

export default Home;