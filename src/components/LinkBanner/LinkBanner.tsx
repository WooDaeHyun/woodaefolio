import Image from 'next/image';
import email from '/public/icons/email.svg';
import Badge from './Badge';
import { linkBannerBadgeInfo } from '@/data/linkBannerBadgeInfo';

const LinkBanner = () => {
  return (
    <section className=" bg-banner-bgColor">
      <div className="gap-15 flex h-[100%] flex-col items-center justify-center gap-16 py-[30px]">
        <h2 className="font-md text-md text-banner-fontColor">
          저의 <span className="font-bold text-black">CHANNEL</span>들을
          소개합니다.
        </h2>
        <div className="flex gap-24 text-2xs max-[768px]:flex-col max-[768px]:gap-4">
          {linkBannerBadgeInfo.map(value => {
            const { title, icon, color, badgeUrl, id } = value;
            return (
              <Badge
                key={id}
                title={title}
                icon={icon}
                color={color}
                badgeUrl={badgeUrl}
              />
            );
          })}
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
