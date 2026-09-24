import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { CopyEmailButton, ScrollButton } from '@/components/PortfolioActions'
import CinematicIntro from '@/components/CinematicIntro'
import ScrollScenes from '@/components/ScrollScenes'

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
    kicker: 'Business website, TypeScript',
    copy: 'A website for a UAE business setup firm, covering company setup, tax, visas, banking, and ongoing corporate services.',
    href: 'https://www.zenesiscorp.com',
    image: '/images/project-zenesis.webp',
    visual: 'image'
  },
  {
    number: '02',
    title: 'Upside',
    kicker: 'iOS marketplace, Swift',
    copy: 'An iOS marketplace concept for creators and brands in the GCC to find and manage partnerships.',
    href: 'https://github.com/nikdmello/upside',
    image: '/logos/upside_logo.png',
    visual: 'upside'
  },
  {
    number: '03',
    title: 'Source of Truth',
    kicker: 'Review workspace, TypeScript',
    copy: 'A workflow for turning scattered claim files into structured records that reviewers can validate against a source of truth.',
    href: 'https://source-of-truth-lovat.vercel.app/',
    visual: 'source'
  }
]

const stack = ['TypeScript', 'JavaScript', 'Java', 'C# / .NET', 'Python', 'SQL', 'AWS', 'Node.js', 'React', 'Next.js', 'DynamoDB', 'Docker']

const photographs = [
  { src: '/images/IMG_0673.webp', location: 'Lower Antelope Canyon', date: 'Jun 2025', className: 'photo-feature' },
  { src: '/images/IMG_6650.webp', location: 'Chicago, IL', date: 'Apr 2025', className: 'photo-tall' },
  { src: '/images/IMG_8864.webp', location: 'Amman Citadel, Jordan', date: 'Oct 2025', className: 'photo-amman' },
  { src: '/images/IMG_7280.webp', location: 'Horseshoe Canyon', date: 'Jun 2025', className: 'photo-horseshoe' },
  { src: '/images/IMG_8807.webp', location: 'Petra, Jordan', date: 'Oct 2025', className: 'photo-petra' }
]

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ScrollScenes />
      <CinematicIntro>
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <h2>Backend systems, cloud infrastructure, and <em>product engineering.</em></h2>
          <p className="intro">I&apos;m Nikhil, a software engineer based in Dubai. I work across backend systems, AWS, and product engineering. I like understanding how complicated systems work and making them more reliable and easier to use.</p>
          <div className="actions">
            <ScrollButton className="primary" targetId="work">View my work <ArrowDown /></ScrollButton>
            <a className="text-link" href="https://github.com/nikdmello" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          </div>
          <div className="credentials" aria-label="Location and areas of work">
            <span>Dubai, UAE</span>
            <span>Backend systems</span>
            <span>AWS and cloud</span>
            <span>Product engineering</span>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image src="/images/PFP.webp" alt="Nikhil D'Mello" fill sizes="(max-width: 800px) 88vw, 430px" />
          </div>
        </div>
      </section>
      </CinematicIntro>

      <div className="scene-track" data-scroll-track="experience">
      <section className="experience shell scene-stage" id="experience" data-scroll-stage>
        <div className="section-intro">
          <p className="section-tag">01 / Experience</p>
          <h2>Where I&apos;ve <em>worked.</em></h2>
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article key={role.company}>
              <time>{role.period}</time>
              <div>
                <p className="role-company">{role.company}</p>
                <h3>{role.title}</h3>
                <p>{role.copy}</p>
                {role.impact && <p className="impact"><span>Impact:</span>{role.impact}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
      </div>

      <div className="scene-track scene-track-long" data-scroll-track="work">
      <section className="work scene-stage" id="work" data-scroll-stage>
        <div className="shell">
          <p className="section-tag light">02 / Selected work</p>
          <div className="work-head">
            <h2>Ideas made <em>useful.</em></h2>
            <p>I learn by building. These are a few projects I&apos;ve worked on across web, mobile, and internal tools.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a href={project.href} target="_blank" rel="noreferrer" key={project.title} className={`project-card project-story project-story-${index + 1}`}>
                <div className={`project-visual project-visual-${project.visual}`}>
                  {project.image ? (
                    <Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 800px) 100vw, 33vw" />
                  ) : (
                    <div className="source-preview" aria-hidden="true">
                      <span className="source-file">CSV</span>
                      <div><strong>Source of Truth</strong><small>12 claims ready to review</small></div>
                      <span className="source-status">Validated</span>
                    </div>
                  )}
                </div>
                <div className="project-story-copy">
                  <div className="project-story-meta"><span>{project.number}</span><p>{project.kicker}</p></div>
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <span className="project-story-link">View project <ArrowUpRight /></span>
                </div>
              </a>
            ))}
          </div>
          <div className="open-source-callout">
            <div><p className="section-tag light">Open source</p><h3>VS Code contributions</h3></div>
            <p>Two contributions to VS Code, both merged and released. One fixed screencast mode behavior and the other fixed Markdown preview parsing.</p>
            <a className="text-link light-link" href="https://github.com/microsoft/vscode/pulls?q=is%3Apr+author%3Anikdmello" target="_blank" rel="noreferrer">View contributions <ArrowUpRight /></a>
          </div>
        </div>
      </section>
      </div>

      <div className="scene-track scene-track-long" data-scroll-track="beyond">
      <section className="beyond shell scene-stage" id="beyond" data-scroll-stage>
        <div className="beyond-head">
          <div>
            <p className="section-tag">03 / Beyond the code</p>
            <h2>Places I&apos;ve <em>photographed.</em></h2>
          </div>
          <p>I take photos when I travel. These are a few places I wanted to remember.</p>
        </div>
        <div className="photo-grid">
          {photographs.map((photo, index) => (
            <figure className={photo.className} key={photo.src}>
              <Image
                src={photo.src}
                alt={`${photo.location}, photographed by Nikhil D'Mello`}
                fill
                sizes={index < 3
                  ? '(max-width: 480px) calc(100vw - 32px), (max-width: 800px) calc(50vw - 24px), (max-width: 1230px) 33vw, 393px'
                  : '(max-width: 480px) calc(100vw - 32px), (max-width: 800px) calc(50vw - 24px), (max-width: 1230px) 50vw, 590px'}
              />
              <figcaption><span>{photo.location}</span><time>{photo.date}</time></figcaption>
            </figure>
          ))}
        </div>
      </section>
      </div>

      <div className="scene-track" data-scroll-track="about">
      <section className="about shell scene-stage" id="about" data-scroll-stage>
        <div>
          <p className="section-tag">04 / About</p>
          <h2>About <em>me</em></h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m a software engineer based in Dubai. Most of my work has been around backend services, cloud infrastructure, data, and internal tools. I like understanding how a system works, finding where it gets messy, and building something simpler.</p>
          <p>Outside work, I&apos;m usually building side projects, learning something new, traveling, or taking photos.</p>
          <div className="stack" aria-label="Technical skills">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
      </div>

      <div className="scene-track" data-scroll-track="contact">
      <section className="contact scene-stage" data-scroll-stage>
        <div className="shell contact-inner">
          <p className="section-tag">Contact</p>
          <h2>Want to <em>talk?</em></h2>
          <p>If you&apos;re building something interesting, want to compare notes, or just want to say hi, send me an email.</p>
          <div className="contact-actions">
            <CopyEmailButton />
            <a className="social" href="https://linkedin.com/in/nikdmello" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a className="social" href="https://github.com/nikdmello" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
      </section>
      </div>

    </main>
  )
}
