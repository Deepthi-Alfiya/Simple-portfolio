import React, { useState } from 'react';
import './index.css'; // Importing the CSS file

const PersonalPortfolio = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(true);
    };

    return (
        <div className="portfolio">
            <header className="header">
                <h1>Deepthi</h1>
                <p className="tagline">Frontend Developer | UI Developer | Designer</p>
            </header>
            <section className="about">
                <h2>About Me</h2>
                <p>
                    I'm a passionate Frontend Developer and UI Designer with a keen eye for detail.
                    I love creating beautiful, user-friendly interfaces and bringing ideas to life through code.
                    My journey in web development has equipped me with the skills to deliver high-quality digital experiences.
                </p>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-list">
                    {/* Repeat this block for each project */}
                    <div className="project-card">
                        <h3>Project Title</h3>
                        <p>Description of the project, technologies used, etc.</p>
                        <a href="https://github.com/Deepthi-Alfiya" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </section>
            <section className="contact">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                {submitted && <p className="success-message">Message sent successfully!</p>}
            </section>
            <footer>
                <p>&copy; {new Date().getFullYear()} Deepthi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PersonalPortfolio;
