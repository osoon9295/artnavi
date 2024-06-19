import { useState } from 'react';
import useShowStore from '../../zustand/store';

function ShowDetail() {
  const showInfo = useShowStore((state) => state.showInfo);

  const {
    CNTC_INSTT_NM: institutionName,
    EVENT_SITE: eventSite,
    TITLE: showTitle,
    EVENT_PERIOD: eventPeriod,
    DESCRIPTION: description,
    IMAGE_OBJECT: postImgUrl,
    URL: officialUrl
  } = showInfo;

  const [isPostImgLoadable, setIsPostImgLoadable] = useState(true);

  function handlePostImgError(e) {
    setIsPostImgLoadable(false);
  }

  return (
    <section className="block">
      <h1 className="mb-4 text-2xl font-bold text-center">{showTitle}</h1>

      {isPostImgLoadable ? (
        <img
          src={postImgUrl}
          onError={handlePostImgError}
          className=" float-right w-[300px] h-[300px]  object-contain"
        />
      ) : (
        <div className=" float-right w-[300px] h-[300px]"></div>
      )}

      <div className="flex flex-col justify-center gap-9 text-center h-[300px]">
        {institutionName && (
          <h3 className="text-lg ">
            주최
            <br />
            {institutionName}
          </h3>
        )}
        {eventSite && (
          <p className="text-lg ">
            전시 위치
            <br />
            {eventSite}
          </p>
        )}
        {eventPeriod && (
          <p className="text-lg ">
            전시 기간
            <br />
            {eventPeriod}
          </p>
        )}
      </div>

      <p className="mt-4 text-lg whitespace-pre-wrap">{description}</p>

      <a href={officialUrl} target="blank" className="float-right mt-3">
        공식홈페이지 바로가기
      </a>
      <div className="clear-both"></div>
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
