import React, { useState, useEffect } from 'react';
import MusicTable from './Components/Music_Table/MusicTable';
import NavBar from './Components/Nav_Bar/NavBar';
import SearchBar from './Components/Search_Bar/SearchBar';
import axios from 'axios';
import AddSongForm from './Components/Add_Song_Form/AddSongForm.jsx';

function App() {
    const [songs, setSongs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await axios.get('https://localhost:7246/api/Musics/');
            setSongs(response.data);
        };

        fetchSongs();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <h1>Music Library</h1>
            </header>
            <AddSongForm />
            <SearchBar onSearch={setSearchTerm} />
            <main>
                <MusicTable songs={songs} filter={searchTerm} />
            </main>
        </div>
    );
}

export default App;

