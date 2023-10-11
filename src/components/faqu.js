import React, { useState } from "react";
import "./faq-styles.css";
import FAQ from "./faqq";

 function Faqu() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is price of buffet?",
      answer:
        "It is 150 for buffet lunch and buffet dinner and 320 for barbeque on any day.",
      open: true
    },
    {
      question: "Is there any prebooking?",
      answer: "On weekdays Prebooking not needed . Prebooking won't be necessary as you will get the table immediately.",
      open: false
    },
    {
      question:
        "Is SIGDI veg or non-veg Restaurent?",
      answer: "Sigdi is a pure veg restaurant.",
      open: false
    },
    {
      question:
        "Is Online Ordering available?",
      answer: "Yes , Sigdi has been listed on Zomato and Swiggy so anyone can order from the resto online.",
      open: false
    },
    {
      question:
        "What are opening and closing hours of Sigdi on each day?",
      answer: "Opening Hour is 12 pm Noon and Closing hours are 11 pm throughout the week.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
export default Faqu;