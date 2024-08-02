## Minicook

<div align="center">
  <br>
  <br>
  <img width="30%" src="https://github.com/OH-Neuri/minicook/assets/87141845/b4d2a226-1694-4818-ba46-b07852298fd6"/>
  <br>
</div>
<br>
<br>

## 📑 프로젝트 설명
### 프로젝트 개요
- 남은 식재료들을 활용하여 만들 수 있는 레시피 추천 웹 플랫폼

<br>

### 프로젝트 배경
- 요리에 대한 관심에서 시작한 이 프로젝트는 사용자들에게 더욱 유용하고 직관적인 레시피 검색 경험을 제공하기 위해 기획하게 되었습니다. 들어가는 재료만 알고 있으면 만들 수 있는 레시피를 손쉽게 찾을 수 있는 기능을 구현하고자 했습니다.

<br>

### 프로젝트 목표 
- 이전 프로젝트에서 경험하지 못한 **웹 성능 개선 기술**들을 적용하고, **기획부터 배포까지의 전 과정**을 직접 경험하고자 하는 목표를 세웠습니다. 이를 통해 웹 애플리케이션의 성능을 최적화하고, 사용자 경험을 극대화하는 데 중점을 두었습니다.

<br>

### 주요 기능 소개
-  식재료를 선택하거나 검색하면 해당 식재료가 들어간 레시피를 확인할 수 있습니다.
-  식재료 뿐만 아니라 레시피명으로 원하는 레시피를 검색할 수 있습니다. 
-  마음에 드는 레시피를 저장할 수 있습니다.
-  마이페이지에서 저장한 레시피들을 정렬하고 수정할 수 있습니다.


<br>
<h3>프로젝트 기간</h3>

- 개발 기간 :  2024.02 ~ 진행중
<br>



### 배포 URL

- URL : http://ec2-43-202-226-135.ap-northeast-2.compute.amazonaws.com/

<br>
<br>


## 📜 시작 가이드

### 요구사항

For building and running the application you need:

- Node.js 21.7.1
- Npm 10.5.0
  
<br>

### 설치 및 실행


```jsx
$ git clone https://github.com/OH-Neuri/minicook.git
$ cd minicook
```

<br>

### Backend

```jsx
$ cd minicook/backend/cook
$ ./gradlew bootRun
```

<br>

### Frontend

```jsx
$ cd frontend/minicook
$ npm start
```

<br>

### 테스트 계정

- ID : sky@naver.com
- PW : password1@

<br>
<br>

## 🛠 프로젝트 사용 기술

| Name | Appliance | Versing | 선정이유 |
| --- | --- | --- | --- |
| React | UI/UX 제작  | 18.2.0 | 가상DOM을 통해 변경된 부분만 실제DOM에 반영하여 렌더링 성능을 향상시켜 UI/UX를 제작하기위해 선택했습니다. |
| Redux-toolkit | 상태 관리 | 2.2.1 | 예측 가능한 데이터 플로우를 그릴 수 있다는 장점이 있고 전역으로 상태관리를 할 수 있는 라이브러리로 리덕스를 선택했습니다. |
| Immer | 불변성 유지 | 10.0.3 | 구조가 복잡한 객체라도 간결한 코드로 불변성을 유지하며 상태를 업데이트 하기 위해 사용했습니다 |
| Styled-components | CSS in JS | 6.1.8 | 자유로운 CSS 커스텀 컴포넌트를 만들 수 있다는 장점이 있어 선택하게 되었습니다. |
| swiper | 캐러셀 제작 | 11.1.1 | 슬라이드가 부드러우며 다양한 UI와 반응형을 지원하고 있기에 선택했습니다. |
| firebase | 서버 및 데이터베이스 | 10.10.0 | 실시간 데이터베이스의 기능을 제공하여 빠른 개발과 확자잉 가능하며, 높은 신뢰성과 안정성을 갖추고 있기 떄문에 선택하였습니다. |
| react-error-boundary | 에러 바운더리 설정 | 4.0.13 | 컴포넌트 단위로 에러처리를 쉽게 감지하고 처리할 수 있어 개발자 경험이 향상되고, 에러 부분만 격리하여 사용자에게 친화적인 피드백을 제공할 수 있어 선택하였습니다. |
| jest | 테스트 실행  | 27.5.2 | 설정이 간단하고 빠르게 테스트 환경을 구성할 수 있어 선택하였습니다. |
| react-test-library | 테스트 시뮬레이션 | 13.4.0 | 간단하고 직관적인 API를 제공하여, 개발자가 쉽게 이해하고 사용할 수 있으며 Facebook에서 공식적으로 사용을 권장하고 있어 선택하였습니다. |

