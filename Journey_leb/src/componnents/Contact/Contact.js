import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-white p-8 rounded shadow-md"  style={{ marginTop: '105px' }}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
             Description
            </label>
            <input
              type="description"
              id="description"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <textarea
            className="form-control w-full p-2"
            placeholder="Type your message..."
            rows="4"
             />
            <button type="submit" className="btn btn-danger w-full p-2 mt-2">
              Send message!
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
