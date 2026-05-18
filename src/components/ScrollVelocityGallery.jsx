import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react"

export default function ScrollVelocityGallery({ projects }) {
  const { scrollY } = useScroll()

  // Track scroll velocity
  const velocity = useVelocity(scrollY)

  // Smooth velocity for cinematic movement
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  })

  // Map velocity → transforms
  const rotateX = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [-25, 0, 25]
  )

  const rotateY = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [15, 0, -15]
  )

  const z = useTransform(
    smoothVelocity,
    [-3000, 0, 3000],
    [120, 0, 120]
  )

  return (
    <div className="scroll-velocity-container">
      <div className="gallery-sticky">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="gallery-wrapper"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              z={z}
              totalProjects={projects.length}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, z, totalProjects }) {
  // Offset cards vertically based on their position
  const offset = (index - Math.floor(totalProjects / 2)) * 80

  const translateY = useTransform(
    z,
    [0, 120],
    [0, offset]
  )

  return (
    <motion.div
      style={{
        z,
        y: translateY,
      }}
      whileHover={{
        scale: 1.05,
        z: 180,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="project-card"
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-card-image"
      />

      <div className="project-card-overlay" />

      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        {project.subtitle && (
          <p className="project-card-subtitle">{project.subtitle}</p>
        )}
      </div>
    </motion.div>
  )
}
