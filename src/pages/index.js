import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import kebabCase from "lodash/kebabCase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/projects-grid.css';


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const group = data.allMarkdownRemark.group
  const toastId = React.useRef(null);

  //console.log("tag count: " + tags.length);
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
  
  let items = group.map(tag => (
    tag.fieldValue == "linux" ?
      (
        /* bolt.svg ( https://tablericons.com/ ) */
        <div>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{ boxShadow: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-prompt" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <polyline points="5 7 10 12 5 17" />
              <line x1="13" y1="17" x2="19" y2="17" />
            </svg>
          </Link>
          
          <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>{"Linux"} ({tag.totalCount})</p>
          
        </div>
      )
    :tag.fieldValue == "electronics" ?
      (
        /* bolt.svg ( https://tablericons.com/ ) */
        <div>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{ boxShadow: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3" />
            </svg>
          </Link>
          <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>{"Electronics"} ({tag.totalCount})</p>
          
        </div>
      )
    :tag.fieldValue == "graphics" ?
      (
        /* bolt.svg ( https://tablericons.com/ ) */
        <div>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{ boxShadow: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brush" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
              <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
              <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
              <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
            </svg>
          </Link>
          <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>{"Graphics"} ({tag.totalCount})</p>
        </div>
      )
    :tag.fieldValue == "web" ?
      (
        /* bolt.svg ( https://tablericons.com/ ) */
        <div>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{ boxShadow: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-browser" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <rect x="4" y="4" width="16" height="16" rx="1" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="8" y1="4" x2="8" y2="8" />
            </svg>
          </Link>
          <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>{"Web"} ({tag.totalCount})</p>
        </div>
      )
    :tag.fieldValue == "misc" ?
      (
        /* bolt.svg ( https://tablericons.com/ ) */
        <div>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{ boxShadow: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-diagonal-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="7" cy="7" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="17" cy="17" r="1" />
            </svg>
          </Link>
         <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>{"Misc"} ({tag.totalCount})</p>
        </div>
      )
    :
      (
        /* bolt.svg ( https://tablericons.com/ ) */
        <div>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{ boxShadow: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots-diagonal-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>
              <circle cx="7" cy="7" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="17" cy="17" r="1" />
            </svg>
          </Link>
         <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>{tag.fieldValue} ({tag.totalCount})</p>
        </div>
      )
    ))
  
  return (
    
    <div>
    <ToastContainer className="foo" style={{ width: "30%" }} />
        <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div>
          <h1> Categories </h1>
          {
              <div class="grid-container">
              {items}
              </div>
            
          }
          <h1> Latest posts </h1>
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
          </div>
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
      },
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
