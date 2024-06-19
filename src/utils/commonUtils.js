/** 
  객체에서 특정 프로퍼티만을 추출하여
  새로운 객체를 반환합니다

  @param {Object} sourceObject 프로퍼티를 추출할 객체
  @param {string[]} propertyNames 추출할 프로퍼티 이름 목록
  @returns 프로퍼티가 추출된 새로운 객체
*/
export function createObjectByPropertyNames(sourceObject, propertyNames) {
  return propertyNames.reduce((newObject, propertyName) => {
    newObject[propertyName] = sourceObject[propertyName];
    return newObject;
  }, {});
}

/**
  객체의 문자열 데이터 중 HTML Entity가 사용된 문자열을 디코딩하여 
  새로운 객체로 반환합니다.
  @param {string} string 디코딩할 객체
  @returns 디코딩된 새로운 객체
*/
export function decodeHTMLEntityFromObject(sourceObject) {
  return applyToAllProperty({ ...sourceObject }, (value) => {
    if (typeof value === 'string') {
      return decodeHTMLEntity(value);
    } else {
      return value;
    }
  });
}

/**
  문자열에서 HTML Entity가 사용된 부분을 디코딩하여
  반환합니다.
  @param {string} string 디코딩을 적용한 문자열
  @returns 디코딩된 문자열
*/
export function decodeHTMLEntity(string) {
  return string
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&nbsp;/g, ' ')
    .replace(/<.*?>/g, '');
}

/**
  객체의 모든 프로퍼티에 콜백함수를 적용합니다

  @param  object 이 객체의 프로퍼티가 변경됩니다.
  @param  callbackFn 모든 프로퍼티에 적용할 콜백함수
  @returns 프로퍼티가 변경된, 전달된 객체
*/
export function applyToAllProperty(object, callbackFn) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      object[key] = callbackFn(object[key]);
    }
  }
  return object;
}
