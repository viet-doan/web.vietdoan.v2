import React from 'react';


function Form () {
  return (
    <div id="contact" className="column">
        <div className="heading-bar">
          <h5>Contact Me</h5>
        </div>
      <p>
        Feel free to get in touch. You can email me at: <a>vietdoan.vqd@gmail.com.</a>
        <br></br> Or use the contact form below.
      </p>

      <form id="contactForm">
        <div class="form-section">
          <input type="text" className="form-control" id="name" placeholder="Enter name..." />
        </div>
        <div className="form-section">
          <input type="email" className="form-control" id="email" placeholder="Enter email..." />
        </div>
        <div className="form-section">
          <textarea className="form-control" id="message" rows="5" placeholder="Enter message..."></textarea>
        </div>
        <div className="form-section">
          <button type="submit" className="btn-general">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
