import { useState } from "react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What destinations do you offer?",
      answer:
        "We offer a variety of domestic tours across Bangladesh, including popular destinations such as Cox's Bazar, Sundarbans, and Sylhet.",
    },
    {
      question: "How can I book a tour with Travel Desh?",
      answer:
        "Simply visit our website, select your preferred tour package, and follow the easy booking process to secure your spot.",
    },
    {
      question: "Can I customize my tour?",
      answer:
        "Yes, we offer customized tour packages tailored to your preferences. You can choose destinations, dates, and activities based on your interests.",
    },
    {
      question: "How do I cancel my booking?",
      answer:
        "You can cancel your booking by contacting our customer support team. Cancellation policies may apply depending on the tour package.",
    },
  ];

  return (
    <div className="flex justify-center mx-5 md:mx-0">
 <div className="join join-vertical bg-base-100 max-w-[800px] mx-auto justify-center shadow-lg">
    <p className="text-2xl py-2 text-center">FAQs</p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`collapse collapse-arrow join-item border border-base-300 ${
            openIndex === index ? "collapse-open" : ""
          }`}
        >
          <div
            className="collapse-title font-semibold cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            {faq.question}
          </div>
          <div className="collapse-content text-sm">{faq.answer}</div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default FAQAccordion;
