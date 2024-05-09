import useMeasure from "react-use-measure";
import InfiniteSliderCard from "./InfiniteSliderCard";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function InfiniteSlider() {
  const images = [
    {
      img: "/projects/questify.png",
      project: "https://questify-ai.netlify.app",
    },
    {
      img: "/projects/financify.png",
      project: "https://financify-cod.netlify.app",
    },
    {
      img: "/projects/terminal-portfolio.png",
      project: "https://alston-terminal.vercel.app",
    },
    {
      img: "/projects/ethershare.png",
      project: "https://ethershare.vercel.app",
    },
    {
        img: "/projects/custom-data-chatbot.png",
        project: "https://custom-data-chatbot.vercel.app",
      },
    {
      img: "/projects/3d-ai-teacher.png",
      project: "https://thinklabs-ai-teacher.vercel.app",
    },
    {
      img: "/projects/public-square.png",
      project: "https://public-square-dev.vercel.app",
    },
    {
      img: "/projects/betcrypt.png",
      project: "https://betcrypt-cw.vercel.app",
    },
    {
      img: "/projects/tcet-se-comp-c.png",
      project: "https://tcet-se-comp-c.netlify.app",
    },
    {
      img: "/projects/video-chat.png",
      project: "https://bubble-chat-alstudd.netlify.app",
    },
    // {
    //   img: "/projects/sarthaki.png",
    //   project: "https://sarthaki-v1-0.vercel.app",
    // },
    {
      img: "/projects/wewomen.png",
      project: "https://wewomen.netlify.app",
    },
    {
      img: "/projects/travel-buddy.png",
      project: "https://travel-buddyrubix.vercel.app",
    },
  ];
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8; // 8 is the gap between the images and width / 2 is because we have 2 sets of images
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return () => controls?.stop();
  }, [xTranslation, width, duration, rerender]);

  return (
    <main className="py-8">
      <div
        className="overflow-x-hidden flex"
        // style={{ WebkitOverflowScrolling: "touch" }}
      >
      <motion.div
        className="flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, idx) => (
          <InfiniteSliderCard
            image={item.img}
            project={item.project}
            key={idx}
          />
        ))}
      </motion.div>
      </div>
    </main>
  );
}
