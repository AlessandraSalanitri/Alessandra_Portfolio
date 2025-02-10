import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        method: "gmail", // Default method
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Name, Email, and Message are required!", { position: "top-right" });
            return;
        }

        if (formData.method === "whatsapp") {
            const whatsappURL = `https://wa.me/447715700406?text=Hello, my name is ${encodeURIComponent(
                formData.name
            )}. My email is ${encodeURIComponent(formData.email)}. ${
                formData.phone ? `Phone: ${encodeURIComponent(formData.phone)}` : ""
            } ${encodeURIComponent(formData.message)}`;
            window.open(whatsappURL, "_blank");
            toast.success("Redirecting to WhatsApp...", { position: "top-right" });
        } else {
            const mailtoURL = `mailto:alessandra.salanitri94@gmail.com?subject=Contact Form Submission&body=Name: ${encodeURIComponent(
                formData.name
            )}%0D%0AEmail: ${encodeURIComponent(formData.email)}%0D%0APhone: ${encodeURIComponent(
                formData.phone
            )}%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
            window.location.href = mailtoURL;
            toast.success("Opening Gmail...", { position: "top-right" });
        }

        setFormData({ name: "", email: "", phone: "", message: "", method: "gmail" });
    };

    return (
        <div className="contact-container">
            <ToastContainer />

            {/* Left Section - Contact Info */}
            <div className="contact-info">
                <h2>Let's Connect!</h2>
                <h4>& build something great together! </h4>

                <div className="contact-details">
                    <h3>Phone</h3>
                    <p><FaPhone /> +44 7555658661</p>

                    <h3>Email</h3>
                    <p><FaEnvelope /> alessandra.salanitri94@gmail.com</p>

                    <h3>Social</h3>
                    <div className="contact-social-icons">
                        <a href="https://www.linkedin.com/in/alessandra-salanitri-solent94/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/AlessandraSalanitri" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="contact-form-container">
                <h2>Get in Touch</h2>
                <p>Send me a message via Gmail or WhatsApp.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message *"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {/* Contact Method Selection */}
                    <div className="contact-method">
                        <label>
                            <input
                                type="radio"
                                name="method"
                                value="gmail"
                                checked={formData.method === "gmail"}
                                onChange={handleChange}
                            />
                            Send via Gmail
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="method"
                                value="whatsapp"
                                checked={formData.method === "whatsapp"}
                                onChange={handleChange}
                            />
                            Send via WhatsApp
                        </label>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
