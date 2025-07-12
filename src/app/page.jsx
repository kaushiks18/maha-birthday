"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Countdown from "@/components/Countdown";
import DaysTogether from "@/components/DaysTogether";
import PhotoGallery from "@/components/PhotoGallery";
import Message from "@/components/Message";
import MusicPlayer from "@/components/MusicPlayer"; // Uncomment this if you want to add a background song
import FloatingElements from "@/components/FloatingElements";
import TapToReveal from "@/components/TapToReveal";
import { Cake } from "lucide-react";
import { authorName, BIRTHDAY_DATE, letterMessage, photos } from "@/data";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showTapToReveal, setShowTapToReveal] = useState(false);
  // const [playSong, setPlaySong] = useState(false); // Uncomment this if you want to add a background song

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if the birthday date has passed
    const now = new Date();
    const birthday = new Date(BIRTHDAY_DATE);
    if (now >= birthday) {
      setShowContent(true);
      setShowTapToReveal(true);
    }
  }, []);

  const handleCountdownComplete = () => {
    setShowContent(true);
    setShowTapToReveal(true);
  };

  const handleReveal = () => {
    setShowTapToReveal(false);
    setShowContent(true);

    // Uncomment this if you want to add a background song
    // setTimeout(() => {
    //   setPlaySong(true);
    // }, 1000);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">
                🌸
              </div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">
                🌺
              </div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient">
                Your Birthday is Almost Here!
              </h1>
              <p className="text-xl text-purple-700 font-medium">
                The countdown to your special day ❤️
              </p>
            </motion.div>

            <Countdown
              targetDate={BIRTHDAY_DATE}
              onComplete={handleCountdownComplete}
            />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />
        ) : (
          <>
            {/* Uncomment this if you want to add a background song */}
            {/* <MusicPlayer playSong={playSong} /> */}
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">
                  🎉
                </div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500  animate-gradient">
                  Happy Birthday!
                </h1>
                <div className="flex justify-center gap-3">
                  <Cake className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />
                </div>
                <h1 className="text-3xl md:text-5xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  To My Special One<span className="text-black">❤️</span>
                </h1>
                <p className="text-xl text-pink-600 font-medium">Every moment with you is a blessing💖</p>
              </motion.div>

              <DaysTogether animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={letterMessage} />
              {/* 
              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                <p className="text-lg font-medium">Made with ❤️ by {authorName}</p>
              </motion.footer> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
