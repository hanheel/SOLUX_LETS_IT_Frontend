import { createContext, useReducer, useRef } from "react";
import styles from "./Teamboard.module.css";
import { Outlet } from "react-router-dom";

const mock_teamData = {
  teamId: 1,
  title: "학원 청구 정산 서비스",
  collabLink: [
    {
      id: 1,
      link: "https://www.notion.so/ko-kr",
    },
    {
      id: 2,
      link: "https://github.com/",
    },
  ],
  leader: "yuming",
  members: [
    { id: 1, userId: "yuming", name: "유밍 BE" },
    { id: 2, userId: "dora", name: "도라" },
    { id: 3, userId: "tom", name: "Tom BE" },
  ],
  voteKickmembers: [
    {
      id: 1,
      userId: "tom",
      name: "Tom BE",
      reason: "사유2",
      voteCount: 0,
      agree: 0,
      disagree: 0,
    },
  ],
};

export const TeamStateContext = createContext();
export const TeamDispatchContext = createContext();

function teamReducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return action.data;
    case "DELETE_MEMBER":
      return {
        ...state,
        members: state.members.filter(
          (item) => String(item.userId) !== String(action.data)
        ),
      };
    case "CREATE_VOTE":
      return {
        ...state,
        voteKickmembers: [...state.voteKickmembers, action.data],
      };
    case ("AGREE", "DISAGREE"):
      return {
        ...state,
        voteKickmembers: state.voteKickmembers.map((item) =>
          String(item.userId) === String(action.data.userId)
            ? action.data
            : item
        ),
      };
    case "DELETE_VOTE":
      return {
        ...state,
        voteKickmembers: state.voteKickmembers.filter(
          (item) => String(item.userId) !== String(action.data)
        ),
      };
    default:
      return state;
  }
}

const Teamboard = () => {
  const [teamData, teamDispatch] = useReducer(teamReducer, mock_teamData);
  const kickIdRef = useRef(2);

  const onDeleteMember = (userId) => {
    teamDispatch({
      type: "DELETE_MEMBER",
      data: userId,
    });
  };
  console.log(teamData);

  const onUpdateTeamData = (title, links, selectedMember) => {
    teamDispatch({
      type: "UPDATE",
      data: {
        ...teamData,
        title: title,
        collabLink: links,
        leader: selectedMember,
      },
    });
  };

  const onVote = (memberId, reason) => {
    if (
      teamData.voteKickmembers.find(
        (member) => String(member.userId) === String(memberId)
      )
    ) {
      alert("이미 투표 중인 팀원입니다.");

      return;
    }

    teamDispatch({
      type: "CREATE_VOTE",
      data: {
        id: kickIdRef.current++,
        userId: memberId,
        name: teamData.members.find(
          (member) => String(member.userId) === String(memberId)
        ).name,
        reason: reason,
        voteCount: 0,
        agree: 0,
        disagree: 0,
      },
    });
  };

  const onAgree = (targetUserId) => {
    const targetData = teamData.voteKickmembers.find(
      (member) => String(member.userId) === String(targetUserId)
    );
    teamDispatch({
      type: "AGREE",
      data: {
        agree: targetData.agree++,
        voteCount: targetData.voteCount++,
        ...targetData,
      },
    });

    if (Number(targetData.agree) === Number(teamData.members.length - 1)) {
      onDeleteVote(targetUserId);
      onDeleteMember(targetUserId);
    }
  };

  const onDisagree = (targetUserId) => {
    const targetData = teamData.voteKickmembers.find(
      (member) => String(member.userId) === String(targetUserId)
    );
    teamDispatch({
      type: "DISAGREE",
      data: {
        agree: targetData.disagree++,
        voteCount: targetData.voteCount++,
        ...targetData,
      },
    });

    if (
      Number(targetData.voteCount) === Number(teamData.members.length - 1) &&
      Number(targetData.agree) < Number(teamData.members.length - 1)
    ) {
      onDeleteVote(targetUserId);
    }
  };

  const onDeleteVote = (targetUserId) => {
    teamDispatch({
      type: "DELETE_VOTE",
      data: targetUserId,
    });
  };

  return (
    <div className={styles.teamboard}>
      <TeamStateContext.Provider value={teamData}>
        <TeamDispatchContext.Provider
          value={{
            onUpdateTeamData,
            onDeleteMember,
            onVote,
            onAgree,
            onDisagree,
          }}
        >
          <Outlet />
        </TeamDispatchContext.Provider>
      </TeamStateContext.Provider>
    </div>
  );
};

export default Teamboard;
