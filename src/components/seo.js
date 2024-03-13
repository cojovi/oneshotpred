/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const MyPage = () => {
  return (
    <>
    <Seo
    title="One Shot Predator Management - Expert Predator Control Services"
    description="Offering professional predator management and control services to safeguard your property. Effective solutions tailored to your needs. Contact us today!"
    canonical="https://www.oneshotpredatormgmt.com/"
    robots="index,follow" // You can omit this for default behavior
    />
    {/* The rest of your page content */}
    </>
  );
};

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
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  // Schema Markup for Local Business
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "One Shot Predator Management",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "118 Clyde Dr, Aledo, TX 76008",
      "addressLocality": "Aledo",
      "addressRegion": "TX",
      "postalCode": "76008",
      "addressCountry": "USA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.68541",
      "longitude": "-97.60558"
    },
    "telephone": "+1-800-123-4567",
    "url": "http://www.oneshotpredatormgmt.com",
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "32.68541",
          "longitude": "-97.60558"
        },
        "geoRadius": "160934" // 100 miles in meters
      }
    ],
    "openingHours": "Mo-Sa 08:00-18:00",
    "sameAs": [] // Add URLs to any of your social media profiles
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `title`,
          content: "One Shot Predator Management | Effective Predator Control in Fort Worth, TX",
        },
        {
          name: `description`,
          content: "One Shot Predator Management specializes in effective predator control, offering services throughout Fort Worth, TX, and surrounding areas. Protect your property and livestock with our experienced team.",
        },
        {
          property: `og:title`,
          content: "One Shot Predator Management | Effective Predator Control in Fort Worth, TX",
        },
        {
          property: `og:description`,
          content: metaDescription,
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
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {/* Adding Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
