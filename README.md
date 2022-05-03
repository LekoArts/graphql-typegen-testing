# graphql-typegen-testing

Test project for [GraphQL TypeScript Generation RFC](https://github.com/gatsbyjs/gatsby/discussions/35420).

## Instructions

1. If you use VSCode install the [GraphQL Plugin](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)
1. Install dependencies with `npm install` / `yarn`
1. Start the development server with `npm run develop` / `yarn develop`
1. Follow the instructions on the index page at `localhost:8000`

## Questions

- How would you compare this process to the way you’ve used GraphQL query results historically with your Gatsby sites?
- Rate the DX from 1 (awful) to 5 (best ever)

## Help

The finished page/result is hidden in this README behind a comment (only check if you are stuck):

<!--
```tsx
import * as React from "react"
import { graphql, PageProps } from "gatsby"
import "../layout.css"

const pageStyles = {
  maxWidth: `75ch`,
  margin: `0 auto`,
  padding: `2rem`,
}

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <main style={pageStyles}>
      <p>Try to complete the following tasks. There's no wrong way to do them.</p>
      <ol>
        <li>Inside <code>src/pages/index.tsx</code> look for the <code>PageProps</code> generic and type the first argument (<code>DataType</code>) with the global namespace <code>Queries</code>. Access the types corresponding to <code>IndexPage</code> from the namespace.</li>
        <li>Fill out the site title by accessing <code>data</code>. Use autocompletion to successfully display the <code>title</code> of <code>siteMetadata</code>.</li>
        <li>(If you use VSCode): Position your cursor inside the <code>siteMetadata</code> field of the page query and use autocompletion to check which other fields are available.</li>
        <li>Query the new key <code>description</code> on <code>siteMetadata</code> and display it on this page.</li>
      </ol>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <p>Description: {data.site?.siteMetadata?.description}</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>
          {JSON.stringify(data, null, 2)}
        </code>
      </pre>
    </main>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
```
-->