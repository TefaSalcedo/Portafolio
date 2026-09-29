import ProjectCard from './ProjectCard';

function ProjectGrid({ proyectos }) {
  return (
    <div className="grid">
      {proyectos.map((proyecto) => (
        <ProjectCard key={proyecto.nombre} proyecto={proyecto} />
      ))}
    </div>
  );
}

export default ProjectGrid;
