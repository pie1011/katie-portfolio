import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ExternalLink, Github, Linkedin, Mail, Briefcase, User, Code, GraduationCap, Award, MapPin, Calendar, ChevronDown, ChevronRight } from 'lucide-react';

const ModernPortfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedTimelineItem, setExpandedTimelineItem] = useState<number | null>(null);
  type SkillCategory = keyof typeof skillsData;
  const [activeSkillCategory, setActiveSkillCategory] = useState<SkillCategory>('Project Management');
  const [activePortfolioFilter, setActivePortfolioFilter] = useState('all');

  // Theme toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Portfolio data
  const portfolioData = [
    {
      title: "Project Management Framework Report",
      description: "Presents a comprehensive framework for project management, detailing foundational principles and initial planning stages.",
      category: "Project Management",
      pdfUrl: "https://pie1011.github.io/resume/docs/KHarshman-Summative Assessment 02.pdf",
      thumbnailUrl: "https://pie1011.github.io/resume/docs/thumbnails/01.png"
    },
    {
      title: "Digital Learning Strategy Proposal",
      description: "Proposes a strategic roadmap for implementing and optimizing digital learning solutions within an organization.",
      category: "HR Learning & Development",
      pdfUrl: "https://pie1011.github.io/resume/docs/case_study/Summative_Assessment_4.pdf",
      thumbnailUrl: "https://pie1011.github.io/resume/docs/thumbnails/10.png"
    },
    {
      title: "React Portfolio Website",
      description: "A personal portfolio website built with React, showcasing projects and skills with a modern, responsive design.",
      category: "Web Development",
      pdfUrl: "https://katie-harshman-portfolio.netlify.app",
      thumbnailUrl: "https://pie1011.github.io/resume/docs/thumbnails/12.png",
      githubUrl: "https://github.com/pie1011/portfolio"
    },
    {
      title: "Talent Lifecycle Development Plan",
      description: "A comprehensive plan detailing strategies for attracting, developing, and retaining talent throughout the employee lifecycle.",
      category: "HR Learning & Development",
      pdfUrl: "https://pie1011.github.io/resume/docs/case_study/Summative_Assessment_6.pdf",
      thumbnailUrl: "https://pie1011.github.io/resume/docs/thumbnails/14.png"
    },
    {
      title: "Methodology Analysis",
      description: "A detailed analysis of consulting methodologies, focusing on their application and effectiveness in various client scenarios.",
      category: "Project Management",
      pdfUrl: "https://pie1011.github.io/resume/docs/KHarshman-Summative Assessment 04.pdf",
      thumbnailUrl: "https://pie1011.github.io/resume/docs/thumbnails/03.png"
    },
    {
      title: "The Salon Mock Site in React",
      description: "A mock salon website developed in React, demonstrating component-based architecture and interactive UI features.",
      category: "Web Development",
      pdfUrl: "https://salon-kh.vercel.app/",
      thumbnailUrl: "https://pie1011.github.io/resume/docs/thumbnails/13.png",
      githubUrl: "https://github.com/pie1011/salon"
    }
  ];

  // Experience data
  const experienceData = [
    {
      role: "Virtual Sales Associate",
      company: "Firework",
      dates: "Oct 2024 – May 2025",
      details: [
        "Provided personalized 1-to-1 customer support and sales experiences, effectively presenting products and managing live chats and calls.",
        "Developed in-depth product and brand knowledge to ensure high-quality, informed customer interactions.",
        "Utilized proprietary technology to facilitate seamless sales processes and enhance customer satisfaction."
      ]
    },
    {
      role: "Software Development Instructor",
      company: "ThriveDX",
      dates: "Apr 2022 – Nov 2024",
      details: [
        "Educated and mentored adult student cohorts through university partners on programming tools, languages, web development best practices, and software engineering principles.",
        "Managed learning platforms (Canvas, Zoom), facilitating interactive sessions and providing supplementary resources to enhance comprehension.",
        "Participated in continuous professional development and curriculum review to maintain alignment with industry standards and best practices."
      ]
    },
    {
      role: "Software Engineer Apprentice",
      company: "IBM",
      dates: "Apr 2022 – Apr 2023",
      details: [
        "Led two teams in the Developer Jumpstart program, contributing to the creation of advanced workshop materials.",
        "Collaborated with senior engineers in the Data and AI unit to develop tools that enhanced IBM Content Designers' workflow, utilizing JavaScript and Python within Agile methodologies.",
        "Contributed to technical documentation, streamlining information accessibility and clarity.",
        "Mentored junior developers and participated in coursework to strengthen competencies."
      ]
    },
    {
      role: "Co-Founder, Technology Support & Various Roles",
      company: "Pro Appliance Installation",
      dates: "Apr 2016 – Apr 2022",
      details: [
        "Spearheaded the development and implementation of business strategies and procedures, directing daily business operations.",
        "Provided comprehensive administrative support, including customer service, document management, and technical support.",
        "Designed and maintained the company website, streamlining client intake processes and enhancing online presence.",
        "Managed IT, marketing, sales, and service order dispatch, ensuring smooth operational flow."
      ]
    }
  ];

  // Skills data
  const skillsData = {
    "Project Management": ["Agile", "Scrum", "Project Planning", "Workflow Optimization", "Documentation", "Stakeholder Communication", "Task Management", "Process Improvement"],
    "Administrative Support": ["Calendar Management", "Document Management", "Client Communication", "Scheduling", "Office Administration", "Data Entry", "Inventory Control"],
    "Technical Proficiency": ["Salesforce Admin", "Microsoft Office Suite", "Google Workspace", "Slack", "Zoom", "JIRA", "Trello", "Mural", "ZenHub", "HTML/CSS", "JavaScript", "Python"],
    "Communication & Training": ["Technical Instruction", "Mentoring", "Public Speaking", "Curriculum Development", "Troubleshooting", "Customer Service", "Technical Writing", "Cross-functional Collaboration"]
  };

  // Filter portfolio items
  const getFilteredPortfolio = () => {
    if (activePortfolioFilter === 'all') return portfolioData;
    return portfolioData.filter(item => {
      if (activePortfolioFilter === 'pm') return item.category === 'Project Management';
      if (activePortfolioFilter === 'hr') return item.category === 'HR Learning & Development';
      if (activePortfolioFilter === 'web') return item.category === 'Web Development';
      return true;
    });
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/80 border-gray-800' 
          : 'bg-white/80 border-white/20'
      } border-b`}>
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg`}>
              KH
            </div>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Katie Harshman
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Overview', 'Portfolio', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${
            darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white/95 border-gray-200'
          } border-t`}>
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['Overview', 'Portfolio', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors hover:text-blue-500 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="overview" className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                darkMode 
                  ? 'bg-blue-900/30 text-blue-300 border border-blue-800' 
                  : 'bg-blue-100 text-blue-700 border border-blue-200'
              }`}>
                <MapPin size={16} className="mr-2" />
                San Jose, California
              </div>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Katie Harshman
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Project Coordination • Administrative Support • Technical Instruction • Customer Service
            </p>

            <div className={`max-w-3xl mx-auto text-lg mb-12 ${
              darkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              <p>
                Hi, I'm Katie! I'm highly organized and love bringing structure to complex projects. My background
                blends project coordination, administrative support, and technical instruction, which means I'm
                comfortable juggling diverse priorities while keeping communication clear and workflows efficient.
              </p>
              <p className="mt-4">
                <b><i>NOTE: This is just a sample resume/portfolio in React and Typescript. For my most up-to-date interactive resume, please visit <a href='https://www.katieharshman.com' target='_blank' rel='noopener noreferrer' className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>katieharshman.com</a></i></b>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <a
                href="#contact"
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg'
                }`}
              >
                <Mail size={20} />
                <span>Contact</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pie1011"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                  darkMode 
                    ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                }`}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/pie1011"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg'
                }`}
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
                { href: '#experience', label: 'Experience', icon: User },
                { href: '#skills', label: 'Skills', icon: Code },
                { href: '#education', label: 'Education', icon: GraduationCap }
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700' 
                      : 'bg-white/70 text-gray-700 hover:bg-white shadow-md'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Portfolio Projects
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore a selection of my Project Management, HR Learning & Development, and Web Development work.
            </p>
               <p className="mt-4">
                <b><i>NOTE: These are just a few portfolio samples. For my most up-to-date collection, please visit <a href='https://www.katieharshman.com#portfolio' target='_blank' rel='noopener noreferrer' className={`text-blue-500 hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>katieharshman.com</a></i></b>
              </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'pm', label: 'Project Management' },
              { key: 'hr', label: 'HR L&D' },
              { key: 'web', label: 'Web Development' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActivePortfolioFilter(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                  activePortfolioFilter === key
                    ? darkMode 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-600 text-white shadow-lg'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredPortfolio().map((project, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-gray-800 shadow-gray-900/20' 
                    : 'bg-white shadow-lg'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'Project Management'
                      ? 'bg-blue-500 text-white'
                      : project.category === 'HR Learning & Development'
                      ? 'bg-purple-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}>
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                          darkMode 
                            ? 'bg-gray-700 text-white hover:bg-gray-600' 
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                        darkMode 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <ExternalLink size={16} />
                      <span>{project.githubUrl ? 'View' : 'View Project'}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Experience Timeline
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My professional journey spanning technology, education, and business operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experienceData.map((job, index) => (
              <div key={index} className="relative mb-8">
                {/* Timeline line */}
                {index < experienceData.length - 1 && (
                  <div className={`absolute left-6 top-16 w-px h-full ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`} />
                )}
                
                <div className="flex">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-500'
                  } text-white font-bold mr-6`}>
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 rounded-2xl p-6 transition-all ${
                    darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {job.role}
                        </h3>
                        <p className={`text-lg font-medium ${
                          darkMode ? 'text-blue-300' : 'text-blue-600'
                        }`}>
                          {job.company}
                        </p>
                      </div>
                      <div className={`flex items-center space-x-2 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Calendar size={16} />
                        <span>{job.dates}</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setExpandedTimelineItem(
                        expandedTimelineItem === index ? null : index
                      )}
                      className={`flex items-center space-x-2 text-sm font-medium mb-4 transition-colors ${
                        darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      {expandedTimelineItem === index ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      <span>{expandedTimelineItem === index ? 'Hide' : 'Show'} Details</span>
                    </button>
                    
                    {expandedTimelineItem === index && (
                      <ul className={`space-y-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {job.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              darkMode ? 'bg-blue-400' : 'bg-blue-500'
                            }`} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Skills Explorer
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              My skills bridge the gap between technical execution and strategic management.
            </p>
          </div>

          {/* Skill Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category as SkillCategory)}
                className={`px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                  activeSkillCategory === category
                    ? darkMode 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-600 text-white shadow-lg'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skillsData[activeSkillCategory].map((skill: string, index: number) => (
              <div
                key={index}
                className={`p-4 rounded-xl text-center font-medium transition-all hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* Formal Education */}
            <div className={`rounded-2xl p-8 transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${
                  darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-600'
                }`}>
                  <GraduationCap size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Formal Education
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className={`font-bold text-lg ${
                    darkMode ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    West Valley College, Saratoga, CA
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Associate of Arts - Liberal Studies, Social and Behavioral Sciences emphasis
                  </p>
                </div>
                
                <div>
                  <h4 className={`font-bold text-lg ${
                    darkMode ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    Calbright College, Sacramento, CA
                  </h4>
                  <ul className={`list-disc list-inside space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li>Certificate - HR Learning & Development (In Progress)</li>
                    <li>Certificate - Project Management (Jan 2025)</li>
                    <li>Certificate - Data Analysis (Jun 2025)</li>
                    <li>Certificate - CRM Platform Management (Jan 2024)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Professional Development */}
            <div className={`rounded-2xl p-8 transition-all hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl mr-4 ${
                  darkMode ? 'bg-purple-900/30 text-purple-300' : 'bg-purple-100 text-purple-600'
                }`}>
                  <Award size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Professional Development
                </h3>
              </div>
              
              <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <div>
                  <h4 className="font-semibold">Salesforce:</h4>
                  <p className="text-sm">Business Admin Specialist, Security Specialist, Apex Specialist, Approval Process Specialist & more!</p>
                  <a 
                    href="https://trailblazer.me/id/katharineharshman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm hover:underline ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  >
                    View Trailhead Profile →
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold">Udemy:</h4>
                  <p className="text-sm">Clean Code, Software Testing, Business Analyst</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">Codecademy:</h4>
                  <p className="text-sm">Python Web Apps with Flask, Intro to DevOps</p>
                </div>
                
                <div>
                  <h4 className="font-semibold">FreeCodeCamp:</h4>
                  <p className="text-sm">Responsive Web Design, JS Algorithms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a question or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a
              href="https://www.katieharshman.com#contact"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                darkMode 
                  ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-lg'
              }`}
            >
              <Mail size={20} />
              <span>Contact via katieharshman.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pie1011"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 ${
                darkMode 
                  ? 'bg-blue-900 text-blue-300 hover:bg-blue-800' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 shadow-lg'
              }`}
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${
        darkMode 
          ? 'bg-gray-900 border-gray-800 text-gray-400' 
          : 'bg-white border-gray-200 text-gray-600'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Katie Harshman. Interactive resume designed to showcase skills and experience.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://www.katieharshman.com/bridge-builder.html" 
              className={`text-sm hover:underline ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bridge Builder Stories
            </a>
            <a 
              href="https://www.katieharshman.com/hr-portfolio.html" 
              className={`text-sm hover:underline ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              HR L&D Samples
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernPortfolio;