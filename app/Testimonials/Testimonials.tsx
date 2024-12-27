import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TestimonialProps {
  imageSrc: StaticImport;
  name: string;
  position: string;
  companyName: string;
  testimonyText: string;
}

const Testimonial = ({
  imageSrc,
  name,
  position,
  companyName,
  testimonyText,
}: TestimonialProps) => {
  return (
    <>
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-12 -mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
          <Image
            src={imageSrc}
            alt={`${name}'s profile picture`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-[#ECEEEC] text-[30px] font-semibold mb-2">
          {name}
        </h3>

        <p className="text-[#767D74] text-[18px] font-normal mb-8">
          {position}, {companyName}
        </p>

        <div className="mb-4">
          <p className="text-[#ECEEEC] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-semibold leading-[1.4] mb-4">
            {testimonyText}
          </p>

          <p className="text-[#ECEEEC] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-semibold">
            - {name}
          </p>
        </div>
      </div>

      {/* Use w-full to prevent overflow */}
      <div className="w-full border-b border-black border-opacity-20 pt-4"></div>
    </>
  );
};

export default Testimonial;
