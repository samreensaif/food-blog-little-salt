


import React from 'react';
import Image from 'next/image';
import { CalendarDays, Clock9 } from 'lucide-react';


import PostCreator from '@/components/comments/comments';


async function Categorypage({ searchParams }: { searchParams: Promise<{id:number, Title: string, Img:string, Date: string, Para: string, Minutes: string }> }) {
  const {id, Title, Img, Date, Para, Minutes } = await searchParams;

  return (
    <div className="py-6 bg-purple-100">
      <div className="w-full flex justify-center items-center flex-col mt-[80px] mb-7">
        {/* title */}
        <h1
          
          className="text-4xl text-embossed sm:text-5xl font-semibold text-[#7C4EE4] text-center px-4 sm:px-0"
        >
          {Title}
        </h1>

        {/* date and time icons */}
        <div className="flex gap-3 my-5 text-[16px] sm:text-[18px] text-gray-500">
          <p className="flex items-center space-x-2">
            <CalendarDays className="inline-flex" />
            <span>{Date}</span>
          </p>
          <p className="flex items-center space-x-2">
            <Clock9 className="inline-flex" />
            <span>{Minutes} read</span>
          </p>
        </div>

        {/* image */}
        <div className="relative w-full rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] my-5">
          <Image
            src={Img}
            alt="image"
            objectFit="cover"
            fill
            className="rounded-lg"
          />
        </div>

        {/* paragraph */}
        <div className="w-full max-w-[600px] text-left text-xl sm:text-2xl tracking-wider leading-10 px-4 sm:px-0">
          <p>
            {Para}
          </p>
        </div>
      </div>

      <div className='mt-6'>

     

      <PostCreator blog_id={id}/>
      </div>
    </div>
  );
}

export default Categorypage;



