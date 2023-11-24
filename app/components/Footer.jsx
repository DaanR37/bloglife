import React from "react";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 flex justify-center items-center bg-blogHeading
        w-full h-[32px]
        lg:h-[5vh]"
    >
      <div className=" bg-blogHeading">
        <a
          href="https://socialbrothers.nl/en/"
          target="_blank"
          rel="noreferrer"
        >
          <p
            className="text-light text-[12px] font-light tracking-[0] leading-[13px]
              opacity-75 hover:opacity-100 transition duration-[350ms] cursor-pointer"
          >
            &copy; Copyright Social Brothers - {new Date().getFullYear()}
          </p>
        </a>
      </div>
    </footer>
  );
}
