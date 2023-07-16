const Intro = () => {
  return (
    <section>
      <header className="fixed w-[100%]">
        <div className="banner flex h-9 items-center bg-black font-thin text-white">
          <p className="m-auto w-[1300px] text-end text-[#bbb]">
            Portfolio <em>made by</em> WooDaeHyun
          </p>
        </div>
        <nav>
          <div className="m-auto flex w-[1300px] items-center justify-between">
            <div className="logo">{/* logo 넣어야함 */}</div>
            <ul className="gnb font-xs mt-8 flex gap-8 text-2xs text-white">
              {['HOME', 'ABOUT', 'PROJECT', 'LIKES', 'BLOG'].map(
                (value, index) => (
                  <li className="hover:text-[#333]" key={index}>
                    <a href="#none">{value}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </header>
      <main className="intro flex h-screen items-center justify-center bg-gradient-to-b from-gray-500 to-neutral-400 bg-cover bg-center bg-no-repeat">
        <div className="heading w-[1300px] text-center text-white">
          <h1 className="mb-5 text-[50px] font-bold">WOODAEHYUN PORTFOLIO</h1>
          <p className="text-[20px] font-thin leading-6">
            생각하는 개발자 우대현의 포트폴리오 입니다.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Intro;
