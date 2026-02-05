'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import FooterContact from '@/components/FooterContact';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Student Record Management System (SRMS)',
    description: 'A 4th semester project that implements a comprehensive student record management system. Built with Java for backend logic, HTML and CSS for frontend styling, and JavaScript for interactivity. Features full CRUD operations for student records.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    link: 'https://github.com/Nir010/SRMS',
    image: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Java Lab Exam Programs',
    description: 'Collection of fundamental database programs covering essential SQL operations including SELECT queries, INSERT, UPDATE, and DELETE operations. Demonstrates core database manipulation concepts required for BCA studies.',
    technologies: ['Java', 'SQL', 'Database'],
    link: 'https://github.com/Nir010/Java-Lab-Exam',
    image: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Web Application Projects',
    description: 'Various web application projects showcasing HTML, CSS, and responsive design principles. These projects demonstrate frontend development skills and modern web design practices.',
    technologies: ['HTML', 'CSS', 'Web Design'],
    link: 'https://github.com/Nir010/webapplication',
    image: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  },
  {
    id: 4,
    title: 'Java Practical Programs',
    description: 'Comprehensive collection of practical Java programming exercises covering fundamental concepts, object-oriented programming, and various algorithms. Includes solutions for common programming problems and design patterns.',
    technologies: ['Java', 'OOP', 'Algorithms'],
    link: 'https://github.com/Nir010/java-practial',
    image: 'bg-gradient-to-br from-orange-500 to-orange-600',
  },
]

const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'C++', 'SQL'],
  'Web Technologies': ['React.js', 'Next.js', 'Node.js', 'Express.js', 'HTML/CSS', 'Tailwind CSS'],
  'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'AWS'],
}

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Tech Solutions Inc.',
    period: 'June 2023 - August 2023',
    description: 'Developed responsive web applications using React and Tailwind CSS. Collaborated with senior developers on API integration and database optimization.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'January 2022 - Present',
    description: 'Created custom websites for small businesses and startups. Handled full-stack development from design to deployment.',
  },
]

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Niraj Adhakari
              </h1>
              <p className="text-xl text-muted-foreground mt-2">BCA Student @ Schemes College</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate computer applications developer focused on building efficient, scalable web applications and software solutions. I combine strong problem-solving skills with modern web technologies to create impactful digital experiences.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="mailto:your.email@example.com">
                <Button className="gap-2">
                  <Mail size={18} />
                  Get in Touch
                </Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline">View My Work</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder-user.jpg"
                alt="Niraj Adhakari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a BCA student at Schemes College, deeply interested in full-stack web development and software engineering. My academic journey has equipped me with strong fundamentals in computer science and practical experience in modern development frameworks.
              </p>
              <p>
                Currently, I'm building projects with React, Next.js, and Node.js, focusing on creating user-friendly applications that solve real-world problems. I believe in writing clean, maintainable code and continuously learning emerging technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-2">Technologies</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-2">Dedication</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="p-6 border-l-4 border-primary">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 ${project.image}`} />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <Button variant="ghost" className="gap-2 group">
                      View Project
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="font-bold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <Link href="https://github.com/Nir010" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github size={20} />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin size={20} />
              </Button>
            </Link>
            
        </div>
      </section>

      {/* Footer */}
{/* Footer */}
<FooterContact />
    </main>
  )
}
