import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowLeft,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "AXION",
    type: "AI DESKTOP ASSISTANT",
    description:
      "A personal AI assistant concept designed to connect intelligence with everyday computer workflows, files, tools and automation.",
    tags: ["Python", "AI", "Ollama", "Automation"],
    link: "https://github.com/Aryan-Shelar/axion",
  },
  {
    number: "02",
    title: "KKW CAMPUS NAVIGATOR",
    type: "WEB EXPERIENCE",
    description:
      "An interactive campus navigation experience designed to help students find classrooms, practical labs and important college locations.",
    tags: ["React", "Maps", "UI/UX", "Web"],
    link: "#",
  },
  {
    number: "03",
    title: "BUSINESS AI SYSTEMS",
    type: "AI AUTOMATION",
    description:
      "AI-powered workflows and agent ideas designed to reduce repetitive business work and connect research, leads, APIs and automation.",
    tags: ["AI Agents", "n8n", "APIs", "Automation"],
    link: "#",
  },
];

const skills = [
  "Python",
  "AI Agents",
  "Prompt Engineering",
  "n8n Automation",
  "APIs",
  "Git & GitHub",
  "HTML / CSS",
  "JavaScript",
  "LLMs",
  "Web Development",
];

const pages = [
  { id: "about", number: "01", label: "ABOUT" },
  { id: "work", number: "02", label: "WORK" },
  { id: "experience", number: "03", label: "EXPERIENCE" },
  { id: "skills", number: "04", label: "SKILLS" },
  { id: "contact", number: "05", label: "CONTACT" },
];

