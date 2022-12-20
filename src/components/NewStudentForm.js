import { useState } from "react";
import PropTypes from "prop-types";

const NewStudentForm = (props) => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });

  const onNameChange = (event) => {
    setFormFields({
      // spread syntax clones the original state here:
      ...formFields,
      // listing the new value afterward will overwrite the cloned value
      name: event.target.value,
    });
  };

  const onEmailChange = (event) => {
    setFormFields({
      ...formFields,
      // same value expression as onNameChange but refers
      // to a separate event handler registerd on a different
      // <input> element
      email: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    // prevents the unwanted default behavior of HTML forms
    // (where our web app reloads every time we submit a form)
    event.preventDefault();

    props.addStudentCallback({
      // creating the newStudent object literal
      nameData: formFields.name,
      emailData: formFields.email,
    });

    setFormFields({
      name: "",
      email: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input
          name="fullName"
          value={formFields.name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" value={formFields.email} onChange={onEmailChange} />
      </div>
      <input type="submit" value="Add Student" />
    </form>
  );
};

NewStudentForm.propTypes = {
  addStudentCallback: PropTypes.func.isRequired,
};

export default NewStudentForm;
