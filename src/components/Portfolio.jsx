import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Book, Star, Award, Github, Linkedin, Mail, Download, FileText } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';


const ProjectCard = ({ title, description, technologies }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
  
  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-400">{skill}</span>
        <span className="text-sm font-medium text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
  
  const TypewriterEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timer);
      }
    //   else {setIndex(0); setDisplayText('')}
    }, [index, text]);
  
    return <span>{displayText}</span>;
  };
  
  const CodeSnippet = () => (
    <div className="bg-gray-900 p-4 rounded-lg text-sm">
      <pre className="text-green-400">
        <code>{`int binarySearch(int[] arr, int target) {
    int l = 0, r = arr.length - 1;
    while (l <= r) {
        int mid = (l + r) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`}</code>
      </pre>
      <TypewriterEffect text="Midway is where clarity lies. - Binary Search" />
    </div>
  );
const LeetCodeStats = () => {
  const data = [
    { name: 'Easy', solved: 169, total: 830 },
    { name: 'Medium', solved: 268, total: 1000 },
    { name: 'Hard', solved: 30, total: 400 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="solved" fill="#82ca9f" name="Solved" />
        {/* <Bar dataKey="total" fill="#8884d8" name="Total" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

const ExperienceCard = ({ title, company, duration, description }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
      <p className="text-gray-300 text-sm">{company} | {duration}</p>
      <ul className="list-disc list-inside text-gray-300 mt-2">
        {description.map((item, index) => (
          <li key={index} className="text-sm mt-1">{item}</li>
        ))}
      </ul>
    </div>
  );

const LearningJourneyChart = () => {
  const data = [
    { name: 'DSA & Problem Solving', value: 40 },
    { name: 'React', value: 20 },
    { name: 'Database Management', value: 10 },
    { name: 'NodeJS', value: 10 },
    { name: 'Java', value: 20 },
    { name: 'OOPS', value: 30 },
    { name: 'OS', value: 10 },
    { name: 'Computer Networks', value: 10 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

const AchievementCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex items-start">
    {icon}
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </div>
);
const AnimatedProfilePicture = () => (
    <motion.div
      className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <img src="/profile2.jpg" alt="Aman Jaiswal" className="w-full h-full object-cover" />
    </motion.div>
  );
  
  const SocialMediaLinks = () => (
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://github.com/AmanJais14" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/aman-jaiswal14/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
        <Linkedin size={24} />
      </a>
      <a href="dev.jais.aman@gmail.com" className="text-gray-300 hover:text-blue-400">
        <Mail size={24} />
      </a>
    </div>
  );
  
  const ResumeDownload = () => (
    <a
      href="/Aman Jaiswal Res.pdf"
      download
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      <Download size={18} className="mr-2" />
      Download Resume
    </a>
  );
  
  const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the form data to a server
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 bg-gray-800 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 bg-gray-800 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-2 bg-gray-800 rounded h-32"
          required
        ></textarea>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    );
  };

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const projects = [
      {
        title: "SolveHive: Problem-Solving Platform",
        description: "Developed a platform for collaborative problem-solving with AI-powered suggestions.",
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"]
      },
      {
        title: "New Tab Notes Extension",
        description: "Created a Chrome Extension for efficient note-taking on new tabs with auto-save functionality.",
        technologies: ["JavaScript", "HTML", "CSS"]
      },
      {
        title: "Simon Says Game",
        description: "Developed a memory-boosting game challenging players to replicate color sequences.",
        technologies: ["JavaScript", "HTML", "CSS"]
      }
    ];
  const skills = [
    { skill: "Data Structures & Algorithms", level: 90 },
    { skill: "Problem Solving", level: 85 },
    { skill: "JavaScript", level: 70 },
    // { skill: "Python", level: 75 },
    { skill: "React", level: 70 },
    { skill: "Node.js", level: 80 },
    { skill: "Java", level: 85 },
    { skill: "MongoDB", level: 70 }
  ];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Aman Jaiswal</h1>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
          <div className={`lg:flex space-y-2 lg:space-y-0 lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
            {['home', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMenuOpen(false);
                }}
                className={`block lg:inline-block text-sm ${activeSection === section ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-300`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8 p-4">
        {activeSection === 'home' && (
          <div className='relative'>
            <AnimatedProfilePicture />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              <TypewriterEffect text="Hello, I'm Aman Jaiswal" />
            </h2>
            <p className="text-lg lg:text-xl mb-6 text-center">Aspiring Software Engineer | Full Stack Developer | Problem Solver</p>
            <div className="flex justify-center mb-6">
              <ResumeDownload />
            </div>
            <SocialMediaLinks />
            <div className="mb-8">
              <LearningJourneyChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-blue-400 font-semibold">Bachelor's of Technology in Computer Science</p>
                  <p className="text-gray-300">CMR University, Bangalore</p>
                  <p className="text-gray-300">11/2021 - 06/2025 | CGPA: 8.42</p>
                </div>
                <div className="mt-4">
                  <CodeSnippet />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">LeetCode Progress</h3>
                <LeetCodeStats />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
            <ExperienceCard 
              title="Full Stack Developer Intern"
              company="Sportzpod"
              duration="09/2024 - Present"
              description={[
                "Increased data fetching efficiency by 30% through optimized API integrations.",
                "Migrated user state management to Redux from Context API.",
                "Transitioned to JWT-based authentication from Passport strategy.",
                "Implemented a 'Forgot Password' feature for enhanced user experience.",
                "Engineered a responsive News page frontend with React and Tailwind."
              ]}
            />
          </div>
        )}

        {activeSection === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Project Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        )}

        {activeSection === 'achievements' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Achievements & Certifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ExperienceCard 
                title="LeetCode"
                company=""
                duration=""
                description={[
                  "Solved 450+ problems, demonstrating strong problem-solving skills and proficiency in DSA.",
                  "Contest Rating of 1517"
                ]}
              />
              <ExperienceCard 
                title="India Sustainability Startathon 2023"
                company=""
                duration=""
                description={[
                  "SDG 11 Challenge Semifinalist"
                ]}
              />
              <ExperienceCard 
                title="Global Open Innovation Challenge, CAUSE 2023"
                company=""
                duration=""
                description={[
                  "Honored with the 'Spirit of Innovation' award for solutions enhancing blue-collar job employment."
                ]}
              />
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <ContactForm />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                <p className="mb-4">Feel free to reach out through any of these platforms:</p>
                <SocialMediaLinks />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
export default Portfolio;