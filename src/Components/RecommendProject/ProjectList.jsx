import React from 'react';
import styles from './ProjectList.module.css';

function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <div className={styles.projectItem} key={index}>

          <div className={styles.stack}>
            {project.stack && project.stack.map((tech, idx) => (
              <div key={idx} className={styles.tech}>{tech}</div>
            ))}
          </div>

          <div className={styles.projectTitle}><text>{project.title}</text></div>
          <div ><text className={styles.projectPeriod}>기간 | {project.period}</text></div>
          <div ><text className={styles.projectLocation}>지역 | {project.location}</text></div>
          <div ><text className={styles.projectLocation}> 방식 | {project.onoff}</text></div>
          <div ><text className={styles.projectDifficulty}>난이도 | {project.difficulty}</text></div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;

