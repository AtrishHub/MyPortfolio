import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    
    <div className='pb-4'>
        <motion.h2
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
         className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center' >
                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}

                     className='w-full lg:w-1/4 mr-10' >
                        <img src={project.image}
                        width={250}
                        height={250}
                        alt={project.title}
                        className='mb-6 mr-4 rounded'/>
                        
                    </motion.div>
                    <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1}}

                    className='w-full max-w-xl lg:w-3/4'>
                    <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                    <p className='mb-4 text-stone-400'>{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                        {tech}
                        </span>
                    ))}
                    <div className='mt-6'>
                    <a href={project.link} className='mr-2 mt-4 rounded text-stone-900 p-2 text-sm font-medium bg-stone-300'>Code</a>
                    </div>
                    
                         
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Projects
