import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import styles from "./Question.module.sass";
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import TextInput from "../../../components/TextInput";
import TextArea from "../../../components/TextArea";
import { motion } from "framer-motion";


const Question = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    /*
    if (!isVerified) {
      toast.error('Please complete the captcha');
      return;
    }
    */

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      // Commented out EmailJS implementation
      /*
      if (process.env.REACT_APP_EMAILJS_SERVICE_ID && 
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
        
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
      } else {
      */
      
      // For development without EmailJS configured
      console.log('Form would be submitted with:', templateParams);
      toast.success('Message sent successfully! (Development mode)');
      setFormData({ name: '', email: '', message: '' });
      /*
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setIsVerified(false);
      */
      
      // }
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <motion.form 
          className={styles.form} 
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className={cn("h2", styles.title)} variants={itemVariants}>
            Get in touch
          </motion.h2>
          <div className={styles.fieldset}>
            <motion.div className={styles.fieldWrapper} variants={itemVariants}>
              <TextInput
                className={styles.field}
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className={styles.fieldWrapper} variants={itemVariants}>
              <TextInput
                className={styles.field}
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.div className={styles.fieldWrapper} variants={itemVariants}>
              <TextArea
                className={styles.field}
                label="Message"
                name="message"
                placeholder="Say something"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>
            {/* Commenting out ReCAPTCHA for local development */}
            
            <motion.div className={styles.field} variants={itemVariants}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptcha}
              />
            </motion.div>
           
          </div>
          <motion.div className={styles.btns} variants={itemVariants}>
            <button 
              className={cn(styles.button, {
                [styles.buttonLoading]: isSubmitting
              })}
              // disabled={!isVerified || isSubmitting}
              // Removed verification requirement for local testing
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className={styles.loadingSpinner}></span>
              ) : (
                "Send message"
              )}
            </button>
          </motion.div>
        </motion.form>
      </div>
      <div className={styles.backgroundElements}>
        <div className={styles.element1}></div>
        <div className={styles.element2}></div>
        <div className={styles.element3}></div>
      </div>
    </div>
  );
};

export default Question;