# 개인 지출 관리 애플리케이션

### 📌 학습목표

- `react-router-dom` 을 활용한 페이지 이동처리를 할 수 있어요.
- `styled-component` 를 이용한 스타일링을 적용할 수 있어요.
- `context api` 를 이용한 `전역 상태 관리`를 할 수 있어요.
- `redux` 를 이용한 `전역 상태 관리`를 할 수 있어요.
  <br><br>

### 📌 구현할 기능

- 지출 CRUD 구현 (작성, 조회, 수정, 삭제)
- 월별 지출 조회 기능 구현
- 월별 지출 항목 등록 구현
- 지출 상세 화면 구현
- 상세화면에서 지출 항목 수정 구현
- 상세화면에서 지출 항목 삭제 구현
  <br><br>

### 📌 요구 사항

- 모든 태그에 적용할 필요는 없으나 스타일링이 들어가는 경우는 `styled-components` 화 할 것
- styled-components에 `props`를 넘김으로 인한 `조건부 스타일링` 적용 (월 선택 탭)
- 지출을 수정하기 위한 페이지 이동 시에 `react-router-dom` 을 이용해서 페이지 전환을 합니다.
- 지출 항목 등록 시 id는 `uuid` 라이브러리를 이용
  (npm i uuid) or (yarn add uuid)
  <br><br>

### 🔮 Props Drilling → Context API → Redux-RTK 단계별 리팩토링

- 현재 저장소에는 `props-drilling`, `context`, `redux-rtk` 라는 이름의 각각의 브랜치명이 존재합니다.
- `props-drilling` 브랜치에서는 context나 redux 없이 useState만으로 상태관리해서 코드를 작성합니다.
- props-drilling 으로 코드를 모두 작성 및 커밋을 완료했으면 `context` 브랜치로 생성 및 이동합니다.
- context 브랜치에서는 props-drilling으로 작업한 코드에서 react `context API`를 사용하여 전역상태를 이용한 코드로 `리팩토링`합니다.
- context 브랜치에서 리팩터링 및 커밋을 완료했으면 `redux-rtk` 브랜치 생성 및 이동합니다.
- redux 브랜치에서는 context api로 전역상태를 관리한 코드를 모두 redux 라이브러리를 이용한 코드로 `리팩토링`합니다.
- 주의: Redux ducks 패턴을 사용하지 않고 `Redux Toolkits` 을 사용하도록 합니다.
  <br><br>

### ➰ Redux-RTK를 적용한 프로젝트 링크<br>

👉 https://sun1-account-book.netlify.app/
<br>

◽ 메인페이지
<br>
<img src="https://github.com/riverSun1/react-account-book/assets/67379144/a662ddfb-eddf-4389-84d1-26a5b2bdbd0a" width="700" style="border: 1px solid white"/>
<br>

◽ 수정페이지
<br>
<img src="https://github.com/riverSun1/react-account-book/assets/67379144/a105b890-008b-408c-ae05-54d8b1f2b900" width="700" style="border: 1px solid white"/>
