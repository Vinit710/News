// src/pages/About.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './About.css';

function About() {
  const teamMembers = [
    {
      name: "Vinit Desai",
      role: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/Vinit710",
      github: "https://github.com/Vinit710",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "your.email@example.com"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Project Information */}
        <div className="project-info">
          <h1 className="page-title">ℹ️ About NewsHub</h1>
          <p className="project-description">
            NewsHub is your trusted source for the latest news and analysis. 
            Stay informed with real-time updates from around the globe.
          </p>
          <div className="features-card">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="features-grid">
              <div className="p-4">
                <h3 className="font-bold mb-2">Real-time Updates</h3>
                <p className="text-gray-600">Get the latest news as it happens</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Global Coverage</h3>
                <p className="text-gray-600">News from around the world</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">User-Friendly</h3>
                <p className="text-gray-600">Clean and intuitive interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="developer-section">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Developer</h2>
          {teamMembers.map((member, index) => (
            <div key={index} className="developer-card">
              <img 
                src={member.image} 
                alt={member.name}
                className="profile-image"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="social-links">
                <a href={member.github} target="_blank" rel="noopener noreferrer"
                   className="social-link github">
                  <FaGithub size={24} />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="social-link linkedin">
                  <FaLinkedin size={24} />
                </a>
                <a href={`mailto:${member.email}`}
                   className="social-link email">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="tech-section">
          <h2 className="text-2xl font-semibold mb-4 text-center">Built With</h2>
          <div className="tech-grid">
            <div className="p-4">
              <h3 className="font-bold">React</h3>
              <p className="text-gray-600">Frontend Framework</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold">Tailwind CSS</h3>
              <p className="text-gray-600">Styling</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold">NewsAPI</h3>
              <p className="text-gray-600">News Data</p>
            </div>
            <div className="p-4">
              <h3 className="font-bold">GitHub</h3>
              <p className="text-gray-600">Version Control</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
