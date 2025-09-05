import React from 'react'
import Image from 'next/image'
import ToggleButton from '../general/ToggleButton'
const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="Logo" width={100} height={40} />
      <h1 className="text-gray-800 dark:text-gray-100">YourAppName</h1>
    </div>
    <div className="flex items-center space-x-4">
      <button className="text-gray-800 dark:text-gray-100">Featured</button>
      <button className="text-gray-800 dark:text-gray-100">How it works</button>
      <ToggleButton />
      <button className="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
      <button className="bg-green-600 text-white px-4 py-1 rounded">Signup</button>
    </div>
  </nav>
);


export default Navbar