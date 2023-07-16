const About = () => {
  return (
    <div className="about-content m-auto w-[1300px] py-[130px]">
      <div className="text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">About Me</h2>
          <p className="text-2xs font-thin leading-7">
            개발자로서 저의 가장 큰 꿈은 제가 느꼈던 소소해 보일 수 있지만
            신기하면서도 편리한 경험을 남들에게 전해주는 것입니다. 또한 평소에는
            의식하지 못하는 사소한 불편함에 관심을 기울이고 개발을 통해 이를
            해결해낼 수 있는 개발자가 되는 것이 목표입니다. 그래서 이것들이 직접
            맞닿아 있는 클라이언트단에서 기능을 구현하고 싶습니다. 그리고 이를
            바탕으로 사용자들과 소통하고 이러한 소통을 바탕으로 보다 성장하는
            개발자가 되고 싶습니다.
            <br />
            <br />
            그리고 현재 주니어 개발자로의 커리어 시작을 준비하고 있습니다.
            단기적으로 빨리 배우는것과 저에게 일을 맡겼을 때 상대가 안정감을
            느낄 수 있을 만큼 맡은 일을 안정적으로 처리할 수 있는 개발자가 되는
            것을 단기적인 목표로 세우고 있습니다.
          </p>
          <a
            href="https://woodaelog.com/about/"
            className="text-[#c25a3a] hover:underline"
          >
            WHY DEV?
          </a>
        </div>
      </div>
      {/* <div className="photo flex h-[100%] w-auto flex-[2_0_0%] justify-center">
        <Image
          className="h-auto max-w-full rounded-b-[45%] rounded-l-[75%] rounded-r-[95%] rounded-t-[90%] object-contain"
          src="/images/myProfile.png"
          alt="프로필 이미지"
          width={300}
          height={100}
        />
        className="rounded-[50% 60% 65% 35% / 40% 45% 55% 60%]
      </div> */}
    </div>
  );
};

export default About;
