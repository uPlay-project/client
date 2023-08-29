import axios from "axios";
import React, { useState } from "react";
import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_URL = "http://localhost:5005";

function Album() {
  // Initialize form data state
  const initForm = {
    total_tracks: 0,
    image: null, // Use null to represent no image selected initially
    title: "",
    release_date: "",
    genre: [],
    popularity: 0,
    artist: [],
    album_type: "",
    track: [],
  };

  // Set up state for form data and navigation
  const [formData, setFormData] = useState(initForm);
  const [uploadStatus, setUploadStatus] = useState("");

  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prevForm) => ({ ...prevForm, [inputName]: inputValue }));
  };

  // Function to handle file input changes
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData((prevForm) => ({ ...prevForm, image: file }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the file and other form data
    const formDataToSend = new FormData();
    formDataToSend.append("image", formData.image); // Append the file to the FormData

    // Append other form fields to the FormData
    Object.keys(formData).forEach((key) => {
      if (key !== "image") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      // Send a POST request to the API with FormData
      const response = await axios.post(`${API_URL}/api/album`, formDataToSend);
      console.log("Response", response);
      setUploadStatus("Album Succefully Uploaded");
      toast.success("Album Succefully Uploaded", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Error", error);
      setUploadStatus("An error occurred while uploading.");
      toast.success("An error occurred while uploading.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
      });
    }
  };

  return (
    <>
      <div>
        <h3>Add Album</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Total_Track</label>
            <Input
              type="number"
              name="total_tracks"
              value={formData.total_tracks}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Image</label>
            <Input
              type="file"
              name="image"
              accept="image/*" // Restrict file types to images
              onChange={handleFileChange}
              required
            />
          </div>

          <div>
            <label>Release Date</label>
            <Input
              type="text"
              name="release_date"
              value={formData.release_date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Genre</label>
            <Input
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Popularity</label>
            <Input
              type="number"
              name="popularity"
              value={formData.popularity}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>artist</label>
            <Input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Album Type</label>
            <Input
              type="text"
              name="album_type"
              value={formData.album_type}
              onChange={handleChange}
              required
            />
          </div>

          {/* Other form fields for total_tracks, release_date, genre, popularity, artist, and album_type */}

          <div>
            <button type="submit">Add Album</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Album;
