import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Box } from './Box';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const isContactInList = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isContactInList) {
      return alert(`${name} is already in contacts`);
    } else {
        const contact = {
          id: nanoid(),
          name,
          number,
        };
    
        this.setState(({ contacts }) => ({
          contacts: [...contacts, contact],
        }));
    };
  };

  handleFilterChange = e => {
    const { value } = e.currentTarget;

    this.setState({
      filter: value,
    });
  };

  filtersContactList = () => {
    const { contacts, filter } = this.state;
    const valueInLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(valueInLowerCase));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const { addContact, handleFilterChange, deleteContact } = this;
    const filteredContacts = this.filtersContactList();

    return (
      <Box textAlign='center'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactList contacts={filteredContacts} onBtnClick={deleteContact} />
      </Box>
    );   
  };
};

export default App;