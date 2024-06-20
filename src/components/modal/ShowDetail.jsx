import { useMemo, useState } from 'react';
import { createObjectByPropertyNames, normalizeStringProperties } from '../../utils/commonUtils';
import useShowStore from '../../zustand/store';

function ShowDetail() {
  const showInfo = useShowStore((state) => state.showInfo);

  const propertyNamesToSelect = [
    'CNTC_INSTT_NM',
    'EVENT_SITE',
    'TITLE',
    'EVENT_PERIOD',
    'DESCRIPTION',
    'IMAGE_OBJECT',
    'URL'
  ];

  const selectedShowInfo = useMemo(() => createObjectByPropertyNames(showInfo, propertyNamesToSelect), []);

  const htmlEntityDecodedShowInfo = useMemo(() => normalizeStringProperties(selectedShowInfo), [selectedShowInfo]);

  const {
    CNTC_INSTT_NM: institutionName,
    EVENT_SITE: eventSite,
    TITLE: showTitle,
    EVENT_PERIOD: eventPeriod,
    DESCRIPTION: description,
    IMAGE_OBJECT: postImgUrl,
    URL: officialUrl
  } = htmlEntityDecodedShowInfo;

  const [isPostImgLoadable, setIsPostImgLoadable] = useState(true);

  function handlePostImgError(e) {
    setIsPostImgLoadable(false);
  }

  return (
    <section className="block">
      <h1 className="mb-4 text-2xl font-bold text-center ">{showTitle}</h1>

      {postImgUrl && isPostImgLoadable ? (
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

      <p className="mt-4 text-lg whitespace-pre-wrap bg-[#FAFAFA] p-5">
        {description ? description : '상세 정보가 없습니다.'}
      </p>

      <a href={officialUrl} target="blank" className="float-right mt-3">
        공식홈페이지 바로가기
      </a>
      <div className="clear-both"></div>
    </section>
  );
}

export default ShowDetail;
