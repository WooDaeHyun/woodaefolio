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
    <div className="flex w-[370px] flex-col justify-center gap-1">
      <div className="chat chat-start">
        <div className=" chat-bubble bg-[#55efc4] text-banner-fontColor">
          {title}
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble bg-[#dfe6e9]">
          <div>
            <Image
              priority
              className="m-auto w-[100%]"
              src={`/images/${imageSubject}.svg`}
              width={50}
              height={50}
              alt="임시이미지"
              style={{ width: 'auto', height: '200px' }}
            />
          </div>
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-[#ffeaa7] text-link">
          <a href={githubUrl} className={isPublic ? 'hover:underline' : ''}>
            {githubMessage}
          </a>
          <br />
          <a href={serviceUrl} className="hover:underline">
            Project 구경 하기 🐱
          </a>
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble bg-[#fab1a0] text-banner-fontColor">
          {endMessage}
        </div>
      </div>
    </div>
  );
};

export default ToyProjectPostCard;
