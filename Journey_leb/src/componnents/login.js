import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in...', { username, password });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-danger w-full p-2"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          Don't have an account yet? 
          <a href="/register" className="text-blue-500 ml-1">
            Click here to register.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
