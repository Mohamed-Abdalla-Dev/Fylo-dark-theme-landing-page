import TestimonialsBox from "./TestimonialsBox";
import { useState } from "react";

function Testimonials() {
  const [testimonials] = useState([
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Satish Patel",
      image: "/images/profile-1.jpg",
      job: "ceo, Company",
    },
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      image: "/images/profile-2.jpg",
      job: "cto, Another Company",
    },
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      image: "/images/profile-3.jpg",
      job: "marketing director",
    },
  ]);
  return (
    <section className="py-16 relative pb-40">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <img
          src="/images/bg-quotes.png"
          alt=""
          className="absolute top-4 left-4 z-[-2]"
        />
        {testimonials.map((item, index) => (
          <TestimonialsBox key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
