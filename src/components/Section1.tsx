import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Section1 = () => {
  return (
    <motion.div
      className="mx-auto mb-40 grid max-w-screen-xl items-center gap-14 px-4 md:mb-56 md:grid-cols-2 md:gap-28 lg:px-2"
      initial={{ x: '50' }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div>
        <div className="mb-6 text-4xl font-bold">
          Easiest way to build community marketplaces
        </div>
        <div className="mb-12 text-lg text-[#EDEDED]">
          Reservoir&apos;s API and public repositories enable communities to
          easily build their own marketplaces with access to a shared pool of
          liquidity.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-8 py-4 font-bold hover:text-white hover:no-underline "
          href="https://github.com/reservoirprotocol"
        >
          Visit GitHub
          <HiArrowRight className="flex-none" />
        </a>
      </div>
      <div>
        <img
          className="mb-1.5 block rounded-2xl"
          src="/home/Loot_Exchange.webp"
          width="1416"
          height="1110"
          alt="Screenshot of loot.exchange"
        />
        <a
          target="_blank"
          className="flex justify-end text-sm opacity-70"
          href="https://www.loot.exchange/"
        >
          @Loot Exchange
        </a>
      </div>
    </motion.div>
  )
}

export default Section1
