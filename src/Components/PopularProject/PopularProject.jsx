import React from 'react';
import ProjectList from '../RecommendProject/ProjectList';
import styles from './PopularProject.module.css';

function PopularProject() {
  const projects = [
    { title: '웹 사이드 프로젝트 팀원 모집',
      period: '4월 10일 - 5월 10일',
      location: '서울',
      onoff:'오프라인',
      difficulty: '초급',
      stack: ['react', 'spring', 'R']},

    { title: '앱 사이드 프로젝트 팀원 모집',
      period: '4월 10일 - 5월 10일',
      location: '서울',
      onoff:'오프라인',
      difficulty: '초급' ,
      stack: ['react', 'spring']
    },


    { title: '리액트 프로젝트 팀원 모집',
      period: '4월 10일 - 5월 10일',
      location: '서울',
      onoff:'오프라인',
      difficulty: '초급' ,
      stack: ['react', 'spring']},

    { title: '딥러닝 프로젝트 팀원 모집',
      period: '4월 10일 - 5월 10일',
      location: '서울',
      onoff:'오프라인',
      difficulty: '초급' ,
      stack: ['react', 'spring']},
  ];

  return (
    <div className={styles.bgcolor}>
      <div className={styles.text}>지금 인기있는 프로젝트 🔥 </div>
      <div><ProjectList projects={projects}/></div>
    </div>
  );
}

export default PopularProject;