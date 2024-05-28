import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../Hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }
    return (
        <>
            <div className="flex items-center justify-center h-[100vh] overflow-hidden">
                <div className="bg-white p-8 rounded shadow-md w-1/3">
                    <h2 className="text-3xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2 placeholder:text-base"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2 placeholder:text-base"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="w-full flex justify-center bg-slate-500 hover:bg-slate-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                disabled={loading}
                            >
                                {loading ? (<span className=' loading loading-spinner'></span>) : "Login"}
                            </button>
                        </div>
                        <span className="sm:text-sm">Already have a account? <Link to={'/register'} className='underline text-slate-600'>click here</Link></span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
