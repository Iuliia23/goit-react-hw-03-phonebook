import PropType from 'prop-types';
import { List, ListItem, ContactName, ContactNumber, DeleteButton } from './ContactList.styled'

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{number}</ContactNumber>
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
      </ListItem>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      number: PropType.string.isRequired,
    })
  ),
  onDeleteContact: PropType.func.isRequired,
};