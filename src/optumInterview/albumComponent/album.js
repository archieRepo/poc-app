import React, { useEffect } from 'react';
import { fetchApi } from '../services/apiServices';

const AlbumList = (props) => {
    /*
        What is differance between grid and flex-box and when to use flexbox and when to use grid.
        How many columns in desktop and in mobile in grid system.
        What is symantic tag and where it can be used and why it is used.

        What is web accessiblity. how to make sure for keyboard user dialog box is opened

        What is lazyloading where it is used in your project.
        What is memory leak. How to overcome it

        have you used profiler why it is used and how to fix any bug from profiler

        use typescript to setup react project and use custom hooks custom components.
        What is inbuilt hooks in react for state management. use of context for state managemment

        lazy loading and when it is used
        
        https://jsonplaceholder.typicode.com/users
        https://jsonplaceholder.typicode.com/comments
        https://jsonplaceholder.typicode.com/photos
        https://jsonplaceholder.typicode.com/albums
    */

    const [albums, setAlbums] = ([]);

    useEffect(() => {
        const getAlbumData = async () => {
            const albumRes = await fetchApi("https://jsonplaceholder.typicode.com/albums");
            setAlbums(albumRes);
        }
        getAlbumData();
        
    }, []);

    return (
        <div>
            {albums && albums.map()}
        </div>
    )
}