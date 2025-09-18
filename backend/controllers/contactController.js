import Contact from "../models/Contact.js";
import validateInput from "../utils/validateInput.js";
import sendThankYouEmail from "../utils/mailer.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const { isValid, errors } = validateInput({ name, email, message });
    if (!isValid) return res.status(400).json({ success: false, errors });

    const contact = await Contact.create({ name, email, phone, message });

    await sendThankYouEmail(email, name);

    return res.status(201).json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
