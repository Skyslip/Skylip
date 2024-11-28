import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Need Help?</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <Mail className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600">Get help within 24 hours</p>
              <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Contact Us
              </button>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg text-center">
              <MessageSquare className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Available 9AM-5PM EST</p>
              <button className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}