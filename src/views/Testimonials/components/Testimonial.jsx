import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    id: 1,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    image: "/dp.png",
    text:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best."
  },
  {
    id: 2,
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    image: "/dp.png",
    text:
      "I like it because I like to travel far and still can connect with high speed.I like it because I like to travel far and still can connect with high speed."
  },
  {
    id: 3,
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5", 
    image: "/dp.png",
    text:
      "This is very unusual for my business that currently requires a virtual private network.I like it because I like to travel far and still can connect with high speed."
  }
];

const TestimonialCard = ({ name, location, rating, image, text }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-8 max-w-90 bg-white">
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="ml-4">
          <h1 className="font-semibold text-sm">
            {name}
            <br />
            <span className="font-light text-gray-500 text-xs">
              {location}
            </span>
          </h1>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <p className="text-sm">{rating}</p>
          <img src="/star.png" alt="star" className="w-4 h-4" />
        </div>
      </div>

      <p className="mt-4 text-sm font-light text-gray-600 leading-relaxed">
        “{text}”
      </p>
    </div>
  );
};

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <Carousel
        responsive={responsive}
        partialVisible
        infinite
        arrows
        itemClass="px-3"
      >
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
