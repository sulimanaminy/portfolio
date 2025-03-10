import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'RESTful APIs', level: 90 },
    // { name: 'GraphQL', level: 75 },
  ];

  const otherSkills = [
    'Git & GitHub',
    'Next js',
    'React Native',
    'Mongoose',
    'Redux',
    // '',
    'Responsive Design',
    'Performance Optimization',
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            I've developed a diverse set of skills throughout my career as a full stack developer.
            Here's an overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Backend Development</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-center">Other Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="bg-white px-4 py-2 rounded-full border border-gray-200 text-gray-700 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;