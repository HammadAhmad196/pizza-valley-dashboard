import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPizza, getPizzaById } from '../actions/pizzaActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function EditPizza({ match }) {
    const dispatch = useDispatch()
    const [name, setname] = useState("")
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState("")
    const [category, setcategory] = useState("")

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)

    const { pizza, error, loading } = getpizzabyidstate

    const editpizzastate = useSelector(state => state.editPizzaReducer)
    const { editsuccess, editerror, editloading } = editpizzastate


    useEffect(() => {

        if (pizza) {
            if (pizza._id == match.params.pizzaid) {
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
            }
            else {
                dispatch(getPizzaById(match.params.pizzaid))
            }
        }
        else {
            dispatch(getPizzaById(match.params.pizzaid))
        }
    }, [pizza, dispatch])

    function formHandler(e) {
        e.preventDefault()
        const editedpizza = {
            _id: match.params.pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }
        dispatch(editPizza(editedpizza))
    }

    return (
        <div>
            <div className="text-start shadow-lg p-3 mb-5 bg-white rounded">
                <h2 style={{fontSize: '22px'}}>Edit Pizza</h2>
                {loading && (<Loading />)}
                {error && (<Error error='Something went wrong' />)}
                {editsuccess && (<Success success='Pizza detail edited successfully' />)}
                {editloading && (<Loading />)}

                <form onSubmit={formHandler}>
                    <input
                        className="form-control"
                        type='text'
                        placeholder="name"
                        value={name}
                        onChange={(e) => {
                            setname(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type='text'
                        placeholder="small varient price"
                        value={smallprice}
                        onChange={(e) => {
                            setsmallprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type='text'
                        placeholder="medium varient price"
                        value={mediumprice}
                        onChange={(e) => {
                            setmediumprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type='text'
                        placeholder="large varient price"
                        value={largeprice}
                        onChange={(e) => {
                            setlargeprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type='text'
                        placeholder="category"
                        value={category}
                        onChange={(e) => { setcategory(e.target.value); }}
                    />
                    <input
                        className="form-control"
                        type='text'
                        placeholder="description"
                        value={description}
                        onChange={(e) => {
                            setdescription(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type='text'
                        placeholder="image"
                        value={image}
                        onChange={(e) => {
                            setimage(e.target.value);
                        }}
                    />
                    <button className="btn mt-3" type="submit">Edit Pizza</button>
                </form>
            </div>
        </div>
    )
}
