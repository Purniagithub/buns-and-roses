import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { db } from "../firebase"; // adjust path if needed
import { collection, addDoc, Timestamp } from "firebase/firestore";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...form,
        createdAt: Timestamp.now(),
      });
      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("Error sending message: ", error);
      setStatus("Error sending message ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center px-6 py-12 mt-20">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Contact Us 🌹</h1>
      <p className="text-gray-600 text-center max-w-2xl mb-10">
        Have a question about our fresh buns, custom cakes, or floral arrangements?
        We’d love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6">
            Send us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-sm text-gray-700">{status}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold text-pink-600">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Visit us at our bakery & flower shop, or give us a call. We’re always
            happy to make your day sweeter and brighter 🌸🍞.
          </p>
          <div className="flex items-center space-x-3">
            <Phone className="text-pink-600 w-6 h-6" />
            <span className="text-gray-700">+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-pink-600 w-6 h-6" />
            <span className="text-gray-700">support@bunsandroses.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-pink-600 w-6 h-6" />
            <span className="text-gray-700">
              123 Blossom Street, Bangalore, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
