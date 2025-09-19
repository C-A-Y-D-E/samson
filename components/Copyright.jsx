import React, { useState } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Copyright = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <section>
        <div className="w-full container mx-auto px-6 md:pt-16 max-md:mt-10 pb-10">
          <div className="w-full flex max-md:flex-col max-md:items-center max-md:gap-8 max-md:text-center items-end justify-between">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-2xl md:text-3xl lg:text-4xl tracking-wider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Token address:
                </motion.h1>
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-sm md:text-xl lg:text-2xl lg:tracking-wider font-light">
                  0x6a38598C8e72243c9f24a9722CcF29eca3e06b63
                  </h2>
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
                          className="w-full object-cover max-w-[20px]"
                          src="copy.png"
                        />
                      )}
                    </button>
                  </CopyToClipboard>
                </motion.div>
              </div>
              <motion.div
                className="flex items-center max-md:justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  href="/"
                >
                  <img
                    className="w-full max-w-[50px] object-cover"
                    src="x.png"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  href="/"
                >
                  <img
                    className="w-full max-w-[50px] object-cover"
                    src="tele.png"
                  />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.h2
              className="text-xl md:text-3xl lg:text-4xl xl:text-6xl tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Copyright 2025
            </motion.h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Copyright;
