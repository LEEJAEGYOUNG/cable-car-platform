import Head from 'next/head';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'touristAttraction';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "케이블카 & 모노레일 큐레이션 플랫폼",
          "description": "전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 여행 계획을 세워보세요.",
          "url": "https://cable-car-platform.vercel.app",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://cable-car-platform.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "케이블카 & 모노레일 큐레이션 플랫폼",
            "url": "https://cable-car-platform.vercel.app"
          }
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "케이블카 & 모노레일 큐레이션 플랫폼",
          "description": "전국의 케이블카와 모노레일 정보를 제공하는 큐레이션 플랫폼",
          "url": "https://cable-car-platform.vercel.app",
          "logo": "https://cable-car-platform.vercel.app/logo.png",
          "sameAs": [
            "https://www.facebook.com/cablecar-platform",
            "https://www.instagram.com/cablecar_platform",
            "https://twitter.com/cablecar_kr"
          ]
        };

      case 'touristAttraction':
        return {
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": data?.name || "",
          "description": data?.description || "",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KR",
            "addressRegion": data?.region || "",
            "streetAddress": data?.address || ""
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": data?.latitude || 0,
            "longitude": data?.longitude || 0
          },
          "telephone": data?.phone || "",
          "openingHours": data?.operatingHours || "",
          "priceRange": data?.price || "",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data?.rating || 0,
            "bestRating": 5,
            "worstRating": 1,
            "ratingCount": data?.reviewCount || 0
          },
          "image": data?.images || [],
          "url": `https://cable-car-platform.vercel.app/detail/${data?.id || ""}`
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}

