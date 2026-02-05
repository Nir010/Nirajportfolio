'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import FooterContact from '@/components/FooterContact'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react'

/* -------------------- DATA -------------------- */

const projects = [
  {
    id: 1,
    title: 'Student Record Management System (SRMS)',
    description:
      'A 4th semester project implementing a student record management system with full CRUD operations.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Nir010/SRMS',
    image: 'bg-gradient-to-br from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Java Lab Exam Programs',
    description:
      'Collection of Java + SQL lab programs covering SELECT, INSERT, UPDATE, and DELETE operations.',
    technologies: ['Java', 'SQL', 'Database'],
    link: 'https://github.com/Nir010/Java-Lab-Exam',
    image: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Web Application Projects',
    description:
      'Frontend projects showcasing responsive design and modern HTML/CSS practices.',
    technologies: ['HTML', 'CSS', 'Web Design'],
    link: 'https://github.com/Nir010/webapplication',
    image: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  },
  {
    id: 4,
    title: 'Java Practical Programs',
    description:
      'Comprehensive Java practical programs covering OOP concepts and algorithms.',
    technologies: ['Java', 'OOP', 'Algorithms'],
    link: 'https://github.com/Nir010/java-practial',
    image: 'bg-gradient-to-br from-orange-500 to-orange-600',
  },
]

const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript', 'C++', 'SQL'],
  'Web Technologies': [
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'HTML/CSS',
    'Tailwind CSS',
  ],
  Databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'AWS'],
}

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Tech Solutions Inc.',
    period: 'June 2023 - August 2023',
    description:
      'Developed responsive web applications using React and Tailwind CSS.',
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'January 2022 - Present',
    description:
      'Built and deployed websites for small businesses and startups.',
  },
]

/* -------------------- COMPONENT -------------------- */

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* -------------------- NAVBAR -------------------- */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-xl">Portfolio</span>

          <div className="hidden md:flex gap-6">
            {['about', 'experience', 'projects', 'skills', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="hover:text-primary transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              )
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t px-4 py-4 space-y-3">
            {['about', 'experience', 'projects', 'skills', 'contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left"
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* -------------------- HERO -------------------- */}
      <section className="pt-32 pb-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-5xl font-bold">Niraj Adhakari</h1>
          <p className="text-muted-foreground mt-2">
            BCA Student @ Schemes College
          </p>

          <p className="mt-6 text-muted-foreground">
            Passionate developer focused on building scalable web applications
            and software solutions.
          </p>

          <div className="flex gap-4 mt-6">
            <Link href="mailto:your.email@example.com">
              <Button>
                <Mail className="mr-2" size={18} />
                Get in Touch
              </Button>
            </Link>
            <Button variant="outline" onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/placeholder-user.jpg"
            alt="Niraj Adhakari"
            className="w-80 h-80 object-cover rounded-lg shadow"
          />
        </div>
      </section>

      {/* -------------------- ABOUT -------------------- */}
      <section id="about" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-muted-foreground">
            <p>
              I’m a BCA student with a strong interest in full-stack development
              and software engineering.
            </p>
            <p>
              I enjoy building clean, maintainable applications using modern
              frameworks like React and Next.js.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ['10+', 'Projects'],
              ['3+', 'Years Experience'],
              ['15+', 'Technologies'],
              ['100%', 'Dedication'],
            ].map(([num, label]) => (
              <Card key={label} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary">{num}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- EXPERIENCE -------------------- */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <Card key={exp.role} className="p-6 border-l-4 border-primary">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground">{exp.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* -------------------- PROJECTS -------------------- */}
      <section id="projects" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className={`h-48 ${project.image}`} />
                <div className="p-6">
                  <h3 className="font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={project.link} target="_blank">
                    <Button variant="ghost" className="mt-4">
                      View Project <ExternalLink className="ml-2" size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- SKILLS -------------------- */}
      <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3 className="font-bold mb-3">{category}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {list.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- CONTACT -------------------- */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out for projects or opportunities.
          </p>

          <div className="flex justify-center gap-6">
            <Link href="https://github.com/Nir010" target="_blank">
              <Button variant="outline" size="icon">
                <Github />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------- FOOTER -------------------- */}
      <FooterContact />
    </main>
  )
}
