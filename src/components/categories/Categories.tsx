

import { Input } from '../ui/input';
import { CalendarDays, MoveRight, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import React from 'react';


async function Categories() {
  interface CategoriesCard {
    date: string;
    img: string;
    para: string;
    minutes: string;
    id: number;
    title: string;
  }

  const res: CategoriesCard[] = await client.fetch(`
    *[_type=='landingPage'][].sections[1].card[]{
'date':date,
'img':img.asset->url,
'para':para,
'minutes':minutes,
'id':id,
'title':title
}
  `);


 

  
  return (
    <div>
      <aside className="relative mb-10 w-full lg:w-[500px] flex flex-col gap-6 ">
        {/* Search Section */}
        <div className="relative w-full">
          <Input className="mb-6 h-12 w-full" placeholder="Search..." />
          <div className="absolute top-3 right-4">
            <Search />
          </div>
        </div>

        {/* Related Posts */}
        <div className="border border-darkgray w-full px-4 sm:px-6 py-4">
        
            <h1 className="text-xl text-embossed sm:text-2xl lg:text-3xl underline font-medium mb-6 text-[#7C4EE4]">
              Related Posts
            </h1>
          

          {res.map((item: CategoriesCard, index: number) => (
             
             <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 items-start shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
               <Image
                 src={item.img}
                 width={150}
                 height={150}
                 className="w-full sm:w-[180px] h-auto object-cover hover:scale-110 transition-all duration-1000 rounded-md ease-in-out"
                 alt={item.title}
               />
               <div className="flex flex-col gap-3">
                 <p className="font-semibold text-base sm:text-lg md:text-xl">
                   {item.title}
                 </p>

                 <p className="flex items-center space-x-2 text-sm sm:text-base">
                   <CalendarDays className="inline-flex" />
                   <span>{item.date}</span>
                 </p>

                 <div className="inline-block bg-[#7C4EE4] px-2 py-1 mt-2 hover:underline">
                   <Link
                     href={`/categories/id=${item.id}?id=${item.id}&Title=${item.title}&Date=${item.date}&Img=${item.img}&Para=${item.para}&Minutes=${item.minutes}`}
                   >
                     <p className="text-white flex items-center text-sm sm:text-base hover:underline ">
                       Read More <MoveRight className="ml-2" />
                     </p>
                   </Link>
                 </div>
               </div>
             </div>
           
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Categories;



