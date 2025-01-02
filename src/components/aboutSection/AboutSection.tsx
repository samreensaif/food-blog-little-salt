


import React from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

async function AboutSection() {


interface AboutSectionProps {

cardImage: string;
cardTitle: string;
cardDescription: string;
}

const res: AboutSectionProps[] = await client.fetch(`
  
  *[_type=='aboutPage'][].sections[1].
  cardEntry[]
{
  'cardImage':cardImage.asset->url,
  'cardTitle':cardTitle,
  'cardDescription':cardDescription
  }
  `)





  return (
    <section className="mx-4 sm:mx-10 grid grid-cols-1 sm:grid-cols-2 gap-10 mt-28">


      {res.map((item:AboutSectionProps, index:number) => {
        return (

          <div key={index} className='w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] max-w-[600px] h-[200px] border-2 border-gray-300 flex flex-col space-y-2 px-4 sm:px-10'>
            <div className='flex items-center justify-center rounded-full mt-4 w-14 h-14 bg-[#7C4EE4]'>
              <Image src={item.cardImage} alt="chef" width={30} height={30} className='text-white' />
            </div>
            <h1 className='text-xl sm:text-2xl text-embossed font-semibold'>{item.cardTitle}</h1>
            <p className='text-sm sm:text-base'>{item.cardDescription}</p>
          </div>
        );
      })}
    </section>
  );
}

export default AboutSection;