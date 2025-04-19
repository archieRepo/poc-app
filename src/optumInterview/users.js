import React, { useEffect, useState } from 'react';
import { fetchApi } from './services/apiServices';
import UserDetails from './user';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUserslist = async () => {
            const usersRes = await fetchApi("https://jsonplaceholder.typicode.com/users");
            setUsers(usersRes);
        }
        getUserslist();
        
    }, []);

    return (
        <div className='users-container'>
            {users && users.map((user) => <UserDetails username={user.username} key={user.id} />)}
        </div>
    )
}

export default UserList;