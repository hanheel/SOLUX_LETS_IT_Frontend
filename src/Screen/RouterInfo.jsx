import TeamLayout from "./Teamboard/Layout/TeamLayout";
import MemberProfile from "./Teamboard/MemberProfile/MemberProfile";
import TeamFeedback from "./Teamboard/TeamFeedback/TeamFeedback";
import UpdateProj from "./Teamboard/UpdateProj/UpdateProj";
import ManageProj from "./Teamboard/ManageProj/ManageProj";
import ProjInfo from "./Teamboard/ProjInfo/ProjInfo";
import SetMember from "./Teamboard/SetMember/SetMember";
import Teamboard from "./Teamboard/Teamboard";
import CreateBoard from "./Teamboard/CreateBoard/CreateBoard";
import CreateProfile from "./CreateProfile/CreateProfile";
import MainHome from "./MainHome/MainHome";
import SearchProject from "./SearchProject/SearchProject";
import Proj_area from "./SearchProject/Proj_area";
import ApplyHireProj from "./MyProject/ApplyHireProj/ApplyHireProj";
import MyProfile from "./MyPage/MyProfile/MyProfile";
import Proj_field from "./SearchProject/Proj_field";
import Proj_fit from "./SearchProject/Proj_fit";
import AttendProj from "./MyProject/AttendProj/AttendProj";
import Scrap from "./MyProject/Scrap/Scrap";
import MyPortfolio from "./MyPage/MyPortfolio/MyPortfolio";
import PortfolioWrite from "./MyPage/MyPortfolio/PortfolioWrite/PortfolioWrite";
import CompletePort from "./MyPage/MyPortfolio/PortfolioWrite/Complete/CompletePort";
import PortfolioBoard from "./MyPage/MyPortfolio/PortfolioBoard/PortfolioBoard";
import MainLayout from "../MainLayout";
import ProjPost_detail from "./ProjPost_detail/ProjPost_detail";
import ProjectHire from "./ProjectHire/ProjectHire";
import MyPageLayout from "./MyPage/MyPageLayout";
import MyProjectLayout from "./MyProject/MyProjectLayout";
import Apply from "./Apply/Apply";
import APILogIn from "../Screen/LogIn/APILogIn";
import Redirect from "./LogIn/Redirect";

export const RouterInfo = [
  {
    element: <MainLayout />,
    children: [
      //main 화면
      {
        path: "/",
        element: <MainHome />,
        index: true,
      },
      //로그인
      {
        path: "/login",
        element: <APILogIn />,
        index: true,
      },
      {
        path: "/login/oauth2/callback/kakao",
        element: <Redirect />,
        index: true,
      },
      //프로젝트 찾기
      {
        path: "projects/home",
        element: <SearchProject />,
        label: "프로젝트 찾기 (전체)",
      },
      {
        path: "projects/area",
        element: <Proj_area />,
        label: "지역별 찾기",
      },
      {
        path: "projects/field",
        element: <Proj_field />,
        label: "분야별 찾기",
      },
      {
        path: "projects/fit",
        element: <Proj_fit />,
        label: "맞춤 찾기",
      },
      // 구인글 작성하기
      {
        path: "projects/post",
        element: <ProjectHire />,
        label: "구인글 작성하기",
      },
      // 구인글 보기, 추후  /:id 추가 필요
      {
        path: "projects/detail",
        element: <ProjPost_detail />,
        label: "구인글 보기",
      },

      //내 프로젝트
      {
        path: "myproj",
        element: <MyProjectLayout />,
        label: "구인/신청 프로젝트",
        children: [
          {
            // path: "hiring-and-applied",
            //백엔드 연결용 동적 주소
            path: "hiring-and-applied/:userId",
            element: <ApplyHireProj />,
            label: "구인/신청 프로젝트",
          },
          {
            path: "attendproj",
            element: <AttendProj />,
            label: "참여 프로젝트",
          },
          {
            path: "scrap",
            element: <Scrap />,
            label: "스크랩 프로젝트",
          },
        ],
      },

      //마이페이지
      {
        path: "mypage",
        element: <MyPageLayout />,
        label: "프로필 관리",
        children: [
          {
            path: "profile",
            element: <MyProfile />,
            label: "포트폴리오 관리",
          },
          {
            path: "portfolio",
            element: <MyPortfolio />,
            label: "포트폴리오 관리",
          },
          {
            path: "portfolio/post",
            element: <PortfolioWrite />,
            label: "포트폴리오 작성창",
          },
          {
            path: "portfolio/post/summaryAI",
            element: <CompletePort />,
            label: "AI 생성 - 완성된 포트폴리오",
          },
          {
            path: "portfolio/board",
            element: <PortfolioBoard />,
            label: "포트폴리오 게시판",
          },
        ],
      },

      //팀 게시판
      {
        path: "teamboard",
        element: <Teamboard />,
        label: "팀게시판",
        children: [
          {
            element: <TeamLayout />,
            children: [
              {
                index: true,
                element: <ProjInfo />,
                label: "프로젝트 정보",
              },
              {
                path: "member",
                element: <SetMember />,
                label: "팀원 설정",
              },
              {
                path: "manage",
                element: <ManageProj />,
                label: "프로젝트 관리",
              },
              {
                path: "manage/edit",
                element: <UpdateProj />,
                label: "프로젝트 정보 수정",
              },
              {
                path: "member/profile",
                element: <MemberProfile />,
                label: "팀원 프로필",
              },
            ],
          },
          {
            path: "feedback",
            element: <TeamFeedback />,
            label: "팀원 평가",
          },
          {
            path: "new",
            element: <CreateBoard />,
            label: "팀게시판 생성",
          },
        ],
      },
      {
        path: "profile/new",
        element: <CreateProfile />,
        label: "최초 1회 프로필 생성",
      },
      //프로젝트 신청창
      {
        // path: "apply",
        //백엔드 연결용 동적 주소
        path: "apply/:postId/:userId",
        element: <Apply />,
        label: "프로젝트 신청창",
      },
    ],
  },
];
