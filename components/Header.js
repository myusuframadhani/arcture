import React from "react";
import Image from "next/image";

import { TiWeatherPartlySunny } from "react-icons/ti";

const Header = () => {
  return (
    <div className="flex items-center justify-between flex-row ml-8 w-full h-16 bg-gray-900">
      <span className="flex items-center flex-row ml-16">
        <Image src="/logo.png" alt="Logo Arcture" height={32} width={45.5} />
        <p className="font-primary font-bold ml-5 text-white">
          Arcture Aquatic
        </p>
      </span>
      <span className="flex items-center flex-row mr-32">
        <p className="text-white font-semibold">Hai, Chom!</p>
        <Weather icon={<TiWeatherPartlySunny size="20" color="white" />} />
      </span>
    </div>
  );
};

export default Header;

const Weather = ({ icon }) => <div className="ml-2">{icon}</div>;
