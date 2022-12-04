import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList ';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: nanoid(10), name: 'Rosie Simpson', number: '459-12-56' },
        { id: nanoid(10), name: 'Hermione Kline', number: '443-89-12' },
        { id: nanoid(10), name: 'Eden Clements', number: '645-17-79' },
        { id: nanoid(10), name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const includeName = name => {
      return contacts.find(
        e => e.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );
    };
    const includeNumber = number => {
      return contacts.find(e => e.number === number);
    };

    const contact = {
      id: nanoid(10),
      name,
      number,
    };
    if (includeName(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    if (includeNumber(contact.number)) {
      return alert(`${contact.number} is already in contacts`);
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const deleteContact = e => {
    const id = e.currentTarget.id;

    setContacts(prevState => [...prevState.filter(el => el.id !== id)]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filtredContacts = () => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>

      {contacts.length !== 0 ? (
        <>
          <Filter value={filter} changeFilter={changeFilter} />
          <ContactList
            contacts={filtredContacts()}
            deleteCont={deleteContact}
          />
        </>
      ) : (
        <div>
          Your contacts are not here yet, but you can add contacts in the form
          above and save them in this app
        </div>
      )}
    </Container>
  );
};
