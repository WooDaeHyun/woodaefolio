import Image from 'next/image';
import arrowRight from '/public/icons/arrowRight.svg';

// interface ProjectPostCardProps {
//   title: string;
//   description: string;
//   imageSubject: string;
//   serviceUrl: string;
//   isProceeding: boolean;
//   id: string;
// }

const ProjectPostCard = () => {
  return (
    <>
      <div className=" mt-[55px] h-[540px] w-[390px] rounded-br-[30px] bg-zinc-50 shadow-md">
        <div className="h-[220px] w-[390px]">
          <Image
            src={`/images/dadokThum.png`}
            width={1200}
            height={500}
            alt="다독썸네일"
            style={{ width: 'auto', height: '100%' }}
          />
        </div>
        <div className="p-[25px]">
          <span className="bg-red-400 p-[2px_10px] text-white">
            in progress
          </span>
          <h3 className="my-[15px] text-xs font-bold">다독다독</h3>
          <p>
            &nbsp;&nbsp;가장의 무게를 견디며 가정을 지키는 우리의 작은 영웅,
            우리의 아버지 누구에게도 쉽게 털어놓지 못하는 아버지들을 위한
            자유로운 소통과 공감 그리고 상담과 위로를 받을 수 있는 공간을 만들고
            아버지라는 본연의 책임에서 벗어나 본인 스스로를 되돌아 볼 수 있는
            시간을 갖을 수 있는 공간입니다.
          </p>
          <a
            href="#none"
            className="group mt-5 flex w-[140px] font-thin text-[#c25a3a]"
          >
            서비스 바로 가기
            <Image
              className="m-[2.5px_0_0_5px] transition delay-75 ease-in-out group-hover:translate-x-3"
              src={arrowRight}
              width={15}
              height={20}
              alt="화살표이미지"
              style={{ width: '30px', height: '20px', color: '#c25a3a' }}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectPostCard;
