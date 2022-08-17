import React from "react";
import { motion } from "framer-motion";

const Presentation = ({ navBarAnimate, principalTextAnimate }) => {
  const navBarOptions = ["Project", "About", "Contact"];

  return (
    <div className="flex w-scrren h-screen ">
      <div className="grid grid-cols-4 grid-rows-1 w-full text-2xl text-primary">
        {navBarOptions.map((el, i) => (
          <div key={i} className="h-max overflow-y-hidden">
            <motion.div
              animate={navBarAnimate}
              className="flex flex-col items-start h-max"
              initial={{ translateY: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-fontBlack">0{i + 1}</p>
              <h1 className="font-fontBlack uppercase">{el}</h1>
            </motion.div>
          </div>
        ))}
        <div className="flex font-fontBlack justify-end">EN</div>
      </div>

      <div className="h-max overflow-hidden bottom-[20px] absolute">
        <motion.div
          className="flex flex-col text-primary text-9xl "
          transition={{ duration: 0.8 }}
          animate={principalTextAnimate}
          initial={{ translateY: "100%" }}
        >
          <h1 className="font-fontBlack">Esteban</h1>
          <h1 className="font-fontBlack">Fernández</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;
