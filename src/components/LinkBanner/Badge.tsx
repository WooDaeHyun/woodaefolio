import Image from 'next/image';

interface BadgeProps {
  title: string;
  icon: string;
  color: string;
  badgeUrl: string;
}

const getBadgeColor = (color: string) => {
  switch (color) {
    case 'github': {
      return 'bg-badge-github';
    }
    case 'devBlog': {
      return 'bg-badge-devBlog';
    }
    case 'tistory': {
      return 'bg-badge-tistory';
    }
    default: {
      return;
    }
  }
};

const baseBadgeStyle =
  'flex gap-2 rounded-md px-[20px] py-[10px] text-white transition delay-100 ease-in-out hover:-translate-y-2 hover:shadow-xl';

const Badge = ({ color, icon, title, badgeUrl }: BadgeProps) => {
  const badgeColor = getBadgeColor(color);

  return (
    <div className={`${baseBadgeStyle} ${badgeColor}`}>
      <Image
        className="mt-[1.5px]"
        src={`/icons/${icon}.svg`}
        width={20}
        height={20}
        alt={`${title}Logo`}
        style={{ width: '20px', height: '20px' }}
      />
      <a href={badgeUrl}>{title}</a>
    </div>
  );
};

export default Badge;
