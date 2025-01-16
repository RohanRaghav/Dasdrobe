import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    feedback: "This service was excellent!",
    stars: 5,
    name: "John Doe",
  },
  {
    id: 2,
    feedback: "Very satisfied with the quality!",
    stars: 4,
    name: "Jane Smith",
  },
  {
    id: 3,
    feedback: "Good, but there's room for improvement.",
    stars: 3,
    name: "Sam Wilson",
  },
  {
    id: 4,
    feedback: "Amazing experience!",
    stars: 5,
    name: "Emily Davis",
  },
  {
    id: 5,
    feedback: "Affordable and reliable.",
    stars: 4,
    name: "Michael Brown",
  },
  {
    id: 6,
    feedback: "Will definitely recommend to others.",
    stars: 5,
    name: "Laura White",
  },
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <div className="blog">
        <div>
      Explore the Latest Fashion, Trends,<br />
      Dashdrobe Updates and Insider News..
      </div></div>
    <div className="testimonials-container">
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial, index) => {
          const position =
            index === currentIndex
              ? "center"
              : index === currentIndex - 1
              ? "left"
              : index === currentIndex + 1
              ? "right"
              : "hidden";

          return (
            <div
              className={`testimonial-card ${position}`}
              key={testimonial.id}
            >
              <p className="feedback">"{testimonial.feedback}"</p>
              <div className="stars">
                {"★".repeat(testimonial.stars)}
                {"☆".repeat(5 - testimonial.stars)}
              </div>
              <p className="name">- {testimonial.name}</p>
            </div>
          );
        })}
          <button onClick={handlePrev} className="previous" disabled={currentIndex === 0}>
          &#8592;
        </button>
        <button
          onClick={handleNext} className="next"
          disabled={currentIndex >= testimonials.length - 2}
        >
         &#8594;
        </button>
      </div>
      <div className="Divisionst">
      <div className="apply">
        Get the app
      </div>
      <div className="apply">Explore Updates</div>
    </div>
    </div>
    </div>
  );
};

export default Blogs;