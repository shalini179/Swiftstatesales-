import React, { useRef } from 'react';
import * as emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownList from 'react-widgets/DropdownList';
import DatePicker from 'react-widgets/DatePicker';
import 'react-widgets/styles.css';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service', '', form.current, '')
      .then((result) => {
        console.log(result.text);
        window.alert("Email Send Succesfully")
      }, (error) => {
        console.log(error.text);
        window.alert("Email Send Unsuccesful")
      });
  };

  return (

    <><div className="col-lg-6 ps-5 ms-5 pt-2">
    </div><form ref={form} onSubmit={sendEmail} className="container mt-4">
        <div className="mb-3">
          <label htmlFor="user_name" className="form-label">Name</label>
          <input type="text" name="user_name" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="user_email" className="form-label">Email</label>
          <input type="email" name="user_email" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Select Date</label>
          <DatePicker
            placeholder="mm/dd/yy"
            className="form-control" />
        </div>

        <div className='text-center pb-5'>
        <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </form></>
  );
};

export default ContactForm;
