import React, { useState } from 'react';
import axios from 'axios';

const AddSongForm = () => {
    const [songData, setSongData] = useState({
        title: '',
        artist: '',
        album: '',
        releaseDate: '',
        genre: ''
    });

    const handleChange = (event) => {
        setSongData({
            ...songData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:7246/api/Musics', songData);
            if (response.status === 201) {
                alert('Song added successfully!');
                setSongData({
                    title: '',
                    artist: '',
                    album: '',
                    releaseDate: '',
                    genre: ''
                });
            }
        } catch (error) {
            alert('Error adding song!');
            console.log(error.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" value={songData.title} onChange={handleChange} required />
            <input type="text" name="artist" placeholder="Artist" value={songData.artist} onChange={handleChange} required />
            <input type="text" name="album" placeholder="Album" value={songData.album} onChange={handleChange} required />
            <input type="date" name="releaseDate" placeholder="Release Date" value={songData.releaseDate} onChange={handleChange} required />
            <input type="text" name="genre" placeholder="Genre" value={songData.genre} onChange={handleChange} required />
            <button type="submit">Add Song</button>
        </form>
    );
};

export default AddSongForm;
