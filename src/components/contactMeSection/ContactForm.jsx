import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Assurez-vous d'avoir fait : npm install @emailjs/browser

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fizxf9a",   // Votre Service ID
        "template_tf1qmz8",  // Votre Template ID
        form.current, 
        {
          publicKey: "JUBeoamG4zFvx2cBm", // ✅ Votre Public Key est intégrée ici
        }
      )
      .then(
        () => {
          setSuccess("Message Sent Successfully!");
          setName("");
          setEmail("");
          setMessage("");
          e.target.reset(); // Réinitialise le formulaire
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSuccess("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full">
      {/* Affichage du message de confirmation */}
      {success && <p className="text-cyan mb-4 font-bold">{success}</p>}
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name" // Doit correspondre à {{from_name}} dans votre template EmailJS
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-white outline-none border border-transparent focus:border-cyan transition-all"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email" // Doit correspondre à {{from_email}} dans votre template EmailJS
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-white outline-none border border-transparent focus:border-cyan transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message" // Doit correspondre à {{message}} dans votre template EmailJS
          rows="6"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-4 text-white outline-none border border-transparent focus:border-cyan transition-all"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-cyan hover:text-darkBrown transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;