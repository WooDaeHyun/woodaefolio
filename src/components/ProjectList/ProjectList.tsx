import ProjectPostCard from './ProjectPostCard';
import { projectListInfo } from '@/data/projectListInfo';

const ProjectList = () => {
  return (
    <section
      id="PROJECT"
      className="text m-auto max-w-[1300px] py-[130px] max-[768px]:px-3 max-[768px]:py-[50px]"
    >
      <h1 className="text-lg font-bold">My Project</h1>
      <div className="flex flex-wrap justify-between">
        {projectListInfo.map(value => {
          const {
            title,
            description,
            imageSubject,
            serviceUrl,
            isProceeding,
            id
          } = value;
          return (
            <ProjectPostCard
              key={id}
              title={title}
              description={description}
              imageSubject={imageSubject}
              serviceUrl={serviceUrl}
              isProceeding={isProceeding}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
