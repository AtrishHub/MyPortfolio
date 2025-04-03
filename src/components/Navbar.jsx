import React from 'react'
import logo from "../assets/logo1.webp"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  const handleImageError = (e) => {
    console.error('Error loading image:', e);
  };

  return (
    <nav className='flex items-center justify-between py-6 '>
    <div className=' flex flex-shrink-0 items-center'>
       <a href="/" aria-label='Home'>
       <img 
         src={logo}
         className='mx-2 ' 
         width={50} 
         height={33} 
         alt='logo'
         onError={handleImageError}
       />
       </a>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/gunjan-sharma-b4a5091b8/' target='_blank' rel='noopener noreferrer'
        aria-label='LinkedIn'>
            <FaLinkedin/>
        </a>
        <a href='https://github.com/AtrishHub' target='_blank' rel='noopener noreferrer'
        aria-label='GitHub'>
            <FaGithub/>
        </a>
        <a href='https://www.instagram.com/atrish_pandit_/?hl=en' target='_blank' rel='noopener noreferrer'
        aria-label='Instagram'>
            <FaInstagram/>
        </a>
        <a href='https://x.com/atrish_gunjan' target='_blank' rel='noopener noreferrer'
        aria-label='Twitter'>
            <FaSquareXTwitter/>
        </a>

    </div>
    </nav>
  )
}

export default Navbar
