"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

/* CUSTOMLINK */
const CustomLink = ({ href, title, className = "" }) => {
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

export default function Navbar() {
  return (
    <nav
      className="absolute flex justify-between 
        w-[123px] h-[30px]
        top-[32px] left-[1155px]
        space-x-[2rem] text-light text-lg font-semibold z-10"
    >
      <CustomLink
        href="/"
        title="Home"
        className={`w-[52px] h-[21px] tracking-[0] !leading-[21px]`}
      />
      <CustomLink
        href="/blog"
        title="Blog"
        className={`w-[52px] h-[21px] tracking-[0] !leading-[21px]`}
      />
    </nav>
  );
}
