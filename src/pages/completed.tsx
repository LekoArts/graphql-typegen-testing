import * as React from "react"
import { graphql, PageProps } from "gatsby"
import Info from "../components/info"
import "../layout.css"

const pageStyles = {
  maxWidth: `75ch`,
  margin: `0 auto`,
  padding: `2rem`,
}

const CompletedPage = ({ data }: PageProps<Queries.CompletedPageQuery>) => {
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
      <Info buildTime={data.site?.buildTime} />
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

export default CompletedPage

export const query = graphql`
  query CompletedPage {
    site {
      siteMetadata {
        title
        description
      }
      ...SiteInformation
    }
  }
`
