import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("background-audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying); // Toggle the state
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Audio element with file in the public folder */}
        <audio id="background-audio" autoPlay loop>
          <source src="/music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Music Controls - Play/Pause Button (Fixed Position) */}
        <div className="fixed top-[500px] right-[50px] flex flex-col items-center justify-center gap-4 z-10">
          {/* Play Button */}
          <div 
            onClick={toggleMusic} 
            className="cursor-pointer flex items-center justify-center bg-black bg-opacity-70 p-3 rounded-full w-48 h-16 shadow-lg"
            style={{ border: "2px solid #d3a6f7" }}  // Custom Light Purple Border
          >
            {/* Music Note Text */}
            <span className="text-white text-2xl mr-2">🎵</span>
            <span className="text-white text-lg">{isPlaying ? "Pause Music" : "Play Music"}</span>
          </div>
        </div>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
