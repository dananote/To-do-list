# Todo list

메일플러그 프론트엔드 지원 사전과제 입니다.
<strong>배포:</strong> https://mailplugtodo.netlify.app/

<br />

## ⚙️ 1. 개발환경

### 기술스택

<p  align="left">

<img  src="https://img.shields.io/badge/Recoil-2D333B?style=for-the-badge&logo=react&logoColor=3578E5">
<img  src="https://img.shields.io/badge/Styled component-2D333B?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093">
<img  src="https://img.shields.io/badge/axios-2D333B?style=for-the-badge&logo=axios&logoColor=#F7B93E">
<img  src="https://img.shields.io/badge/javascript-2D333B?style=for-the-badge&logo=javascript&logoColor=#F7DF1E">

</p>
### 라이브러리 사용이유
- 전역 상태 관리와 접근을 위해 Recoil을 사용했습니다.
- Styled Components를 사용해서 컴포넌트 내에서 스타일을 캡슐화하며 모듈성과 재사용성을 높이고 컴포넌트 스타일을 보다 쉽게 ​​관리했습니다.
- 보다 간편한 HTTP요청을 보내고 응답을 처리하기 위해 Axios를 사용했습니다.

<br />

## ✅ 2. 기능소개 및 구현 방법

<strong>새로운 Todo 작성</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/284eae0c-0c0e-4c7d-a943-219113b09158" style="max-width: 600px;"/>

- 페이지가 첫 렌딩시 바로 Todo를 작성할 수 있도록 <code>useRef</code>를 이용하여 focus
- <code>onChange</code> 이벤트리스너로 실시간으로 입력한 value 값을 <code>useState</code>로 관리하는 content에 넣어주고 만약 안의 값이 빈문자열이면 버튼 비활성화
- 데이터를 가져오고 만약 데이터의 length 가 0 이라면 "등록된 [할 일]이 없습니다" 노출
- 활성화된 "할 일 추가" 버튼 클릭시 입력된 값을 <code>Axios</code> 로 서버에 POST
- <code>useEffect</code>의 의존성 배열로 <code>Recoil</code>로 전역관리 중인 recoil value <code>checkChange</code>를 두고 해당 값이 변경이 있을때마다 todo list를 GET
- Get해서 서버에 받아온 데이터를 <code>map</code>으로 돌려 화면에 노출 이때 노출되는 순서는 오름차순으로 하기 위해 배열에<code>reveerse</code>메서드 사용

<br />

<strong>완료한 Todo 체크</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/cdf16128-54b9-4719-b190-a7715fd970cd" style="max-width: 600px;"/>

- <code>changeTodo</code> 상태를 따리 관리하여 체크박스 클릭시 현재의 반대 되는 상태로 변경
- 변경이 완료된 내용이 state에 담긴뒤 조건문으로 변경된 내용이 담겼다면 서버에 PATC
- H 되도록 설정
- true/false 상태에 따라 스타일 변경

<br />

<strong>Todo 수정</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/76215cb2-ed84-4523-832a-b746b338689e" style="max-width: 600px;"/>

- 수정 버튼을 누르면 기본값이 false 이던 <code>isupdate</code>상태를 true변경.
- <code>isupdate</code>상태가 true로 변경되면 <code>span</code>태그가 <code>input</code>으로 변경되고 <code>useRef</code>로 해당 인풋 focus
- 변경된 내용을 계속 체크하여 만약 빈값이거나 원래 본문의 값과 같다면 저장 버튼 비활성화
- 저장을 누르게 되면 할일 완료상태를 체크도 같이 관리한느 <code>changeTodo</code>를 서버에 PATCH 한 후 <code>isupdate</code>를 false로 변경
- 수정된 내용을 서버에 보낸후 <code>checkChange</code>값 기존과 반대로 변경하여 화면에 바로 렌더링
- 취소를 누르면 <code>isupdate</code>를 false로 변경

<br />

<strong>Todo 수정 예외처리</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/e87ceaf3-2b67-43d9-8fb4-bc0ebebede4e" style="max-width: 600px;"/>

