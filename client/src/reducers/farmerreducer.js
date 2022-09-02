export const RegisterUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'User_Register_Request': return {
            ...state,
            loading: true
        }

        case 'User_Register_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'User_Register_Failed': return {
            ...state,
            loading: false,
            error: true ,
            
        }


        default: return state



    }
}




export const LoginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'User_Login_Request': return {
            ...state,
            loading: true
        }

        case 'User_Login_Success': return {
            ...state,
            loading: false,
            success: true
        }

        case 'User_Login_Failed': return {
            ...state,
            loading: false,
            error: 'Invalid Credentials'
        }

        case 'User_LogOut': return {
            ...state
        }


        default: return state



    }
}

