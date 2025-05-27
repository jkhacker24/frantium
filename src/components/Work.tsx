
import React, { useState, useRef } from "react";
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

const videoProjects = [
  {
    id: 1,
    title: "Digital Decade",
    category: "Motion Graphics",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Creative motion graphics for digital campaign",
    views: "50k"
  },
  {
    id: 2,
    title: "Winter Jamz",
    category: "Music Video",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "High-energy music video production",
    views: "47k"
  },
  {
    id: 3,
    title: "Pastel Wifey",
    category: "Commercial",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Elegant commercial production",
    views: "63k"
  },
  {
    id: 4,
    title: "Neon Dreams",
    category: "Visual Effects",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Futuristic visual effects showcase",
    views: "82k"
  },
  {
    id: 5,
    title: "Urban Flow",
    category: "Documentary",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Documentary style storytelling",
    views: "94k"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoProjects.length);
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoProjects.length) % videoProjects.length);
    setPlayingVideo(null);
  };

  const togglePlay = (videoId: number) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideo === videoId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      Object.values(videoRefs.current).forEach(v => v?.pause());
      video.play();
      setPlayingVideo(videoId);
    }
  };

  const handleVideoRef = (videoId: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[videoId] = ref;
  };

  return (
    <section id="work" className="py-12 md:py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h5 className="text-[#FF5E14] uppercase tracking-wider font-medium mb-3 text-sm">
            Popular this week
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Featured <span className="bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6 px-4">
            Swipe through our latest video productions and watch our creative work in action.
          </p>
        </div>

        {/* Mobile-First Video Carousel */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Navigation Buttons - Mobile Optimized */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-[#FF5E14] text-white p-3 rounded-full shadow-lg active:scale-95 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-[#FF5E14] text-white p-3 rounded-full shadow-lg active:scale-95 transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Video Container - Mobile Optimized */}
          <div className="overflow-hidden rounded-lg mx-8">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
                    {/* Video Player - Mobile Optimized */}
                    <div className="relative aspect-video">
                      <video
                        ref={handleVideoRef(project.id)}
                        className="w-full h-full object-cover"
                        poster={project.thumbnail}
                        preload="metadata"
                        playsInline
                        controls={false}
                        onLoadedData={() => console.log(`Video ${project.id} loaded`)}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                      </video>
                      
                      {/* Large Play Button Overlay - Mobile Friendly */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <button
                          onClick={() => togglePlay(project.id)}
                          className="bg-[#FF5E14] hover:bg-[#FF8F50] text-white p-6 rounded-full shadow-lg transform active:scale-95 transition-all"
                        >
                          {playingVideo === project.id ? 
                            <Pause size={32} /> : 
                            <Play size={32} className="ml-1" />
                          }
                        </button>
                      </div>

                      {/* Video Info Overlay - Mobile Optimized */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                        <span className="text-[#FF5E14] text-xs font-medium bg-[#FF5E14]/20 px-3 py-1 rounded-full mb-2 inline-block">
                          {project.category}
                        </span>
                        <h3 className="text-white text-lg font-bold mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#FF5E14] text-sm font-medium">
                            👁️ {project.views} views
                          </span>
                          <button
                            onClick={() => togglePlay(project.id)}
                            className="flex items-center space-x-2 bg-[#FF5E14] text-white px-4 py-2 rounded-lg text-sm font-medium active:scale-95 transition-all"
                          >
                            {playingVideo === project.id ? 
                              <>
                                <Pause size={16} />
                                <span>Pause</span>
                              </> : 
                              <>
                                <Play size={16} />
                                <span>Play</span>
                              </>
                            }
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Mobile Optimized */}
          <div className="flex justify-center mt-6 space-x-2">
            {videoProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setPlayingVideo(null);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#FF5E14] scale-125' 
                    : 'bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Current Video Info - Mobile */}
          <div className="mt-6 text-center">
            <p className="text-white text-lg font-medium">
              {currentIndex + 1} / {videoProjects.length}
            </p>
            <p className="text-gray-400 text-sm">
              {videoProjects[currentIndex].title}
            </p>
          </div>
        </div>

        {/* View All Button - Mobile Optimized */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] text-white rounded-lg font-medium text-lg active:scale-95 transition-all shadow-lg"
          >
            View All Projects 
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
