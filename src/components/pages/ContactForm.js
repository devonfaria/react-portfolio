import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  textarea: {
    height: '10rem'
  },
  pageTitle: {
    fontSize: '42px',
    textAlign: 'center'
  }
};

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
    <div className="container justify-content-around mt-5 mb-5">
      <div className='card contact-form shadow p-4 mb-5 rounded'>
        <form className="form mt-4">
          <h3 style={styles.pageTitle}>Contact Me</h3>
          <div class="form-group mb-3">
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
            <textarea
              className='messageInput form-control'
              style={styles.textarea}
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
    </div>
  );
}

export default ContactForm;