- 다른 세션에서 이미 삭제한 Todo의 수정을 막기위해 서버에 수정된 내용을 보내기 전 건당 조회 API에 현재 todo의<code>id</code>값을 보내여 먼저 존재하는지 확인
- 건당 조회 API활용시 <code>id</code>존재했을때는 없는 내용이지만 <code>id</code>가 존재하지 않을때만 반환되는 <code>message</code>키 값이 있는지 없는지 <code>hasOwnProperty</code>메서드를 이용하여 조건문이 true라면 이미 삭제된 할 일이라는 modal 노출
- 노출된 modal의 확인 버튼을 누르면 모달을 닫고 <code>checkChange</code>값을 변경하여 바로 화면 자동렌더링하여 삭제된 todo 화면에서 지우기

<br />

<strong>Todo 삭제</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/d44e0837-191a-4cc8-a5bb-8578416661ba" style="max-width: 600px;"/>

- 삭제 버튼 클릭시 modal의 노출 여부를 결정하는 <code>showModal</code>상태 true로 변경
- 노출된 modal에서 삭제버튼 클릭시 서버에 DELETE 요청하고 <code>showModal</code>상태를 false처리 한 뒤 <code>checkChange</code>값을 변경하여 화면 렌더링
- 취소 버튼을 누르면<code>showModal</code>상태만 false로 변경

<br />

<strong>Todo 10개까지만 등록</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/b086b783-9ec8-41ac-9d1a-449dd5889641" style="max-width: 600px;"/>

- 현재 노출되어있는 Todo list의 갯수를 체크하여 10개가 넘어가면 modal을 노출하여 더이상 등록할 수 없게 안내

<br />

<strong>글자수 제한 및 넘치는 글씨 관리</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/d59def00-f858-430e-8f14-e6e2cc7d5dd8" style="max-width: 600px;"/>

- 입력중인 글자수를 계속 체크하여 50자가 넘어가면 <code>substr</code>메서드를 사용하여 50자까지 자른 다음 <code>input</code>태그 값으로 바로 집어넣어 50자 이상 못치게 방지
- 부모에서 넘치는 글씨는 <code>ellipsis</code>를 주어 자연스럽게 끊기게 스타일링

<br />

<strong>반응형 처리</strong>

<img src="https://github.com/dananote/To-do-list/assets/124513796/1231bcf5-aa6d-475e-bd19-cd3212ff781c" style="max-width: 600px;"/>

- react-reponsive를 이용하여 view 넓이값이 800px이하일때는 <code>isMobile</code>값을 true로 변경하고 <code>Rcecoil</code>로 전역관리
- 좁은 모바일 화면을 고려하여 새로운 Todo를 입력하는 인풋창과 버튼을 <code>flex-direction</code>을 <code>column</code>처리 그 외에 <code>todoBox</code>안의 스타일도 모바일에서 보기 편하도록 조건부 css처리

<br />

## 📁 3. 프로젝트 구조 소개

```
📁 rhotaehee-project
├──📁 node_modules
├──📁 public
├──📁 src
│   ├──📁 api
│   │   ├──📄 instance.js
│   │   └──📄 todoAPI.js
│   ├──📁 asset
│   ├──📁 atom
│   ├──📁 Components
│   │   ├──📄 Button.jsx
│   │   ├──📄 Input.jsx
│   │   ├──📄 Modal.jsx
│   │   ├──📄 CreateTodo.jsx
│   │   ├──📄 TodoButton.jsx
│   │   ├──📄 TodoBox.jsx
│   │   └──📄 TodoList.jsx
│   ├──📁 pages
│   ├──📄 App.js
│   ├──📄 GlobalStyle.jsx
│   ├──📄 index.js
│   └──📄 Layout.jsx
├──📄 .gitignore
├──📄 package-lock.json
├──📄 package.json
└──📄 README.md
```

<br />

## 📁 4. 빌드 & 실행 방법

### 설치

```
git clone https://github.com/dananote/To-do-list.git
npm install
```

### 실행

```
npm start
```

<strong>배포:</strong> https://mailplugtodo.netlify.app/
