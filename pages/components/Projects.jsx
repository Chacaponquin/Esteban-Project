import Image from "next/image";
import React from "react";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4];

  const divAnimate = useAnimation();
  const divClass = (ind) => {
    switch (ind) {
      case 1:
        return "-translate-y-16";
      case 3:
        return "-translate-y-16";
      default:
        return "";
    }
  };

  const handleAnimate = () => {
    console.log("Hola");
    divAnimate.start({ translateX: 0, rotate: "-3deg" });
  };

  return (
    <div className="w-screen mt-20">
      <div className="grid grid-cols-2 w-full py-4">
        {projects.map((el, i) => (
          <motion.div
            key={i}
            className={
              "flex w-full justify-center mb-10 overflow-hidden " + divClass(i)
            }
            onViewportEnter={handleAnimate}
            viewport={{ once: true }}
          >
            <motion.div
              className={"flex flex-col project-card w-max py-5 "}
              initial={{ translateX: "100%", rotate: 0 }}
              animate={divAnimate}
              transition={{ duration: 0.5 }}
            >
              <div className="!w-[550px]">
                <Image
                  src={"/images/boceto.jpg"}
                  alt="Buenas tardes"
                  width={550}
                  height={500}
                  objectFit="cover"
                  className="object-cover"
                />
              </div>

              <div className="flex justify-center text-2xl">
                <p className="uppercase text-primary font-fontItalicBold">
                  2021-present
                </p>
                <h1 className="font-fontItalicBlack text-primary">Stockholm</h1>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
