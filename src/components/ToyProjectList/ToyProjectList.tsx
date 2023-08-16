'use client';

import { useEffect } from 'react';
import { Carousel, initTE } from 'tw-elements';

import ToyProjectPostCard from './ToyProjectPostCard';

const ToyProjectList = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);

  return (
    <section
      id="TOY-PROJECT"
      className=" mt-[130px] h-[100%] bg-banner-bgColor py-[80px]"
    >
      <div className="pb-[40px] text-center text-lg text-banner-fontColor">
        저의 소소하지만 소중한{' '}
        <span className="font-bold text-black">🧸 Toy Project들</span> 입니다.
      </div>
      <div className="flex w-[100%] justify-center">
        <div
          id="carouselDarkVariant"
          className="relative w-[35rem]"
          data-te-carousel-init
          data-te-ride="carousel"
        >
          <div
            className="inset-x-0 bottom-0 z-[2] mx-[15%] my-[1rem] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              data-te-target="#carouselDarkVariant"
              data-te-slide-to="0"
              data-te-carousel-active
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[black] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-te-target="#carouselDarkVariant"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[black] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              data-te-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-te-target="#carouselDarkVariant"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[black] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              data-te-slide-to="2"
              aria-label="Slide 1"
            ></button>
            <button
              data-te-target="#carouselDarkVariant"
              className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[black] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
              data-te-slide-to="3"
              aria-label="Slide 1"
            ></button>
          </div>

          <div className="flex justify-center gap-[3rem]">
            <button
              className="flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselDarkVariant"
              data-te-slide="prev"
            >
              <span className="inline-block h-8 w-8 dark:grayscale">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <div className="relative justify-center overflow-hidden after:clear-both after:block after:content-['']">
              <div
                className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item
                data-te-carousel-active
              >
                <ToyProjectPostCard
                  title="🚀 Next Js로 DnD와 메모 기능 그리고 각종 편집 기능을 만들어 보았어요"
                  imageSubject="dndThum"
                  githubUrl="#none"
                  serviceUrl="https://portone-assignment.netlify.app/"
                  isPublic={false}
                  endMessage="Next Js를 통해 프로젝트 초기 설정부터 완성까지 혼자 진행해 본 멋진 경험이었어요!"
                />
              </div>
              <div
                className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item
              >
                <ToyProjectPostCard
                  title="🐶 VueJs로 영화 검색, 영화 상세 정보 보기 서비스를 만들어 보았어요"
                  imageSubject="movieSearchThum"
                  githubUrl="https://github.com/WooDaeHyun/vue-make-searching-movie-dev-course-8week-assignment"
                  serviceUrl="https://tiny-tanuki-cc225f.netlify.app"
                  isPublic={true}
                  endMessage="Vue Js를 직접 사용해 보면서 다른 프레임워크들과의 차이를 피부로 경험할 수 있었던 좋은 기회였어요~"
                />
              </div>

              <div
                className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item
              >
                <ToyProjectPostCard
                  title="👾 Javascript로 테트리스 게임을 만들어 보았어요"
                  imageSubject="tetrisThum"
                  githubUrl="https://github.com/WooDaeHyun/Tetris-game-by-VanilaJS"
                  serviceUrl="https://tetris-gamess.netlify.app"
                  isPublic={true}
                  endMessage="Javascript를 점검할 수 있었던 좋은 기회였고 React가 얼마나 편리한지 알 수 있었어요!"
                />
              </div>

              <div
                className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-fade
                data-te-carousel-item
              >
                <ToyProjectPostCard
                  title="Javascript로 랜덤 숫자 맞추기 게임을 만들어 보았어요 🐤"
                  imageSubject="upDownThum"
                  githubUrl="https://github.com/WooDaeHyun/Number-Guess-game"
                  serviceUrl="https://randomnumber-guess-game.netlify.app"
                  isPublic={true}
                  endMessage="작은 프로젝트지만 처음 공부를 시작하며 하나하나 직접 만들어 본 저에게는 소중한 경험이에요~"
                />
              </div>
            </div>
            <button
              className="flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselDarkVariant"
              data-te-slide="next"
            >
              <span className="inline-block h-8 w-8 dark:grayscale">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyProjectList;
