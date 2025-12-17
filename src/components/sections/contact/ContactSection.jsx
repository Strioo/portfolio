import { useState } from 'react';
import { contactData, socialLinks } from '../../../lib/data';

/**
 * ContactSection Component
 * Form kontak dengan layout 2 kolom: Form (kiri) | Contact Info (kanan)
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Validasi form
      if (!formData.name || !formData.email || !formData.message) {
        setStatus({
          type: 'error',
          message: 'Please fill in all required fields (Name, Email, Message)'
        });
        return;
      }

      // Buat mailto link dengan data form
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:${contactData.email}?subject=${subject}&body=${body}`;
      
      // Buka email client
      window.location.href = mailtoLink;
      
      // Reset form dan tampilkan success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      setStatus({
        type: 'success',
        message: 'Email client opened! Please send the email from your email application.'
      });

      // Clear success message setelah 5 detik
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);

    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to open email client. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-125 h-125 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-100 h-100 bg-cyan-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="gradient-text">touch.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        {/* Contact Layout: Form (left) | Info (right) */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form - Left Side */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-xl border ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/50 text-green-400' 
                      : status.type === 'error'
                      ? 'bg-red-500/10 border-red-500/50 text-red-400'
                      : 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                  }`}>
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-transparent border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-transparent border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-transparent border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="+62 xxx xxxx xxxx"
                  />
                </div>
                
                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-transparent border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full px-6 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info - Right Side */}
            <div className="relative bg-surface border border-slate-700/50 rounded-2xl p-8 lg:p-10">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent rounded-2xl" />
              
              <div className="relative z-10 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Address</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {contactData.location}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Email</h3>
                    <a 
                      href={`mailto:${contactData.email}`}
                      className="text-slate-400 hover:text-accent transition-colors"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 border border-accent/20">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Phone</h3>
                    <a 
                      href={`tel:${contactData.phone}`}
                      className="text-slate-400 hover:text-accent transition-colors"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-6 border-t border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <h3 className="text-white font-bold text-xl">Follow Us</h3>
                  </div>
                  
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-elevated hover:bg-accent/20 border border-slate-700/50 hover:border-accent/50 rounded-full flex items-center justify-center text-slate-400 hover:text-accent transition-all duration-300"
                        aria-label={social.name}
                      >
                        {social.icon === 'github' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                        {social.icon === 'linkedin' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        {social.icon === 'instagram' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
