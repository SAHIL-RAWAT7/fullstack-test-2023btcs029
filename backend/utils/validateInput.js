const validateInput = ({ name, email, message }) => {
  const errors = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (!message) errors.message = "Message is required";

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default validateInput;
