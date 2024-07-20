import React from "react";
import ProjectList from "./ProjectList";
import styles from "./RecommendProject.module.css";

function RecommendProject() {
  const projects = [
    {
      prtTitle: "웹 사이드 프로젝트 팀원 모집",
      period: "4월 10일 - 5월 10일",
      regionId: "서울",
      onoff: "오프라인",
      difficulty: "초급",
      requiredStack: ["react", "spring", "R"],
    },
    {
      prtTitle: "앱 사이드 프로젝트 팀원 모집",
      period: "4월 10일 - 5월 10일",
      regionId: "서울",
      onoff: "오프라인",
      difficulty: "초급",
      requiredStack: ["react", "spring"],
    },
    {
      prtTitle: "앱 사이드 프로젝트 팀원 모집",
      period: "4월 10일 - 5월 10일",
      regionId: "서울",
      onoff: "오프라인",
      difficulty: "초급",
      requiredStack: ["react", "spring"],
    },
    {
      prtTitle: "앱 사이드 프로젝트 팀원 모집",
      period: "4월 10일 - 5월 10일",
      regionId: "서울",
      onoff: "오프라인",
      difficulty: "초급",
      requiredStack: ["react", "spring"],
    },
  ];

  return (
    <div className={styles.recommendproj}>
      <div className={styles.text}>이런 프로젝트는 어떠신가요? 💫</div>
      <div>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}

export default RecommendProject;
