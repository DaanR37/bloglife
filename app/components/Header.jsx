import Image from "next/image";
import Navbar from "./Navbar";
import maskBanner from "../../public/images/mask_banner.png";
import logoSocialBrothers from "../../public/images/logo.svg";

export default function Header() {
  return (
    <header className="relative w-full h-full flex justify-center">
      <div
        className="absolute w-full h-[208px] flex top-0
        lg:h-[175px]
        sm:h-[135px]
        xs:h-[90px]"
      >
        <Image
          src={maskBanner}
          alt="Header Banner"
          priority={true}
          rel="preload"
          as="image"
          fill
          objectFit="cover"
        />
        <div
          className="absolute 
          w-[240px] h-[57px] top-[32px] left-[162px]
          lg:w-[185px] lg:h-[45px] lg:top-8 lg:left-[20px]
          md:w-[175px] md:h-[45px] md:top-6
          xs:w-[110px] xs:h-[35px] xs:top-3"
        >
          <Image
            src={logoSocialBrothers}
            alt="Logo Social Brothers"
            priority={true}
            rel="preload"
            as="image"
            fill
            objectFit="contain"
          />
        </div>
        <Navbar />
      </div>
    </header>
  );
}
