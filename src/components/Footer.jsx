import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <Link to="/" className="footer-logo" onClick={scrollToTop}>
                <Building size={32} className="me-2" />
                A2AI Technologies
              </Link>
              <p className="footer-description mt-3">
                Empowering brands with technology and creativity. We transform ideas into 
                digital experiences that captivate audiences and drive results.
              </p>
              <div className="social-links mt-4">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
              <li><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Services</h5>
            <ul className="footer-links">
              <li><Link to="/services#web-development" onClick={scrollToTop}>Web Development</Link></li>
              <li><Link to="/services#graphic-design" onClick={scrollToTop}>Graphic Design</Link></li>
              <li><Link to="/services#video-editing" onClick={scrollToTop}>Video Editing</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Custom Solutions</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="footer-title">Contact Info</h5>
            <div >
              <div className="contact-item">
                <MapPin size={16} className="me-2" />
                <span>123 Tech Street, Digital City, TC 12345</span>
              </div>
              <div className="contact-item">
                <Phone size={16} className="me-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} className="me-2" />
                <span>hello@a2aitechnologies.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="footer-copyright">
              &copy; 2024 A2AI Technologies. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-legal">
              <a href="#" className="legal-link">Privacy Policy</a>
              <a href="#" className="legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;