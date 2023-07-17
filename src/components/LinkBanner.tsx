import Image from 'next/image';
import githubLogo from '/public/icons/githubLogo.svg';
import codeSolid from '/public/icons/codeSolid.svg';
import tistoryLogo from '/public/icons/tistoryLogo.svg';
import email from '/public/icons/email.svg';

const LinkBanner = () => {
  return (
    <section className=" bg-banner-bgColor">
      <div className="gap-15 flex h-[100%] flex-col items-center justify-center gap-16 py-[30px]">
        <h2 className="font-md text-md text-[#535c68]">
          저의 <span className="font-bold text-black">CHANNEL</span>들을
          소개합니다.
        </h2>
        <div className="flex gap-24 text-2xs max-[768px]:flex-col max-[768px]:gap-4">
          {/* 중복 코드 제거가 필요 */}
          <div className="flex gap-2 rounded-md bg-badge-github px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              className="mt-[1.5px]"
              src={githubLogo}
              width={20}
              height={20}
              alt="githubLogo"
              style={{ width: '20px', height: '20px' }}
            />
            <a href="https://github.com/WooDaeHyun">Github</a>
          </div>
          <div className="flex gap-2 rounded-md bg-badge-devBlog px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              className="mt-[1.5px]"
              src={codeSolid}
              width={20}
              height={20}
              alt="codeSolidIcon"
              style={{ width: '20px', height: '20px' }}
            />
            <a href="https://woodaelog.com/">Dev Blog</a>
          </div>
          <div className="flex gap-2 rounded-md bg-badge-tistory px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Image
              className="mt-[1.5px]"
              src={tistoryLogo}
              width={20}
              height={20}
              alt="tistoryLogo"
              style={{ width: '20px', height: '20px' }}
            />
            <a href="https://pinetree93.tistory.com/">Tistory</a>
          </div>
        </div>
        <div className="flex gap-2 text-2xs font-bold">
          <Image
            className="mt-[1.5px]"
            src={email}
            width={20}
            height={20}
            alt="emailIcon"
            style={{ width: '20px', height: '20px' }}
          />
          po668312@naver.com
        </div>
      </div>
    </section>
  );
};

export default LinkBanner;
