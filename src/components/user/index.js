import { useEffect, useState } from 'react';
import useApiHooks from '../../optumInterview/services/fetchApiCustomHooks';

const User = () => {
    const [users, setUsers] = useState([]);
    const {data, error, loading, fetchApi} = useApiHooks();

    const getUsers = () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then(res => res.json()).then(data => {
            setUsers(data);
        });
    };

    const getAlbum = async () => {
        const url = 'https://jsonplaceholder.typicode.com/albums';
        const album = await fetch(url);
        const res = await album.json();
    };

    const callNinjaApi = async () => {
        const url = "https://catfact.ninja/fact";
        // const data = await fetch(url);
        // const ninja =  await data.json();
        // return ninja;
        fetchApi(url);
    }

   const  getNinja = async () => {
    const printdata = await callNinjaApi();
    console.log(printdata);
   }

    useEffect(() => {
        getUsers();
        getAlbum();
        getNinja()
    }, []);


    return(
        <div className='flex-3items'>
            {users && users.map((user) => <div key={user.id}>{user.name}</div>)}

            {loading && <p>Loading...</p>}
            {error && <p style={{color: 'red'}}>Error: {error}</p>}
            <ul>
                {data && <li>{data.fact}</li>}
            </ul>
        </div>
    )
}

export default User;

