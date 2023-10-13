import React from "react";
//images

import Image from "../assets/avatarVictorRecortado.jpeg";
//icons
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import { Spa } from "@mui/icons-material";


const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex justify-center items-center"
      id="home"
    >
      <div className="container max-auto lg:flex justify-center">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/*text */}

          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initiol="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="text-[55px] font-bold "
            >
              VICTOR <span>GLICÉRIO</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initiol="hidden"
              whileInView={"show"}
              viewport={{ onde: false, amount: 0.7 }}
              className="mb-6 txt-[36px] lg:text-[60px] font-secondary font-semibold uppercase
              leading-[1]"
            >
              <span className="mr-2">I am a </span>
              <TypeAnimation
                sequence={["Full Stack Developer", 500]}
                color="#0a0a0a"
                speed={50}
                wrapper="span"                
              />
            </motion.div>

            <p className="mb-8 max-w-lg mx-auto lg:mx-0 ">
              Computer Engineering Student And Full stack Developer
              <br />
              PhP, JavaScript, SqlServer, ReactJs.
              <br/>
              Agile, TDD, BDD.
              <br/>
              Git, GitHub, Docker.
            </p>
            <div
              className=" flex max-w-max gap-x-6 items-center mb-12 
                 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Entre em contato</button>
              <a href="#" className="text-gradient  gap-x-4 btn-link">
                Meu Portifólio
              </a>
            </div>

            {/*Redes Sociais*/}
            <div className="flex text-[30px] gap-y-5 gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://instagram.com/imglic?igshid=YmMyMTA2M2Y=">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com/im_glic">
                <FaTwitter />
              </a>
              <a href="https://github.com/ImGlic">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/victor-glicério-713a07192/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        {/*image */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initiol="hidden"
          whileInView={"show"}
          viewport={{ onde: false, amount: 0.7 }}
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
        >
          <img
            className="rounded-full h-[400px] w-[400px] "
            src={Image}
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
