import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Video, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const services = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      link: '/services#web-development'
    },
    {
      icon: <Palette size={48} />,
      title: 'Graphic Design',
      description: 'Creative visual solutions for all your branding and marketing needs.',
      link: '/services#graphic-design'
    },
    {
      icon: <Video size={48} />,
      title: 'Video Editing',
      description: 'Professional video production and editing for all platforms.',
      link: '/services#video-editing'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 3,
      title: 'Corporate Video',
      category: 'Video Editing',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      rating: 5,
      text: 'A2AI Technologies delivered an exceptional website that perfectly captured our vision. Their attention to detail and creativity exceeded our expectations.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Agency',
      rating: 5,
      text: 'Working with A2AI was a game-changer for our brand. Their graphic design work helped us stand out in a competitive market.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Marketing Firm',
      rating: 5,
      text: 'The video content created by A2AI significantly boosted our engagement rates. Professional, creative, and delivered on time.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="hero-title" data-aos="fade-up">
                Empowering Brands with
                <span className="text-gradient"> Technology & Creativity</span>
              </h1>
              <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                We transform ideas into digital experiences that captivate audiences and drive results.
                From web development to creative design, we bring your vision to life.
              </p>
              <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
                <Link to="/services" className="btn btn-primary btn-lg me-3">
                  Explore Services <ArrowRight size={20} className="ms-2" />
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="slide-right">
              <h2 className="section-title">About A2AI Technologies</h2>
              <p className="lead">
                We are a passionate team of designers, developers, and creatives who believe in
                the power of technology to transform businesses and connect with audiences.
              </p>
              <p>
                With years of experience in web development, graphic design, and video production,
                we deliver comprehensive digital solutions that help brands stand out in today's
                competitive landscape.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
            <div className="col-lg-6" data-aos="slide-left">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Our Services</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                Comprehensive digital solutions to elevate your brand
              </p>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="service-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.link} className="service-link">
                    Learn More <ArrowRight size={16} className="ms-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary btn-lg" data-aos="fade-up">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                Showcasing our latest work and creative solutions
              </p>
            </div>
          </div>
          <div className="row">
            {projects.map((project, index) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="project-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <h4>{project.title}</h4>
                      <span className="project-category">{project.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-primary btn-lg" data-aos="fade-up">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5 bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title text-white" data-aos="fade-up">What Our Clients Say</h2>
              <p className="section-subtitle text-light" data-aos="fade-up" data-aos-delay="200">
                Don't just take our word for it
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up">
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <div className="testimonial-card">
                        <div className="stars mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" />
                          ))}
                        </div>
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <div className="testimonial-author">
                          <img src={testimonial.image} alt={testimonial.name} />
                          <div>
                            <h5>{testimonial.name}</h5>
                            <span>{testimonial.company}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                  <ChevronLeft size={30} />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                  <ChevronRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="contact-banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title text-white mb-4" data-aos="fade-up">
                Let's Build Something Great Together!
              </h2>
              <p className="lead text-light mb-4" data-aos="fade-up" data-aos-delay="200">
                Ready to transform your ideas into reality? We're here to help you succeed.
              </p>
              <Link
                to="/contact"
                className="btn btn-light btn-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Contact Us <ArrowRight size={20} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
