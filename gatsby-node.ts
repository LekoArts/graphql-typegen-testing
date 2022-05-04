import { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
  const { createPage } = actions

  const data = await graphql<Queries.GatsbyNodeQuery>(`#graphql
    query GatsbyNode {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  createPage({
    component: path.resolve(`src/templates/template.tsx`),
    path: `/template`,
    context: {
      data
    }
  })
}