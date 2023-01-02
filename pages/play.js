import React, { useState } from 'react'
import { motion } from 'framer-motion';


const play = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);


  return (
    <div className='flex flex-col items-center justify-start min-h-screen p-10 bg-blue-100 cursor-pointer'>
      <div className='h-[300px]'>
        <motion.div
          transition={{ layout: { duration: 0.6, type: 'spring' } }}
          layout
          onClick={() => setOpen(!open)}
          className='p-5 px-10 m-10 bg-white rounded-lg shadow-lg'>

          <motion.p
            layout='position'
            className='w-24 my-3'>
            Click Me
          </motion.p>

          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}


            >
              <p className='w-72'>framer motion is framer motion </p>
              <p className='w-72'>framer motion is framer motion </p>
              <p className='w-72'>framer motion is framer motion </p>
            </motion.div>
          )}


        </motion.div>
      </div>

      <div className='h-[300px]'>
        <motion.div
          transition={{}}
          onClick={() => setAnimate(!open)}
          className='p-5 px-10 m-10 bg-white rounded-lg shadow-lg'>

          <motion.p
            layout='position'
            className='w-24 my-3'>
            Click Me
          </motion.p>





        </motion.div>
      </div>

    </div >
  )
}

export default play