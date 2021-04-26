import React from "react"
import RecipiesList from "./RecipesList"
import TagList from "./TagList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  // const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)
  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipiesList recipes={recipes} />
    </section>
  )
}

export default AllRecipes
