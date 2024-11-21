import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="mx-2">
      <div className=" hidden md:flex ">
        <Image
          src="/redditBannerWHITE.png"
          alt="Reddit Banner White"
          objectFit="contain"
          height={56}
          width={140}
        />
      </div>
      <div className=" md:hidden flex">
        <Image
          src="/redditLogo.png"
          alt="Reddit Logo"
          objectFit="contain"
          height={48}
          width={48}
        />
      </div>
    </div>
  );
};

export default Logo;
