export function getMyProjectRoute(path) {
  let name, subName;
  switch (path) {
    case "/myproj/hiring-and-applied":
      name = "구인/신청 프로젝트 ";
      break;
    case "/myproj/attendproj":
      name = "참여 프로젝트";
      break;
    case "/myproj/scrap":
      name = "스크랩";
      break;
    default:
      // 기본적으로 할 일이 없으면 무시해도 됨
      break;
  }

  return { name };
}
