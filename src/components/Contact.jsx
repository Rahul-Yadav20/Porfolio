import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center mb-8">Contact</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl mb-4">Contact Information</h3>
          <p>Email: your_email@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500">yourprofile</a></p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-600" required />
          </div>
          <div>
            <label className="block text-lg">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-600" required />
          </div>
          <div>
            <label className="block text-lg">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-600" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 px-4 py-2 rounded-full text-white">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
