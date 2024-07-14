import React from 'react';
import ProjectList from './ProjectList';
import styles from './RecommendProject.module.css';
import ReactDOM from 'react-dom';

function RecommendProject() {
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
    
    <div>
      <div className={styles.text}>이런 프로젝트는 어떠신가요? 💫</div>
      <div><ProjectList projects={projects}/></div>
    </div>
  );
}

export default RecommendProject;
