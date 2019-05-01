// comonent for displaying user profile

import React from 'react';

const UserProfile = props => {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.address}</p>
            <p>{props.email}</p>
            <p>{props.username}</p>
        </>
    )
}

export default UserProfile;