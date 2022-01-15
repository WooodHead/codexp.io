import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <div className="text-2xl link font-semibold font-sans cursor-pointer">
        <span className="sr-only">CodeXP.io</span>
        Code<span className={'text-blue-600'}>XP</span>
      </div>
    </Link>
  );
};
export default Logo;
