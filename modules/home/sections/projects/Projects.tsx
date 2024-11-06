import Image from 'next/image';
import portfolioProjects from '@/data/projects';
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id={styles["projects"]}>
      <div className="container">
        <div className={styles.subHeadingWrapper}>
          <p className={styles.subHeading}>Performance improvements</p>
        </div>
        <h2 className={styles.heading}>Latest Projects</h2>
        <p className={styles.description}>See how I transformed concepts into engaging digital experiences.</p>
        <div className={styles.info}>
          {portfolioProjects.map((project) => (
            <div key={project.id} className={styles.project}>
              <div
                className={styles.projectBackground}
                style={{ background: `url(${GrainImage.src})` }}
              ></div>
              <div className={styles.content}>
                <div className={styles.contentFirstColumn}>
                  <div className={styles["company-name_year"]}>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className={styles.projectHeading}>{project.title}</h3>
                  <hr className={styles.projectDivider} />
                  <ul className={styles.projectResults}>
                    {project.results.map((result) => (
                      <li key={result.title} className={styles.projectResult}>
                        <CheckCircleIcon className={styles.projectIcon} />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.url} className={styles.projectCTA}>
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className={styles.projectCTAIcon} />
                  </a>
                </div>
                <div className={styles.contentFirstColumn}>
                  <Image
                    className={styles.projectImage}
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
