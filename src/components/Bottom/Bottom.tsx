import Image from 'next/image';

const Bottom = () => {
  return (
    <section className="h-[450px] bg-gradient-to-b from-neutral-600 to-gray-800 text-center text-white">
      <div className="flex h-[100%] flex-col items-center justify-center gap-5">
        <h1 className="text-[30px]">
          지금까지 꾸준히 노력하는 개발자
          <span className="text-bold">'우대현'</span>이었습니다.
        </h1>
        <p className="text-[25px]">감사합니다.</p>
        <Image
          src="/images/avatar3.png"
          width={250}
          height={250}
          alt="아바타"
          style={{ width: '250px', height: '250px' }}
        />
      </div>
    </section>
  );
};

export default Bottom;
