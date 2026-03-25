import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const fullTitle = title || defaultTitle
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "One Shot Project Management",
    address: {
      "@type": "PostalAddress",
      streetAddress: "118 Clyde Dr, Aledo, TX 76008",
      addressLocality: "Aledo",
      addressRegion: "TX",
      postalCode: "76008",
      addressCountry: "USA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.68541",
      longitude: "-97.60558",
    },
    telephone: "+1-800-123-4567",
    url: "https://oneshotprojectmgmt.com",
    description:
      "Construction project management services including planning, scheduling, vendor coordination, and execution oversight.",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "32.68541",
          longitude: "-97.60558",
        },
        geoRadius: "160934",
      },
    ],
    openingHours: "Mo-Sa 08:00-18:00",
    sameAs: [],
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | One Shot Project Management` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: fullTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: "https://oneshotprojectmgmt.com",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: fullTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: `One Shot Project Management delivers construction planning, scheduling, and field coordination for reliable project execution.`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
