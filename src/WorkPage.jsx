import styles from './PageStyling.module.css'
import ProjectObj from './data/Project.json'
import ScrollableContainer from "./Scrollable.jsx";
import Row from "./Row.jsx";
import Column from "./Column.jsx";
import React from "react";

function Project({project})  {
    return (
        <div className={styles.experienceContainer}  style={{boxShadow: "0 0 15px #fd459d"}}>
            <Row>
                <ProjectLogo logoPath={project.imagePath} link={project.link}/>
                <Column>
                    <ProjectTitle title={project.title} technologies={project.technologies} link={project.link}/>
                    <Duration startDate={project.startDate} endDate={project.endDate}/>
                    <Description description={project.description}/>
                </Column>
            </Row>
        </div>
    )
}

function ProjectLogo({logoPath, link}) {
    if (logoPath == "") {
        return (
            <h1>Image<br />Error<br />404</h1>
        )
    } else {
        return (
            <a href={link} target={"_blank"}><img src={logoPath} style={{ width: "10vmax", minHeight: "10vmax", height: "auto" }} alt={"404 Not Found"}/></a>
        )
    }
}

function ProjectTitle({title, technologies, link}) {
    return (
        <>
            <h2 className={styles.title} style={{backgroundColor: "#ff0080"}}><a href={link} target={"_blank"}>{title}</a></h2>
            <Row>
                {technologies.map((technology) => (
                    <h2 className={styles.title}  style={{backgroundColor: "#ff0080"}}>{technology}</h2>
                ))}
            </Row>
        </>
    )
}

function Duration({startDate, endDate}) {
    return (
        <p>{startDate} - {endDate}</p>
    )
}

function Description({description})  {
    return (
        <ul className={styles.description} style={{color: "#ff0080"}}>
            {description.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
)
}



const WorkPage = React.forwardRef( (props, ref) => {
        return (
            <div ref={ref} className={styles.page}>
                <ScrollableContainer styling={styles.scrollable}>
                    {ProjectObj.map((item) => (
                        <Project project={item}/>
                    ))}
                </ScrollableContainer>
            </div>
        )
    }
)

export default WorkPage