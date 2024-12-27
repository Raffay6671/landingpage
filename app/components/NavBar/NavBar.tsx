"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* Mobile Navbar (less than 575px) */}
      <div className="sm:hidden flex flex-wrap pb-4 pt-5 px-4 justify-between items-center bg-[#14121F] text-white">
        <div className="text-[#AFB5AD] font-inter font-medium">Bike Bliss</div>
        <div className="flex gap-2">
          <Button className="bg-[#56468B] px-4 py-2 text-sm text-[#F9F9F8] transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-md">
            Get Started
          </Button>
          <Link href="/weather">
            <Button className="bg-[#E27D60] px-4 py-2 text-sm text-white whitespace-nowrap transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-md">
              Weather ☀️
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop Navbar (575px and above) */}
      <div className="hidden sm:flex pb-4 pt-5 px-8 justify-between items-center bg-[#14121F] text-white">
        <div className="text-[#AFB5AD] font-inter font-medium">Bike Bliss</div>
        <div className="flex gap-6">
          <a
            href="#features"
            className="text-[#ECEEEC] hover:text-white font-medium transition-all duration-300"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-[#ECEEEC] hover:text-white font-medium transition-all duration-300"
          >
            Testimonials
          </a>
          <a
            href="#faqs"
            className="text-[#ECEEEC] hover:text-white font-medium transition-all duration-300"
          >
            FAQs
          </a>
        </div>
        <div className="flex gap-4">
          <Button className="bg-[#56468B] px-4 py-2 text-sm text-[#F9F9F8] transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-md">
            Contact
          </Button>
          <Link href="/weather">
            <Button className="bg-[#E27D60] px-4 py-2 text-sm text-white whitespace-nowrap transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-md">
              Weather ☀️
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-0 border-b-[0.05px] border-gray-800"></div>
    </>
  );
};

export default Navbar;
