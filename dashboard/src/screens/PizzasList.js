import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import Error from '../components/Error';
// import Filter from '../components/Filter';
import { deletePizza, getAllPizzas } from '../actions/pizzaActions';

export default function PizzasList() {

    const dispatch = useDispatch();
    const pizzasstate = useSelector(state => state.getAllPizzasReducer);
    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas())
    }, []);

    return (
        <div>
            <h2 style={{ fontSize: "28px" }}>Pizzas List</h2>
            {loading && (<Loading />)}
            {error && (<Error error='Something wen wrong' />)}

            <table className="table table-bordered table-responsive-sm">

                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map(pizza => {

                        return <tr>
                            <td>{pizza.name}</td>
                            <td>

                                Small :{pizza.prices[0]['small']}<br />
                                Medium :{pizza.prices[0]['medium']}<br />
                                Large :{pizza.prices[0]['large']}<br />

                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i className="fa fa-trash m-1" onClick={()=>{dispatch(deletePizza(pizza._id))}}></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}>
                                    <i className="fa fa-edit m-1"></i>
                                </Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
