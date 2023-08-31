import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './Components/Music_Table/MusicTable';


function App() {

    const [songs, setSongs] = useState([]);

  useEffect(() => {

      getAllSongs();
      console.log('hello world');
   
  }, []);


  async function getAllSongs(){

    const response = await axios.get('https://localhost:7246/api/Musics');
    console.log(response.data);
    setSongs(response.data)
    //debugger
  }

  return (
   <div>

    {/* <button onClick={() => getAllSongs()}>Get All Songs</button> */}

    <div className="App">
      <header className="App-header">
        <h1>Music Library</h1>
      </header>
      <main>
        <MusicTable />
      </main>
    </div>

   </div>
  );
}

export default App;
