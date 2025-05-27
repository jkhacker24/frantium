
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
    setPlayingVideo(null); // Stop playing when sliding
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoProjects.length) % videoProjects.length);
    setPlayingVideo(null); // Stop playing when sliding
  };

  const togglePlay = (videoId: number) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideo === videoId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach(v => v?.pause());
      video.play();
      setPlayingVideo(videoId);
    }
  };

  const handleVideoRef = (videoId: number) => (ref: HTMLVideoElement | null) => {
    videoRefs.current[videoId] = ref;
  };

  return (
    <section id="work" className="section py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-[#FF5E14]/20 opacity-30 hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full border border-[#FF8F50]/20 opacity-20 hidden lg:block animate-pulse"></div>
      
      <div className="container relative z-10 px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h5 className="text-[#FF5E14] uppercase tracking-wider font-medium mb-4 animate-on-scroll text-sm lg:text-base">
            Popular this week
          </h5>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 animate-on-scroll text-white">
            Featured <span className="gradient-text font-bold">Portfolio</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto mb-8 lg:mb-10 animate-on-scroll px-4">
            Swipe through our latest video productions and watch our creative work in action.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#FF5E14]/20 backdrop-blur-sm border border-[#FF5E14]/30 text-white p-3 rounded-full hover:bg-[#FF5E14]/40 transition-all duration-300 group"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#FF5E14]/20 backdrop-blur-sm border border-[#FF5E14]/30 text-white p-3 rounded-full hover:bg-[#FF5E14]/40 transition-all duration-300 group"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Video Cards Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {videoProjects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 px-2">
                  <div className="relative group bg-gradient-to-br from-[#FF5E14]/10 to-[#FF8F50]/10 backdrop-blur-sm border border-[#FF5E14]/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#FF5E14]/20 transition-all duration-500">
                    {/* Video Player */}
                    <div className="relative aspect-video overflow-hidden">
                      <video
                        ref={handleVideoRef(project.id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        poster={project.thumbnail}
                        preload="metadata"
                        onLoadedData={() => console.log(`Video ${project.id} loaded`)}
                        onError={() => console.log(`Video ${project.id} error`)}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Play/Pause Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => togglePlay(project.id)}
                          className="bg-[#FF5E14] hover:bg-[#FF8F50] text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
                        >
                          {playingVideo === project.id ? <Pause size={32} /> : <Play size={32} />}
                        </button>
                      </div>

                      {/* Video Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <div className="flex items-end justify-between">
                          <div>
                            <span className="text-[#FF5E14] text-sm font-medium bg-[#FF5E14]/20 px-2 py-1 rounded-full mb-2 inline-block">
                              {project.category}
                            </span>
                            <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-2">
                              {project.description}
                            </p>
                            <div className="flex items-center space-x-4">
                              <span className="text-[#FF5E14] text-sm font-medium">
                                👁️ {project.views} views
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="p-6 bg-black/60 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => togglePlay(project.id)}
                          className="flex items-center space-x-2 bg-[#FF5E14] hover:bg-[#FF8F50] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          {playingVideo === project.id ? <Pause size={16} /> : <Play size={16} />}
                          <span className="text-sm font-medium">
                            {playingVideo === project.id ? 'Pause' : 'Play'}
                          </span>
                        </button>
                        
                        <a 
                          href="#" 
                          className="flex items-center text-white hover:text-[#FF5E14] transition-colors text-sm font-medium"
                        >
                          View Details
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {videoProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#FF5E14] scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 lg:mt-16 animate-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#FF5E14] to-[#FF8F50] text-white rounded-lg hover:shadow-lg hover:shadow-[#FF5E14]/30 transition-all duration-300 transform hover:scale-105 text-lg font-medium"
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
