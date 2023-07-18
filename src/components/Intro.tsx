'use client';

import Image from 'next/image';
import bulb from '/public/icons/bulb.svg';

import { useEffect, useState, useCallback } from 'react';

const Intro = () => {
  const [position, setPosition] = useState(5);
  const [change, setChange] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  const handleScroll = useCallback(() => {
    const moving = window.scrollY;
    setChange(position < moving);
  }, [position]);

  const navigationStyle = change
    ? 'font-xs my-[25px] flex gap-8 text-2xs transition delay-75'
    : 'font-xs my-[25px] flex gap-8 text-2xs text-white transition delay-75';

  const headerWrapperStyle = change ? 'bg-white shadow-lg transition' : '';

  const topBannerStyle = change
    ? 'hidden'
    : 'flex h-9 items-center bg-edge-bgColor font-thin text-edge-fontColor';

  const moveTopStyle = change
    ? 'fixed bottom-1 right-1 h-[40px] w-[40px] rounded-full bg-[#0c2461] m-[20px] text-center animate-bounce font-bold pt-[7px] text-white transition delay-200'
    : 'hidden';

  const animationStyle = change
    ? 'mb-20 inline-block h-6 w-6'
    : 'mb-20 inline-block h-6 w-6 animate-bounce';

  return (
    <section className="relative z-[100]">
      <header className="fixed w-[100%]">
        <div className={topBannerStyle}>
          <p className="m-auto w-[1300px] text-end text-[#bbb]">
            Portfolio <em>made by</em> WooDaeHyun
          </p>
        </div>
        <nav className={headerWrapperStyle}>
          <div className="m-auto flex w-[1300px] justify-between">
            <div className="logo">{/* logo 자리 */}</div>
            <ul id="navigation" className={navigationStyle}>
              {['HOME', 'ABOUT', 'PROJECT', 'PROJECT-DOCS', 'TOY-PROJECT'].map(
                (value, index) => (
                  <li className="hover:text-gray-400" key={index}>
                    <a href="#none">{value}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </header>
      <main className="intro flex h-screen items-center justify-center bg-gradient-to-b from-gray-800 to-neutral-600">
        <div className="heading w-[1300px] text-center text-white">
          <div className="w-[100%] text-center">
            <Image
              src={bulb}
              className={animationStyle}
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
        <a href="#" className={moveTopStyle}>
          Top
        </a>
      </main>
    </section>
  );
};

export default Intro;
