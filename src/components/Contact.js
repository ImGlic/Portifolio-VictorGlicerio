import React from 'react';

import { FaRegCopyright, FaMailBulk, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='div mt-5'  id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-x-2 justify-center items-center mb-2'>
          
          <FaRegCopyright />         
          <b>Victor Glicério 2024</b>

          <FaMailBulk />
          <b>vitooj@outlook.com</b>

          <a target="_blank" href="https://instagram.com/imglic?igshid=YmMyMTA2M2Y=">
            <FaInstagram />
          </a>
          <a target="_blank" href="https://www.twitter.com/im_glic">
            <FaTwitter />
          </a>
          <a target="_blank" href="https://github.com/ImGlic">
            <FaGithub />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/victor-glicério-713a07192/">
            <FaLinkedin />
          </a>



        </div>

      </div>

    </div>
  )
};

export default Contact;
