import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, X, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './contact.css'; 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', message: '', method: 'sms' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); 
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendSMS = (data: { name: string; contact: string; message: string }) => {
    const smsBody = `From: ${data.name}\nContact: ${data.contact}\nMessage: ${data.message}`;
    const encodedBody = encodeURIComponent(smsBody);
    const smsLink = `sms:+27786465551?body=${encodedBody}`;
    try {
      window.location.href = smsLink;
      setStatusMessage('Opening your SMS app...');
      setFormData({ name: '', contact: '', message: '', method: 'sms' });
    } catch (error) {
      console.error('SMS Error:', error);
      setStatusMessage('Failed to open SMS app. Please try again.');
    }
  };

  const sendEmail = (data: { name: string; contact: string; message: string }) => {
    setSending(true);
    setStatusMessage('');
    emailjs.send(
      "service_a1onxoj",
      "template_7pnsbd9",
      { name: data.name, email: data.contact, title: data.message },
      "EcrUPjoT2ab82b_44"
    )
    .then(() => {
      setSending(false);
      setStatusMessage('Email sent successfully!');
      setFormData({ name: '', contact: '', message: '', method: 'sms' });
    })
    .catch((error) => {
      setSending(false);
      console.error('EmailJS Error:', error);
      setStatusMessage('Failed to send email. Please try again later.');
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.method === 'sms') {
      sendSMS(formData);
    } else {
      sendEmail(formData);
    }
  };

  const openEmailModal = () => {
    setFormData({ name: '', contact: 'nelakulati@gmail.com', message: 'Hello!', method: 'email' });
    setStatusMessage('');
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300); 
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formData);
    closeModal();
  };

  const contactInfo = [
    { icon: <MessageCircle className="w-6 h-6" />, label: 'WhatsApp', value: '+27786465551', link: 'https://wa.me/0786465551' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'nelakulati@gmail.com', action: openEmailModal },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', value: 'linkedin.com/in/yonela-kulati-665717133/', link: 'https://www.linkedin.com/in/yonela-kulati-665717133/' },
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', value: 'github.com/Nellark', link: 'https://github.com/Nellark' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 dark:text-gray-400 text-lg mb-8">
                Reach out through any of the channels below or send me a message.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact) =>
                contact.link ? (
                  <a key={contact.label} href={contact.link} target="_blank" rel="noopener noreferrer"
                     className="flex space-x-4 p-4 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 group">
                    <div className="text-orange-600 dark:text-orange-400 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors">{contact.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{contact.label}</h4>
                      <p className="text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors">{contact.value}</p>
                    </div>
                  </a>
                ) : (
                  <button key={contact.label} onClick={contact.action}
                     className="flex space-x-4 p-4 w-full bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300 group">
                    <div className="text-orange-600 dark:text-orange-400 group-hover:text-orange-400 dark:group-hover:text-orange-300 transition-colors">{contact.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white">{contact.label}</h4>
                      <p className="text-gray-300 dark:text-gray-400 group-hover:text-white transition-colors">{contact.value}</p>
                    </div>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact Form (SMS or Email) */}
          <div className="bg-gray-800 dark:bg-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name"
                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
              <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} 
                     placeholder={formData.method === 'sms' ? 'Your Phone Number' : 'Your Email'}
                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400" required />
              <select name="method" value={formData.method} onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                <option value="sms">Send via SMS</option>
                <option value="email">Send via Email</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} placeholder="Your Message"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none" required />
              <button type="submit" disabled={sending}
                      className="w-full flex justify-center items-center space-x-2 bg-orange-600 hover:bg-orange-700 py-3 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed">
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </button>
              {statusMessage && (
                <p className={`mt-2 text-center ${statusMessage.includes('successfully') || statusMessage.includes('Opening') ? 'text-green-400' : 'text-red-400'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Modal (Email) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300">
          <div className={`bg-gray-900 p-6 rounded-xl w-full max-w-md transform ${isClosing ? 'animate-slideDown opacity-0' : 'animate-slideUp opacity-100'}`}>
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">Send Email</h3>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name"
                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white" />
              <input type="email" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Your Email"
                     className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white" />
              <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Your Message"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none" />
              <button type="submit" disabled={sending}
                      className="w-full flex justify-center items-center space-x-2 bg-orange-600 hover:bg-orange-700 py-3 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed">
                <span>{sending ? 'Sending...' : 'Send'}</span>
                <Send className="w-4 h-4" />
              </button>
              {statusMessage && (
                <p className={`mt-2 text-center ${statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;