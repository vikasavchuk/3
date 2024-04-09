import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContacts }) => {
  const handleSubmit = (data, formActions) => {
    addContacts(data);
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label>
         Name
          <Field className={css.inpuForm} name="name" type="text" placeholder="Rosie Simpson" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label>
        Number
          <Field className={css.inpuForm} name="number" type="text" placeholder="406-75-06" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button className={css.buttoForm} type="submit">
        Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;