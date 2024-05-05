import React from "react";
//countup
import CountUp from "react-countup";
//oberver hook
import { useInView } from "react-intersection-observer";
//motion
// import {motion} from 'react-motion';
//variants
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/*text*/}
          <div className="flex-1">
            <h2 className="h2 text-gradient">About Me</h2>
            <h3 className="h3 mb-4">I'm a Front End  Developer with many years of experience </h3>
            <p>
            Computer engineering student, full stack developer, passionate about robotics in healthcare. 
            I am the author of a patent with my teammates at SnakeTech, where I am part of as a researcher, 
            a robotics team created in college that aims to develop solutions and improvements that can 
            contribute to the medical and patient experience, making it more simplified and less risky
            </p>
          </div>
          {/*stats*/}
          <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
            <div>
              <div className="text-[40px]  text-gradient mb-2 font-primary ">
                +{inView ? <CountUp start={0} end={3} duration={5} /> : null}
              </div>
              <div className=" font-tertiary text-sm tracking-[2px]">
                Years of <br />
                Experience
              </div>              
            </div>
          </div>
                  
        </div>
      </div>
    </section>
  );
};

export default About;
