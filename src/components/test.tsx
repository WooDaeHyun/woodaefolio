import Image from 'next/image';
import ProjectPostCard from './ProjectList/ProjectPostCard';

const Test = () => {
  const testCard = {
    title: '언성히어로',
    description:
      '가장의 무게를 견디며 가정을 지키는 우리의 작은 영웅, 우리의 아버지 누구에게도 쉽게 털어놓지 못하는 아버지들을 위한 자유로운 소통과 공감 그리고 상담과 위로를 받을 수 있는 공간을 만들고아버지라는 본연의 책임에서 벗어나 본인 스스로를 되돌아 볼 수 있는 시간을 갖을 수 있는 공간입니다.',
    imageSubject: 'notionThum',
    serviceUrl: 'https://unsunghero.netlify.app/',
    isProceeding: false,
    id: 'item1'
  };

  const { title, description, imageSubject, serviceUrl, isProceeding, id } =
    testCard;

  return (
    <section className=" h-[750px] bg-banner-bgColor pt-[30px]">
      <div className="m-auto w-[400px]">
        <div className="carousel flex w-full">
          <div id="item1" className="carousel-item flex w-full text-center">
            <ProjectPostCard
              key={id}
              title={title}
              description={description}
              imageSubject={imageSubject}
              serviceUrl={serviceUrl}
              isProceeding={isProceeding}
              id={id}
            />
          </div>
          <div id="item2" className="carousel-item w-full"></div>
          <div id="item3" className="carousel-item w-full"></div>
          <div id="item4" className="carousel-item w-full"></div>
        </div>
        <div className="mt-8 flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </section>
  );
};

export default Test;