function App() {
  const [intro, setIntro] = useState(0);
  const [page, setPage] = useState("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash && pages.some((item) => item.id === hash)) {
      setIntro(2);
      setPage(hash);
    }
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (
        (event.key === "Enter" || event.key === " ") &&
        intro < 2
      ) {
        event.preventDefault();
        setIntro((value) => value + 1);
      }

      if (event.key === "Escape" && intro === 2) {
        goHome();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [intro]);

  const enterIntro = () => {
    if (intro < 2) {
      setIntro((value) => value + 1);
    }
  };

  const openPage = (id) => {
    setPage(id);
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo(0, 0);
  };

  function goHome() {
    setPage("home");
    window.history.replaceState(null, "", "#home");
    window.scrollTo(0, 0);
  }

  /* =====================================================
     WELCOME
  ===================================================== */

  if (intro === 0) {
    return (
      <div className="welcome-screen" onClick={enterIntro}>
        <div className="welcome-top">
          <span>ARYAN SHELAR</span>
          <span>PORTFOLIO / 2026</span>
        </div>

        <div className="welcome-center">
          <div className="tiny-label">AI / AUTOMATION / WEB</div>

          <h1>
            WEL
            <span>COME</span>
          </h1>

          <div className="welcome-sub">
            CLICK TO ENTER
            <span>↘</span>
          </div>
        </div>

        <div className="welcome-bottom">
          <span>01 / 03</span>
          <span>INTERACTIVE PORTFOLIO</span>
        </div>
      </div>
    );
  }

  /* =====================================================
     HELLO
  ===================================================== */

  if (intro === 1) {
    return (
      <div className="hello-screen" onClick={enterIntro}>
        <div className="hello-top">
          <span>HELLO.</span>

          <span>ARYAN SHELAR</span>
        </div>

        <div className="hello-main">
          <div className="hello-small">AI BUILDER / DEVELOPER</div>

          <h1>
            ARYAN
            <span>SHELAR</span>
          </h1>

          <div className="hello-description">
            I BUILD AI SYSTEMS,
            <br />
            AUTOMATIONS AND
            <br />
            DIGITAL EXPERIENCES.
          </div>

          <div className="hello-enter">
            ENTER THE EXPERIENCE
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="hello-bottom">
          <span>02 / 03</span>

          <span>CLICK ANYWHERE</span>
        </div>
      </div>
    );
  }

  /* =====================================================
     HOME / HUB
  ===================================================== */

  if (page === "home") {
    return (
      <main className="hub-page">
        <header className="hub-header">
          <button className="hub-brand" onClick={goHome}>
            AS<span>.</span>
          </button>

          <div className="hub-nav">
            {pages.slice(0, 2).map((item) => (
              <button
                key={item.id}
                onClick={() => openPage(item.id)}
              >
                <span>{item.number}</span>
                {item.label}
              </button>
            ))}

            <button className="hub-menu-label">
              MENU
              <span>↘</span>
            </button>
          </div>
        </header>

        <section className="hub-hero">
          <div className="hub-eyebrow">
            AI BUILDER — DEVELOPER — AUTOMATION
          </div>

          <h1 className="hub-big-title">
            ARYAN
            <span>SHELAR.</span>
          </h1>

          <div className="hub-outline">
            <span>AI</span>
            <span>AI</span>
            <span>AI</span>
          </div>

          <div className="hub-copy">
            I build intelligent systems,
            <br />
            automation workflows and
            <br />
            modern digital experiences.
          </div>

          <div className="hub-rule"></div>

          <div className="hub-intro-line">
            <span>
              AN INDEPENDENT BUILDER
              <br />
              EXPLORING WHAT AI CAN DO.
            </span>

            <span className="hub-arrow">↓</span>
          </div>
        </section>

        <section className="home-menu-section">
          <div className="home-menu-heading">
            <span>EXPLORE</span>
            <span>THE SPACE</span>
          </div>

          <div className="home-menu-grid">
            {pages.map((item) => (
              <button
                key={item.id}
                onClick={() => openPage(item.id)}
                className="home-menu-item"
              >
                <span className="home-menu-number">
                  {item.number}
                </span>

                <span className="home-menu-label">
                  {item.label}
                </span>

                <ArrowUpRight size={20} />
              </button>
            ))}
          </div>
        </section>

        <footer className="hub-footer">
          <span>03 / 03</span>
          <span>SCROLL LESS. EXPLORE MORE.</span>
          <span>ARYAN SHELAR © 2026</span>
        </footer>
      </main>
    );
  }

  /* =====================================================
     INTERNAL PAGES
  ===================================================== */

  return (
    <main className="inner-page">
      <header className="inner-header">
        <button className="inner-brand" onClick={goHome}>
          AS<span>.</span>
        </button>

        <div className="inner-title">
          {pages.find((item) => item.id === page)?.label}
        </div>

        <button className="back-button" onClick={goHome}>
          <ArrowLeft size={16} />
          HOME
        </button>
      </header>

      <nav className="inner-corner-nav">
        {pages.map((item) => (
          <button
            key={item.id}
            onClick={() => openPage(item.id)}
            className={page === item.id ? "active" : ""}
          >
            <span>{item.number}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* ABOUT */}

      {page === "about" && (
        <section className="content-page about-content">
          <div className="page-index">01 / ABOUT</div>

          <div className="about-top">
            <h1>
              ABOUT
              <span>ARYAN</span>
            </h1>

            <div className="about-lead">
              <p>
                I'm Aryan Shelar — a first-year AI & Data Science
                student and developer exploring the intersection of
                artificial intelligence, automation and software.
              </p>
            </div>
          </div>

          <div className="cream-divider"></div>

          <div className="about-grid">
            <div>
              <div className="small-heading">THE APPROACH</div>
              <h2>
                LEARN.
                <br />
                BUILD.
                <br />
                <span>ITERATE.</span>
              </h2>
            </div>

            <div className="serif-copy">
              <p>
                I like turning messy problems into simple systems.
                My focus is on building useful technology rather than
                technology for the sake of technology.
              </p>

              <p>
                I'm particularly interested in AI agents,
                automation workflows, APIs, web development and
                software experiences that feel intentional.
              </p>

              <p>
                I learn primarily by building projects, experiments,
                hackathon ideas and practical systems.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* WORK */}

      {page === "work" && (
        <section className="content-page work-content">
          <div className="page-index">02 / WORK</div>

          <div className="work-intro">
            <h1>
              SELECTED
              <span>WORK.</span>
            </h1>

            <p>
              Projects, experiments and systems I've been building
              while exploring AI, automation and the web.
            </p>
          </div>

          <div className="project-list-reference">
            {projects.map((project) => (
              <article
                className="reference-project"
                key={project.number}
              >
                <div className="reference-number">
                  {project.number}
                </div>

                <div className="reference-project-main">
                  <div className="project-type-reference">
                    {project.type}
                  </div>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="reference-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="reference-open"
                >
                  OPEN
                  <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* EXPERIENCE */}

      {page === "experience" && (
        <section className="content-page experience-content">
          <div className="page-index">03 / EXPERIENCE</div>

          <div className="experience-intro">
            <h1>
              THE
              <span>JOURNEY.</span>
            </h1>

            <p>
              A timeline of learning, building and experimenting.
            </p>
          </div>

          <div className="experience-list">
            <article>
              <div className="experience-meta">
                2026 — NOW
              </div>

              <div>
                <h2>AI & Data Science Student</h2>
                <p>
                  Exploring programming, artificial intelligence,
                  data science, automation and software development.
                </p>
              </div>
            </article>

            <article>
              <div className="experience-meta">
                PROJECTS
              </div>

              <div>
                <h2>Building AI Systems</h2>
                <p>
                  Working on AXION, AI agents, automation workflows
                  and practical developer projects.
                </p>
              </div>
            </article>

            <article>
              <div className="experience-meta">
                HACKATHONS
              </div>

              <div>
                <h2>Learning Through Challenges</h2>
                <p>
                  Exploring real-world problem solving through
                  hackathons, team projects and technical experiments.
                </p>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* SKILLS */}

      {page === "skills" && (
        <section className="content-page skills-content">
          <div className="page-index">04 / SKILLS</div>

          <div className="skills-intro">
            <h1>
              MY
              <span>TOOLKIT.</span>
            </h1>

            <p>
              Technologies and concepts I'm currently learning,
              using and exploring.
            </p>
          </div>

          <div className="skills-reference-grid">
            {skills.map((skill, index) => (
              <div className="reference-skill" key={skill}>
                <span>0{index + 1}</span>
                <h2>{skill}</h2>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACT */}

      {page === "contact" && (
        <section className="contact-reference-page">
          <div className="contact-background-word">
            CONTACT
          </div>

          <div className="contact-reference-inner">
            <div className="page-index">
              05 / CONTACT
            </div>

            <div className="contact-copy-reference">
              <div className="small-heading light">
                LET'S BUILD SOMETHING
              </div>

              <h1>
                HAVE AN
                <span>IDEA?</span>
              </h1>

              <p>
                I'm open to interesting projects, collaborations,
                experiments and opportunities where technology can
                solve a real problem.
              </p>

              <a
                href="mailto:shelararyan528@gmail.com"
                className="contact-reference-button"
              >
                START A CONVERSATION
                <ArrowUpRight size={18} />
              </a>

              <div className="reference-socials">
                <a
                  href="https://github.com/Aryan-Shelar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GITHUB
                </a>

                <a
                  href="https://linkedin.com/in/aryan-shelar-28bb5440b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LINKEDIN
                </a>

                <a
                  href="https://www.instagram.com/aryan._.shelar/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>

                <a href="mailto:shelararyan528@gmail.com">
                  <Mail size={16} />
                  EMAIL
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="inner-footer">
        <span>ARYAN SHELAR © 2026</span>
        <span>{page.toUpperCase()}</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);