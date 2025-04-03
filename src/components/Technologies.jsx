import React from 'react'
import { RiReactjsLine} from 'react-icons/ri'
import { SiMongodb,SiExpress } from 'react-icons/si'
import { SiNodedotjs, SiRedux, SiJavascript, SiTailwindcss, SiCss3, SiCplusplus, SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'


const iconsVariants= (duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
         className='my-20 text-center text-4xl'
> Technologies</motion.h2> 
<motion.div
whileInView={{opacity:1,x:0}}
initial={{opacity:0,x:-100}}
transition={{duration:1.5}}

 className='flex flex-wrap items-center justify-center gap-4'>
    <motion.div 
    initial="initial"
    animate="animate"
    variants={iconsVariants(2.5)}>
       <RiReactjsLine className='text-7xl text-cyan-400' />
    </motion.div>
    <motion.div
    initial="initial"
    animate="animate"
    variants={iconsVariants(3)}
     className='p-4'>
        <SiExpress className='text-7xl text-yellow-500'/>
    </motion.div>
    <motion.div 
    initial="initial"
    animate="animate"
    variants={iconsVariants(5)}
    className='p-4'>
        <SiMongodb className='text-7xl text-cyan-500'/>
    </motion.div>
    <motion.div 
    initial="initial"
    animate="animate"
    variants={iconsVariants(2)}
    className='p-4'>
        <SiNodedotjs className='text-7xl text-green-500'/>
    </motion.div>
    <motion.div
    initial="initial"
    animate="animate"
    variants={iconsVariants(6)}
    className='p-4'>
        <SiRedux className='text-7xl text-purple-500'/>
    </motion.div>
    <motion.div 
    initial="initial"
    animate="animate"
    variants={iconsVariants(4)}
    className='p-4'>
        <SiJavascript className='text-7xl text-yellow-400'/> 
    </motion.div>
    <motion.div
    initial="initial"
    animate="animate"
    variants={iconsVariants(6)}
    className='p-4'>
        <SiTailwindcss className='text-7xl text-cyan-400'/>
    </motion.div>
    <motion.div
    initial="initial"
    animate="animate"
    variants={iconsVariants(5)}
     className='p-4'>
        <SiCss3 className='text-7xl text-blue-500'/>
    </motion.div>
    <motion.div
    initial="initial"
    animate="animate"
    variants={iconsVariants(2.5)}
    className='p-4'>
        <SiCplusplus className='text-7xl text-blue-600'/>
    </motion.div>
    <motion.div 
    initial="initial"
    animate="animate"
    variants={iconsVariants(4)}
    className='p-4'>
        <SiGithub className='text-7xl text-gray-400'/>
    </motion.div>
    </motion.div>     
    </div>
  )
}

export default Technologies
