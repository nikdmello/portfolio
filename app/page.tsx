import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { CopyEmailButton, ScrollButton } from '@/components/PortfolioActions'
import RevealObserver from '@/components/RevealObserver'

const roles = [
  {
    period: '2023–2026',
    company: 'Associa',
    title: 'Software Developer',
    copy: 'Built backend services and internal platforms for TownSq, including deployment automation, authentication, and event-driven workflows in AWS.',
    impact: 'Reworked a synchronous workflow to process 10,000+ records per hour and remove timeout failures.'
  },
  {
    period: '2022',
    company: 'ASICS Digital',
    title: 'BI Developer',
    copy: 'Built data pipelines and dashboards for e-commerce reporting, reducing manual reporting work and helping teams track revenue performance.'
  },
  {
    period: '2021',
    company: 'PanAgora Asset Management',
    title: 'DevOps Engineer',
    copy: 'Automated CI/CD for data science workflows, cutting deployment time by 80% and making releases more consistent.'
  }
]

const projects = [
  {
    number: '01',
    title: 'Zenesis',
    type: 'Business website, TypeScript',
    copy: 'A website for a UAE business setup firm, covering company setup, tax, visas, banking, and ongoing corporate services.',
    href: 'https://www.zenesiscorp.com',
    image: '/images/project-zenesis.webp'
  },
  {
    number: '02',
    title: 'Upside',
    type: 'iOS marketplace, Swift',
    copy: 'An iOS marketplace concept for creators and brands in the GCC to find and manage partnerships.',
    href: 'https://github.com/nikdmello/upside',
    image: '/logos/upside_logo.png'
  },
  {
    number: '03',
    title: 'Source of Truth',
    type: 'Review workspace, TypeScript',
    copy: 'A workflow for turning scattered claim files into structured records that reviewers can validate against a source of truth.',
    href: 'https://source-of-truth-lovat.vercel.app/'
  }
]

const contributions = [
  {
    project: 'VS Code',
    date: 'Nov 2025',
    title: 'Markdown preview parsing fix',
    copy: 'Fixed jQuery expressions being incorrectly treated as KaTeX delimiters in Markdown preview.',
    reference: 'PR #269635',
    href: 'https://github.com/microsoft/vscode/pull/269635'
  },
  {
    project: 'VS Code',
    date: 'Mar 2023',
    title: 'Screencast mode shortcut fix',
    copy: 'Fixed keyboard shortcuts displaying incorrectly while using screencast mode.',
    reference: 'PR #176149',
    href: 'https://github.com/microsoft/vscode/pull/176149'
  }
]

const photographs = [
  { src: '/images/IMG_0673.webp', location: 'Lower Antelope Canyon', date: 'Jun 2025' },
  { src: '/images/IMG_6650.webp', location: 'Chicago, IL', date: 'Apr 2025' },
  { src: '/images/IMG_8864.webp', location: 'Amman Citadel, Jordan', date: 'Oct 2025' },
  { src: '/images/IMG_7280.webp', location: 'Horseshoe Canyon', date: 'Jun 2025' },
  { src: '/images/IMG_8807.webp', location: 'Petra, Jordan', date: 'Oct 2025' }
]

