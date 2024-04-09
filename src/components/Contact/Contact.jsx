import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { name, number, id }, deleteContact }) => {
  return (
    <div className={css.contactInfo}>
      <div>
        <p>
          <IoPersonSharp className={css.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.contactDelete} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;