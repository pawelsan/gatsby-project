import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout'

const NewsTemplate = ({ data: { contentfulNews } }) => (
    <Layout>
        <div>
            {/* News info */}
            <h2>{contentfulNews.tytu}</h2>
            <span>Dodano {contentfulNews.createdAt} przez {contentfulNews.autor}</span>
            <Img fluid={contentfulNews.image.fluid} />
            <p>{contentfulNews.text.text}</p>
        </div>
    </Layout>
)

export const query = graphql`
query($slug: String!) {
    contentfulNews(slug: {eq: $slug}) {
      autor
      tytu
      text {
        text
      }
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
      createdAt(formatString:"DD.MM.YYYY")
    }
  }
  
`

export default NewsTemplate;
