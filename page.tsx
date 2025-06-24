'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MapPin, Star, Users, Clock, ArrowRight, Mountain, Train } from 'lucide-react';

// 임시 데이터 (나중에 API에서 가져올 예정)
const featuredCableCars = [
  {
    id: 'nam_san_cable_car',
    name: '남산 서울케이블카',
    region: '서울 중구',
    type: 'cable-car',
    tags: ['#서울야경', '#데이트코스', '#도심뷰'],
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    rating: 4.5,
    views: 1234
  },
  {
    id: 'songdo_cable_car',
    name: '부산 송도해상케이블카',
    region: '부산 서구',
    type: 'cable-car',
    tags: ['#바다뷰', '#해상케이블카', '#일몰명소'],
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: 4.8,
    views: 2156
  },
  {
    id: 'daegu_monorail',
    name: '대구 모노레일',
    region: '대구 달서구',
    type: 'monorail',
    tags: ['#도시교통', '#모노레일', '#도심이동'],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
    rating: 4.2,
    views: 876
  }
];

const regions = [
  { name: '서울', count: 3, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' },
  { name: '부산', count: 5, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop' },
  { name: '강원도', count: 8, image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop' },
  { name: '제주도', count: 4, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop' }
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'all' | 'cable-car' | 'monorail'>('all');

  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              하늘에서 만나는
              <br />
              <span className="text-yellow-300">특별한 여행</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              전국의 케이블카와 모노레일 정보를 한눈에 확인하고,
              <br />
              아름다운 경치와 함께하는 특별한 경험을 계획해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/cable-cars"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                <Mountain className="mr-2 h-5 w-5" />
                케이블카 둘러보기
              </Link>
              <Link 
                href="/monorails"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center"
              >
                <Train className="mr-2 h-5 w-5" />
                모노레일 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">전국 케이블카 & 모노레일</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">월간 이용자</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8</h3>
              <p className="text-gray-600">평균 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 케이블카 & 모노레일 섹션 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              인기 케이블카 & 모노레일
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              많은 사람들이 찾는 인기 명소들을 확인해보세요
            </p>
          </div>

          {/* 탭 메뉴 */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                전체
              </button>
              <button
                onClick={() => setActiveTab('cable-car')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'cable-car' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                케이블카
              </button>
              <button
                onClick={() => setActiveTab('monorail')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'monorail' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                모노레일
              </button>
            </div>
          </div>

          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCableCars
              .filter(item => activeTab === 'all' || item.type === activeTab)
              .map((item) => (
                <Link 
                  key={item.id} 
                  href={`/detail/${item.id}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.type === 'cable-car' ? '케이블카' : '모노레일'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {item.region}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium text-gray-700">
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-1" />
                        {item.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/list"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              더 많은 명소 보기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 지역별 추천 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지역별 추천
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              각 지역의 특색 있는 케이블카와 모노레일을 만나보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Link 
                key={index}
                href={`/region/${region.name}`}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-gray-600">
                    {region.count}개의 명소
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            새로운 케이블카나 모노레일을 알고 계신가요?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            여러분의 소중한 정보를 공유해주세요. 
            더 많은 사람들이 특별한 경험을 할 수 있도록 도와주세요.
          </p>
          <Link 
            href="/report"
            className="inline-flex items-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
          >
            정보 제보하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

