import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: '케이블카 & 모노레일 큐레이션 플랫폼',
  description: '전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 여행 계획을 세워보세요. 아름다운 경치와 특별한 경험이 기다립니다.',
  canonical: 'https://cable-car-platform.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://cable-car-platform.vercel.app',
    siteName: '케이블카 & 모노레일 큐레이션 플랫폼',
    title: '케이블카 & 모노레일 큐레이션 플랫폼',
    description: '전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 여행 계획을 세워보세요.',
    images: [
      {
        url: 'https://cable-car-platform.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '케이블카 & 모노레일 큐레이션 플랫폼',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@cablecar_kr',
    site: '@cablecar_kr',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: '케이블카, 모노레일, 여행, 관광, 경치, 데이트코스, 가족여행, 서울, 부산, 제주도, 강원도',
    },
    {
      name: 'author',
      content: '케이블카 & 모노레일 큐레이션 플랫폼',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'msapplication-TileColor',
      content: '#2563eb',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default config;

