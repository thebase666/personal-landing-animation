import { motion } from 'framer-motion';
// import icon from '../images/hero-image.jpeg'
import logo from '../images/1.jpg';

type Props = {};

const About = (props: Props) => {
  return (
    <section id='about' className='h-screen snap-center'>
      <div className='relative flex flex-col items-center justify-center h-screen px-10 mx-auto text-center max-w-7xl md:flex-row md:text-left'>
        <p className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
          About
        </p>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          // viewport={{
          //   once: true,
          // }}
          className='w-48 h-48 mt-10 mb-5 flex-shrink-0 rounded-full object-cover md:mb-0 md:rounded-lg md:w-64 md:h-64 md:mt-0 2xl:w-[500px] 2xl:h-[500px]'
          src={logo.src}
          // src={icon.src}
          alt='my portrait'
        />

        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          whileInView={{
            opacity: 1,
          }}
          // viewport={{
          //   once: true,
          // }}
          className='px-0 space-y-10 md:px-10 lg:px-20'
        >
          <p className='text-2xl font-semibold md:text-4xl'>
            Who <span className='underline decoration-[#F7AB0A]/50'>am</span> I?
          </p>
          <p className='text-sm md:text-base'>
            Full stack react web3 developer.

          </p>
          <p className='text-sm md:text-base'>
            Skill set:
            React, React Native, Next.js, Tailwind-css, Redux, Typescript, Git, Expo, Firebase, Graphql,  Google-api and cloud servers. Web3, blockchain, solidity, polkadot, nft, Defi, smart contract, Moralis, ethernaut and openzeppelin. Burpsuite, Sqlmap, Nmap, MSF and kali linux.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
