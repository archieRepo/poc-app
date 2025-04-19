import React from 'react';

interface user {
    username: string,
    id: number
}

const UserDetails = (props: user) => {
    const {username, id} = props;
    const handleAlbum = (id: number) => {
        
    }

    return (
        <div className='user-container'>
            <h4>{username}</h4>
            <button onClick={() => handleAlbum(id)}>{'Load my Album'}</button>
        </div>
    )
}

export default UserDetails;