import React, { forwardRef } from 'react';
import { Cards } from "../components/Cards";
import Tradaphoto from "../assets/Tradaphoto.png";
import Massaphoto from "../assets/Massaphoto.jpg"

const Projects = forwardRef((props, ref) => {
  return (

    <>
      <div ref={ref} className='pt-10'></div>
      <div  className="mt-10 p-0 h-[90vh] relative bg-[#001212] ">
        <div className="absolute h-[100vh] w-full -top-10 backdrop-blur-lg">
          <h2 className="text-white text-5xl w-full font-stencil my-20 p-0 text-center">Projects</h2>
          <div className="flex flex-nowrap justify-evenly">
            <Cards
            img={Massaphoto}
            name="Massa Partner"
            description="A presentation page to get to know a company and schedule a meeting with them"
            to="https://massapartner.com/home/">
            </Cards>
            <Cards
            img={Tradaphoto}
            name="TRADA"
            description="A website created to echange stock ideas and calculate future trends with AI (Still in progress)"
            to="https://github.com/mJiga/trada_webApp">
            </Cards>
            
            
            </div>
        </div>
        
      </div>
      </>
    );
  });
  
  export default Projects;