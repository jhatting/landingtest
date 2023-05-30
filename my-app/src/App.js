import React, { useState } from 'react';

const App = () => {
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional logic here, such as sending the data to a server
    console.log(`Location: ${location}, Email: ${email}`);
    setLocation('');
    setEmail('');
  };

  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
