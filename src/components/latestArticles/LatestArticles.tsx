


import React from 'react';
import Image from 'next/image';
import { CalendarDays, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

async function LatestArticles() {
    interface Articles {
        description: string;
        date: string;
        articleImage: string;
        
        title: string;
        minutes: string;
        id: number;
    }

    interface Title {
        title: string;
    }

    const res: Articles[] = await client.fetch(`
        *[_type=='landingPage'][].sections[2].
articlesEntry[]
{
  'description':description,
  'id':id,
  'title':title,
  'date':date,
  'articleImage':articleImage.asset->url,
  'minutes':minutes
  
}
    `);

    const res1: Title[] = await client.fetch(`
        *[_type=='landingPage'][].sections[2]{title}
    `);

    return (
        <section className="mb-10">
            {/* Title */}
            <div className="w-full text-center mt-20 mb-20">
                <h1
                     style={{
            
                        textShadow: `
                  2px 2px 4px rgba(255, 255, 255, 0.9), 
                  -2px -2px 4px rgba(0, 0, 0, 0.5),
                  4px 4px 8px rgba(0, 0, 0, 0.2)
                `
                      }}
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#7C4EE4]"
                >
                    {res1[0].title}
                </h1>
            </div>

            {/* Cards Container */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12 mb-7">
                {res.map((item: Articles, index: number) => (
                    <div
                        key={index}
                        className="w-full h-auto border-2  flex flex-col gap-6 hover:shadow-lg rounded-lg hover:scale-105 transition-all duration-700 ease-in-out shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                    >
                        {/* Card Image */}
                        <div className="relative w-full h-64 sm:h-72 lg:h-80">
                            <Image
                                src={item.articleImage}
                                alt={item.title}
                                objectFit="cover"
                                fill
                                className="rounded-t-lg"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-col space-y-3 text-left px-4 py-3">
                            <p className="flex items-center space-x-2 text-sm sm:text-base">
                                <CalendarDays className="inline-flex" />
                                <span>{item.date}</span>
                            </p>
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
                                {item.title}
                            </h1>

                            {/* Link */}
                            <Link
                                href={`/article/id?id=${item.id}&articleImage=${item.articleImage}&date=${item.date}&title=${item.title}&description=${item.description}&minutes=${item.minutes}`}
                            >
                                <button className="inline-block text-white py-2 px-4 mt-2 bg-[#7C4EE4] rounded-md hover:underline">
                                    Read More <MoveRight className="inline-flex ml-2" />
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            <div className="text-center px-4 hover:scale-105 transition-all duration-300 hover:underline">
                <Link href="/blog">
                    <p className="inline-block text-center rounded-full text-white py-3 px-6 bg-[#7C4EE4] hover:underline">
                        View More <MoveRight className="inline-flex ml-2" />
                    </p>
                </Link>
            </div>
        </section>
    );
}

export default LatestArticles;


