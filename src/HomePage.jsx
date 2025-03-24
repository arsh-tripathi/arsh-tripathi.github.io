import React, {useState, useEffect} from "react";
import morseify from "./morse.jsx";
import styles from "./HomePage.module.css";
import ExperienceObj from "./data/Experience.json"

const TypingAnimation = () => {
    const texts = ["Arsh", morseify("Arsh", "A2M")]
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setDeleting] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting && currentCharIndex < texts[currentTextIndex].length) {
                setCurrentCharIndex(currentCharIndex + 1)
            } else if (isDeleting && currentCharIndex > 0) {
                setCurrentCharIndex(currentCharIndex - 1)
            } else if (!isDeleting && currentCharIndex === texts[currentTextIndex].length) {
                setTimeout(() => setDeleting(true), 2000)
            } else if (isDeleting && currentCharIndex === 0) {
                setDeleting(false)
                setCurrentTextIndex((currentTextIndex + 1) % texts.length)
            }
        }, isDeleting ? 50: 100)

        return () => clearTimeout(timeout)
    }, [currentTextIndex, isDeleting, currentCharIndex, texts])

    return (
        <div className={styles.typing}>
            <h1>
                {texts[currentTextIndex].slice(0, currentCharIndex)}
            </h1>
            <h1 className={styles.cursor}>|</h1>
        </div>
    )
}

const HomePage = React.forwardRef((props, ref) => {
        return (
            <div ref={ref} className={styles.home}>
                <div className={styles.text}>
                    <h2>Hi I am</h2>
                    <TypingAnimation />
                    <h3>Software Developer</h3>
                    <h3>{ExperienceObj[0].title} @ {ExperienceObj[0].company}</h3>
                    <h3>BCS (AI Spec) @ University of Waterloo</h3>
                </div>
            </div>
        )
    }
)
export default HomePage;