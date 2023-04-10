const api = () => {
  const data = [
    { title: '배고파', content: '메뉴 추천좀 해줘' },
    { title: '밖에 비온다', content: '우산 챙기세요' },
    { title: '쏜애플 좋아하는 사람', content: '모르면 서울 꼭 들어봐' },
    { title: '넷플릭스 같이 쓰실분?', content: '쪽지 주세요' },
  ];

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, 4000),
  );
};

export default api;
