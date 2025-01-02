import { type SchemaTypeDefinition } from 'sanity'
import { blogPageSchema } from './blogPage-sections/blogPage'
import { blogPosts } from './blogPage-sections/blogPosts'
import { contactPage } from './contactPage/contactPage'
import { categories } from './landingPage-sections/categories'
import { featuredRecipes } from './landingPage-sections/featuredRecipes'
import { hero } from './landingPage-sections/hero'
import { landingPage } from './landingPage-sections/landingPage'
import { latestArticles } from './landingPage-sections/latestArticles'
import { aboutPage } from './aboutPage/aboutPage'
import { aboutPageSection } from './aboutPage/aboutPageSection'
import { aboutCardSection } from './aboutPage/aboutCardSection'
import { comment } from './comment/comment'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage,hero,featuredRecipes,categories,latestArticles,blogPageSchema,blogPosts,contactPage,aboutPage,aboutPageSection,aboutCardSection,comment],
}
