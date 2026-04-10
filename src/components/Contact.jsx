import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import ContactDropdown from './ContactDropdown';

const Contact = ({ onHireMeClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="contact" className="py-32 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-primary font-mono mb-4 text-sm md:text-base">06. What's Next?</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>

          
          <p className="text-gray-400 text-lg mb-12">
            Although I'm  currently looking for any new opportunities, my inbox is always open. and you can contact me on my email id and whatsapp number
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactDropdown 
              label="Say Hello"
              position="top"
              className="w-full sm:w-auto px-10 py-5 border border-primary text-primary hover:bg-primary/10 transition-all rounded-md font-medium font-mono text-sm tracking-wider cursor-pointer text-center"
            />
            <button 
              onClick={onHireMeClick}
              className="w-full sm:w-auto px-10 py-5 bg-primary text-white hover:bg-orange-600 transition-all rounded-md font-medium font-mono text-sm tracking-wider cursor-pointer text-center shadow-lg shadow-primary/30"
            >
              Hire Me
            </button>
          </div>
        </motion.div>



        <motion.div 
          className="mt-32 border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-sm font-mono text-gray-500 hover:text-primary transition-colors cursor-pointer inline-block">
            Designed & Built by Mayank Rajput
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
