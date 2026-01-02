import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceSlide {
  category: string;
  title: string;
  description: string;
  image: string;
}

interface ServiceSliderProps {
  slides: ServiceSlide[];
}

const ServiceSlider = ({ slides }: ServiceSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = useRef(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      prevIndex.current = currentIndex;
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="service-slider-container h-full">
      {slides.map((slide, index) => {
        let slideClass = 'service-slide';
        
        if (index === currentIndex) {
          slideClass += ' active';
        } else if ((currentIndex + 1) % slides.length === index) {
          slideClass += ' next';
        } else {
          slideClass += ' hidden';
        }
        
        return (
          <div 
            key={index} 
            className={slideClass}
          >
            <div className="service-card group relative">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="service-card-image"
              />
              <div className="service-card-content">
                <span className="text-xs text-[#9CA3AF] mb-2 inline-block">{slide.category}</span>
                <h3 className="text-xl font-bold text-white mb-3">{slide.title}</h3>
                <p className="text-[#9CA3AF] mb-4 flex-1">{slide.description}</p>
                <div className="flex items-center text-green-500 text-sm font-medium learn-more">
                  Learn more
                  <ArrowRight className="arrow ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSlider;