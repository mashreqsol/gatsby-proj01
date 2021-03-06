import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`
// Author added in SEO
const SEO = ({ title, author, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  const metaAuthor = author || site.siteMetadata.author
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `author`, content: metaAuthor },
        {
          name: `google-site-verification`,
          content: "SfTWHs8Lw0PGxhrkgbTHQQ4xBNxQeHqzPDg7nIdmeg0",
        },
      ]}
    ></Helmet>
  )
}

export default SEO
