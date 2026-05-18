import { motion } from "motion/react"
import ScrollVelocityGallery from "../components/ScrollVelocityGallery"

const featuredProjects = [
  {
    id: 1,
    title: "DiGiSense",
    subtitle: "Connected Vehicle Telematics Platform",
    image: "/digisense_hero_image.png",
    tags: ["IoT", "Connected Vehicles", "UX Strategy", "Mahindra"],
    metrics: [
      { value: "100K+", label: "Connected Vehicles" },
      { value: "35%", label: "Reduction in Decision Time" },
      { value: "4", label: "Design Systems Built" },
    ],
    href: "#digisense",
  },
  {
    id: 2,
    title: "NETSCOUT PFS ONE",
    subtitle: "Enterprise Network Visibility Platform",
    image: "/digisense_hero_image.png",
    tags: ["Cybersecurity", "Enterprise SaaS", "Systems Design", "NETSCOUT"],
    metrics: [
      { value: "Global", label: "Enterprise Data Centres" },
      { value: "3", label: "Roles Unified in One Platform" },
      { value: "Legacy", label: "System Completely Redesigned" },
    ],
    href: "#pfsone",
  },
]

const notableProjects = [
  {
    id: 3,
    number: "03",
    title: "Innoplexus Research Intelligence",
    company: "Innoplexus · 2022",
    role: "Lead UX Designer",
    tags: ["Life Sciences", "AI"],
    metrics: [
      "AI-assisted drug discovery workflows",
      "Complex data visualisation for researchers",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Extentia Fintech Platform",
    company: "Extentia · 2020",
    role: "UX Designer",
    tags: ["Fintech", "B2B SaaS"],
    metrics: [
      "End-to-end product design for financial services",
      "Multi-role dashboard with real-time analytics",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Ogee Studio Design System",
    company: "Ogee Studio · 2021",
    role: "UX & Product Designer",
    tags: ["Design Systems", "Brand"],
    metrics: [
      "Token-based design system from scratch",
      "Component library across 3 digital products",
    ],
  },
]

export default function Work() {
  return (
    <main className="work-page">
      {/* PAGE HEADER */}
      <header className="work-page-header">
        <div className="work-page-header-inner">
          <motion.span
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0 }}
            className="work-eyebrow"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="work-page-title"
          >
            Selected Work
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="work-header-rule"
          />
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="work-header-meta"
          >
            5 projects &nbsp;·&nbsp; UX Strategy &nbsp;·&nbsp; Systems Design &nbsp;·&nbsp; AI/ML
          </motion.p>
        </div>
      </header>

      {/* FEATURED PROJECTS GALLERY */}
      <ScrollVelocityGallery projects={featuredProjects} />

      {/* ALSO NOTABLE SECTION */}
      <section className="also-notable">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="notable-header"
        >
          <h2 className="notable-section-title">Also Notable</h2>
          <p className="notable-section-sub">
            More work worth knowing — detailed case studies coming soon.
          </p>
        </motion.div>

        <div className="notable-grid">
          {notableProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: i * 0.08 }}
              className="notable-card"
            >
              <div className="notable-card-header">
                <span className="notable-card-num">{project.number}</span>
                <div className="notable-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="notable-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="notable-card-name">{project.title}</h3>
              <p className="notable-card-company">{project.company}</p>
              <p className="notable-card-role">{project.role}</p>
              <div className="notable-card-metrics">
                {project.metrics.map((metric) => (
                  <span key={metric} className="notable-metric-line">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
