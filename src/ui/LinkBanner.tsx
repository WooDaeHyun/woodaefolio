import Image from 'next/image';

const LinkBanner = () => {
  return (
    <section className=" bg-stone-100">
      <div className="gap-15 flex h-[100%] flex-col items-center justify-center gap-16 py-[30px]">
        <h2 className="font-md text-md text-[#535c68]">
          저의 <span className="font-bold text-[#000000]">CHANNEL</span>들을
          소개합니다.
        </h2>
        <div className="flex gap-24 text-2xs max-[768px]:flex-col max-[768px]:gap-4">
          {/* 중복 코드 제거가 필요 */}
          <div className="flex gap-2 rounded-md bg-[#0A66C2] px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              className="mt-[1.5px]"
              src="/icons/github-icon.svg"
              width={30}
              height={30}
              alt="깃헙아이콘"
              style={{ width: '20px', height: '20px' }}
            />
            <a href="https://github.com/WooDaeHyun">Github</a>
          </div>
          <div className="flex gap-2 rounded-md bg-[#ff7979] px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              className="mt-[1.5px]"
              src="/icons/code-solid.svg"
              width={30}
              height={30}
              alt="깃헙아이콘"
              style={{ width: '20px', height: '20px' }}
            />
            <a href="https://woodaelog.com/">Dev Blog</a>
          </div>
          <div className="flex gap-2 rounded-md bg-[#ffbe76] px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              className="mt-[1.5px]"
              src="/icons/tistory.svg"
              width={30}
              height={30}
              alt="깃헙아이콘"
              style={{ width: '20px', height: '20px' }}
            />
            <a href="https://pinetree93.tistory.com/">Tistory</a>
          </div>
        </div>
        <div className="flex gap-2 text-2xs font-bold">
          <Image
            className="mt-[1.5px]"
            src="/icons/email.svg"
            width={30}
            height={30}
            alt="깃헙아이콘"
            style={{ width: '20px', height: '20px' }}
          />
          po668312@naver.com
        </div>
      </div>
    </section>
  );
};

export default LinkBanner;
