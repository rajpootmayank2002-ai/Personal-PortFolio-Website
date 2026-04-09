import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactDropdown = ({ label, className, position = 'top' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className={className}
      >
        {label}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay to handle clicking outside */}
            <div 
              className="fixed inset-0 z-[60]" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: position === 'top' ? -10 : 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: position === 'top' ? -10 : 10 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className={`absolute z-[70] min-w-[220px] max-w-[90vw] rounded-2xl bg-gray-800/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ${
                position === 'top' ? 'bottom-full mb-4 left-1/2 -translate-x-1/2' : 'top-full mt-4 right-0'
              }`}
            >
              <div className="p-2">
                <a
                  href="mailto:rajpoot.mayank2002@gmail.com"
                  className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-200 hover:bg-primary/20 hover:text-white transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-wide">Email Me</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-white/70">rajpoot.mayank2002@gmail.com</span>
                  </div>
                </a>
                
                <div className="h-px bg-white/5 my-1 mx-2" />
                
                <a
                  href="https://wa.me/917078529738"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-4 rounded-xl text-gray-200 hover:bg-green-500/20 hover:text-white transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2.5 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <FaWhatsapp size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-wide">WhatsApp</span>
                    <span className="text-[10px] text-gray-400 group-hover:text-white/70">+91 7078529738</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactDropdown;
