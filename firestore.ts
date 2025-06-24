import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { CableCar, Review, Comment, Report } from '@/types';

// 케이블카/모노레일 데이터 관련 함수들
export const cableCarService = {
  // 모든 케이블카/모노레일 데이터 가져오기
  async getAll(): Promise<CableCar[]> {
    const querySnapshot = await getDocs(collection(db, 'cablecars'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CableCar));
  },

  // 특정 케이블카/모노레일 데이터 가져오기
  async getById(id: string): Promise<CableCar | null> {
    const docRef = doc(db, 'cablecars', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as CableCar;
    }
    return null;
  },

  // 유형별 필터링 (케이블카 또는 모노레일)
  async getByType(type: 'cable-car' | 'monorail'): Promise<CableCar[]> {
    const q = query(
      collection(db, 'cablecars'),
      where('type', '==', type)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CableCar));
  },

  // 지역별 필터링
  async getByRegion(region: string): Promise<CableCar[]> {
    const q = query(
      collection(db, 'cablecars'),
      where('region', '==', region)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as CableCar));
  },

  // 새 케이블카/모노레일 추가
  async add(data: Omit<CableCar, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'cablecars'), {
      ...data,
      registeredDate: Timestamp.now()
    });
    return docRef.id;
  },

  // 케이블카/모노레일 정보 업데이트
  async update(id: string, data: Partial<CableCar>): Promise<void> {
    const docRef = doc(db, 'cablecars', id);
    await updateDoc(docRef, data);
  },

  // 조회수 증가
  async incrementViews(id: string): Promise<void> {
    const docRef = doc(db, 'cablecars', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const currentViews = docSnap.data().views || 0;
      await updateDoc(docRef, { views: currentViews + 1 });
    }
  }
};

// 후기 관련 함수들
export const reviewService = {
  // 특정 케이블카의 후기 가져오기
  async getByCableCarId(cableCarId: string): Promise<Review[]> {
    const q = query(
      collection(db, 'reviews'),
      where('cableCarId', '==', cableCarId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Review));
  },

  // 새 후기 추가
  async add(data: Omit<Review, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'reviews'), {
      ...data,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  }
};

// 댓글 관련 함수들
export const commentService = {
  // 특정 케이블카의 댓글 가져오기
  async getByCableCarId(cableCarId: string): Promise<Comment[]> {
    const q = query(
      collection(db, 'comments'),
      where('cableCarId', '==', cableCarId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Comment));
  },

  // 새 댓글 추가
  async add(data: Omit<Comment, 'id' | 'createdAt'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'comments'), {
      ...data,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  }
};

// 제보 관련 함수들
export const reportService = {
  // 모든 제보 가져오기 (관리자용)
  async getAll(): Promise<Report[]> {
    const q = query(
      collection(db, 'reports'),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Report));
  },

  // 상태별 제보 가져오기
  async getByStatus(status: 'pending' | 'approved' | 'rejected'): Promise<Report[]> {
    const q = query(
      collection(db, 'reports'),
      where('status', '==', status),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Report));
  },

  // 새 제보 추가
  async add(data: Omit<Report, 'id' | 'createdAt' | 'status'>): Promise<string> {
    const docRef = await addDoc(collection(db, 'reports'), {
      ...data,
      status: 'pending',
      createdAt: Timestamp.now()
    });
    return docRef.id;
  },

  // 제보 상태 업데이트
  async updateStatus(id: string, status: 'pending' | 'approved' | 'rejected'): Promise<void> {
    const docRef = doc(db, 'reports', id);
    await updateDoc(docRef, { status });
  }
};

