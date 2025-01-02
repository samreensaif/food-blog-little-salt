import { CalendarDays, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Categories from "../categories/Categories";
import { client } from "@/sanity/lib/client";

interface IResult {
  date: string[];
  minutes: string[];
  recipeImages: string[];
  recipeTitles: string[];
  descriptions: string[];
  detailDescriptions: string[];
  ids: string[];
}

async function FeaturedRecipes() {
  const result: IResult[] = await client.fetch(`
    *[_type == 'landingPage'][].sections[0].recipes[]{
      date[],
      minutes[],
      'recipeImages': recipeImages[].asset->url, 
      recipeTitles[],
      descriptions[],
      detailDescriptions[],
      ids[]
    }
  `);

  // Select one random recipe from each card
  const selectedRecipes = result.map((card) => {
    const recipeCount = card.recipeTitles.length; // Assuming all arrays have the same length
    const randomIndex = Math.floor(Math.random() * recipeCount);

    return {
      id: card.ids[randomIndex],
      date: card.date[randomIndex],
      minutes: card.minutes[randomIndex],
      recipeImage: card.recipeImages[randomIndex],
      recipeTitle: card.recipeTitles[randomIndex],
      description: card.descriptions[randomIndex],
      detailDescription: card.detailDescriptions[randomIndex],
    };
  });

  return (
    <>
      {/* Title Section */}
      <div className="w-full text-center mt-[60px] mb-[60px]">
        <h1 className="text-4xl text-embossed sm:text-5xl md:text-6xl font-semibold text-[#7C4EE4]">
          Must-Try Recipe This Week
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10 mx-5 sm:mx-10 md:mx-20 lg:mx-32 justify-center lg:justify-between mt-10">
        {/* Recipe Cards */}
        <div className="flex flex-col gap-10 items-center">
          {selectedRecipes.map((recipe, index) => (
            <div
              key={index}
              className="w-full xsm:w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-auto border-2  pb-4 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
            >
              {/* Top Image */}
              <div className="relative w-full h-[200px] xsm:h-[240px] sm:h-[280px]">
                <Image
                  src={recipe.recipeImage}
                  fill
                  objectFit="cover"
                  alt="Recipe Image"
                  className="rounded-lg hover:scale-105 transition-all duration-1000 ease-in-out"
                />
              </div>

              {/* Bottom Text */}
              <div className="flex flex-col space-y-3 text-left mt-4 px-3">
                <p className="flex items-center space-x-2 text-sm sm:text-base">
                  <CalendarDays className="inline-flex" />
                  <span>{recipe.date}</span>
                </p>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                  {recipe.recipeTitle}
                </h1>
                <p className="text-sm sm:text-lg font-semibold">
                  {recipe.description}
                </p>

                {/* Link Button */}
                <Link
                  href={`/recipe/id=${recipe.id}?recipeTitle=${recipe.recipeTitle}&recipeImage=${recipe.recipeImage}&description=${recipe.description}&date=${recipe.date}&detailDescription=${recipe.detailDescription}&minutes=${recipe.minutes}`}
                >
                  <p className="inline-block text-white p-2 mt-2 hover:underline bg-[#7C4EE4] text-sm sm:text-base">
                    Read More <MoveRight className="inline-flex ml-2" />
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="w-full lg:w-1/2">
          <Categories />
        </div>
      </div>
    </>
  );
}

export default FeaturedRecipes;
