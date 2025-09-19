import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="w-full bg-gradient-to-br from-[#674802] to-[#412605]">
        <div className="w-full container mx-auto px-6 pt-16">
          <div className="w-full grid lg:grid-cols-2 place-items-center gap-8 xl:gap-28 mx-auto">
            <motion.div
              className="w-full space-y-8 xl:space-y-14 max-lg:text-center text-[#FFB400] lg:pb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              <motion.h1
                className="text-6xl md:text-7xl xl:text-8xl"
                variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                About
              </motion.h1>
              <motion.div
                className="space-y-3 md:space-y-5 font-light"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  Meet Samson – part Golden Retriever, part Poodle, 100% good
                  vibes.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  He loves belly rubs, chasing squirrels, and building a loyal
                  pack.
                </motion.p>
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                  variants={{
                    hidden: { y: 50, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                >
                  Now, he's tokenized himself into the blockchain for all the
                  other doggos and hoomans to join.
                </motion.p>
              </motion.div>
              <motion.a
                className="bg-[#E3AF28] w-full max-w-[280px] py-3 text-black rounded-2xl max-lg:mx-auto inline-block text-center font-light text-lg md:text-xl lg:text-2xl xl:text-3xl"
                href="/"
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                BUY $SAMSON
              </motion.a>
            </motion.div>
            <motion.img
              className="w-full max-w-[500px] lg:max-w-[800px] object-cover lg:mb-[-6%]"
              src="about.png"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                y: {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                },
              }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
