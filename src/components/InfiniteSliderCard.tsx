import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface InfiniteSliderCardProps {
  image: string;
  project: string;
}

const InfiniteSliderCard: React.FC<InfiniteSliderCardProps> = ({
  image,
  project,
}) => {
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <>
      <motion.div
        className="relative overflow-hidden h-[200px] min-w-[400px] bg-slate-400 rounded-xl lg:flex hidden justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full"></div>
              <motion.a
                href={project}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-2 hover:opacity-75"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span className="text-black">View Project</span>
                <div className="bg-black -rotate-45 rounded-[50%] px-1">
                  <span className="text-lg text-white">&rarr;</span>
                </div>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        <Image src={image} alt={image} fill style={{ objectFit: "fill" }} />
      </motion.div>
      <motion.a
        href={project}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden relative overflow-hidden h-[200px] min-w-[400px] bg-slate-400 rounded-xl flex justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <Image src={image} alt={image} fill style={{ objectFit: "fill" }} />
      </motion.a>
    </>
  );
};

export default InfiniteSliderCard;
