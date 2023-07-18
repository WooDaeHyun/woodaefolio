import Image from 'next/image';
import arrowRight from '/public/icons/arrowRight.svg';

interface ProjectPostCardProps {
  title: string;
  description: string;
  imageSubject: string;
  serviceUrl: string;
  isProceeding: boolean;
  id: string;
}

const selectBadgeStype = (isProceeding: boolean) => {
  const color = isProceeding
    ? 'bg-badge-progress p-[2px_10px] text-white'
    : 'bg-badge-complete p-[2px_10px] text-white';

  const text = isProceeding ? 'in progress' : 'complete';

  return { color, text };
};

const ProjectPostCard = ({
  title,
  description,
  imageSubject,
  serviceUrl,
  isProceeding,
  id
}: ProjectPostCardProps) => {
  const badgeStyle = selectBadgeStype(isProceeding);

  return (
    <>
      <div
        id={id}
        className=" mt-[55px] h-[540px] w-[390px] rounded-br-[30px] bg-zinc-50 shadow-md"
      >
        <div className="h-[220px] w-[390px]">
          <Image
            src={`/images/${imageSubject}.png`}
            width={1200}
            height={500}
            alt="프로젝트 썸네일"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="p-[25px]">
          <span className={badgeStyle.color}>{badgeStyle.text}</span>
          <h3 className="my-[15px] text-xs font-bold">{title}</h3>
          <p>&nbsp;&nbsp;{description}</p>
          <a
            href={serviceUrl}
            className="group mt-5 flex w-[140px] font-thin text-link"
          >
            서비스 바로가기
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
      </div>
    </>
  );
};

export default ProjectPostCard;
