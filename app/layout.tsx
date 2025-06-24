
import './globals.css';

export const metadata = {
  title: "케이블카 & 모노레일 큐레이션",
  description: "전국 케이블카와 모노레일 정보를 한눈에!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
