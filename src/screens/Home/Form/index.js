import React, { useState } from "react";
import cn from "classnames";
import styles from "./Form.module.sass";
import { toast } from "react-toastify";

const GRAPHQL_ENDPOINT = "https://v1.exhert.com/graphql";

const createEarlyAccessMutation = `
  mutation CreateEarlyAccess($input: CreateEarlyAccessInput!) {
    createEarlyAccessSignup(input: $input) {
      id
      email
      country
    }
  }
`;

const Form = ({
  className,
  big,
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  loadingText = "Joining...",
  toastSuccessMessage = "Successfully joined the waitlist!",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: createEarlyAccessMutation,
          variables: {
            input: {
              email,
              country: "CM", // Default country code for Cameroon
            }
          }
        })
      });

      const result = await response.json();

      if (result.errors) {
        // Handle GraphQL errors
        const errorMessage = result.errors[0]?.message || "Failed to join waitlist";
        if (errorMessage.includes("Unique constraint")) {
          toast.warn("This email is already on the waitlist", { 
            className: styles["toast-warning"] 
          });
        } else {
          toast.error(errorMessage);
        }
      } else {
        // Success
        toast.success(toastSuccessMessage);
        setEmail(""); // Clear the form
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to join waitlist. Please try again.");
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
          placeholder={placeholder}
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
          {isSubmitting ? loadingText : buttonText}
        </button>
      </div>
    </form>
  );
};

export default Form;