import React from "react"
import slugify from "slugify"
import setupTag from "../utils/setupTags"
import { Link } from "gatsby"
const TagList = ({ recipes }) => {
  const newTags = setupTag(recipes)

  return (
    <div className="tag-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })
          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagList
