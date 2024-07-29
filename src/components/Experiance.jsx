import React from 'react';
import html from "../../public/html.jpeg";
import css from "../../public/css.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import tailwindcss from "../../public/tailwindcss.png";

import nodejs from "../../public/node.png"
function  Experiance() {
  const cardItem = [
    {
      id:1,
      logo:html,
      name:"html",
    },
    {
      id:2,
      logo:css,
      name:"css",
    },
    {
      id:3,
      logo:java,
      name:"java",
    },
    {
      id:4,
      logo:javascript,
      name:"javascript",
    },
    {
      id:5,
      logo:oracle,
      name:"oracle",
    },
    {
      id:6,
      logo:spring,
      name:"spring",
    },
    {
        id:7,
        logo:tailwindcss,
        name:"tailwindcss",
      }
  ]
  return ( 
  <div name="Experience" className="max-w-screen-2xl container mx-auto px-5 md:px-20 my-10">
     <div>
       <h1 className="text-3xl font-Helvetica-Bold mb-5">Experiance</h1>
     <p className="  ">I've more than 2 years of experiance in bbelow technologies.</p>
     <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItem.map(({ id, logo, name }) => (
          <div className="flex flex-col item-center justify-center  border-[2px] rounded-full md:w-[220px] md:h-[220px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
            <img 
                src={logo} 
                className="" 
                alt="" />
            
           </div>
        ))}
        </div>
   </div>
</div>

   );
}

export default Experiance;
