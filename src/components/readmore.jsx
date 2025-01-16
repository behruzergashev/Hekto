'use client'
import { useState } from 'react'
import './BlogCards.css'
import Rasm from '../assets/blokrasm.png'
import Rasmcha from '../assets/blokrasm2.png'
import Rasmxo from '../assets/blokrasm4.png'

export default function BlogCards() {
  const [expandedCards, setExpandedCards] = useState({})

  const blogData = [
    {
      id: 1,
      image: Rasm,
      author: "SaberAli",
      date: "21 August,2020",
      title: "Top esssential Trends in 2021",
      shortText: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      fullText: "More off this less hello samlande lied much over tightly circa horse taped mightly. More off this less hello samlande lied much over tightly circa horse taped mightly. More details about the trends and insights for the year 2021."
    },
    {
      id: 2,
      image: Rasmcha,
      author: "Surfauxion",
      date: "21 August,2020",
      title: "Top essential trends in 2021",
      shortText: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      fullText: "More off this less hello samlande lied much over tightly circa horse taped mightly. More off this less hello samlande lied much over tightly circa horse taped mightly. More details about the trends and insights for the year 2021."
    },
    {
      id: 3,
      image: Rasmxo,
      author: "SaberAli",
      date: "21 August,2020",
      title: "Top esssential Trends in 2021",
      shortText: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      fullText: "More off this less hello samlande lied much over tightly circa horse taped mightly. More off this less hello samlande lied much over tightly circa horse taped mightly. More details about the trends and insights for the year 2021."
    }
  ]

  const toggleReadMore = function (id) {
    setExpandedCards(function (prev) {
      return {
        ...prev,
        [id]: !prev[id]
      }
    })
  }

  return (
    <div className="container">
      <h1 className="heading">Leatest Blog</h1>
      
      <div className="grid">
        {blogData.map(function (blog) {
          return (
            <div key={blog.id} className="card">
              <img 
                src={blog.image || "/placeholder.svg"} 
                alt="Blog" 
                className="card-image"
              />
              
              <div className="card-content">
                <div className="card-header">
                  <span className="author">{blog.author}</span>
                  <span className="date">{blog.date}</span>
                </div>
                
                <h2 className="card-title">{blog.title}</h2>
                
                <p className="card-text">
                  {expandedCards[blog.id] ? blog.fullText : blog.shortText}
                </p>
                
                <button
                  onClick={function () { toggleReadMore(blog.id) }}
                  className="read-more-button"
                >
                  {expandedCards[blog.id] ? 'Read More' : 'Read More'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
