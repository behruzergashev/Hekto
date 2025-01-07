import React, { useState, useEffect } from "react";

const TextCarousel = ({ items, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer); // Cleanup interval
  }, [items.length, interval]);

  return (
    <div style={styles.carousel}>
      <p style={styles.text}>{items[currentIndex]}</p>
      <div style={styles.controls}>
        {items.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? "blue" : "gray",
            }}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carousel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
  },
  text: {
    fontSize: "1.5rem",
    marginBottom: "16px",
  },
  controls: {
    display: "flex",
    gap: "8px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

export default TextCarousel;
