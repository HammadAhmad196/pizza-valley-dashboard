import axios from 'axios';


export const getAllOrders=()=>async (dispatch , getState)=>{

    const currentUser = getState().loginUserReducer.currentUser
    dispatch({type: 'GET_ALLORDERS_REQUEST'})
 
    try{

        const response =await axios.get('/api/orders/getallorders') 
        console.log(response)
        dispatch({type: 'GET_ALLORDERS_SUCCESS', payload: response.data})

    } catch (error) {

        dispatch({type: 'GET_ALLORDERS_FAILED', payload: error})
    }

}


export const deliverOrder=(orderid)=>async dispatch=>{

    try {
        const response = await axios.post('/api/orders/deliverorder' , {orderid})
        console.log(response);
        alert('Order Delivered')
        const orders = await axios.get('/api/orders/getallorders')
        dispatch({type: 'GET_ALLORDERS_SUCCESS' , payload:orders.data})
    } catch (error) {
        console.log(error);
    }

}







export const deleteOrder=(orderid)=>async dispatch=>{


    try {
        const response= await axios.post('/api/orders/deleteorder', {orderid})
        alert('Order Deleted Successfully')
        console.log(response)
        window.location.reload()
    } catch (error) {
        alert("Something wen wrong")
        console.log(error)
    }

}