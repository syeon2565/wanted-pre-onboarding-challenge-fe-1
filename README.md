# wanted-pre-onboarding-challenge-fe-1
원티드 프리온보딩 사전코스 과제입니다.

회원가입 및 로그인, 투두리스트 기능입니다.


## How to Start?

```
# step 0 : 처음 시작인 경우
해당 repo clone

# step 1 : package 설치
yarn or yarn install

# step 2 : start 
yarn start
```


# 과제 상세 내용

## Auth
- 로그인
  - 아이디는 이메일 형식입니다.
  - 비밀번호는 8자 이상 입력합니다.
  - 위 조건 만족 시 버튼이 활성화 됩니다.
  - 로그인 된 토큰은 local storage에 저장됩니다.
  - 로그인 성공 시 `/`로 이동합니다.
- 회원가입
  - 이름, 이메일, 비밀번호, 비밀번호 확인의 input이 있습니다.
  - 위 input의 조건이 모두 만족하여야만 버튼이 활성화됩니다.
  - 회원가입 후 토큰은 local storage에 저장됩니다.
- 로그아웃
  - 로그아웃 버튼을 누를 시 local storage에 저장된 토큰이 삭제됩니다.

## Todo List
- 투두리스트의 목록과 상세를 확인할 수 있습니다.
  - `/todo` 경로에서 todo 목록이 보입니다.
  - 추가, 수정, 삭제를 할 수 있습니다.
  - 상세보기를 클릭하면 상세목록을 볼 수 있습니다.

## 사용 기술

- React
- styled-components
- react-router-dom

## Commit Convention

| 헤더     | 내용                          |
| -------- | ------------------ |
| feat     | 새로운 기능 추가      |
| refactor | 코드 리팩토링            |
| fix      | 버그 수정       |
| style    | 스타일 변경 |
| setting  | 패키지 설치, 환경 설정     |
| docs     | readme 작성, 주석 추가 및 삭제       | 


## Branch Convention
|브랜치명 | 설명|
| -------- | ------------------ |
|master | 배포 브랜치| 
|develop | 기능 구현된 브랜치|
|feature | 기능 개발 브랜치 |
|hotfix | master에서 발견되는 문제 수정 브랜치|