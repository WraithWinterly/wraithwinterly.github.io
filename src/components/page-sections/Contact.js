import React, { useState, useId, useRef } from 'react';

import LoadingIcon from '../LoadingIcon';

import './Contact.css';

function Contact() {
  const id = useId();
  const form = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <div className='Contact-form-submit-loading-icon'>
        <LoadingIcon text={'Submitting Form...\nPlease wait as this may take several seconds.'} ignoreUser={true} />
      </div>

      <div className={isSubmitting ? 'Contact-form-container Contact-form-container-submit' : 'Contact-form-container'} ref={form} onSubmit={() => setIsSubmitting(true)}>
        <form action="https://formsubmit.co/3d30beffaa0e7d3a72a2dfd68a47cbcd" method='POST' className='Contact-form'>
          <div className='Contact-form-boxes'>
            <div className='Contact-container-left'>
              {/* Honey~Pot */}
              <input type='text' name='_honey' style={{ opacity: '0', zIndex: '0', width: '0', height: '0', position: 'absolute' }} />
              {/* Disable Catcha */}
              <input type='hidden' name='_captcha' value='false' />
              <label htmlFor={`${id}-name`}>Full Name*</label>
              <input type='fullname' name='name' id={`${id}-name`} required></input>
              <label htmlFor={`${id}-email`}>Email*</label>
              <input type='email' name='email' id={`${id}-email`} required></input>
              <label htmlFor={`${id}-company`}>Company</label>
              <input type='company' name='company' id={`${id}-company`}></input>
            </div>
            <div className='Contact-container-right'>
              <label htmlFor={`${id}-text`}>Message Content*</label>
              <textarea type='text' name='text' id={`${id}-text`} required></textarea>
            </div>
          </div>
          <button className='button button-large' type='submit'>Submit Form</button>
        </form>
      </div>
    </>

  );
}

export default Contact;