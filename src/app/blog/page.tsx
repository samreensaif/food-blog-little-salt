



import Image from "next/image";

import { CalendarDays, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { client } from "@/sanity/lib/client";


async function Blog() {
  interface BlogProps {
    title: string;
    description: string;
    minutes: string;
    date: string;
    blogImage: string;
    id:number;
    
  }

  const res: BlogProps[] = await client.fetch(`
    *[_type=='blogPage'][].sections[].blogEntry[]{
      'minutes': minutes,
      'description': description,
      'title': title,
      'date': date,
      
      'blogImage': blogImage.asset->url,
      'id':id
    }
  `);

  const bTitle = await client.fetch(`
    *[_type=='blogPage'][].sections[0]{title}
  `);

  return (
    <div className="py-6 ">
      <div className="w-full text-center mt-[80px] mb-7">
        <h1
           
          className="text-4xl text-embossed sm:text-6xl font-semibold text-[#7C4EE4]"
        >
          {bTitle[0].title}
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-4 sm:mx-10 mb-7">
        {/* card */}
        {res.map((item: BlogProps, index: number) => {
          return (
            <div
              key={index}
              className="w-full max-w-[400px] h-[530px] border-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex flex-col gap-10 hover:shadow-lg rounded-lg hover:scale-105 transition-all duration-1000 ease-in-out"
            >
              {/* card image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={item.blogImage}
                  alt="mediterranean cuisine"
                  objectFit="cover"
                  fill
                  className="rounded-lg"
                />
              </div>
              {/* card content */}
              <div className="flex flex-col space-y-3 text-left px-3">
                <p className="flex items-center space-x-2">
                  <CalendarDays className="inline-flex" />
                  <span>{item.date}</span>
                </p>
                <h1 className="text-xl sm:text-2xl font-bold">{item.title}</h1>

                <Link href={`/blog/id?id=${item.id}&title=${item.title}&description=${item.description}&minutes=${item.minutes}&date=${item.date}&blogImage=${item.blogImage}`}>
                  <button className="inline-flex rounded-md group text-white p-2 mt-2 hover:underline bg-[#7C4EE4]">
                    Read More <MoveRight className=" opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default Blog;

