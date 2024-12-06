# bookstore

## 실행 방법
배포 주소 : https://bookstore-six-chi.vercel.app

```
git clone https://github.com/HMRyu/bookstore.git
```

``` 
npm i
```

## 📌 문제 정의
### 1. 프론트엔드
  - 책 목록 페이지 구현
    - 페이지네이션
    - 제목, 저자 검색 기능
  - 책 상세 정보 페이지
  - 책 추가 / 제거 / 수정 기능
### 2. 백엔드
  - CRUD RESTful API 설계 및 구현
  - https://github.com/HMRyu/bookstore-api 참고 부탁드립니다.


## ✅ 해결 방안
### 책 목록 페이지 구현
- 책의 제목, 저자, 수량을 보여주는 table을 만드는 것이 적절하다고 판단
- 책의 제목과 저자로 검색할 수 있는 기능 포함
- 페이지네이션 포함
- 대부분의 기능이 포함되어 있어 빠르게 구현할 수 있는 shadcn ui를 사용하기로 결정
  - shadcn ui의 data table을 사용
- 첫 페이지에 데이터를 포함한 페이지를 보여주고 싶어 서버 컴포넌트 사용
- fetching을 서버에서만 수행하기 위해 server action 사용
 
### 책 상세 정보 페이지
- dynamic routing을 이용
- 책의 제목, 저자, 분야, 수량을 보여주는 페이지

### 책 추가 / 제거 / 수정 기능
- server action 사용
- 데이터 mutation 이후 새로고침 없이 변경된 데이터를 반영하기 위해 revalidatePath 사용하여 캐시 초기화
- UX 향상을 위해 모달 사용
  - 모달은 zustand로 관리

## 결과
### 책 목록 페이지
<img width="1437" alt="스크린샷 2024-12-06 12 26 10" src="https://github.com/user-attachments/assets/edc59882-2cf7-4c72-9568-f7106eebdcac">

### 페이지네이션 및 검색 기능
https://github.com/user-attachments/assets/d7d06de3-e029-4a54-8ef1-5e9798bf41e4

### 책 상세 정보 페이지
https://github.com/user-attachments/assets/f9a6613b-68c8-4e6a-a1bf-52b030a68701

### 책 추가 기능
https://github.com/user-attachments/assets/fd26e3d9-25e3-4922-8abf-548715517a60

### 책 수정 기능
https://github.com/user-attachments/assets/b441a9c4-fb6f-4108-aac8-3928820f1878

### 책 삭제 기능
https://github.com/user-attachments/assets/78012d8d-9995-4553-b23e-1291718f334b

