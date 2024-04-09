import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ user, deleteContact }) => {
  return (
    <ul className={css.listUl}>
      {user.map((contact) => (
        <li className={css.listLi} key={contact.id}>
          <Contact data={contact} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;