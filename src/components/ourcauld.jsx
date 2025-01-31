"use client"

import { useState } from "react"
import { Circle } from "lucide-react"
import "./outstyle.css"
import Ravshan1 from '../assets/ravshanali.png'
import Ravshan2 from '../assets/ravshanxon.png'
import Ravshan3 from '../assets/polatbek.png'

export default function TestimonialCarousel() {
  const testimonials = [
    {
      image: Ravshan1,
      name: "John Smith",
      position: "CEO at TechCorp",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.",
    },
    {
      image: Ravshan2,
      name: "Sarah Johnson",
      position: "Designer",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    },
    {
      image:Ravshan3,
      name: "Michael Brown",
      position: "Developer",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="testimonial-carousel">
      <h2 className="carousel-title">Our Client Say!</h2>

      <div className="carousel-container">
        <div className="profile-images">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`profile-wrapper ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >
              <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} className="profile-image" />
            </div>
          ))}
        </div>

        <div className="carousel-content">
          <h3 className="client-name">{testimonials[currentIndex].name}</h3>
          <p className="client-position">{testimonials[currentIndex].position}</p>
          <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        </div>

        <div className="navigation-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`nav-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            >
              <Circle className="dot-icon" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

