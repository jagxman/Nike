
import Image from "next/image";
import { StaticImageData } from "next/image";
import React from "react";


interface shoeProps {
  imgURL:{
    thumbnail: any;
    bigShoe:  StaticImageData;
  }
  changeBigShoe: any;
  bigShoeImg: StaticImageData;
}

const ShoeCard = ({ imgURL, changeBigShoe, bigShoeImg }: shoeProps) => {



    const handleClick = () =>{
        if (bigShoeImg !== imgURL.bigShoe){
            changeBigShoe(imgURL.bigShoe);
        }
    }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } max-sm:flex-1 cursor-pointer`}
     onClick={handleClick}>
      
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
        <Image src={imgURL.thumbnail} alt="shoe_collection" width={127} height={103} className="object-contain"></Image>
      </div>


    </div>
  );
};

export default ShoeCard;
