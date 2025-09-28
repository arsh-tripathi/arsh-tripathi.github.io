import { useState} from "react"
import styles from './NavBar.module.css'
import './style.css'
import morseify from "./morse.jsx";

// @param
function NavBarItem({index, setIndex, label, currIndex}) {
    const toggle = () => { setIndex(index) }
    return <button className={(index === currIndex && window.innerWidth > 768) ? styles.selected: styles.unselected} onClick={toggle}>{label}</button>
}

function NavBar({index, refs, setIndex}) {
    const [currentIndex, setIdx] = useState(index)
    const tabs = ["About", "Experience", "Work", "Contact"]
    const setCurrentIndex = (value) => { setIdx(value); setIndex(value); }
    const scrollTo = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }
    const goTo = (index) => {
        setCurrentIndex(index)
        scrollTo(refs[index]);
    }
    return (
        <div style={{zIndex: 5}}>
            <button className={styles.home} onClick={() => goTo(0)}>{morseify("Arsh", "A2M")}</button>
            <div className={styles.bar}>
                <div className={(currentIndex === 0 || window.innerWidth <= 768) ? styles.unStyleBar : styles.styleBar}></div>
                <ul className={styles.navBarList}>
                    {tabs.map((tab, i) => (
                        <li><NavBarItem index={i+1} setIndex={goTo} label={tab} currIndex={currentIndex}/></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavBar