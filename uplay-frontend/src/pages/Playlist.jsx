import { Link } from "react-router-dom";
import PlaylistDetails from "./PlaylistDetails";

function Playlist (){
    return (
        <>
       <Link to="/create/playlist">Create a New Playlist</Link>
       <PlaylistDetails/>
        </>
    )
}
export default Playlist;