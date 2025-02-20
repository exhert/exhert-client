import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Question.module.sass";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";

const Question = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVerified, setIsVerified] = useState(false);
  const recaptchaRef = useRef();

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleRecaptcha = (value) => {
    setIsVerified(!!value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isVerified) {
      toast.error('Please complete the captcha');
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        recaptchaRef.current.reset();
        setIsVerified(false);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className={cn("section-bg section-mb0", styles.section)}>
      <div className={cn("container", styles.container)}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={cn("h2", styles.title)}>Get in touch</h2>
          <div className={styles.fieldset}>
            <TextInput
              className={styles.field}
              label="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextInput
              className={styles.field}
              label="Email address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextArea
              className={styles.field}
              label="message"
              name="message"
              placeholder="Say something"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <div className={styles.field}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptcha}
              />
            </div>
          </div>
          <div className={styles.btns}>
            <button 
              className={cn("button-small", styles.button)}
              disabled={!isVerified}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question;