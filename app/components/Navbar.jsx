"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { InstagramIcon, LinkedInIcon } from "./UI/Icons";

/// CUSTOMLINK - Link in it's own component for reusability reasons
const CustomLink = ({ href, title, className = "" }) => {
  /// Get the current route and pathname - determine if the current page is the same as the link's href
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} ${
        pathname === href ? "active" : ""
      } relative group cursor-pointer`}
    >
      {title}
      <span
        className={`
          absolute h-[2px] inline-block left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300 bg-customLine
          ${router.asPath === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

/// CUSTOMMOBILELINK - Link in it's own component for reusability reasons
const CustomMobileLink = ({ href, title, className = "", onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} className={className}>
      <button
        onClick={handleClick}
        className={`${className} relative text-light font-semibold
          lg:text-3xl lg:my-3 
          md:text-2xl md:my-2
          sm:text-[20px]`}
      >
        {title}
      </button>
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* HANDLECLICK FUNCTION */
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full flex justify-end z-10">
      {/* Hamburger Button for mobile */}
      <button
        className="absolute flex-col justify-center items-center hidden z-10
            lg:top-12 lg:flex
            lg:mr-8
            md:top-10 md:mr-10
            sm:mr-5
            xs:top-6"
        onClick={handleClick}
      >
        <span
          className={`block bg-customBtn transition-all duration-300 ease-in-out rounded-sm -translate-y-0.5
                lg:w-7 lg:h-[2.5px]
                md:w-6 md:h-0.5
                ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`block bg-customBtn transition-all duration-300 ease-in-out rounded-sm 
                lg:w-7 lg:h-[2.5px] lg:my-[2.5px]
                md:w-6 md:h-0.5 md:my-0.5
                ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`block bg-customBtn transition-all duration-300 ease-in-out rounded-sm
                lg:w-7 lg:h-[2.5px]
                md:w-6 md:h-0.5
                ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </button>

      {/* NavBar large screens */}
      <div
        className="absolute flex justify-between lg:hidden
          text-light text-[18px] leading-[21px] tracking-[0] font-semibold
          w-[123px] mt-[32px] mr-[162px]"
      >
        <CustomLink href="/" title="Home" />
        <CustomLink href="/blogarchive" title="Blog" />
      </div>

      {/* NavBar small screen */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "75%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bg-customBtn/90 rounded-lg backdrop-blur-md z-40
                min-w-[75vw] py-28 left-1/2 -translate-x-1/2 flex flex-col
                lg:py-24
                sm:py-20"
        >
          <div
            className="flex flex-col text-center 
              lg:mb-9"
          >
            <CustomMobileLink
              onClick={() => {
                handleClick();
              }}
              href="/"
              title="Home"
            />
            <CustomMobileLink
              onClick={() => {
                handleClick();
              }}
              href="/blogarchive"
              title="Blog"
            />
          </div>

          <div
            className="
                flex items-center justify-center flex-wrap"
          >
            <motion.a
              href="https://www.linkedin.com/company/social-brothers-nl/"
              target={"_blank"}
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-light
                  w-10 mr-6
                  md:w-9 md:mr-5
                  sm:w-8"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/socialbrothers/"
              target={"_blank"}
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-light
                  w-10
                  md:w-9 
                  sm:w-8"
            >
              <InstagramIcon />
            </motion.a>
          </div>
        </motion.div>
      ) : null}
    </nav>
  );
}
