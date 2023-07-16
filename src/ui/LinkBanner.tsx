const LinkBanner = () => {
  return (
    <section className="h-[300px] bg-stone-100">
      <div className="gap-15 flex h-[100%] flex-col items-center justify-center gap-16">
        <h2 className="font-md text-md text-[#535c68]">
          저의 <span className="font-bold text-[#000000]">CHANNEL</span>들을
          소개합니다.
        </h2>
        <div className="gap-30 flex gap-24 text-2xs">
          {/* 중복 코드 제거가 필요 */}
          <div className="rounded-md bg-[#2ecc71] px-[20px] py-[10px] text-white transition delay-150 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <a href="https://github.com/WooDaeHyun">Github</a>
          </div>
          <div className="rounded-md bg-[#ff7979] px-[20px] py-[10px] text-white transition delay-150 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <a href="https://woodaelog.com/">Dev Blog</a>
          </div>
          <div className="rounded-md bg-[#ffbe76] px-[20px] py-[10px] text-white transition delay-150 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <a href="https://pinetree93.tistory.com/">Tistory</a>
          </div>
        </div>
        <div className="text-2xs font-bold">E-MAIL : po668312@naver.com</div>
      </div>
    </section>
  );
};

export default LinkBanner;
