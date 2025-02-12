import React from 'react';
import java from "../../public/java.png"
import python from "../../public/python.png"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"

import nodejs from "../../public/node.png"
function  Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:mongoDB,
      name:"MongoDB"
    },
    {
      id:2,
      logo:express,
      name:"Express"
    },
    {
      id:3,
      logo:reactjs,
      name:"Reactjs"
    },
    {
      id:4,
      logo:nodejs,
      name:"Nodejs"
    },
    {
      id:5,
      logo:python,
      name:"Python"
    },
    {
      id:6,
      logo:java,
      name:"Java"
    }
  ]
  return ( 
  <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-5 md:px-20 mt-10">
     <div>
       <h1 className="text-3xl font-Helvetica-Bold mb-5">Portfolio</h1>
     <span className=" underline font-Helvetica-Bold">Featured Projects</span>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItem.map(({ id, logo, name }) => (
          <div className="md:w-[250px] md:h-[275px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
            <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
            <div>
               <div className="px-4 font-Helvetica-Bold text-xl mb-2">{name}</div>
               <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="px-3 py-4 space-x-3.5 justify-around flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-Helvetica-Bold px-3 py-2 rounded">Video</button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-Helvetica-Bold px-3 py-2 rounded">Source code</button>
            </div>
            </div>
        ))}
        </div>
   </div>
</div>

   );
}

export default Portfolio;
