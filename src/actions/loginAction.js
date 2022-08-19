export const loginUser = (userInfo) => {
    return {
        type: 'LOGIN_USER',
        payload: userInfo
    }
}