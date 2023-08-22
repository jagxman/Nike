
import Image from "next/image"


interface buttonProps {
    label: string;
    iconURL: string;

}


const Button = ( {label, iconURL} : buttonProps) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
        <Image src={iconURL} alt="icon" className="mt-2 rounded-full w-5 h-5"/>
    </button>
  )
}

export default Button