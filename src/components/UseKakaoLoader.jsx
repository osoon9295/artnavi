import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: 'e3e9b3d14acc93be6a8bda98c066d39f',
    libraries: ['clusterer', 'drawing', 'services']
  });
}
