import Button from "@/components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red">Super</span>{" "}
          <br></br>
          <span className="text-coral-red">Quality</span>{" "}
          Shoes
        </h2>

        <p className=" mt-4 info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-4 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">

        <Button label="View Details" />
        </div>

        
      </div>
    </section>
  );
};

export default SuperQuality;
