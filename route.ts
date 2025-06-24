import { NextRequest, NextResponse } from 'next/server';
import { cableCarService } from '@/lib/firestore';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') as 'cable-car' | 'monorail' | null;
    const region = searchParams.get('region');
    const id = searchParams.get('id');

    // 특정 ID로 조회
    if (id) {
      const cableCar = await cableCarService.getById(id);
      if (!cableCar) {
        return NextResponse.json({ error: 'Cable car not found' }, { status: 404 });
      }
      // 조회수 증가
      await cableCarService.incrementViews(id);
      return NextResponse.json(cableCar);
    }

    // 유형별 조회
    if (type) {
      const cableCars = await cableCarService.getByType(type);
      return NextResponse.json(cableCars);
    }

    // 지역별 조회
    if (region) {
      const cableCars = await cableCarService.getByRegion(region);
      return NextResponse.json(cableCars);
    }

    // 전체 조회
    const cableCars = await cableCarService.getAll();
    return NextResponse.json(cableCars);
  } catch (error) {
    console.error('Error fetching cable cars:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const id = await cableCarService.add(data);
    return NextResponse.json({ id, message: 'Cable car added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding cable car:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

