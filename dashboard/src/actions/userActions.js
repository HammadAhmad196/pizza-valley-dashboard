import axios from 'axios';

export const registerUser = (user) => async dispatch => {

    dispatch({ type: 'USER_REGISTER-REQUEST' })

    try {
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({ type: 'USER_REGISTER-SUCCESS' })
    } catch (error) {
        dispatch({ type: 'USER_REGISTER-FAILED', payload: error })

    }

}

export const loginUser = (user) => async dispatch => {

    dispatch({ type: 'USER_LOGIN-REQUEST' })

    try {
        const response = await axios.post('/api/users/login', user)
        console.log(response)
        dispatch({ type: 'USER_LOGIN-SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({ type: 'USER_LOGIN-FAILED', payload: error })

    }

}

export const logoutUser = () => dispatch => {

    localStorage.removeItem('currentUser')
    window.location.href = '/login'

}

export const getAllUsers = () => async dispatch => {

    dispatch({ type: 'GET_USERS_REQUEST' })

    try {

        const response = await axios.get('/api/users/getallusers')
        console.log(response)
        dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data })
    } catch (error) {

        dispatch({ type: 'GET_USERS_FAILED', payload: error })
    }

}


export const deleteUser=(userid)=>async dispatch=>{
    
    try {
        const response= await axios.post('/api/users/deleteuser', {userid})
        alert('User Deleted Successfully')
        console.log(response)
        window.location.reload()
    } catch (error) {
        alert("Something wen wrong")
        console.log(error)
    }

}