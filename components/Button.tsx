import Image from "next/image";

interface buttonProps {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
}: buttonProps) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : `bg-coral-red  text-white border-coral-red`
      }`}
    >
      {label}
      {iconURL && (
        <Image src={iconURL} alt="icon" className="mt-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
