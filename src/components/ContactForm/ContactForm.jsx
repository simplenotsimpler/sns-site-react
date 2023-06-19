import Button from "../Button/Button.jsx";
import "./ContactForm.css";

//TODO: make form functional
//form is not functional yet & no validation. may need to adapt this depending on solution for submitting form, maybe EmailJS?
const ContactInput = ({ label, inputName, isRequired = false }) => {
  return (
    <div className="contactInputGroup">
      <label htmlFor={inputName} className="contactFormLabel">
        {label}
        {isRequired ? " *" : ""}
      </label>
      <input
        type="text"
        className="contactFormInput"
        id={inputName}
        name="inputName"
      />
    </div>
  );
};

const ContactTextArea = ({ label, textAreaName, isRequired = false }) => {
  return (
    <div className="contactInputGroup">
      <label htmlFor={textAreaName} className="contactFormLabel">
        {label}
        {isRequired ? " *" : ""}
      </label>
      <textarea
        name={textAreaName}
        id={textAreaName}
        className="contactFormTextArea"
      ></textarea>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
      <ContactInput label="Name" inputName="contactName" isRequired />
      <ContactInput label="Email" inputName="contactEmail" isRequired />
      <ContactInput label="Phone" inputName="contactPhone" />
      <ContactTextArea
        label="Message"
        textAreaName="contactMessage"
        isRequired
      />
      <Button>Submit</Button>
    </form>
  );
};

export default ContactForm;
