import React, { useState } from 'react';
import Section from '../components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: "Are your mehndi cones 100% natural?",
      answer: "Yes, our herbal cones are made from 100% natural henna leaves and essential oils. We ensure no harmful chemicals are added."
    },
    {
      question: "Do you ship internationally?",
      answer: "Absolutely. We are an export-oriented company and ship to over 50 countries globally, with specialized logistics for bulk orders."
    },
    {
      question: "What is the minimum order quantity (MOQ) for distributors?",
      answer: "The MOQ varies depending on the region and product. Please fill out the Contact Form or reach us on WhatsApp to discuss distribution terms."
    },
    {
      question: "Do you provide private label manufacturing?",
      answer: "Yes, we offer OEM and private label packaging services for brands looking to sell high-quality mehndi under their own name."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="faq" title="Frequently Asked Questions" background="bg-[var(--color-accent)]" padding="py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 bg-white rounded-xl shadow-sm border border-[var(--color-border)] overflow-hidden">
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="font-semibold text-lg text-[var(--color-primary)]">{faq.question}</span>
              <motion.span 
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="text-[var(--color-secondary)] ml-4 flex-shrink-0"
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 pt-0 text-[var(--color-text)] opacity-80 border-t border-[var(--color-border)] mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
