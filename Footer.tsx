import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 설명 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">케이블카 & 모노레일</span>
            </div>
            <p className="text-gray-300 mb-4">
              전국의 케이블카와 모노레일 정보를 한눈에 확인하고, 
              여행 계획을 세워보세요. 아름다운 경치와 특별한 경험이 기다립니다.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@cablecar.com" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:02-1234-5678" className="text-gray-300 hover:text-white">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cable-cars" className="text-gray-300 hover:text-white">
                  케이블카
                </Link>
              </li>
              <li>
                <Link href="/monorails" className="text-gray-300 hover:text-white">
                  모노레일
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-300 hover:text-white">
                  지도보기
                </Link>
              </li>
              <li>
                <Link href="/report" className="text-gray-300 hover:text-white">
                  제보하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 지역별 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">인기 지역</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/region/seoul" className="text-gray-300 hover:text-white">
                  서울
                </Link>
              </li>
              <li>
                <Link href="/region/busan" className="text-gray-300 hover:text-white">
                  부산
                </Link>
              </li>
              <li>
                <Link href="/region/gangwon" className="text-gray-300 hover:text-white">
                  강원도
                </Link>
              </li>
              <li>
                <Link href="/region/jeju" className="text-gray-300 hover:text-white">
                  제주도
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 케이블카 & 모노레일 큐레이션 플랫폼. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

