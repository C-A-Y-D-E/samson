import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Token = () => {
  return (
    <>
      <section className="mt-20 lg:mt-32 md:-space-y-28 lg:-space-y-40 xl:-space-y-48">
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center text-[#FFB400] px-6 mb-16 md:mb-32 lg:mb-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Tokenomics
        </motion.h1>
        <div className="w-full container px-6 mx-auto relative z-20">
          <div className="w-full flex max-lg:flex-col justify-center items-center gap-8">
            <div className="w-full flex flex-col justify-center gap-8 items-center">
              <div className="flex max-lg:flex-col w-full items-center gap-5">
                <Box
                  h1="Token Address:"
                  src="orangeCopy.png"
                  h2="0x6a38598C8e72243c9f24a9722CcF29eca3e06b63"
                />

                <div className="lg:translate-y-[35%] w-full max-lg:flex max-lg:justify-center">
                  <Box h1="Name:" h2="Samson the Goldendoodle" />
                </div>
              </div>
              <div className="flex max-lg:flex-col w-full items-center gap-5">
                <Box h1="Symbol:" h2="Samson" />
                <div className="lg:translate-y-[35%] w-full max-lg:flex max-lg:justify-center">
                  <Box h1="tax:" h2="4% Buy | 4% Sell" />
                </div>
              </div>
            </div>
            <motion.img
              className="w-full object-cover max-w-[550px]"
              src="token.png"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 1,
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
        <div className=" w-full h-[200px] md:h-[300px] lg:h-[480px] bg-[#FFB400] relative z-10 skew-y-[7deg] flex flex-col justify-center items-center  lg:pt-16 text-center md:-space-y-5 lg:-space-y-8">
          <motion.h1
            className="text-[#D79800] text-5xl md:text-8xl xl:text-[140px] tracking-wide -skew-y-[7deg]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Supply
          </motion.h1>
          <motion.h2
            className="text-[#F68B0A] stSmall lg:stLarge tracking-wide text-4xl md:text-7xl lg:text-8xl xl:text-[140px] -skew-y-[7deg]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
          420,000,000,000,000
          </motion.h2>
        </div>
      </section>
    </>
  );
};

export default Token;

const Box = ({ h1, src, h2 }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <motion.div
      className="p-5 w-full bg-white max-w-[350px] border-[8px] border-[#FFB22B] space-y-3 skew-y-[3deg] skew-x-[-3deg] text-[#F58B0A] text-wrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center skew-y-[-3deg] skew-x-[3deg]">
        <h1 className="font-light text-2xl lg:text-2xl">{h1}</h1>
        <CopyToClipboard
          text="0x6a38598C8e72243c9f24a9722CcF29eca3e06b63"
          onCopy={handleCopy}
        >
          <button>
            {copied ? (
              "Copied"
            ) : (
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[25px] object-cover"
                src={src}
              />
            )}
          </button>
        </CopyToClipboard>
      </div>
      <h2 className="skew-y-[-3deg] skew-x-[3deg] break-all text-wrap overflow-wrap-anywhere tracking-wide text-3xl lg:text-3xl xl:text-4xl">
        {h2}
      </h2>
    </motion.div>
  );
};
