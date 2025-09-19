import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
          <motion.img
            className="w-full object-cover min-w-[280px] md:max-w-[380px] lg:max-w-[500px] xl:max-w-[620px]"
            src="hero.png"
          />
        </div>
        <div className="w-full container px-6 py-16 mx-auto relative -z-10">
          <motion.div
            className="w-full text-center -space-y-[38px] md:-space-y-[80px] lg:-space-y-[90px] xl:-space-y-[139px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <Text index={0} />
            <Text index={1} />
            <Text index={2} />
            <Text index={3} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;

const Text = ({ index }) => {
  return (
    <motion.h1
      className="text-8xl tracking-[11px] md:text-[150px] md:tracking-[25px] lg:text-[200px] lg:tracking-[45px] xl:text-[270px] xl:tracking-[50px] text-[#FFB400] stSmall lg:stLarge uppercase relative -z-20"
      animate={{
        opacity: [1, 0.1, 1],
        filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        delay: index * 0.4,
      }}
    >
      samson
    </motion.h1>
  );
};
