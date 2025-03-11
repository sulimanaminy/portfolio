// import React from 'react';
import { Code2, Server, Database, Palette } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React and modern CSS frameworks.'
    },
    {
      icon: <Server className="h-8 w-8 text-indigo-600" />,
      title: 'Backend Development',
      description: 'Creating robust server-side applications with Node.js, Express, and RESTful APIs.'
    },
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database solutions with MongoDB and other technologies.'
    },
    {
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive user experiences with Tailwind CSS and modern design principles.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            I'm a passionate full stack developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless
            digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 mb-4">
              I started my journey as a web developer 4 years ago, initially focusing on frontend technologies.
              As I grew in my career, I expanded my skills to include backend development, database design,
              and cloud deployment strategies.
            </p>
            <p className="text-gray-700 mb-4">
              I've worked with startups and established companies alike, helping them build scalable
              web applications that meet their business needs. My approach combines technical expertise
              with a deep understanding of user experience principles.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through blog posts and community events.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;