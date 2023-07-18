import Image from 'next/image';
import arrowRight from '/public/icons/arrowRight.svg';
import githubLogo from '/public/icons/githubLogo.svg';

interface ProjectDocPostCardProps {
  projectName: string;
  postTitle: string;
  description: string;
  githubUrl: string;
  postUrl: string;
}

const ProjectDocPostCard = ({
  projectName,
  postTitle,
  description,
  githubUrl,
  postUrl
}: ProjectDocPostCardProps) => {
  return (
    <div className="mt-[30px] flex flex-col gap-5 border-b-[2px] border-edge-fontColor py-[25px]">
      <h1 className="mb-[15px] text-lg text-banner-fontColor">
        {postTitle}
        <span className="text-black">&nbsp;{projectName}</span>
      </h1>
      <div>
        <div className="rounded-md bg-banner-bgColor p-[15px] shadow-md">
          <div className="flex gap-2">
            <Image
              className="mt-[1.5px]"
              src={githubLogo}
              width={20}
              height={20}
              alt="githubLogo"
              style={{ width: '20px', height: '20px' }}
            />
            <a href={githubUrl}>{`${projectName} Repo`}</a>
          </div>
          <p className="text-base font-thin">&nbsp;&nbsp;{description}</p>
        </div>
      </div>
      <a href={postUrl} className="group flex w-[140px] font-thin text-link">
        개발기 바로가기
        <Image
          className="m-[2.5px_0_0_5px] transition delay-75 ease-in-out group-hover:translate-x-3"
          src={arrowRight}
          width={15}
          height={20}
          alt="화살표이미지"
          style={{ width: '30px', height: 'auto' }}
        />
      </a>
    </div>
  );
};

export default ProjectDocPostCard;
