import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function ContactForm() {
  // Setters and Getters
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Capturing input fields
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue)
    }
  };

  // Submit button
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!name || !email || !message) {
      alert('Please fill out the form completely.');
      return;
    };

    // Clearing input fields
    setName('');
    setEmail('');
    setMessage('');

    // Returning entered data to the user
    alert(`Input received: 
    Name: ${name}, 
    Email: ${email}, 
    Message: "${message}".`);
  };


  return (
    <div className="container mt-5 mb-5">
      <h3>Contact Me</h3>
      <form className="form mt-4">
        <div class="form-group mb-3">
          <label for="nameInput">Name:</label>
          <input
            className='nameInput form-control'
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="emailInput">Email:</label>
          <input
            className='emailInput form-control'
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-4">
          <label for="messageInput">Message:</label>
          <textarea
            className='messageInput form-control'
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button type="button" className='btn btn-primary' onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;