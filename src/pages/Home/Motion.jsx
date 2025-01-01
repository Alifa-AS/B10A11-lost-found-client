import React from "react";
import { easeOut, motion } from "framer-motion";
import img from "../../assets/lost/lost.jpg"
import img1 from "../../assets/lost/lost2.jpg"

const Motion = () => {
  return (
    <div className="my-20">
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <motion.img
              src={img}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity}}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-yellow-500 w-64 shadow-2xl"
            />
            <motion.img
              src={img1}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity}}
              className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-yellow-500 w-64 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 100, color: ["#065505"] }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Lost
              <motion.span
                animate={{ color: ["#FFC300", "#94fd03", '#e56e32'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {" "}
                & Found{" "}
              </motion.span>
              Objects!
            </motion.h1>
            <p className="py-6">
            Our intention is still to reunite items lost or found with their respective owners.
            </p>
            <button className="btn bg-green-950 text-yellow-400">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motion;
