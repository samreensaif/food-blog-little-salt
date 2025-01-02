




import AboutSection from '@/components/aboutSection/AboutSection';
import { client } from '@/sanity/lib/client';
import React from 'react';

async function AboutPage() {

  const res = await client.fetch(`
    
    *[_type=='aboutPage'][].sections[0]{

  title,description1,description2,description3
}
    
    
    `)


  return (
    <section className='py-10 flex flex-col justify-center items-center bg-purple-200'>
      <div className="w-full text-center mt-[80px] mb-7">
        <h1 
        
        className="text-4xl text-embossed sm:text-6xl font-semibold text-[#7C4EE4]"> {res[0].title}</h1>
      </div>

      <div>
        <p className='w-full max-w-[600px] text-center text-[18px] sm:text-[20px] px-4'>
          {res[0].description1}
          <br/><br/>
          {res[0].description2}
          <br/><br/>
          {res[0].description3}
          <br/><br/>
        </p>
      </div>
      <AboutSection />
    </section>
  );
}

export default AboutPage;

