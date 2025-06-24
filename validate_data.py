import pandas as pd

def validate_csv(file_path):
    try:
        df = pd.read_csv(file_path)
        print("CSV 파일 로드 성공!")
        print("컬럼:", df.columns.tolist())
        print("첫 5행:\n", df.head())

        # 필수 컬럼 확인
        required_columns = [
            "id", "이름", "유형", "지역", "주소", "위도", "경도", 
            "전화번호", "운영시간", "요금", "태그", "설명", "이미지URL", "등록일"
        ]
        missing_columns = [col for col in required_columns if col not in df.columns]
        if missing_columns:
            print(f"경고: 다음 필수 컬럼이 누락되었습니다: {missing_columns}")
            return False
        else:
            print("모든 필수 컬럼이 존재합니다.")

        # 데이터 타입 및 유효성 검사
        print(f"변환 전 위도 타입: {df['위도'].dtype}")
        print(f"변환 전 경도 타입: {df['경도'].dtype}")
        df["위도"] = pd.to_numeric(df["위도"], errors="coerce")
        df["경도"] = pd.to_numeric(df["경도"], errors="coerce")
        print(f"변환 후 위도 타입: {df['위도'].dtype}")
        print(f"변환 후 경도 타입: {df['경도'].dtype}")
        print(f"위도 NaN 여부: {df['위도'].isnull().any()}")
        print(f"경도 NaN 여부: {df['경도'].isnull().any()}")

        if df["위도"].isnull().any() or df["경도"].isnull().any():
            print("경고: '위도' 또는 '경도' 컬럼에 유효하지 않은 숫자 값이 있습니다.")
            return False

        print("데이터 검증 완료.")
        return True

    except FileNotFoundError:
        print(f"오류: 파일을 찾을 수 없습니다: {file_path}")
        return False
    except Exception as e:
        print(f"CSV 파일 처리 중 오류 발생: {e}")
        return False

if __name__ == "__main__":
    csv_file_path = "/home/ubuntu/cable-car-platform/src/data/data.csv"
    validate_csv(csv_file_path)

