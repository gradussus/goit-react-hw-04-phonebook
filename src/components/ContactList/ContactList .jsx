import PropTypes from 'prop-types';
import { Item, List, DeleteBtn } from './ContactList .styled';

export const ContactList = ({ contacts, deleteCont }) => {
  return (
    <List>
      {contacts.map(cont => (
        <Item key={cont.id}>
          <span>{cont.name}</span>
          <span>{cont.number}</span>
          <DeleteBtn id={cont.id} onClick={deleteCont}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
