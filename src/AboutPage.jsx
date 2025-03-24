import React from 'react';
import styles from "./PageStyling.module.css";
import ScrollableContainer from "./Scrollable.jsx";

const AboutPage = React.forwardRef( (props, ref) => {
        return (
            <div ref={ref} className={styles.page}>
                <div className={styles.pageCenter}>
                    <p>
                        Hi I am <b>Arsh Tripathi</b>. Currently I am a student at the <b>University of Waterloo</b>,
                        pursuing my degree in <b>Computer Science</b>, with a specialization in <b>Artificial Intelligence</b>.
                        I am passionate
                        about <b>Game Development</b>, <b>Systems Programming</b>, and <b>Artificial Intelligence</b>.
                        I have taken courses such as <b>Operating Systems</b>, <b>Compilers</b>, <b>Algorithms</b> and <b>Data Structures</b>
                        . I love learning about new things and creating my own versions of it.
                    </p>
                </div>
            </div>
        )
    }
)
export default AboutPage;