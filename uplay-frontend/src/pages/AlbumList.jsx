import { useState, useEffect } from "react";
import axios  from "axios";

const API_URL = "http://localhost:5005";

function AlbumList (){
    const [albums, setAlbums]= useState([]);
    const [isLoading, setIsloading]= useState(false);



  
const getAlbum = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/album`);
        console.log("what innit",response.data.getAlbumDb
        )
        if(response.data) {
            setAlbums(response.data.getAlbumDb
                )
            console.log(typeof albums)
        }
        setIsloading(true)

    }catch(error){
        console.log("Error", error);

    }
};

useEffect(()=>{
    getAlbum()
}, []);


if(isLoading){
    <div>Isloading.....</div>
}

    return (
        <>
        <div>
        <h4>Album List</h4>
        {albums.map((album)=> (
           
            <div key={album.id}>
              
                <img src={album.image} alt="" height={150}/>
                <h1>{album.title}</h1>
                <ul>
                    <li>{album.total_tracks}</li>
                    <li>{album.release_date}</li>
                    <li>{album.genre}</li>
                    <li>{album.popularity}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_type}</li>
                    <li>{album.track}</li>
                </ul>

            </div>
        ))}
        </div>
        </>
    )
}

export default AlbumList;