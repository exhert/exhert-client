import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import { toast } from "react-toastify";
import { useTranslation } from "../../../utils/useTranslation";

const GRAPHQL_ENDPOINT = "https://v1.exhert.com/graphql";

const createEarlyAccessMutation = `
  mutation CreateEarlyAccess($input: CreateEarlyAccessInput!) {
    createEarlyAccessSignup(input: $input) {
      id
      email
      country
      referralCode
    }
  }
`;

const Form = ({
  className,
  big,
  placeholder,
  buttonText,
  loadingText,
  toastSuccessMessage,
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referralCode, setReferralCode] = useState(null);

  useEffect(() => {
    // Extract referral code from URL hash
    const hash = window.location.hash;
    const match = hash.match(/early-access=([^&]*)/);
    const code = match ? match[1] : null;
    //console.log("Early ref link", code);
    
    if (code) {
      setReferralCode(code);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the input object conditionally
      const input = {
        email,
        country: "CM" // Default country code for Cameroon
      };

      // Add referral code only if it exists
      if (referralCode) {
        input.referralCode = referralCode;
      }

      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: createEarlyAccessMutation,
          variables: { input }
        })
      });

      const result = await response.json();

      if (result.errors) {
        // Handle GraphQL errors
        const errorMessage = result.errors[0]?.message || t('joinWaitlistError');
        if (errorMessage.includes("Unique constraint")) {
          toast.warn(t('emailExists'), { 
            className: styles["toast-warning"] 
          });
        } else {
          toast.error(errorMessage);
        }
      } else {
        // Success
        toast.success(t('joinWaitlistSuccess'));
        setEmail(""); // Clear the form
      }
    } catch (error) {
      console.error(error);
      toast.error(t('joinWaitlistError'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className={cn(className, styles.form, {
        [styles.big]: big,
      })}
      onSubmit={handleSubmit}
    >
      <div className={styles.formContainer}>
        <input
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder || t('enterEmail')}
          type="email"
          name="email"
          required
          disabled={isSubmitting}
        />
        <button 
          className={cn("button", styles.btn)}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (loadingText || t('joining')) : (buttonText || t('joinWaitlistBtn'))}
        </button>
      </div>
      {referralCode && (
        <div className={styles.referralInfo}>
          Referral Code: {referralCode}
        </div>
      )}
    </form>
  );
};

export default Form;