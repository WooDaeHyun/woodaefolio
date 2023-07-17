import Image from 'next/image';
import bulb from '/public/icons/bulb.svg';

const Intro = () => {
  return (
    <section>
      <header className="fixed w-[100%]">
        <div className="banner flex h-9 items-center bg-edge-bgColor font-thin text-edge-fontColor">
          <p className="m-auto w-[1300px] text-end text-[#bbb]">
            Portfolio <em>made by</em> WooDaeHyun
          </p>
        </div>
        <nav>
          <div className="m-auto flex w-[1300px] items-center justify-between">
            <div className="logo">{/* logo 넣어야함 */}</div>
            <ul className="gnb font-xs mt-8 flex gap-8 text-2xs text-white">
              {['HOME', 'ABOUT', 'PROJECT', 'PROJECT-DOCS', 'TOY-PROJECT'].map(
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
      <main className="intro flex h-screen items-center justify-center bg-gradient-to-b from-gray-800 to-neutral-600 bg-cover bg-center bg-no-repeat">
        <div className="heading w-[1300px] text-center text-white">
          <div className="w-[100%] text-center">
            <Image
              src={bulb}
              className="mb-20 inline-block h-6 w-6 animate-bounce"
              width={100}
              height={100}
              style={{ width: '80px', height: '80px' }}
              alt="test"
            />
          </div>
          <h1 className="mb-[30px] text-[50px] font-bold">
            WOODAEHYUN PORTFOLIO{' '}
          </h1>
          <p className="text-[20px] font-thin leading-6">
            보다 편리한 미래를 만들기 위해 노력하는{' '}
            <span className="font-regular">{"'프론트엔드 개발자'"}</span> 우대현
            입니다.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Intro;
