import os

# 이미지 파일의 확장자 목록
# 스쿼시 머지 테스트
IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']

# 이미지 파일 이름 추출 함수
def extract_image_names(directory):
    image_names = []
    
    # 디렉토리 내 파일 탐색
    for filename in os.listdir(directory):
        # 파일 확장자가 이미지 확장자 목록에 포함되어 있는지 확인
        if any(filename.lower().endswith(ext) for ext in IMAGE_EXTENSIONS):
            image_names.append(os.path.splitext(filename)[0])  # 파일명에서 확장자 제거
            
    return image_names

# 사용할 디렉토리 경로
directory_path = '/Users/seungjin051/Documents/GitHub/web-programing/assignment/blackjack/img'  # 여기에 실제 디렉토리 경로 입력

# 이미지 파일 이름 추출
image_names = extract_image_names(directory_path)

# 결과 출력
print(image_names)
