import axios from 'axios';

export const getAllOrdersReducer = (state = {orders : []}, action) => {

    switch (action.type) 
    {
        case 'GET_ALLORDERS_REQUEST': return{
            loading : true,
            ...state
        }  
        case 'GET_ALLORDERS_SUCCESS': return{
            loading : false,
            orders: action.payload
        }  
        case 'GET_ALLORDERS_FAILED': return{
            error: action.payload,
            loading : false

        }  
        default: return state
    }

}