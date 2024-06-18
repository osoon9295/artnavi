import React from 'react';

const CardList = () => {
  const cardsData = [
    { title: '전시 제목1', content: '내용1' },
    { title: '전시 제목2', content: '내용2' },
    { title: '전시 제목3', content: '내용3' },
    { title: '전시 제목4', content: '내용4' },
    { title: '전시 제목5', content: '내용5' },
    { title: '전시 제목6', content: '내용6' },
    { title: '전시 제목7', content: '내용7' },
    { title: '전시 제목8', content: '내용8' },
    { title: '전시 제목9', content: '내용9' },
  ];

  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="flex flex-col items-center justify-center p-4 m-2 text-center text-white bg-green-500 border border-gray-300 rounded-lg shadow-md w-52">
        선택한 박물관 이름
      </div>
      <div className="flex flex-col items-center w-full h-full overflow-y-auto">
        {cardsData.map((card, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 m-2 text-center bg-white border border-gray-300 rounded-lg shadow-md h-36 w-52">
            <h3 className="mb-2">{card.title}</h3>
            <p className="m-0">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