<br>
<br>

## 👩‍💻 맡은 업무 

- **React, Typescript**로 레시피 검색, 추천, 상세 정보, 로그인/회원가입 등의 전반적인 서비스 기능 개발
- ScarpeStorm 웹 스크래핑 도구를 활용해 타사이트 mock 데이터 수집하고 정제
- **swiper.js**를 활용해 반응형 캐러셀 이미지 구현
- **Firebase** 사용하여 레시피 관련 데이터 관리
- **AWS EC2**와 **PM2**를 활용하여 무중단 배포
- **Figma**를 활용하여 UI/UX디자인 및 **반응형 디자인** 제작
- **웹 접근성**과 **웹 표준**을 고려하여 구현
- 기획 및 API 명세서 등 문서 작업

<br>
<br>

## 📝 프로젝트 기록

자세한 내용은 🗒[블로그](https://neuri.tistory.com/category/%F0%9F%93%91%20%EA%B0%9C%EB%B0%9C%20%EA%B8%B0%EB%A1%9D/%EC%82%AC%EC%9D%B4%EB%93%9C%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%28%EB%AF%B8%EB%8B%88%EC%BF%A1%29)에 작성되어 있습니다.

1. [이미지 렌더링 개선 사례](https://neuri.tistory.com/entry/%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-13%ED%8E%B8-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-feat-%EC%B6%A9%EA%B2%A9%EC%A0%81%EC%9D%B8-%EC%84%B1%EB%8A%A5-%EC%A0%90%EC%88%98)
2. [검색 서버 요청 개선한 사례](https://neuri.tistory.com/entry/%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-13%ED%8E%B8-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-feat-%EC%B6%A9%EA%B2%A9%EC%A0%81%EC%9D%B8-%EC%84%B1%EB%8A%A5-%EC%A0%90%EC%88%98)
3. [번들 사이즈 최적화한 사례](https://neuri.tistory.com/entry/%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-14%ED%8E%B8-LCP-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-2-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%A6%AC%EC%82%AC%EC%9D%B4%EC%A7%95)

<br>
<br>


## 📊 문제해결 및 개선 사례 
- 자세한 내용은 [포트폴리오](https://www.notion.so/c1bb8d0cbc144cd098567e08f22691ef?pvs=21)를 확인해주세요.
    - 이미지 렌더링 개선 사례, 검색 서버 요청 개선한 사례


<br>
<br>

## 💻 화면 구성

|메인 페이지|레시피 선택페이지|
|:--:|:--:|
|![미니쿡메인페이지](https://github.com/user-attachments/assets/bc06512c-40aa-47f3-ac2d-2d3ef596d3af)|![미니쿡메뉴선택](https://github.com/user-attachments/assets/ef9167f1-1dc9-4049-80e8-3b1c4042951a)|
|레시피 상세페이지|마이 페이지|
|![미니쿡상세페이지](https://github.com/user-attachments/assets/a5d255b6-16a0-42ba-8154-3364b1687b71)|![미니쿡마이페이지](https://github.com/user-attachments/assets/66c160d2-3c36-49b7-914c-506b73ff4980)|
|검색 기능|반응형 디자인|
|![미니쿡검색](https://github.com/user-attachments/assets/ecfbc355-6903-4186-a636-d3b1708eee60)|![Minicook-Chrome2024-08-0222-14-33-ezgif com-video-to-gif-converter (1)](https://github.com/user-attachments/assets/962c4334-6ae3-4cca-a405-10a2de9ee890)|
|로그인 페이지|회원가입 페이지|
|![로그인페이지](https://github.com/OH-Neuri/minicook/assets/87141845/424696c3-671e-480d-8c5e-3e183a57dcba)|![회원가입페이지](https://github.com/OH-Neuri/minicook/assets/87141845/fd10082c-0554-4b19-b94b-6c6162bc2b15)|

<br>
<br>




## 💪 팀 소개

## Team
|Front-End|Back-End|
|:-:|:-:|
|<img src="https://avatars.githubusercontent.com/u/87141845?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/80913353?v=4" width="150" height="150"/>|
|오하늘<br/>[@OH-Neuri](https://github.com/OH-Neuri)|오종석<br/>[@jongseok-oh](https://github.com/jongseok-oh)|

<br>
<br>

## 🔎 참고 사이트

- 오키친 : https://ottogi.okitchen.co.kr/main/main.asp
