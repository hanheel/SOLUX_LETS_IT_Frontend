import React from 'react';
import styles from './ProjectList.module.css';

function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <div className={styles.projectItem} key={index}>
          <div className={styles.saveIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
          </div>
          <div className={styles.stack}>
            {project.stack && project.stack.map((tech, idx) => (
              <div key={idx} className={styles.tech}>{tech}</div>
            ))}
          </div>
          <div className={styles.projectTitle}><text>{project.title}</text></div>
          <div><text className={styles.projectPeriod}>기간 | {project.period}</text></div>
          <div><text className={styles.projectLocation}>지역 | {project.location}</text></div>
          <div><text className={styles.projectOnOff}>방식 | {project.onoff}</text></div>
          <div><text className={styles.projectDifficulty}>난이도 | {project.difficulty}</text></div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
