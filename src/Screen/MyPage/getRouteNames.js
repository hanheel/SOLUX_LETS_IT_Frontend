export function getRouteNames(path) {
  let name, subName;
  switch (path) {
    case "/mypage/profile":
      name = "프로필 관리";
      break;
    case "/mypage/portfolio":
      name = "포트폴리오 관리";
      break;
    case "/mypage/portfolio/post":
      name = "포트폴리오 관리";
      subName = "포트폴리오 작성";
      break;
    case "/mypage/portfolio/board":
      name = "포트폴리오 관리";
      subName = "포트폴리오 게시판";
      break;
    case "/mypage/portfolio/post/summaryAI":
      name = "포트폴리오 관리";
      subName = "AI 포트폴리오";
      break;
    default:
      // 기본적으로 할 일이 없으면 무시해도 됨
      break;
  }

  return { name, subName };
}
