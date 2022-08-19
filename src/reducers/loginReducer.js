const initialState = {
    name: '',
    password: ''
}

export const loginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'LOGIN_USER':
            return {...state, 
                email: payload.formEmail,
                password: payload.formPassword
            }
        default:
            return state
    } 
}