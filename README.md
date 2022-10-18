# 팀 프로젝트 ad-platform-dashboard 수정

### 원본

- organization repository : https://github.com/Wanted-Pre-Onboarding-FE-Team5/ad-platform-dashboard

### 설치

```
git clone https://github.com/ymStudyLog/ad-platform-dashboard-ym.git

npm i

npm start

/**windows 운영체제에서 npm start 명령어로 json-server 실행이 안될 경우 추가로 아래 명령어 사용*/
npm run server

```

### 수정 과정

우선 에러 해결을 가장 우선으로 하고, 나머지 구현되지 못한 부분과 테스트를 통해 발견된 오류들을 차례대로 수정할 예정이다.

1. 전역 상태 관리 에러

recoil을 사용할 때마다 자주 목격했던 에러 메세지 발생. 원인은 recoil 로직 자체가 아니라 '비동기 함수 작동 순서를 정확하게 이해하지 못 함' + '전역 상태 관리가 필요하지 않은 데이터를 전역 상태로 관리함'이 복합된 것이었다.

2. 무한 루프 발생 에러

처음 발생한 에러 해결 과정에서 useEffect 내부에서 무한 루프를 만드는 실수를 함. 

> ★☆ 자세한 트러블 슈팅 과정 => https://velog.io/@zldzhd9292/trouble-shooting-1 <br />
> ★☆ 스터디 내용 => https://velog.io/@zldzhd9292/frontend-study-1

### 진행 경과

- ~~1차 수정 목표는 완료~~
- 2차 수정 목표는 아직 구현되지 않은 ChannelStatus 컴포넌트와 AdList에서 데이터 값이 잘못 들어가고 있는 부분 수정하기.
- 3차 수정 목표는 기능이 완성된 후 리팩토링, 최적화 하기.

:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog?tab=repositories)
