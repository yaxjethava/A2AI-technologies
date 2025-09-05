import React, { useState, useEffect } from 'react';
import { ExternalLink, Filter } from 'lucide-react';
import AOS from 'aos';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'web',
      description: 'Modern e-commerce platform with advanced filtering and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 2,
      title: 'Corporate Brand Identity',
      category: 'graphics',
      description: 'Complete brand identity package including logo, business cards, and guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'video',
      description: 'Dynamic promotional video for tech product launch campaign.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      description: 'Responsive website with online ordering system and reservation booking.',
      image: 'https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 5,
      title: 'Social Media Campaign',
      category: 'graphics',
      description: 'Creative social media graphics and motion posters for marketing campaign.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 6,
      title: 'Corporate Training Video',
      category: 'video',
      description: 'Professional training video series for employee onboarding program.',
      image: 'https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 7,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Creative portfolio website for photographer with gallery and booking system.',
      image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 8,
      title: 'Event Branding',
      category: 'graphics',
      description: 'Complete event branding including posters, banners, and digital assets.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    },
    {
      id: 9,
      title: 'YouTube Channel Content',
      category: 'video',
      description: 'Series of educational videos with custom graphics and animations.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=500',
      link: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'graphics', label: 'Graphic Design' },
    { key: 'video', label: 'Video Editing' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title" data-aos="fade-up">Our Projects</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="200">
                Showcasing our creative work and successful collaborations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="project-filter py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter-container text-center" data-aos="fade-up">
                <Filter size={20} className="me-2" />
                <span className="filter-label">Filter by:</span>
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                    onClick={() => setFilter(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Projects Grid */}
      <section className="projects-grid py-5">
        <div className="container">
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div 
                  className="project-card" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-info">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h5>{project.title}</h5>
                    <span className="project-category">
                      {categories.find(cat => cat.key === project.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4" data-aos="fade-up">Have a Project in Mind?</h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="200">
                Let's discuss how we can bring your vision to life
              </p>
              <a 
                href="/contact" 
                className="btn btn-light btn-lg" 
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
