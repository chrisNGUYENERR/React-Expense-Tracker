const initialState = {
    name: '',
    email: '',
    password: ''
}


export const registerReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'REGISTER_USER':
            return {...state, 
                name: payload.formName,
                email: payload.formEmail,
                password: payload.formPassword
            }
        default:
            return state
    } 
}