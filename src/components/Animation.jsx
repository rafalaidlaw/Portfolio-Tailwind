import React, { useState, useMemo, useCallback } from "react";
import SectionTitle from "./SectionTitle";
import shadowSvg from "../assets/shadow.svg"; // Subtle overlay for animation effect
import wayGif from "../assets/way-gif-refactored.gif";
import wayCover from "../assets/way-too-good-cover-sprite.png";
import atticCover from "../assets/attic-cover-sprite.png";
import atticGif from "../assets/attic-gif-export.gif";
import animGif from "../assets/anim-gif-download-export.gif";
import animDemoSprite from "../assets/anim-demo-sprite.png";
import { useTheme } from "../context/ThemeContext";

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
  const { colors, isBlueTheme } = useTheme();
  const [activeVideo, setActiveVideo] = useState(animationProjects[0]);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  // Memoized gradient styles for better performance
  const gradientStyle = useMemo(() => ({
    background: isBlueTheme 
      ? 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(59,130,246,0.85) 45%, rgba(147,197,253,0.95) 75%, rgba(59,130,246,1) 100%)'
      : 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(251,146,60,0.85) 45%, rgba(253,186,116,0.95) 75%, rgba(251,146,60,1) 100%)'
  }), [isBlueTheme]);

  // Memoized neon colors for better performance
  const neonColors = useMemo(() => ({
    primary: isBlueTheme ? '#60a5fa' : '#ffb347',
    secondary: isBlueTheme ? '#2563eb' : '#ff8008'
  }), [isBlueTheme]);

  // Optimized video URL helper with useCallback
  const getVideoUrl = useCallback((project, idx) => {
    if (!shouldAutoplay) return project.video;
    
    const baseUrl = project.video;
    const hasParams = baseUrl.includes("?");
    const separator = hasParams ? "&" : "?";
    
    if (project.type === "youtube") {
      // Special case: third card (index 2) should start at 3 seconds
      if (idx === 2) {
        return `${baseUrl}${separator}autoplay=1&start=3`;
      }
      return `${baseUrl}${separator}autoplay=1`;
    } else if (project.type === "vimeo") {
      return `${baseUrl}${separator}autoplay=1`;
    }
    return baseUrl;
  }, [shouldAutoplay]);

  // Optimized card hover handlers
  const handleCardHover = useCallback((project, idx) => {
    setActiveVideo(project);
    setHoveredIdx(idx);
    setShouldAutoplay(false);
  }, []);

  const handleCardLeave = useCallback(() => {
    setHoveredIdx(null);
  }, []);

  const handleCardClick = useCallback(() => {
    setShouldAutoplay(true);
  }, []);

  // Memoized card image source
  const getCardImage = useCallback((idx) => {
    if (hoveredIdx === idx) {
      return idx === 0 ? atticGif : idx === 1 ? animGif : wayGif;
    }
    return idx === 0 ? atticCover : idx === 1 ? animDemoSprite : wayCover;
  }, [hoveredIdx]);

  return (
    <div className="px-8 relative scale-90">
      {/* Import fonts from Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');
          
          /* Custom CSS variables for theme colors */
          :root {
            --neon-primary: ${neonColors.primary};
            --neon-secondary: ${neonColors.secondary};
            --gradient-overlay: ${gradientStyle.background};
          }
          
          /* Enhanced neon flicker animation with theme-aware colors */
          @keyframes neon-flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              text-shadow:
                0 0 12px var(--neon-primary),
                0 0 32px var(--neon-primary),
                0 0 64px var(--neon-secondary),
                0 0 128px var(--neon-secondary);
              opacity: 1;
            }
            20%, 22%, 24%, 55% {
              text-shadow: none;
              opacity: 0.7;
            }
          }
          
          .neon-flicker {
            color: var(--neon-primary);
            animation: neon-flicker 2.5s infinite;
          }
          
          /* Enhanced card hover effects */
          .animation-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .animation-card:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
          
          /* Smooth theme transitions */
          * {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          }
        `}
      </style>

      {/* Main Animation Section */}
      <section
        className={`relative rounded-b-3xl pt-32 pb-8 mb-12 shadow-2xl overflow-hidden ${colors.bg[400]} transition-all duration-300`}
        id="animation"
      >
        {/* Section Title */}
        <div className="flex justify-center relative z-30">
          <h2 className={`text-7xl font-tiltprism ${colors.text[400]} drop-shadow-lg neon-flicker transition-colors duration-300`}>
            Animation
          </h2>
        </div>

        {/* Theme-aware gradient overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 rounded-b-3xl transition-all duration-500"
          style={gradientStyle}
        />

        <div className="rounded-2xl p-2 relative z-20">
          <div className="align-element relative z-10 max-w-7xl mx-auto">
            
            {/* Film Frame Video Player */}
            <div className="flex justify-center mb-6 mt-16">
              <div className="w-full max-w-2xl relative flex flex-col items-stretch">
                {/* Top Film Bar with Sprockets */}
                <div className={`relative w-full h-5 ${colors.bg[300]} flex items-center justify-center rounded-t-lg transition-colors duration-300`}>
                  <div className="absolute inset-0 flex justify-between px-2 py-1 w-full">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-5 h-3 ${colors.bg[400]} rounded-sm flex items-center justify-center transition-colors duration-300`}>
                        <div className={`w-5 h-2.5 ${colors.bg[700]} rounded-sm transition-colors duration-300`} style={{transform: 'scale(0.9)'}}></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Container */}
                <div className={`w-full aspect-video overflow-hidden shadow-lg ${colors.bg[100]} transition-colors duration-300`}>
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
                    />
                  ) : (
                    <iframe
                      src={getVideoUrl(activeVideo, animationProjects.findIndex(p => p === activeVideo))}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                      title="Rafael Laidlaw Animation Demo Reel"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  )}
                </div>

                {/* Bottom Film Bar with Sprockets */}
                <div className={`relative w-full h-5 ${colors.bg[300]} flex items-center justify-center rounded-b-lg transition-colors duration-300`}>
                  <div className="absolute inset-0 flex justify-between px-2 py-1 w-full">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={`w-5 h-3 ${colors.bg[400]} rounded-sm flex items-center justify-center transition-colors duration-300`}>
                        <div className={`w-5 h-2.5 ${colors.bg[700]} rounded-sm transition-colors duration-300`} style={{transform: 'scale(0.9)'}}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions Text */}
            <div className={`text-center ${colors.text[200]} font-mono text-lg transition-colors duration-300`}>
              Hover To View || Click To Play
            </div>

            {/* Animation Project Cards */}
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-4 justify-items-center px-4">
                {animationProjects.map((project, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="flex flex-col items-center w-full max-w-xs mx-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleCardClick}
                    onMouseEnter={() => handleCardHover(project, idx)}
                    onMouseLeave={handleCardLeave}
                    tabIndex={0}
                    aria-label={`Play video for ${project.title}`}
                    style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                  >
                    <article
                      className={`animation-card border-2 ${colors.border[300]} rounded-xl flex flex-col items-center w-full shadow-md relative overflow-hidden transition-all duration-300`}
                      style={{ zIndex: 10 - idx }}
                    >
                      {/* Card Image */}
                      <img
                        src={getCardImage(idx)}
                        alt={project.title}
                        width={312}
                        height={104}
                        className={`w-[312px] h-[104px] object-cover rounded-t mb-0 border-b ${colors.border[400]} relative z-20 transition-colors duration-300`}
                      />
                      
                      {/* Card Content */}
                      <div className={`${colors.bg[300]} rounded-b-xl px-3 py-2 w-full flex flex-col items-center transition-colors duration-300`}>
                        <h3 className={`text-lg font-mono ${colors.text[600]} mb-1 drop-shadow animate-pulse-glow relative z-20 text-center transition-colors duration-300`}>
                          {project.title}
                        </h3>
                        <p className={`${colors.text[600]} text-center text-sm mb-0 relative z-20 transition-colors duration-300`}>
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
    </div>
  );
};

export default Animation; 