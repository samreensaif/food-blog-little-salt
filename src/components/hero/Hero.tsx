
import { client } from "@/sanity/lib/client";
import { MoveRight } from "lucide-react";

import Link from "next/link";

import React from "react";

async function Hero() {
  interface HeroData {
    mainHeading: string;

    para1: string;
    heroImage: string;
  }

  const res: HeroData[] = await client.fetch(`
   *[_type=='landingPage'][].sections[3].
  heroSection[]{
  'heroImage':heroImage.asset->url,
  'mainHeading':mainHeading,
  'para1':para1
  }
  `);

  const cardQuantity = res.length;
  const cardRandomNumber = Math.floor(Math.random() * cardQuantity);
  const { heroImage, para1, mainHeading } = res[cardRandomNumber];

  return (
    <section className="relative">
      {/* Hero Background */}

      <div
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        className="bg-cover bg-center h-[80vh] sm:h-[90vh] flex items-center justify-center"
      ></div>

      {/* Hero Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 xsm:px-6 sm:px-8 md:px-12">
        <h1 className="text-2xl text-embossed xsm:text-3xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug font-bold text-white">
          {mainHeading}
        </h1>

        <p className="text-base mb-9 xsm:text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium mt-4 sm:mt-6 lg:mt-8 text-white">
          {para1}
        </p>

        <Link href="/blog">
          <button className="inline-flex items-center bg-[#7C4EE4] text-white border-0 py-2 px-4 xsm:py-2 xsm:px-5 focus:outline-none  hover:underline hover:scale-110 transition-all duration-300 rounded text-sm xsm:text-base  md:mt-0 group">
            Explore Blogs
            <MoveRight className="opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ml-2" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
