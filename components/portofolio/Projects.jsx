import Image from "next/image";
import Link from "next/link";
import React from "react";
import hasLabBlog from "../../public/assets/portofolio/haslab-blog.png";
import NftMarketPlace from "../../public/assets/portofolio/nft-marketplace.png";
import IoTPlatfrom from "../../public/assets/portofolio/iot-platform.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Has-labs Blog"
            backgroundImg={hasLabBlog}
            projectUrl="https://has-labs.com/"
            tech="Wordpress"
          />
          <ProjectItem
            title="NFT Cryptostamp Marketplace"
            backgroundImg={NftMarketPlace}
            projectUrl="https://nft-drop-thirdweb.vercel.app/"
            tech="NextJS, Thirdweb, Web3"
          />
          <ProjectItem
            title="IoT Platform"
            backgroundImg={IoTPlatfrom}
            projectUrl="https://io-t-platform.vercel.app/"
            tech="NextJS, MySQL, EMQX, TailwindCSS, Prisma"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
