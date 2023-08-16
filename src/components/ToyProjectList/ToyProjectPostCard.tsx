'use client';

import Image from 'next/image';

interface ToyProjectPostCardProps {
  title: string;
  imageSubject: string;
  githubUrl: string;
  serviceUrl: string;
  isPublic: boolean;
  endMessage: string;
}

const getGithubMessage = (isPublic: boolean) => {
  return isPublic
    ? 'Git 저장소 구경 하기 🚀'
    : '모 기업 과제로 Repo는 공개할 수 없어요 😥';
};

const ToyProjectPostCard = ({
  title,
  imageSubject,
  githubUrl,
  serviceUrl,
  isPublic,
  endMessage
}: ToyProjectPostCardProps) => {
  const githubMessage = getGithubMessage(isPublic);

  return (
    <div className="flex h-[38rem] w-[400px] flex-col gap-[0.8rem] rounded-[2rem] bg-[#FFEDD5] p-10">
      <div className=" mt-[1rem] rounded-[1rem] bg-[#55efc4] p-3 text-banner-fontColor">
        {title}
      </div>
      <div className=" rounded-[1rem] bg-[#dfe6e9] p-3">
        <div>
          <Image
            priority
            className="w-[100%]"
            src={`/images/${imageSubject}.svg`}
            width={50}
            height={50}
            alt={imageSubject}
            style={{ width: 'auto', height: '200px' }}
          />
        </div>
      </div>
      <div className=" rounded-[1rem] bg-[#ffeaa7] p-3 text-link">
        <a href={githubUrl} className={isPublic ? 'hover:underline' : ''}>
          {githubMessage}
        </a>
        <br />
        <a href={serviceUrl} className="hover:underline">
          Project 구경하기 🐱
        </a>
      </div>
      <div className="rounded-[1rem] bg-[#fab1a0] p-3 text-banner-fontColor">
        {endMessage}
      </div>
    </div>
  );
};

export default ToyProjectPostCard;
