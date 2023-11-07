import React from 'react';
import './MusicTable.css';

const MusicTable = ({ songs, filter }) => {
    const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(filter.toLowerCase()));

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {filteredSongs.map((song) => (
                    <tr key={song.id}>
                        <td>{song.id}</td>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.releaseDate}</td>
                        <td>{song.genre}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MusicTable;
