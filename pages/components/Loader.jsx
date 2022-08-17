import { useAnimation, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Loader = ({
  initialAnimation,
  initialShowText,
  blockAnimate,
  modalAnimate,
  textAnimate,
}) => {
  const [cont, setCont] = useState(0);

  useEffect(() => {
    initialShowText();

    const interval = setInterval(() => {
      setCont((prev) => {
        if (prev < 100) return prev + 1;
        else {
          clearInterval(interval);
          initialAnimation();
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={modalAnimate}
      transition={{ duration: 1 }}
      initial={{ height: "100vh" }}
      className="bg-primary fixed w-screen flex justify-center items-center top-0 left-0 z-50"
    >
      <motion.div className="flex flex-col text-white font-fontBlack text-7xl">
        <motion.div
          animate={blockAnimate}
          className="absolute bg-primary w-[400px] h-[250px] -translate-y-full z-[60]"
        ></motion.div>

        <motion.div
          initial={{ translateY: 200, display: "flex" }}
          transition={{ duration: 0.7 }}
          animate={textAnimate}
          className="flex-col w-[400px] h-[250px] justify-center"
        >
          <h1 className="font-fontBold">Esteban</h1>
          <h1 className="font-fontBold">Férnandez</h1>
        </motion.div>

        <motion.div
          animate={blockAnimate}
          className="absolute bg-primary w-[400px] h-[250px] translate-y-full z-[60]"
        ></motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-10">
        <h1 className="text-white font-fontBlack text-5xl">{cont}</h1>
      </div>
    </motion.div>
  );
};

export default Loader;
