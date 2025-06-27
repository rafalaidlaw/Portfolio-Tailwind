import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import shadowSvg from "../assets/shadow.svg"; // Subtle overlay for animation effect
import wayGif from "../assets/way-gif-refactored.gif";
import wayCover from "../assets/way-too-good-cover-sprite.png";
import atticCover from "../assets/attic-cover-sprite.png";
import atticGif from "../assets/attic-gif-export.gif";
import animGif from "../assets/anim-gif-download-export.gif";
import animDemoSprite from "../assets/anim-demo-sprite.png";

// Sample data for animation projects
const animationProjects = [
  {
    title: "Attic Jump",
    description: "Music video for local Toronto jazz musician. I handled every aspect of the project, from storyboard, design, rigging and animation.",
    video: "https://www.youtube.com/embed/vgr5Pq0kLN8?si=gYfY2kDIHfRKmQqL",
    type: "youtube"
  },
  {
    title: "Television Demo-Reel",
    description: "A compilation of TV animation work. I have done service work for all the major Toronto Studios, working on everything from Disney to Sesame street.",
    video: "https://player.vimeo.com/video/950860369?badge=0&autopause=0&player_id=0&app_id=58479",
    type: "vimeo"
  },
  {
    title: "Way Too Good",
    description: "Animated music video that was shown in several festivals around the world including the International Animation Festivals in Ottawa and Singapore.",
    video: "https://www.youtube.com/embed/g9r4KwkOkuY?si=0ImXNd0I7sd8pdUw",
    type: "youtube"
  }
];

const Animation = () => {
  const [activeVideo, setActiveVideo] = useState(animationProjects[0]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  // Helper to get video URL with autoplay if needed
  const getVideoUrl = (project, idx) => {
    if (!shouldAutoplay) return project.video;
    if (project.type === "youtube") {
      // Special case: third card (index 2) should start at 3 seconds
      if (idx === 2) {
        return project.video.includes("?")
          ? project.video + "&autoplay=1&start=3"
          : project.video + "?autoplay=1&start=3";
      }
      // Add or replace autoplay=1
      return project.video.includes("?")
        ? project.video + "&autoplay=1"
        : project.video + "?autoplay=1";
    } else if (project.type === "vimeo") {
      return project.video.includes("?")
        ? project.video + "&autoplay=1"
        : project.video + "?autoplay=1";
    }
    return project.video;
  };

  return (
    <div className="px-8 relative scale-90">
      {/* Import Neonderthaw font from Google Fonts */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');
      </style>
      {/* Import Tilt Prism font from Google Fonts */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
      </style>
      {/* Glowing/animated SectionTitle above the section */}
      <section
        className="relative rounded-b-3xl pt-32 pb-8 mb-12 shadow-2xl overflow-hidden"
        id="animation"
      >
        <div className="flex justify-center relative z-30">
          <h2 className="text-7xl font-tiltprism text-orange-400 drop-shadow-lg neon-flicker">
            Animation
          </h2>
        </div>
        {/* Transparent-to-orange vertical gradient overlay at the top */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 rounded-b-3xl" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(251,146,60,0.85) 45%, rgba(253,186,116,0.95) 75%, rgba(251,146,60,1) 100%)'}}></div>
        <div className="rounded-2xl p-2 relative z-20">
          <div className="align-element relative z-10 max-w-7xl mx-auto">
            {/* Film frame style video */}
            <div className="flex justify-center mb-6 mt-16">
              <div className="w-full max-w-2xl relative flex flex-col items-stretch">
                {/* Top colored bar with sprockets */}
                <div className="relative w-full h-5 bg-orange-300 flex items-center justify-center rounded-t-lg">
                  <div className="absolute inset-0 flex justify-between px-2 py-1 w-full">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-5 h-3 bg-orange-400 rounded-sm flex items-center justify-center">
                        <div className="w-5 h-2.5 bg-orange-700 rounded-sm" style={{transform: 'scale(0.9)'}}></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Video */}
                <div className="w-full aspect-video overflow-hidden shadow-lg bg-orange-100">
                  {activeVideo.type === "youtube" ? (
                    <iframe
                      width="560"
                      height="315"
                      src={getVideoUrl(activeVideo, animationProjects.findIndex(p => p === activeVideo))}
                      title="Animation Reel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    <iframe
                      src={getVideoUrl(activeVideo, animationProjects.findIndex(p => p === activeVideo))}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                      title="Rafael Laidlaw Animation Demo Reel"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  )}
                </div>
                {/* Bottom colored bar with sprockets */}
                <div className="relative w-full h-5 bg-orange-300 flex items-center justify-center rounded-b-lg">
                  <div className="absolute inset-0 flex justify-between px-2 py-1 w-full">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-5 h-3 bg-orange-400 rounded-sm flex items-center justify-center">
                        <div className="w-5 h-2.5 bg-orange-700 rounded-sm" style={{transform: 'scale(0.9)'}}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-orange-200 font-mono text-lg ">Hover To View || Click To Play</div>
            {/* Animation cards with lift/glow on hover */}
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-4 justify-items-center px-4">
                {animationProjects.map((project, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="flex flex-col items-center w-full max-w-xs mx-auto focus:outline-none"
                    onClick={() => setShouldAutoplay(true)}
                    onMouseEnter={() => { setActiveVideo(project); setHoveredIdx(idx); setShouldAutoplay(false); }}
                    onMouseLeave={() => setHoveredIdx(null)}
                    tabIndex={0}
                    aria-label={`Play video for ${project.title}`}
                    style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                  >
                    <article
                      className="border-2 border-orange-300 rounded-xl flex flex-col items-center transition-transform duration-300 w-full shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 hover:bg-orange-200 hover:scale-105 hover:z-20 relative overflow-hidden"
                      style={{ zIndex: 10 - idx }}
                    >
                      <img
                        src={
                          hoveredIdx === idx
                            ? (idx === 0 ? atticGif : idx === 1 ? animGif : wayGif)
                            : idx === 0
                              ? atticCover
                              : idx === 1
                                ? animDemoSprite
                                : wayCover
                        }
                        alt={project.title}
                        width={312}
                        height={104}
                        className="w-[312px] h-[104px] object-cover rounded-t mb-0 border-b border-orange-400 relative z-20"
                      />
                      <div className="bg-orange-300 rounded-b-xl px-3 py-2 w-full flex flex-col items-center">
                        <h3 className="text-lg font-mono text-orange-600 mb-1 drop-shadow animate-pulse-glow relative z-20 text-center">
                          {project.title}
                        </h3>
                        <p className="text-orange-600 text-center text-sm mb-0 relative z-20">
                          {project.description}
                        </p>
                      </div>
                    </article>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Custom glowing animation for SectionTitle and card titles */}
      <style>{`
        @keyframes neon-flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow:
              0 0 12px #ffb347,
              0 0 32px #ffb347,
              0 0 64px #ff8008,
              0 0 128px #ff8008;
            opacity: 1;
          }
          20%, 22%, 24%, 55% {
            text-shadow: none;
            opacity: 0.7;
          }
        }
        .neon-flicker {
          color: #ffb347;
          animation: neon-flicker 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Animation; 