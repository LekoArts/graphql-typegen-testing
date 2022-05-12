import { GatsbyNode } from "gatsby"
import path from "path"

/*
If you know that certain types will definitely exist, you can define types which will result in TS types not being nullable. By defining SiteMetadata here the types in src/pages/completed.tsx for siteMetadata.title are of type string, not string | null
*/

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
      siteUrl: String!
      description: String!
    }
  `)
}

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