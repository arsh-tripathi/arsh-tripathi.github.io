import styles from './PageStyling.module.css'
import ScrollableContainer from "./Scrollable.jsx";
import Row from "./Row.jsx";
import Column from "./Column.jsx";
import React from "react";
import ExperienceObj from "./data/Experience.json"

function Experience({experience})  {
    if (window.innerWidth <= 768) {
        return (
            <div className={styles.experienceContainer}>
                <Column>
                    <Row>
                        <CompanyLogo logoPath={experience.imagePath}/>
                        <Column>
                            <JobTitle title={experience.title} company={experience.company}/>
                        </Column>
                    </Row>
                    <Duration startDate={experience.startDate} endDate={experience.endDate}/>
                    <Description description={experience.description}/>
                </Column>
            </div>
        )
    } else {
        return (
            <div className={styles.experienceContainer}>
                <Row>
                    <CompanyLogo logoPath={experience.imagePath}/>
                    <Column>
                        <JobTitle title={experience.title} company={experience.company}/>
                        <Duration startDate={experience.startDate} endDate={experience.endDate}/>
                        <Description description={experience.description}/>
                    </Column>
                </Row>
            </div>
        )
    }
}

function CompanyLogo({logoPath}) {
    if (logoPath == "") {
        return (
            <h1>Image<br />Error<br />404</h1>
        )
    } else {
        return (
            <img src={logoPath} style={{ width: "10vmax", height: "auto" }} alt={"404 Not Found"}/>
        )
    }
}

function JobTitle({title, company}) {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <h2 className={styles.title}>{company}</h2>
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
        <ul className={styles.description}>
            {description.map((point) => (
                <li>{point}</li>
            ))}
        </ul>
    )
}

const ExperiencePage = React.forwardRef( (props, ref) => {
        return (
            <div ref={ref} className={styles.page}>
                <ScrollableContainer styling={styles.scrollable}>
                    {ExperienceObj.map((item) => (
                        <Experience experience={item}/>
                    ))}
                </ScrollableContainer>
            </div>
        )
    }
)


export default ExperiencePage
