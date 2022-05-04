import { PageProps } from "gatsby"
import * as React from "react"

const Template = ({ pageContext }: PageProps) => (
  <main>
    <pre>
      <code>
        {JSON.stringify(pageContext, null, 2)}
      </code>
    </pre>
  </main>
)

export default Template