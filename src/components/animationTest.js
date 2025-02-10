import { motion } from "framer-motion";

const FlakonAnimation = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* First Logo Appearance */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-white text-6xl font-bold"
      >
        FLAKÖN
      </motion.h1>

      {/* Moving Frame */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-64 h-96 border-4 border-white"
      ></motion.div>

      {/* Bottom to Top Logo Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute flex flex-col items-center"
      >
        <div className="text-white text-6xl font-bold">FLAKÖN</div>
        <div className="w-24 h-24 bg-white rounded-md"></div> {/* Replace with actual logo */}
      </motion.div>
    </div>
  );
};

export default FlakonAnimation;
