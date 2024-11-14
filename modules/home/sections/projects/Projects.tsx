import Image from 'next/image';
import portfolioProjects from '@/data/projects';
import SectionHeader from '@/modules/home/components/SectionHeader';
import Card from "@/modules/home/components/Card";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import styles from './Projects.module.css';
import Icon from '../../components/Icon';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <SectionHeader>
          <SectionHeader.EyeBrow>Portfolio</SectionHeader.EyeBrow>
          <SectionHeader.Title>Latest Projects</SectionHeader.Title>
          <SectionHeader.Description>
            See how I transformed concepts into engaging digital experiences.
          </SectionHeader.Description>
        </SectionHeader>

        <div className={styles.info}>
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.id}
              className={styles.cardPadding}
              style={{ top: `calc(100px + ${projectIndex * 20}px)` }}
            >
              <div className={styles.content}>
                <div className={styles.contentFirstColumn}>
                  <div className={styles["company-name_year"]}>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className={styles.projectHeading}>{project.title}</h3>
                  <hr className={styles.projectDivider} />
                  <div
                    className={styles.projectDescription}
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <ul className={styles.projectResults}>
                    {project.tools.map((tool) => (
                      <li key={tool.name} className={styles.projectResult}>
                        <span title={tool.name}>
                          <Icon
                            component={tool.icon}
                            fromColor="rgb(110, 231, 183)"
                            toColor="rgb(56, 189, 248)"
                            className='!size-8'
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.projectCTAWrapper}>
                    <a 
                      href={project.url}
                      className={styles.projectCTA}
                      target="_blank"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className={styles.projectCTAIcon} />
                    </a>
                  </div>
                </div>
                <div className={styles.contentFirstColumn}>
                  <Image
                    className={styles.projectImage}
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={700}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
