const dummyData = {
  CNTC_INSTT_NM: '국립공주박물관',
  EVENT_SITE: '국립공주박물관 전시동 1층 복도',
  TITLE: '제34회 어린이문화재실기대회 수상작품 전시',
  EVENT_PERIOD: '2016-07-05 00:00:00 ~ 2016-07-31 00:00:00',
  DESCRIPTION:
    '국립공주박물관은 어린이들이 우리 문화재에 대한 관심을 높이고 창의적 사고를 함양할 수 있도록 매년 어린이문화재실기대회를 개최하고 있습니다. 이번 전시는 제34회 어린이문화재실기대회에서 대상을 수상한 공주 효포 초등학교 김현진 어린이의 무령왕릉 출토 <귀걸이> 등 특선까지 수상한 46명 어린이의 작품이 전시됩니다.',
  IMAGE_OBJECT: 'https://gongju.museum.go.kr/thumbnail/TRAN/spe_display/special_exhibit_0_1467245065.jpg',
  URL: 'https://gongju.museum.go.kr/prog/speclDspy/kor/sub02_02_03/view.do?dspyNo=60'
};

function ShowDetail() {
  //1. Zustand에서 전시회 정보 읽어오기

  //2. 전시회 정보 적절하게 표시하기
  const {
    CNTC_INSTT_NM: institutionName,
    EVENT_SITE: eventSite,
    TITLE: showTitle,
    EVENT_PERIOD: eventPeriod,
    DESCRIPTION: description,
    IMAGE_OBJECT: postImgUrl,
    URL: officialUrl
  } = dummyData;

  return (
    <section>
      <div>주최 박물관: {institutionName}</div>
      <div>전시 위치: {eventSite}</div>
      <div>전시 제목: {showTitle}</div>
      <div>전시 기간: {eventPeriod}</div>
      <div>설명: {description}</div>
      <div>포스터: {postImgUrl}</div>
      <div>공식 URL : {officialUrl}</div>
    </section>
  );
}

/* 전시회 상세 정보 객체 형식
{
  "CNTC_INSTT_NM": "국립공주박물관",
  "EVENT_SITE": "국립공주박물관 전시동 1층 복도",
  "TITLE": "제34회 어린이문화재실기대회 수상작품 전시",
  "EVENT_PERIOD": "2016-07-05 00:00:00 ~ 2016-07-31 00:00:00",
  "DESCRIPTION": "국립공주박물관은 어린이들이 우리 문화재에 대한 관심을 높이고 창의적 사고를 함양할 수 있도록 매년 어린이문화재실기대회를 개최하고 있습니다. 이번 전시는 제34회 어린이문화재실기대회에서 대상을 수상한 공주 효포 초등학교 김현진 어린이의 무령왕릉 출토 <귀걸이> 등 특선까지 수상한 46명 어린이의 작품이 전시됩니다.",
  "IMAGE_OBJECT": "https://gongju.museum.go.kr/thumbnail/TRAN/spe_display/special_exhibit_0_1467245065.jpg",
  "URL": "https://gongju.museum.go.kr/prog/speclDspy/kor/sub02_02_03/view.do?dspyNo=60",
  
  "COLLECTED_DATE": "2024-06-05 01:45:00",
  "ISSUED_DATE": "2016-06-23 17:53:09.0",
  "LOCAL_ID": "60",
  
  "VIEW_COUNT": null,
  "SUB_DESCRIPTION": null,
  "SPATIAL_COVERAGE": null,
  "GENRE": null,
  "DURATION": null,
  "NUMBER_PAGES": null,
  "TABLE_OF_CONTENTS": null,
  "AUTHOR": null,
  "CONTACT_POINT": null,
  "ACTOR": null,
  "CONTRIBUTOR": null,
  "AUDIENCE": null,
  "CHARGE": null,
  "PERIOD": null,
}
*/

export default ShowDetail;
