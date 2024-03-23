export default function Authorize() {
    const CLIENT_ID = '4bcfd208f6d14a0a88e4171c6ab85767';
    const stateKey = 'spotify_auth_state';
    const redirect_uri = 'http://localhost:3000/';
    function generateRandomString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = length;
        for ( let i = 0; i < characters.length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);
    const scope = 'playlist-modify-public playlist-modify-private';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(CLIENT_ID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    window.location.href = url;
    
} 