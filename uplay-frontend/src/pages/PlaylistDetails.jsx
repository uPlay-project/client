import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const API_URL = 'http://localhost:5005';

const PlaylistDetails = () => {
  const { playlistId } = useParams();
  console.log("playlistId", playlistId)
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(null);

  const getPlaylist = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const response = await axios.get(`${API_URL}/api/playlist/${playlistId}`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });

      setPlaylist(response.data);
    } catch (error) { 
      setError(error.message || 'An error occurred while fetching the playlist.');
    }
  };

  useEffect(() => {
    getPlaylist(); 
  }, [playlistId]);

  if (error) {
    return <div>Error: {error.message || 'An error occurred while fetching the playlist.'}</div>;
  }

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Playlist Details</h2>
      <p>ID: {playlist._id}</p>
      <p>Name: {playlist.name}</p>
      <p>Description: {playlist.description}</p>

      <h3>Tracks</h3>
      {/* <ul>
        {playlist.track.map((track) => (
          <li key={track._id}>
            <p>Track Name: {track.name}</p>
            <p>Duration: {track.duration} seconds</p>
            <p>Artist: {track.artist}</p>
            <p>Track Number: {track.track_number}</p>
            <audio controls>
              <source src={track.filename} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default PlaylistDetails;
