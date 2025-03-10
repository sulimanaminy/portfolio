// import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  // Professional headshot from Unsplash
  // const profileImage ="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-indigo-600 font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Suliman Aminy
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              I build responsive, user-friendly web applications with modern technologies.
              Specializing in React, Node.js, MongoDB, and Tailwind CSS.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Contact Me <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="#projects" 
                className="bg-white hover:bg-gray-100 text-indigo-600 border border-indigo-600 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sulimanaminy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sulimanaminyaminy@gmail.com" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 mx-auto">
               <img 
                src="/assets/img-2.jpg" // Correct path to the image in the public folder
                alt="Suliman Aminy" 
                className="w-full h-full object-cover"
              />

              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-indigo-600">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;