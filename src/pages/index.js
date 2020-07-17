import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const toastId = React.useRef(null);
  
  const notify = () => {
    if(! toast.isActive(toastId.current)) {
      toastId.current = toast.info('🐍 Hi! This website is still in development. Issues might occur.', {
        position: "top-right",
        autoClose: 30000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  
  notify();
  
  return (
    
    <div>
    <ToastContainer className="foo" style={{ width: "30%" }} />
        <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
            <article key={node.fields.slug}>
                <header>
                <h3
                    style={{
                    marginBottom: rhythm(1 / 4),
                    }}
                >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                    </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <b> - tags: </b>
              <Link
                style={{
                  boxShadow: `none`,
                  color: `007acc`,
                }}
                to={'/tags/' + node.frontmatter.tags}
              >
                {node.frontmatter.tags}
              </Link>
                </header>
                <section>
                <p
                    dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                    }}
                />
                </section>
            </article>
            )
        })}
        </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
