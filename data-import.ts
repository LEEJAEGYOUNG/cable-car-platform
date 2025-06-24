import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import { CableCar } from '@/types';

// CSV 데이터를 Firestore로 가져오는 함수
export async function importCSVToFirestore(csvData: any[]): Promise<void> {
  try {
    for (const row of csvData) {
      const cableCarData: Omit<CableCar, 'id'> = {
        name: row['이름'],
        type: row['유형'] as 'cable-car' | 'monorail',
        region: row['지역'],
        address: row['주소'],
        latitude: parseFloat(row['위도']),
        longitude: parseFloat(row['경도']),
        phone: row['전화번호'],
        operatingHours: row['운영시간'],
        price: row['요금'],
        tags: row['태그'].split(' ').filter((tag: string) => tag.startsWith('#')),
        description: row['설명'],
        imageUrl: row['이미지URL'],
        registeredDate: row['등록일'],
        views: 0,
        likes: 0
      };

      await addDoc(collection(db, 'cablecars'), cableCarData);
      console.log(`Added: ${cableCarData.name}`);
    }
    console.log('CSV 데이터 가져오기 완료!');
  } catch (error) {
    console.error('CSV 데이터 가져오기 실패:', error);
    throw error;
  }
}

// 샘플 데이터 생성 함수
export async function createSampleData(): Promise<void> {
  const sampleData: Omit<CableCar, 'id'>[] = [
    {
      name: '남산 서울케이블카',
      type: 'cable-car',
      region: '서울 중구',
      address: '서울 중구 회현동1가 산1-19',
      latitude: 37.5584,
      longitude: 126.9882,
      phone: '02-753-2403',
      operatingHours: '10:00 ~ 23:00',
      price: '성인 왕복 14000원',
      tags: ['#서울야경', '#데이트코스', '#도심뷰', '#남산타워연계'],
      description: '남산 서울케이블카는 서울의 중심 남산에 위치하여 도심의 아름다운 경치를 감상할 수 있는 대표적인 관광 명소입니다. 특히 밤에는 화려한 서울의 야경을 한눈에 담을 수 있어 연인들의 데이트 코스로도 인기가 많습니다.',
      imageUrl: 'https://example.com/namsan_cable_car.jpg',
      registeredDate: '2025-06-24',
      views: 0,
      likes: 0
    },
    {
      name: '부산 송도해상케이블카',
      type: 'cable-car',
      region: '부산 서구',
      address: '부산 서구 암남동 620-53',
      latitude: 35.0756,
      longitude: 129.0169,
      phone: '051-204-0900',
      operatingHours: '09:00 ~ 22:00',
      price: '성인 왕복 15000원',
      tags: ['#바다뷰', '#해상케이블카', '#부산관광', '#일몰명소'],
      description: '부산 송도해상케이블카는 국내 최초의 해상케이블카로, 바다 위를 가로지르며 아름다운 해안 경치를 감상할 수 있습니다. 특히 일몰 시간대에는 환상적인 풍경을 만날 수 있습니다.',
      imageUrl: 'https://example.com/songdo_cable_car.jpg',
      registeredDate: '2025-06-24',
      views: 0,
      likes: 0
    },
    {
      name: '대구 모노레일',
      type: 'monorail',
      region: '대구 달서구',
      address: '대구 달서구 두류동',
      latitude: 35.8562,
      longitude: 128.5665,
      phone: '053-640-3000',
      operatingHours: '05:30 ~ 24:00',
      price: '성인 1400원',
      tags: ['#도시교통', '#모노레일', '#대구관광', '#도심이동'],
      description: '대구 모노레일은 대구의 주요 지역을 연결하는 도시철도로, 높은 곳에서 대구 시내를 한눈에 내려다볼 수 있는 특별한 경험을 제공합니다.',
      imageUrl: 'https://example.com/daegu_monorail.jpg',
      registeredDate: '2025-06-24',
      views: 0,
      likes: 0
    }
  ];

  try {
    for (const data of sampleData) {
      await addDoc(collection(db, 'cablecars'), data);
      console.log(`Added sample data: ${data.name}`);
    }
    console.log('샘플 데이터 생성 완료!');
  } catch (error) {
    console.error('샘플 데이터 생성 실패:', error);
    throw error;
  }
}

