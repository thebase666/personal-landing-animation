import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircle from './BackgroundCircle';
import logo from '../images/1.jpg';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ['REACT DEVELOPER', 'WEB3 DEVELOPER', 'REACT WEB3 DEVELOPER'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id='hero' className='snap-center'>
      <div className='flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center '>
        <BackgroundCircle />
        <Image
          className='relative object-cover mx-auto rounded-full'
          src={logo}
          alt='my portrait'
          width={180}
          height={180}
        />
        <div className='z-20'>
          {/* tracking-[10px] 字体间距 */}
          <h2 className='text-2xl uppercase text-gray-500 pb-2 tracking-[10px] '>
            LI ZHUYAO
          </h2>
          <h1 className='px-10 text-2xl font-semibold md:text-3xl'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
          </h1>

          <div className='pt-5'>
            {/* <Link href='#about'> 自动占一排 不换行 即使外面没有flex */}
            <Link href='#about'>
              <button className='btn-hero'>About</button>
            </Link>
            <Link href='#experience'>
              <button className='btn-hero'>Experience</button>
            </Link>
            <Link href='#skills'>
              <button className='btn-hero'>Skills</button>
            </Link>
            <Link href='#projects'>
              <button className='btn-hero'>Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
