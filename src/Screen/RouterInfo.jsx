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

export const RouterInfo = [
  {
    path: "/",
    element: <Teamboard />,
    children: [
      {
        element: <TeamLayout />,
        children: [
          {
            index: true,
            element: <ProjInfo />,
            label: "Project Information",
          },
          {
            path: "member",
            element: <SetMember />,
            label: "Set Member",
          },
          {
            path: "manage",
            element: <ManageProj />,
            label: "Manage Project",
          },
          {
            path: "manage/edit",
            element: <UpdateProj />,
            label: "Update Project",
          },
          {
            path: "member/profile",
            element: <MemberProfile />,
            label: "Member Profile",
          },
        ],
      },
      {
        path: "feedback",
        element: <TeamFeedback />,
        label: "Team Feedback",
      },
    ],
  },
  {
    path: "myproj/apply/createboard",
    element: <CreateBoard />,
    label: "Create Board",
  },
  {
    path: "new/profile",
    element: <CreateProfile />,
    label: "Create Profile",
  },
];
