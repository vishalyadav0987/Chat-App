import React from 'react'

const Register = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="bg-white p-8 rounded shadow-md w-1/3">
          <h2 className="text-3xl font-semibold mb-4">Register</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">full name</label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                placeholder="Enter your fullName"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg p-2"
                placeholder="Enter your confirm password"
              />
            </div>
            <div className="form-control text-black flex flex-row gap-4 mb-2">
              <label className="cursor-pointer label">
                <span className="label-text text-sm font-medium text-gray-700 mr-4">Male</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" name='gender' />
              </label>
              <label className="cursor-pointer label">
                <span className="label-text text-sm font-medium text-gray-700 mr-4">Female</span>
                <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" name='gender'/>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full flex justify-center bg-slate-500 hover:bg-slate-600 py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
            <span className="sm:text-sm">
              Already have a account?
              <a href="#" className='underline text-slate-600'>
                click here
              </a>
            </span>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
