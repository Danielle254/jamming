import React from 'react';
import './SpotifyLogin.css';

export default function SpotifyLogin(props) {
    return(
        <div className="login">
            <h2>Step 1: Login to Spotify</h2>
            <button
                type="button" 
                className="login--button"
                onClick={props.login}>
                Login
            </button>
        </div>
    )
}