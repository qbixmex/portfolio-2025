import { FC, Fragment, useId } from "react";

import testimonials from "@/data/testimonials";
import TestimonialCard from "./Testimonial";

const TestimonialsList: FC = () => {
  const id = useId();
  return (
    <Fragment key={id}>
      {testimonials.map((testimonial) => (
        <TestimonialCard key={id} testimonial={testimonial} />
      ))}
    </Fragment>
  );
};

export default TestimonialsList;
