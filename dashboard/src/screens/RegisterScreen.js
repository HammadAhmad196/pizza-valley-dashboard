import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions'
import Success from '../components/Success';
import Error from '../components/Error';
import Loading from '../components/Loading'

export default function Registerscreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate
    const dispatch = useDispatch()
    function register() {
        if (password != cpassword) {
            alert('Password not matched')
        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && (<Loading />)}
                    {success && (<Success success='User Register Successfully'/>)}
                    {error && (<Error error='Email already registered' />)}

                    <h3 style={{ fontSize: "30px" }} className="m-2" className="">Register</h3>
                    <div>
                        <input
                            required
                            type="text"
                            placeholder="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <input
                            required
                            type="email"
                            placeholder="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <input
                            required
                            type="password"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <input
                            required
                            type="password"
                            placeholder="confirm password"
                            className="form-control"
                            value={cpassword}
                            onChange={(e) => { setCPassword(e.target.value) }}
                        />
                        <button className="btn mt-3  mb-3" onClick={register}>Register</button>
                        <br />
                        <a style={{ color: 'black' }} href="/login">Click Here To Login</a>
                    </div>

                </div>
            </div>
        </div>
    )
}