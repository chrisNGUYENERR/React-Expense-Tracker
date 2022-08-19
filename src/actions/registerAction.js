export const registerUser = (userInfo) => {
    return {
        type: 'REGISTER_USER',
        payload: userInfo
    }
}