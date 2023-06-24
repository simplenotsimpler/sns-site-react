import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactInfo from "./ContactInfo/ContactInfo.jsx";
import "./Contact.css";

//data stuff
import { useQuery } from "@tanstack/react-query";
import { fetchBasics } from "../../fetchers/fetchBasics.js";

const Contact = () => {
  const {
    data: basics,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["basics"],
    queryFn: fetchBasics,
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading contact...</h1>;
  }
  return (
    <div className="contactContainer">
      <section className="contactContent">
        <h1 className="contactTitle">Let’s Connect !!!</h1>
        <p className="contactCTA">{basics.contactCTA}</p>
        <ContactInfo email={basics.email} profiles={basics.profiles} />
      </section>
      <section className="contactFormHolder">
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
