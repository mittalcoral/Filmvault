import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function RegisterPage() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/RegisterPage', {username, email, password, confirmPassword})
        .then(result => {console.log(result)
           navigate('/LoginPage')
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ backgroundImage: `url(https://i.pinimg.com/736x/45/f5/6c/45f56c068a4ced9f7721711e1f6a6d30.jpg)` }}>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-whitefont-bold text-center mb-6">Register</h1>
                <form onSubmit={handleSubmit}>
                <div className="relative my-4">
                        <input onChange={(e) => setUsername(e.target.value)} type="text" className="block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus-text-white focus:border- peer" placeholder="" />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text- peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Username</label>

                    </div>
                    <div className="relative my-4">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus:ring-0 focus-text-white focus:border- peer" placeholder="" />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text- peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Your Email</label>

                    </div>
                    <div className="relative my-4">
                        <input  onChange={(e) => setPassword(e.target.value)} type="Password" className="block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus-ring-0 focus-text-white focus-border- peer" placeholder="" />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text- peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Your Password</label>
                    </div>
                    <div className="relative my-4">
                        <input  onChange={(e) => setConfirmPassword(e.target.value)} type="Password" className="block w-72 py-3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black focus:outline-none focus-ring-0 focus-text-white focus-border- peer" placeholder="" />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text- peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">Confirm Password</label>
                    </div>

                    <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black hover:bg-black hover:text-white py-2 transition-colors duration-300" type="submit">Register</button>
                    <div>
                        <span className="m-10">Already Create an Account? <Link className="text-black" to='/LoginPage'>Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage