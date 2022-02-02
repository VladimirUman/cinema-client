import api from '../api'

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

function getLocalAccessToken() {
    let accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        return null;
    }

    const tokenData = parseJwt(accessToken);

    if (!tokenData) {
        return null;
    }

    if (Date.now() > tokenData.exp * 1000) {
        try {
            const response = api.post('/auth/refresh-tokens', {
                refreshToken: getLocalRefreshToken(),
            });

            accessToken = response.data.accessToken;
            localStorage.setItem('accessToken', accessToken);
        } catch (_) {
            return null;
        }
    }

    return accessToken;
}

function getLocalRefreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    return refreshToken;
}

export { getLocalAccessToken, getLocalRefreshToken }
