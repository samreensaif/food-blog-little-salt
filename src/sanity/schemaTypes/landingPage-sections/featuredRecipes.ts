export const featuredRecipes = {
    title: "Featured Recipes",
    name: "featuredRecipes",
    type: "object",
    fields: [
      {
        title: "Recipes",
        name: "recipes",
        type: "array",
        of: [
          {
            title: "Recipe Entry",
            name: "recipeEntry",
            type: "object",
            fields: [
              {
                title: "Date",
                name: "date",
                type: "array", // Array added
                of: [{ type: "string" }],
              },
              {
                title: "Minutes",
                name: "minutes",
                type: "array", // Array added
                of: [{ type: "string" }],
              },
              {
                title: "Recipe Images",
                name: "recipeImages",
                type: "array", // Array added
                of: [{ type: "image" }],
              },
              {
                title: "Recipe Titles",
                name: "recipeTitles",
                type: "array", // Array added
                of: [{ type: "string" }],
              },
              {
                title: "Descriptions",
                name: "descriptions",
                type: "array", // Array added
                of: [{ type: "string" }],
              },
              {
                title: "Detail Descriptions",
                name: "detailDescriptions",
                type: "array", // Array added
                of: [{ type: "string" }],
              },
              {
                title: "IDs",
                name: "ids",
                type: "array", // Array added
                of: [{ type: "number" }],
              },
            ],
          },
        ],
      },
    ],
  };
  















// export const featuredRecipes = {
//   title: "Featured Recipes",
//   name: "featuredRecipes",
//   type: "object",
//   fields: [
//     //bar bar wala card
//     {
//       title: "Recipes",
//       name: "recipes",
//       type: "array",
//       of: [
//         {
//           title: "Recipe Entry",
//           name: "recipeEntry",
//           type: "object",
//           fields: [
//             {
//               title: "Date",
//               name: "date",
//               type: "string",
//             },
//             {
//               title: "Minutes",
//               name: "minutes",
//               type: "string",
//             },
//             {
//               title: "Recipe Image",
//               name: "recipeImage",
//               type: "image",
//             },
//             {
//               title: "Recipe Title",
//               name: "recipeTitle",
//               type: "string",
//             },
//             {
//               title: "Description",
//               name: "description",
//               type: "string",
//             },

//             {
//               title: "Detail Description",
//               name: "detailDescription",
//               type: "string",
//             },
//             {
//               title: "ID",
//               name: "id",
//               type: "number",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
