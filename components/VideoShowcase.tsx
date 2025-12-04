import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icons } from './ui/Icons';

const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[80vh] w-full bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-60">
        <video 
          ref={videoRef}
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1512453979798-5ea904f8486d?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* @ts-ignore: Suppressing strict type check for standard motion props */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <button 
            onClick={togglePlay}
            className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group hover:bg-brand-500 hover:border-brand-500 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {isPlaying ? (
              <Icons.Pause className="w-6 h-6 md:w-8 md:h-8 text-white" />
            ) : (
              <Icons.Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
            )}
          </button>
        </motion.div>
        <h3 className="text-white font-serif text-xl md:text-3xl mt-6 md:mt-8 tracking-wide">Experience The Extraordinary</h3>
      </div>
    </section>
  );
};

export default VideoShowcase;