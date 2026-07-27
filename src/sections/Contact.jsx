import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Grid } from '../layout';
import { FaWhatsapp, FaEnvelope, FaClock, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact" background="bg-[var(--color-dark)]" padding="pt-16 pb-0" className="text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] text-[var(--color-secondary)] mb-4">
          Contact Us
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Get in touch with our team for bulk orders, distributorship inquiries, or any other questions.
        </p>
      </div>

      <Grid cols={1} lg={2} gap={0} className="bg-white/5 rounded-t-3xl overflow-hidden border-t border-x border-white/10 mx-auto max-w-6xl">
        {/* Contact Info & Socials */}
        <div className="p-8 md:p-12">
          <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[var(--color-secondary)] mb-8">
            Company Information
          </h3>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start">
              <FaWhatsapp className="text-2xl text-[var(--color-secondary)] mr-4 mt-1" />
              <div>
                <div className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-1">WhatsApp / Phone</div>
                <div className="text-lg">+91 95013 11070</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaEnvelope className="text-2xl text-[var(--color-secondary)] mr-4 mt-1" />
              <div>
                <div className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-1">Email</div>
                <div className="text-lg">info@altamash-mehndi.com</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaClock className="text-2xl text-[var(--color-secondary)] mr-4 mt-1" />
              <div>
                <div className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-1">Business Hours</div>
                <div className="text-lg">Mon - Sat: 9:00 AM - 6:00 PM</div>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-2xl text-[var(--color-secondary)] mr-4 mt-1" />
              <div>
                <div className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-1">Address</div>
                <div className="text-lg">Ludhiana, Punjab, India</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm text-white/50 uppercase tracking-wider mb-4">Follow Us</div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-secondary)] hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-secondary)] hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-secondary)] hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 text-[var(--color-text)]">
          <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[var(--color-primary)] mb-6">
            Send us a message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Phone / WhatsApp</label>
                <input type="tel" className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]" placeholder="+1 234 567 890" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Inquiry Type</label>
              <select className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] text-[var(--color-text)] bg-white">
                <option>General Inquiry</option>
                <option>Bulk Order</option>
                <option>Distributorship</option>
                <option>Private Labeling</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--color-muted)] mb-1">Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]" placeholder="How can we help you?"></textarea>
            </div>
            
            <Button className="w-full mt-4" size="lg">Submit Inquiry</Button>
          </form>
        </div>
      </Grid>
      
      {/* Copyright Bar as part of Contact Section */}
      <div className="border-t border-white/10 mt-8 py-6 text-center">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} TIK TOK Mehndi. All Rights Reserved.
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[var(--zIndex-sticky)] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </Section>
  );
};

export default Contact;
