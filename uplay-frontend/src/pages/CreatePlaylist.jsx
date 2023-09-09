import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Select, Button } from 'antd';

const API_URL = 'http://localhost:5005';

const { Option } = Select;

const CreatePlaylist = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [selectedTrack, setSelectedTrack] = useState(''); // Change to a single selected track
  const [tracks, setTracks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/track`)
      .then((response) => {
        setTracks(response.data.tracks);
      })
      .catch((err) => {
        console.error('Error fetching tracks:', err);
      });
  }, []);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);
    formData.append('name', name);
    formData.append('trackId', selectedTrack); // Use 'trackId' instead of 'trackIds'

    axios
      .post(`${API_URL}/api/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        toast.success('Playlist created successfully.');
        navigate('/');
      })
      .catch((err) => {
        toast.error('Error creating playlist. Please try again.');
        console.error('Error creating playlist:', err);
      });
  };

  return (
    <div>
      <h2>Create Playlist</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Select Track</label>
          <Select
            name="trackId"
            value={selectedTrack}
            onChange={(value) => setSelectedTrack(value)} // Update the selected track
            required
          >
            <Option value="">Select a track</Option>
            {tracks.map((track) => (
              <Option key={track._id} value={track._id}>
                {track.name} by {track.artist}
              </Option>
            ))}
          </Select>
        </div>

        <button type="submit">Create Playlist</button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const API_URL = 'http://localhost:5005';

// const CreatePlaylist = () => {
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);
//   const [name, setName] = useState('');
//   const [selectedTracks, setSelectedTracks] = useState([]);
//   const [tracks, setTracks] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/api/track`)
//       .then((response) => {
//         setTracks(response.data.tracks);
//       })
//       .catch((err) => {
//         console.error('Error fetching tracks:', err);
//       });
//   }, []);

//   const toggleTrackSelection = (trackId) => {
//     if (selectedTracks.includes(trackId)) {
//       setSelectedTracks(selectedTracks.filter((id) => id !== trackId));
//     } else {
//       setSelectedTracks([...selectedTracks, trackId]);
//     }
//   };

//   const handleImageUpload = (e) => {
//     const selectedImage = e.target.files[0];
//     setImage(selectedImage);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('description', description);
//     formData.append('image', image);
//     formData.append('name', name);
//     formData.append('trackIds', JSON.stringify(selectedTracks));

//     axios.post(`${API_URL}/api/create`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       })
//       .then((response) => {
//         toast.success('Playlist created successfully.');
//         navigate('/');
//       })
//       .catch((err) => {
//         toast.error('Error creating playlist. Please try again.');
//         console.error('Error creating playlist:', err);
//       });
//   };

//   return (
//     <div>
//       <h2>Create Playlist</h2>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Description:</label>
//           <input
//             type="text"
//             name="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleImageUpload}
//           />
//         </div>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
        
//         <div>
//           <h3>Select Tracks:</h3>
//           <ul>
//             {tracks.map((track) => (
//               <li
//                 key={track._id}
//                 onClick={() => toggleTrackSelection(track._id)}
//                 style={{ cursor: 'pointer' }}
//               >
//                 {selectedTracks.includes(track._id) ? '✔️ ' : '◻️ '}
//                 {track.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <button type="submit">Create Playlist</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePlaylist;

















