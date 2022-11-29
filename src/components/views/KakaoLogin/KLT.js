import { REST_API_KEY, REDIRECT_URI } from '../../Config';
import React from 'react';

function KLT() {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    }
return (
    <div>
        <button onClick={handleLogin}>
            카카오
        </button>
    </div>
)
}

export default KLT;