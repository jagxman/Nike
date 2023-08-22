import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/constants";
import Image from "next/image";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>

      <p className="info-text text-center mt-4 m-auto max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us
      </p>



      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map((review) => (
        <ReviewCard key={review.customerName} {...review}/>

      ))}

      </div>
    </section>
  );
};

export default CustomerReviews;
