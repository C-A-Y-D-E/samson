import React from "react";
import { motion } from "framer-motion";

const Buy = () => {
  return (
    <>
      <section className="relative">
        <motion.img
          className="w-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1050px]"
          src="buyBg.png"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div className="w-full container mx-auto px-6 py-16">
          <motion.h1
            className="text-6xl md:text-7xl xl:text-9xl text-center text-[#FFB400] mb-10 lg:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            How to Buy
          </motion.h1>
          <div className="w-full flex flex-col max-lg:items-center max-lg:gap-6 lg:-space-y-4 lg:rotate-[6deg]">
            <motion.div
              className="p-5 lg:p-8 w-full lg:max-w-[680px] bg-[#FFB400] rounded-3xl flex items-center gap-5 lg:gap-8 lg:self-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#F68B0A] text-5xl md:text-6xl lg:text-8xl xl:text-9xl smallSt lg:largeSt">
                1
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
                Download metamask or your wallet of choice from the app store or
                google play store for free. Desktop users, download the google
                chrome extension by going to metamask.io.
              </p>
            </motion.div>
            <motion.div
              className="p-5 lg:p-8 w-full lg:max-w-[680px] bg-[#FFB400] rounded-3xl flex items-center gap-5 lg:gap-8 lg:self-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#F68B0A] text-5xl md:text-6xl lg:text-8xl xl:text-9xl smallSt lg:largeSt">
                2
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
                Have BNB in your wallet to switch to SAMSON. If you don't have
                any BNB, you can buy directly on metamask, transfer from another
                wallet, or buy on another exchange and send it to your wallet.
              </p>
            </motion.div>
            <motion.div
              className="p-5 lg:p-8 w-full lg:max-w-[680px] bg-[#FFB400] rounded-3xl flex items-center gap-5 lg:gap-8 lg:self-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#F68B0A] text-5xl md:text-6xl lg:text-8xl xl:text-9xl smallSt lg:largeSt">
                3
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
                Go to pancakeswap.finance in google chrome or on the browser
                inside your Metamask app. Connect your wallet. Paste the Samson
                token address into Pancakeswap, select Samson COIN, and confirm.
                When Metamask prompts you for a wallet signature, sign.
              </p>
            </motion.div>
            <motion.div
              className="p-5 lg:p-8 w-full lg:max-w-[680px] bg-[#FFB400] rounded-3xl flex items-center gap-5 lg:gap-8 lg:self-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#F68B0A] text-5xl md:text-6xl lg:text-8xl xl:text-9xl smallSt lg:largeSt">
                4
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light">
                Switch BNB for Samson. We have 4/4 Taxes so you don't need to
                worry about buying with a specific slippage, although you may
                need to use slippage during times of market volatility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Buy;
