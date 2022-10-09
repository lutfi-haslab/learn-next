import React from "react";
import haslabBlog from "../../public/assets/portofolio/haslab-blog.png";
import nftMarketplace from "../../public/assets/portofolio/nft-marketplace.png";
import iotPlatform from "../../public/assets/portofolio/iot-platform.png";
import Navbar from "../../components/portofolio/Navbar";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const portofolios = [
    {
      id: 1,
      title: "NFT Marketplace",
      imageSrc: nftMarketplace,
      url: "nft-marketplace",
    },
    {
      id: 2,
      title: "Has-labs Blog",
      imageSrc: haslabBlog,
      url: "has-labs-blog",
    },
    {
      id: 3,
      title: "IoT Platform",
      imageSrc: iotPlatform,
      url: "iot-platform",
    }
  ];

  return {
    props: { portofolios },
  };
};

const PortofoliosRoute = ({ portofolios }) => {
  return (
    <div id="portofolio" className="w-full">
      <Navbar />
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portofolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portofolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portofolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortofoliosRoute;