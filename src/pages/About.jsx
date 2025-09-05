import React, { useEffect } from 'react';
import { Users, Target, Eye, Award, Clock, Zap } from 'lucide-react';
import AOS from 'aos';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);



  const founders = [
    {
      name: 'Alex Anderson',
      role: 'Co-Founder & CEO',
      bio: 'Visionary leader with 8+ years in tech industry. Passionate about innovation and client success.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & CTO',
      bio: 'Technical expert specializing in full-stack development and emerging technologies.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Company Founded', description: 'A2AI Technologies was established with a vision to bridge creativity and technology.' },
    { year: '2021', event: 'First Major Client', description: 'Secured our first enterprise client and delivered a comprehensive digital transformation project.' },
    { year: '2022', event: 'Team Expansion', description: 'Grew our team to include specialists in design, development, and video production.' },
    { year: '2023', event: '100+ Projects', description: 'Celebrated completion of 100+ successful projects across various industries.' },
    { year: '2024', event: 'Industry Recognition', description: 'Received multiple awards for excellence in digital innovation and client satisfaction.' }
  ];

  const whyChooseUs = [
    {
      icon: <Award size={40} />,
      title: 'Award-Winning Team',
      description: 'Our talented professionals bring creativity and technical expertise to every project.'
    },
    {
      icon: <Clock size={40} />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure all projects are delivered on time, every time.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Cutting-Edge Technology',
      description: 'We use the latest tools and technologies to create modern, efficient solutions.'
    },
    {
      icon: <Users size={40} />,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with clients to exceed expectations.'
    }
  ];

  const clients = [
    'https://catalog.wlimg.com/1/4660870/other-images/982300.jpg',
    'https://yt3.googleusercontent.com/rbQ6KgXa9_A-cH8pQnrnvxvYmIO09WI85FCU5hSTTqH34y89UsFTgftK4wf_aaaZpQMvY2ciMQ=s160-c-k-c0x00ffffff-no-rj',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHHfXcVT-PnOfEh-SlBJ7Tr0h1ImJZKo77g&s',
    'https://www.softkey.ua/upload/iblock/50a/2dahlgj5fojhoesmn2trejkocpe9watg/coreldraw_logo_brandlogos.net_96dfz_512x512.png',
  "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title" data-aos="fade-up">About A2AI Technologies</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="200">
                Your vision, our tech execution !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="mission-card" data-aos="fade-right">
                <div className="mission-icon">
                  <Target size={48} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses and individuals with innovative digital solutions that
                  combine cutting-edge technology with creative excellence. We strive to transform
                  ideas into impactful digital experiences that drive growth and success.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="vision-card" data-aos="fade-left">
                <div className="vision-icon">
                  <Eye size={48} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To be the leading digital transformation partner, recognized for our commitment
                  to innovation, quality, and client success. We envision a future where technology
                  and creativity seamlessly merge to create extraordinary digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="founders py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Meet Our Founders</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                The visionaries behind A2AI Technologies
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {founders.map((founder, index) => (
              <div key={index} className="col-lg-5 col-md-6 mb-4">
                <div className="founder-card" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="founder-image">
                    <img src={founder.image} alt={founder.name} />
                  </div>
                  <div className="founder-info">
                    <h4>{founder.name}</h4>
                    <span className="founder-role">{founder.role}</span>
                    <p>{founder.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Our Journey</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                Milestones that define our growth and success
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="timeline-container">
                {timeline.map((item, index) => (
                  <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-content">
                      <h4>{item.event}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Why Choose Us</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                What sets us apart from the competition
              </p>
            </div>
          </div>
          <div className="row">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="why-card" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="why-icon">
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title" data-aos="fade-up">Our Clients</h2>
              <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
                Trusted by businesses across various industries
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {clients.map((client, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-6 mb-4">
                <div className="client-logo" data-aos="fade-up" data-aos-delay={index * 100}>
                  <img src={client} alt={`Client ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
