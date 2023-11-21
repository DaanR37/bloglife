import Image from "next/image";
import Navbar from "../components/Navbar";
import maskBanner from "../../public/images/mask_banner.png";
import logoSocialBrothers from "../../public/images/logo.svg";

export default function RootLayout({ children }) {
  return (
    <>
      <header className="relative w-full h-auto flex justify-center">
        <h1
          className="absolute text-light text-[48px] font-bold
           tracking-[0] leading-[62px] text-center top-[113px] z-10"
        >
          Blog
        </h1>
        <div className="absolute flex top-0">
          <Image
            src={maskBanner}
            alt="Header Banner"
            priority={true}
            rel="preload"
            as="image"
            width={1440}
            height={208}
          />
          <div className="absolute top-[32px] left-[162px]">
            <Image
              src={logoSocialBrothers}
              alt="Logo Social Brothers"
              priority={true}
              rel="preload"
              as="image"
              width={240}
              height={57}
            />
          </div>
          <Navbar />
        </div>
      </header>
      {children}
    </>
  );
}
