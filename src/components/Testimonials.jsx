import TestimonialsBox from "./TestimonialsBox";
import { useState } from "react";
import bgQuotes from "./assets/images/bg-quotes.png";
import profile1 from "./assets/images/profile-1.jpg";
import profile2 from "./assets/images/profile-2.jpg";
import profile3 from "./assets/images/profile-3.jpg";



function Testimonials() {
  const [testimonials] = useState([
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Satish Patel",
      image: profile1,
      job: "ceo, Company",
    },
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Bruce McKenzie",
      image: profile2,
      job: "cto, Another Company",
    },
    {
      description:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      name: "Iva Boyd",
      image: profile3,
      job: "marketing director",
    },
  ]);
  return (
    <section className="py-16 relative pb-40">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <img
          src={bgQuotes}
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
