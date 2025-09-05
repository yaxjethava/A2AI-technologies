import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Video, ArrowRight, Globe, ShoppingCart, User, FileText, Play, Camera } from 'lucide-react';
import AOS from 'aos';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      id: 'web-development',
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Creating modern, responsive, and user-friendly websites and web applications.',
      subServices: [
        {
          icon: <ShoppingCart size={24} />,
          title: 'E-commerce Sites',
          description: 'Full-featured online stores with secure payment integration and inventory management.'
        },
        {
          icon: <User  size={24} />,
          title: 'Portfolio Sites',
          description: 'Professional portfolios that showcase your work and attract potential clients.'
        },
        {
          icon: <Globe size={24} />,
          title: 'Business Websites',
          description: 'Corporate websites that establish your online presence and credibility.'
        },
        {
          icon: <Code size={24} />,
          title: 'Custom Web Applications',
          description: 'Tailored web solutions to meet your specific business requirements.'
        }
      ]
    },
    {
      id: 'graphic-design',
      icon: <Palette size={48} />,
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively.',
      subServices: [
        {
          icon: <Palette size={24} />,
          title: 'Logo Design',
          description: 'Memorable and impactful logos that represent your brand identity.'
        },
        {
          icon: <FileText size={24} />,
          title: 'Business Cards',
          description: 'Professional business cards that make a lasting first impression.'
        },
        {
          icon: <FileText size={24} />,
          title: 'Brochures & Flyers',
          description: 'Eye-catching marketing materials for your promotional campaigns.'
        },
        {
          icon: <Palette size={24} />,
          title: 'Festival Greeting Posts',
          description: 'Festive social media posts to engage your audience during celebrations.'
        },
        {
          icon: <Play size={24} />,
          title: 'Motion Posters',
          description: 'Dynamic animated posters that capture attention on digital platforms.'
        }
      ]
    },
    {
      id: 'video-editing',
      icon: <Video size={48} />,
      title: 'Video Editing',
      description: 'Professional video production and editing for all your multimedia needs.',
      subServices: [
        {
          icon: <Video size={24} />,
          title: 'Promotional Videos',
          description: 'Compelling marketing videos that showcase your products or services.'
        },
        {
          icon: <Play size={24} />,
          title: 'YouTube Videos',
          description: 'Engaging content optimized for YouTube and social media platforms.'
        },
        {
          icon: <Camera size={24} />,
          title: 'Reels & Shorts',
          description: 'Short-form video content perfect for Instagram Reels and YouTube Shorts.'
        },
        {
          icon: <Video size={24} />,
          title: 'Corporate Videos',
          description: 'Professional corporate content for presentations and communications.'
        }
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title" data-aos="fade-up">Our Services</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="200">
                Comprehensive digital solutions to help your business thrive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="services-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="services-sidebar" data-aos="fade-right">
                <h4>Services</h4>
                <nav className="nav flex-column">
                  {services.map((service) => (
                    <a key={service.id} className="nav-link" href={`#${service.id}`}>
                      {service.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="col-lg-9">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="service-section mb-5" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="service-header">
                    <div className="service-icon-large">
                      {service.icon}
                    </div>
                    <div>
                      <h2>{service.title}</h2>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="row mt-4">
                    {service.subServices.map((subService, subIndex) => (
                      <div key={subIndex} className="col-lg-6 mb-4">
                        <div className="sub-service-card">
                          <div className="sub-service-icon">
                            {subService.icon}
                          </div>
                          <div className="sub-service-content">
                            <h4>{subService.title}</h4>
                            <p>{subService.description}</p>
                            <Link to="/contact" className="btn btn-sm btn-outline-primary">
                              Get Quote <ArrowRight size={16} className="ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4" data-aos="fade-up">Ready to Get Started?</h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Let's discuss your project and bring your vision to life
              </p>
              <Link 
                to="/contact" 
                className="btn btn-light btn-lg" 
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                Contact Us Today <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
