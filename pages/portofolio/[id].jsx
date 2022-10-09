import React from "react";
import haslabBlog from "../../public/assets/portofolio/haslab-blog.png";
import nftMarketplace from "../../public/assets/portofolio/nft-marketplace.png";
import iotPlatform from "../../public/assets/portofolio/iot-platform.png";
import Navbar from "../../components/portofolio/Navbar";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

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

const getportofolioFrom = (url) => portofolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portofolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portofolio = getportofolioFrom(params.id);

  return {
    props: { portofolio },
  };
}

const Oneportofolio = ({ portofolio: { title, imageSrc } }) => {
  return (
    <div className="h-fit w-full text-center">
      <Navbar />
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portofolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>

        <p>
          Human thy god sainted is the distinctly shrieked grave bird shrieked,
          yore borrow nevermore but gaunt maiden have nothing darkness, answer
          evermore word there from raven, sorrowsorrow from on and nevermore of
          core. Whom the meant and while i of respiterespite his lamplight. Or
          being weary parting grave lent if. Rare came stillness whether the
          lord. Bust myself whom of soul silken. The that there this my, quaint
          that only lenore stern muttered and nothing or tapping. Here lie
          lining i still. A tis some and chamber flitting. Lamplight radiant
          from no yet what, upon that that one decorum leave.
        </p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/theyashpatel">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portofolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Oneportofolio;