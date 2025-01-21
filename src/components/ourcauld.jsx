'use client';

import { useState } from 'react';
import { Circle } from 'lucide-react';
import './outstyle.css';

export default function TestimonialCarousel() {
  const testimonials = [
    {
        
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    },
    {
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-carousel">
      <h2 className="carousel-title">Our Client Say!</h2>

      <div className="carousel-container">
        <div className="carousel-content">
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        </div>

        <div className="navigation-arrows">

        </div>

        <div className="navigation-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <Circle className="dot-icon" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
