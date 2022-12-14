import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

type Props = {
  direction?: boolean;
  iconUrl: string;
  text: string;
};

const Skill = ({ iconUrl, text, direction }: Props) => {
  return (
    <div className='relative cursor-pointer'>
      <div
        // initial={{
        //   x: direction ? 200 : -200,
        //   opacity: 0,
        // }}
        // transition={{
        //   duration: 1.5,
        // }}
        // whileInView={{
        //   x: 0,
        //   opacity: 1,
        // }}
        // viewport={{
        //   once: false,
        // }}
        className=''
      >

        <Icon
          icon={iconUrl}
          className='w-24 h-24 p-3 border border-gray-500 rounded-full md:w-28 md:h-28 '
        />
        <div className='absolute top-0 w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 hover:opacity-80 hover:bg-white md:w-28 md:h-28 '>
          <div className='flex items-center justify-center h-full'>
            <p className="text-lg font-bold text-black font-['Dosis']">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
