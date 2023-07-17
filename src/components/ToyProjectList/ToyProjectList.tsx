import ToyProjectPostCard from './ToyProjectPostCard';
import { toyProjectListInfo } from '@/data/toyProjectListInfo';

const ToyProjectList = () => {
  return (
    <section className=" h-[100%] bg-banner-bgColor py-[40px]">
      <div className="pb-[40px] text-center text-lg font-bold text-banner-fontColor">
        저의 소소하지만 소중한 <span className="text-black">Toy Project들</span>{' '}
        입니다.
      </div>
      <div className=" m-auto w-[390px] rounded-3xl bg-white p-[30px_10px_10px] shadow-2xl">
        <div className="carousel flex w-full">
          {toyProjectListInfo.map(value => {
            const {
              title,
              imageSubject,
              githubUrl,
              serviceUrl,
              isPublic,
              id,
              endMessage
            } = value;
            return (
              <div>
                <div id={id} className="carousel-item flex">
                  <ToyProjectPostCard
                    title={title}
                    imageSubject={imageSubject}
                    githubUrl={githubUrl}
                    serviceUrl={serviceUrl}
                    isPublic={isPublic}
                    endMessage={endMessage}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex w-full justify-center gap-2 py-2">
          {toyProjectListInfo.map((value, index) => {
            const { id } = value;
            return (
              <a href={`#${id}`} className="btn btn-xs rounded-full bg-white">
                {index + 1}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToyProjectList;
