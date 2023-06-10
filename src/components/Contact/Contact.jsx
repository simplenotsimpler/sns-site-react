import "./Contact.css";

//may get the intro copy from db

const Contact = () => {
  return (
    <div className="contactContainer">
      <section className="contactContent">
        <h1 className="contactTitle">Let’s Connect !!!</h1>
        <p className="contactIntro">
          Do you need to launch a website, improve an existing website, or need
          an Office application to bridge the gap until a more permanent
          solution will be implemented? If I can be of any assistance, please do
          not hesitate to reach out.
        </p>
      </section>
      <section className="contactFormHolder">contact form</section>
    </div>
  );
};

export default Contact;
