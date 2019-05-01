// dumb component for displaying a flight
import React from 'react';

const Flight = props => {
    return (
        <h2>From : {props.origin} to {props.destination}</h2>
    )
}

export default Flight;