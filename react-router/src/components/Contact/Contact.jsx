import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <ul className="contact-list">
        <li>
          <a href="mailto:justin.m.anzalone@gmail.com">Email</a>
        </li>
        <li>
          <a href="sms:5137661466?body=Your%20portfolio%20caught%20my%20eye.%20I'd%20love%20to%20chat!">
            Text
          </a>
        </li>
        <li>
          <a href="tel:5137661466">Call</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
