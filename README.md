# React OutSourcing 팀 프로젝트 - artnavi

- 배포 URL :

## 프로젝트 소개 
미술관을 지도로 보여주고 해당 미술관에서 진행되는 전시회의 대한 정보를 제공

## 개발 일정
24.06.17 ~ 24.06.21

## 팀원 구성

<div align="center" dir="auto">
<table>
<thead>
<tr>
<th align="center"><strong>이보영 [팀장]</strong></th>
<th align="center"><strong>김도희 [팀원]</strong></th>
<th align="center"><strong>김휘진 [팀원]</strong></th>
<th align="center"><strong>박요셉 [팀원]</strong></th>
<th align="center"><strong>박영수 [팀원]</strong></th>
<th align="center"><strong>최진욱 [팀원]</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td align="center"><a href="https://github.com/osoon9295"><img src="https://avatars.githubusercontent.com/u/163971188?v=4" height="150" width="150" style="max-width: 80%;"> <br> @osoon9295</a></td>
<td align="center"><a href="https://github.com/hwijinkim22"><img src="https://avatars.githubusercontent.com/u/160462935?v=4" height="150" width="150" style="max-width: 80%;"> <br> @hwijinkim22</a></td>
<td align="center"><a href=https://github.com/iamheroine""><img src="https://avatars.githubusercontent.com/u/161186605?v=4" height="150" width="150" style="max-width: 80%;"> <br> @iamheroine</a></td>
<td align="center"><a href="https://github.com/0dytpq0"><img src="https://avatars.githubusercontent.com/u/81671404?v=4" height="150" width="150" style="max-width: 80%;"> <br> @0dytpq0</a></td>
<td align="center"><a href="https://github.com/youngsupark1"><img src="https://avatars.githubusercontent.com/u/160477257?v=4" height="150" width="150" style="max-width: 80%;"> <br> @youngsupark1</a></td>
<td align="center"><a href="https://github.com/computer-note"><img src="https://avatars.githubusercontent.com/u/161008439?v=4" height="150" width="150" style="max-width: 80%;"> <br> @computer-note</a></td>
</tr>
</tbody>
</table>
</div>

## 사용 기술 스택 
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-1572B6?style=for-the-badge&logo=tailwindcss&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Reactquery-0769AD?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/zustand-000000?style=for-the-badge&logo=zustand&logoColor=white">

## 사용 라이브러리
* sweetalert2
* Kakao Maps API

## 버전 관리
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

## 협업툴
<img src="https://img.shields.io/badge/Figma-F05032?style=for-the-badge&logo=Figma&logoColor=white"> <img src="https://img.shields.io/badge/slack-4053D6?style=for-the-badge&logo=slack&logoColor=white">

## 역할 분담

### Kakao Maps API [ 박영수, 김휘진 ]
- 카카오 지도 api를 이용해 지도에 마커, 스카이뷰 등 다양한 기능을 넣고, 공공 데이터 api를 통해
  미술관의 데이터들을 목록에 표시 <br>
  검색된 장소 위치 기반으로 지도 범위 재설정

<br />

### 공공데이터 API, zustand [ 이보영, 박요셉 ]
- 문화 공공 데이터 광장 사이트에서 특정 API를 호출하여 해당 데이터를 가공 및 전역적으로 상태 관리 + 그 외 필요한 상태들 또한 zustand로 상태 관리


<br />

### 모달 기능 구현 [ 최진욱 ]
- 전시리스트의 전시항목을 클릭하면 해당 전시항목의 전시정보를 모달에 표시

<br />

### 지도 기능을 제외한 메인 페이지 구현 및 레이아웃 제작 [ 김도희 ]
-  날씨와 온도는 axios 라이브러리로 OpenWeatherMap API를 이용한 날씨 데이터로 현재 위치의 날씨와 온도에 해당하는 데이터 렌더링 <br>
  메인의 왼쪽에 위치한 헤더, 푸터 그리고 전시회 정보가 나오는 카드 리스트를 레이아웃 <br>
  사용자가 전시 카드 리스트의 카드를 클릭하면 선택된 전시 데이터에 해당하는 모달 창을 오픈 <br>

<br />
