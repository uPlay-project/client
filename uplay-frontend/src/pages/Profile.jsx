import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import ProfileImage from "./ProfileImage";


function Profile (){
    const { isLoggedIn, user, logOutUser, setUser } = useContext(AuthContext);
    return (
        <>
         {isLoggedIn > 0 && (
        <div>
        <ProfileImage user={user} setUser={setUser} />
   <p>{user.country}</p>
   <p>{user.state}</p>

   <button onClick={logOutUser}>Logout</button>
        </div>
         )}
         {!isLoggedIn && (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </>
      )}
        </>
    )
}

export default Profile;