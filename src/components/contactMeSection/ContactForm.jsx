import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; 

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3ra8ob",   // Ton nouveau Service ID
        "template_xd0ft66",  // Ton nouveau Template ID
        form.current, 
        {
          publicKey: "JUBeoamG4zFvx2cBm", // Ta Public Key
        }
      )
      .then(
        () => {
          setStatusMessage("Message Sent Successfully!");
          setName("");
          setEmail("");
          setMessage("");
          e.target.reset(); // Réinitialise le formulaire
          // Efface le message de succès après 5 secondes
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full">
      {/* Affichage du message de confirmation ou d'erreur */}
      {statusMessage && (
        <p className={`mb-4 font-bold ${statusMessage.includes("Successfully") ? "text-cyan" : "text-orange"}`}>
          {statusMessage}
        </p>
      )}
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name" // {{from_name}} dans ton template EmailJS
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-white outline-none border border-transparent focus:border-cyan transition-all"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email" // {{from_email}} dans ton template EmailJS
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-4 text-white outline-none border border-transparent focus:border-cyan transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message" // {{message}} dans ton template EmailJS
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