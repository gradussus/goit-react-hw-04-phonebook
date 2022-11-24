import { useState } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const AddContactForm = styled.form`
  background-color: #b1cede;
  max-width: 450px;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
`;

export const ContactForm = ({addContact}) => {
  const [contactName, setContactName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  // state = {
  //   name: '',
  //   number: '',
  // };

  const handleChange = e => {
    const event = e.target;
    if (event.type === 'text') {
      setContactName(event.value );
    }
    if (event.type === 'tel') {
      setContactNumber(event.value );
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(contactName, contactNumber)
    setContactName('')
    setContactNumber('');
  };

    return (
      <AddContactForm onSubmit={onSubmit} autoComplete="off">
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            value={contactName}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            value={contactNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </AddContactForm>
    );
  }
