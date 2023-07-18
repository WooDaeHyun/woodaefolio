import ProjectDocPostCard from './ProjectDocPostCard';
import { projectDocsInfo } from '@/data/projectDocsInfo';

const ProjectDocs = () => {
  return (
    <section>
      <div className="m-auto h-[100%] max-w-[1300px]">
        <h1 className="text-lg font-bold">My Project Docs</h1>
        {projectDocsInfo.map(value => {
          const {
            projectName,
            postTitle,
            description,
            postUrl,
            githubUrl,
            id
          } = value;
          return (
            <ProjectDocPostCard
              key={id}
              projectName={projectName}
              postTitle={postTitle}
              description={description}
              postUrl={postUrl}
              githubUrl={githubUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectDocs;
