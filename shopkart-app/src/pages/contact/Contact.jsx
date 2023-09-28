import './contact.css';
import backimg from '../../assets/img/backimg.png';
import getintouch from '../../assets/img/getintouch.png';
function Contact() {
  return (
    <div className="Contacts">
      <div className="contact-container">
        <div className="contact-left">
          <span>Newslleter</span>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            <div className="contact-input-div">
              <input type="text" placeholder="NAME" />
              <span></span>
            </div>
            <div className="contact-input-div">
              <input type="text" placeholder="EMAIL" />
              <span></span>
            </div>
            <div className="contact-input-div">
              <input type="text" placeholder="MESSAGE" />
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <img src={getintouch} alt="GetinTouch" className="touchimg" />
      <div className="send">
        <div className="send-btn">SEND</div>
      </div>
    </div>
  );
}

export default Contact;
