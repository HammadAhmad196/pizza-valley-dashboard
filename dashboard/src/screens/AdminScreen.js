import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch , Link } from 'react-router-dom';
import AddPizza from './AddPizzas';
import EditPizza from './EditPizza';
import OrdersList from './OrdersList';
import PizzasList from './PizzasList';
import UsersList from './UsersList';

export default function AdminScreen() {
    const userstate = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    // useEffect(() => {

    //     if (!currentUser.isAdmin) {
    //         window.location.href = '/'
    //     }
    // }, [])

    return (
        <div>
            <div className='row justify-content-center p-3'>
                <div className="col-md-10">
                    <h2 style={{ fontSize: "28px" }}>Admin Screen</h2>
                    <ul className="adminfunctions">
                        <li>
                            <Link to={'/admin/userslist'}>Users List</Link>
                            <Link to={'/admin/pizzaslist'}>Pizzas List</Link>
                            <Link to={'/admin/addpizza'}>Add New Pizza</Link>
                            <Link to={'/admin/orderslist'}>Orders List</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path='/' component={UsersList} exact />
                        <Route path='/admin/userslist' component={UsersList} exact />
                        <Route path='/admin/pizzaslist' component={PizzasList} exact />
                        <Route path='/admin/addpizza' component={AddPizza} exact />
                        <Route path='/admin/orderslist' component={OrdersList} exact />
                        <Route path='/admin/editpizza/:pizzaid' component={EditPizza} exact />
                    </Switch>
                </div>
            </div>
        </div>
    )
}