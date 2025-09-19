import React from "react";
import { motion } from "framer-motion";

const Join = () => {
  return (
    <>
      <section className="mt-20 lg:mt-32 relative w-full max-md:h-full">
        <motion.div
          className="w-full skew-y-[7deg] bg-[#664703] h-[120px] md:h-[150px] xl:h-[170px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="w-full skew-y-[7deg] bg-[#412605] h-[120px] md:h-[150px] xl:h-[170px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="w-full skew-y-[7deg] bg-[#382002] h-[120px] md:h-[150px] xl:h-[170px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />

        <div className="w-full container mx-auto px-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:h-full">
          <div className="w-full grid md:grid-cols-2 place-items-center gap-3 lg:gap-8 mx-auto max-md:h-full">
            <motion.h1
              className="tracking-wide text-[#FFB400] text-5xl md:text-7xl md:leading-[90px] lg:text-8xl lg:leading-[130px] xl:text-9xl xl:leading-[140px] max-md:text-center md:-translate-y-[12%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Join our <br /> Community
            </motion.h1>
            <motion.img
              className="w-full max-w-[200px] md:max-w-[300px] lg:min-w-[550px] xl:min-w-[630px] object-cover"
              src="join.png"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 1,
                delay: 0.6,
                y: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
