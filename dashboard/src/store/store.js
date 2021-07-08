import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllPizzasReducer , addPizzaReducer, getPizzaByIdReducer, editPizzaReducer } from '../reducers/pizzaReducers';
import { getAllUsersReducer, loginUserReducer , registerUserReducer } from '../reducers/userReducer';
import { getAllOrdersReducer } from '../reducers/orderReducer';


const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
})

// const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null


const initialState = {

    loginUserReducer: {
        currentUser: currentUser
    }

}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store