const stack = ['TypeScript', 'JavaScript', 'Java', 'C# / .NET', 'Python', 'SQL', 'AWS', 'Node.js', 'React', 'Next.js', 'DynamoDB', 'Docker']

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <RevealObserver />
      <header className="site-header">
        <div className="site-header-inner shell">
          <ScrollButton className="wordmark" targetId="main-content">Nikhil D&apos;Mello</ScrollButton>
          <nav aria-label="Main navigation">
            <ScrollButton targetId="work">Work</ScrollButton>
            <ScrollButton targetId="about">About</ScrollButton>
            <ScrollButton targetId="contact">Contact</ScrollButton>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy reveal-hero" data-reveal>
          <p className="hero-intro">Hi, I&apos;m Nikhil.</p>
          <h1 id="hero-title">I build reliable, scalable software.</h1>
          <p className="intro">I work across backend services, AWS, and product engineering. I like understanding how complicated systems work and making them more reliable and easier to use.</p>
          <div className="actions">
            <ScrollButton className="primary" targetId="work">View my work <ArrowDown /></ScrollButton>
            <a className="text-link" href="https://github.com/nikdmello" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="section shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading reveal-heading" data-reveal>
          <h2 id="experience-title">Where I&apos;ve worked.</h2>
        </div>
        <div className="data-table timeline reveal-table" data-reveal>
          {roles.map((role) => (
            <article key={role.company}>
              <time>{role.period}</time>
              <div className="role-title"><h3>{role.company}</h3><p>{role.title}</p></div>
              <div className="role-copy"><p>{role.copy}</p>{role.impact ? <p className="impact">{role.impact}</p> : null}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-heading reveal-heading" data-reveal><h2 id="work-title">Ideas made useful.</h2></div>
        <div className="data-table projects reveal-table" data-reveal>
          {projects.map((project) => (
            <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span className="project-number">{project.number}</span>
              <div className="project-image">
                {project.image ? <Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 760px) calc(100vw - 32px), 420px" /> : <div className="source-mark" aria-hidden="true">Source<br />of Truth</div>}
              </div>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
              </div>
              <span className="project-type">{project.type}</span>
              <span className="project-link">View <ArrowUpRight /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell" id="open-source" aria-labelledby="open-source-title">
        <div className="section-heading split-heading reveal-heading" data-reveal>
          <h2 id="open-source-title">Open source contributions.</h2>
          <p>Small fixes to tools I use, merged and released.</p>
        </div>
        <div className="data-table contribution-table reveal-table" data-reveal>
          {contributions.map((contribution) => (
            <a className="contribution-row" href={contribution.href} target="_blank" rel="noreferrer" key={contribution.reference}>
              <div className="contribution-project"><span>{contribution.project}</span><time>{contribution.date}</time></div>
              <div className="contribution-copy"><h3>{contribution.title}</h3><p>{contribution.copy}</p></div>
              <span className="contribution-reference">{contribution.reference}</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="section shell" id="photography" aria-labelledby="photography-title">
        <div className="section-heading photography-heading reveal-heading" data-reveal>
          <h2 id="photography-title">Places I&apos;ve photographed.</h2>
          <p>I take photos when I travel. These are a few places I wanted to remember.</p>
        </div>
        <div className="photo-grid">
          {photographs.map((photo, index) => (
            <figure className={`photo-item photo-item-${index + 1}`} data-reveal key={photo.src}>
              <div className="photo"><Image src={photo.src} alt={`${photo.location}, photographed by Nikhil D'Mello`} fill sizes="(max-width: 760px) calc(100vw - 32px), 33vw" /></div>
              <figcaption><span>{photo.location}</span><time>{photo.date}</time></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section about shell" id="about" aria-labelledby="about-title">
        <div className="section-heading reveal-heading" data-reveal><h2 id="about-title">About me.</h2></div>
        <div className="about-copy" data-reveal>
          <p>I&apos;m a software engineer based in Dubai. Most of my work has been around backend services, cloud infrastructure, data, and internal tools. I like understanding how a system works, finding where it gets messy, and building something simpler.</p>
          <p>Outside work, I&apos;m usually building side projects, learning something new, traveling, or taking photos.</p>
          <div className="stack" aria-label="Technical skills">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="contact shell" id="contact" aria-labelledby="contact-title" data-reveal>
        <h2 id="contact-title">Want to talk?</h2>
        <p>If you&apos;re building something interesting, want to compare notes, or just want to say hi, send me an email.</p>
        <div className="contact-actions">
          <CopyEmailButton />
          <a className="social" href="https://linkedin.com/in/nikdmello" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
          <a className="social" href="https://github.com/nikdmello" target="_blank" rel="noreferrer"><Github /> GitHub</a>
        </div>
      </section>
    </main>
  )
}
