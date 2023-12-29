import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignup = () => {
    // Check if passwords match
    if (password === confirmPassword) {
      // Add your signup logic here
      console.log('Signing up...', { name, username, email, phoneNumber, password });
    } else {
      // Passwords don't match, handle accordingly (show error message, etc.)
      setPasswordsMatch(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow-md"  style={{ marginTop: '105px' }}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={`w-full px-3 py-2 border rounded ${
                !passwordsMatch ? 'border-red-500' : ''
              }`}
              placeholder="Retype your password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordsMatch(true); // Reset validation when user types
              }}
            />
            {!passwordsMatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
            )}
          </div>
          <button
            type="button"
            className="btn btn-danger w-full p-2"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
