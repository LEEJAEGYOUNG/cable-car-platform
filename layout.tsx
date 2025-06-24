import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "케이블카 & 모노레일 큐레이션 플랫폼",
  description: "전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 여행 계획을 세워보세요. 아름다운 경치와 특별한 경험이 기다립니다.",
  keywords: "케이블카, 모노레일, 여행, 관광, 경치, 데이트코스, 가족여행, 서울, 부산, 제주도, 강원도",
  authors: [{ name: "케이블카 & 모노레일 큐레이션 플랫폼" }],
  openGraph: {
    title: "케이블카 & 모노레일 큐레이션 플랫폼",
    description: "전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 여행 계획을 세워보세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "케이블카 & 모노레일 큐레이션 플랫폼",
  },
  twitter: {
    card: "summary_large_image",
    title: "케이블카 & 모노레일 큐레이션 플랫폼",
    description: "전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 여행 계획을 세워보세요.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "naver-site-verification": "naver-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

