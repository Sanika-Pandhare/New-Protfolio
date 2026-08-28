import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
function About() {
  return (
    <motion.div className='w-full md:w-1/3 flex justify-center' 
    initial={{opacity:0 ,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='py-20 bg-dark-200'
    >
        <div className='container mx-0 px-6'>
            {/*Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>About
              <span className='text-purple'>Me</span>
            </h2>
            
           
           <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to Know more about background and passion </p>
           {/* Image + my Journey */}
            <div className='flex flex-col md:flex-row items-center gap-12'>
              {/* Image */}
              <div className='md:w-1/3 ml-20 rounded-2xl overflow-hidden'>
  <motion.img
    initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: 'easeOut' }}
  viewport={{ once: false, amount: 0.2 }}
  className='w-full h-auto object-cover rounded-2xl'
  src={assets.profileImg1}
  alt="profile"
  />
</div>
                 <motion.div
                  initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                 viewport={{ once: false, amount: 0.2 }}
                  className=' md:w-1/2'>
                    <div className='rounded-2xl p-8'>
                      <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                      <p className='text-gray-300 mb-6'>I am a passionate Frontend Developer with a strong foundation in HTML, CSS,
  JavaScript, React.js, and Tailwind CSS. I enjoy creating responsive,
  user-friendly, and visually appealing web applications. Along with frontend
  development, I have good knowledge of Data Structures and Algorithms (DSA)
  and SQL, which help me write efficient code and work effectively with
  databases. </p>
                      <p className='text-gray-300 mb-12'>I am always eager to learn new technologies and improve my skills
  by building real-world projects.</p>
                      {/* Cards*/}
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                          aboutInfo.map((data,index)=>(
                            <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform 
                            duration-300 hover:-translate-y-2
                            cursor-pointer'> 
                            <div className='text-purple text-4xl mb-4 '>
                              <data.icon/>

                            </div>
                            <h3 className='text-xl font-semibold  mb-3'>{data.title}</h3>
                            <p className='text-gray-400'>{data.description}</p>

                            </div>

                              ) )
                        }

                      </div>
                    </div>

                 </motion.div>
            </div>
        </div>
        
      
    </motion.div>
  )
}

export default About
