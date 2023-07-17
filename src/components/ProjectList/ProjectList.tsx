import Image from 'next/image';
import ProjectPostCard from './ProjectPostCard';
import { projectListInfo } from '@/data/projectListInfo';

const ProjectList = () => {
  return (
    <section>
      <div className="text m-auto max-w-[1300px] py-[100px]">
        <h1 className="text-lg font-bold">My Project</h1>
        <div className="flex flex-wrap justify-between">
          <ProjectPostCard />
          <ProjectPostCard />
          <ProjectPostCard />
          <ProjectPostCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
