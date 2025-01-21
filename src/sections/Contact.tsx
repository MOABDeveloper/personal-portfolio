"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ArrowRight from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null); 
  
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'service_u826ejq', 
        'template_ogfhadn', 
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY 
      );

      console.log('SUCCESS!', response);

      // Clear the form fields
      if (form.current) {
        form.current.reset();
      }
    } catch (error) {
      console.error('FAILED...', error);
    }
  };

  return (
    <div className="py-32">
      <div className="container">
        <div className="bg-gradient-to-l from-purple-500 to-purple-950 text-white py-8 md:py-6 px-10 rounded-3xl text-center">
          <div className="md:grid grid-cols-2">
            <div className="md:text-left md:py-24 max-w-96">
              <h2 className="font-bold text-3xl md:text-5xl">Get in Touch!</h2>
              <p className="text-sm mt-2 mb-2">
                If you're looking for a dedicated and skilled professional, I’d
                love to hear from you. Let’s connect and discuss how I can
                contribute to your team.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-row-2 mt-4">
                <label className="flex justify-start font-bold">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-gray-800 rounded-lg pl-2 h-10"
                />
              </div>

              <div className="grid grid-row-2 mt-4">
                <label className="flex justify-start font-bold">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="bg-gray-800 rounded-lg pl-2 h-10"
                />
              </div>

              <div className="grid grid-row-2 mt-4">
                <label className="flex justify-start font-bold">Message</label>
                <textarea
                  name="message"
                  className="bg-gray-800 rounded-lg pl-2 h-24"
                />
              </div>

              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
                <input type="submit" value="Send Message" />
                <ArrowRight className="size-8" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

