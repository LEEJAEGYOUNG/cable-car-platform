/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 빌드 시 ESLint 에러를 경고로 처리
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 빌드 시 TypeScript 에러를 무시
    ignoreBuildErrors: true,
  },
  images: {
    // 외부 이미지 도메인 허용
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  // 정적 내보내기 설정 (필요시)
  // output: 'export',
  // trailingSlash: true,
};

module.exports = nextConfig;

