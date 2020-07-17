import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

// Notification popup
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

let id = 0;
let ids = [];


function addNotification() {
    store.addNotification({
    title: "Note!",
    message: "This website is being migrated from another platform and is still in development, so issues might occur.",
    type: "info",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "false"],
    dismiss: {
      showIcon:true,
      duration: 15000,
      onScreen: true
    }
  });
  
  
}

function clearNotifications() {
    if(ids.length > 0) {
        console.log("clearing")
        for(let i = 0; i < ids.length; i++) {
            store.removeNotification(ids[i]);
            ids.splice(i, 1);
        }
    }
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  
  console.log("ids: " + ids.length)
  //clearNotifications();
  addNotification();
  
  return (
    
    <div>
    <ReactNotification />
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
          }
        }
      }
    }
  }
`
