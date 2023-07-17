import React, {useState} from "react";
import "./Faq.css";
import Image from './images/faq.png';

const Faq = () => {
  const faqData = [
    {
      question: "How beginner friendly are your drones?",
      answer: "Our drones are designed for all skill levels, with intuitive controls and features that make flying safe and enjoyable for beginners as well as experts.",
    },
    {
      question: "Can I use your drones for commercial purposes?",
      answer: "Absolutely! Our quadcopters and FPV drones are suited for a variety of commercial applications, from videography to inspections.",
    },
    {
      question: "How beginner friendly are your drones?",
      answer: "Our drones are designed for all skill levels, with intuitive controls and features that make flying safe and enjoyable for beginners as well as experts.",
    },
    {
        question: "How beginner friendly are your drones?",
        answer: "Our drones are designed for all skill levels, with intuitive controls and features that make flying safe and enjoyable for beginners as well as experts.",
    }
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  }
  return (
    <div className="Heading">
      <br/>
      <h2 className="Header">Frequently Asked Questions</h2>
      <br/>
      <div className="line">
        <div className="line1">
        <img src={Image} alt="line" />
        </div>
        <div className="part">
      {faqData.map((faq, index) => (
        <div key={index} className="QandA">
          <div className="ques" onClick={() => toggle(index)}>
          <h3 className="Q">{faq.question}</h3>
          <span className="plus">{selected === index ? '-':'+'}</span>
          </div>
          <div className={selected === index ? 'ans.show': 'ans'}>
          <div className="A">{faq.answer}</div>
          </div>
        </div>
      ))
      }
      </div>
      </div>
    </div>
  );
};

export default Faq;
