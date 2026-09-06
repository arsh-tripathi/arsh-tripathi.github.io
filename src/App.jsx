import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from "./AboutPage.jsx";
import ExperiencePage from './ExperiencePage.jsx'
import WorkPage from "./WorkPage.jsx";
import ContactPage from "./ContactPage.jsx";
import {useRef, useState, useEffect, useMemo, memo} from "react";

function App() {
    const numPages = 5;
    const [currPage, setPage] = useState(0)
    const [touchStartY, setTouchStartY] = useState(0);
    const [locked, setLock] = useState(false)
    const refs = Array.from({ length: numPages }, () => useRef(null));
    const scrollTo = (ref, index) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
        setPage(index)
    }
    useEffect(() => {
        const downTime = 50
        const disableKeyScroll = (event) => {
            const keys = ['ArrowUp', 'ArrowDown']
            if (keys.includes(event.key)) {
                event.preventDefault()
                if (locked) return
                setLock(true)
                if (event.key === 'ArrowUp') {
                    if (currPage > 0) {
                        scrollTo(refs[currPage - 1], currPage - 1)
                        setPage(currPage - 1)
                        setTimeout(() => {setLock(false)}, downTime)
                    } else {
                        setLock(false)
                    }
                } else if (event.key === 'ArrowDown') {
                    if (currPage < numPages - 1) {
                        scrollTo(refs[currPage + 1], currPage + 1)
                        setPage(currPage + 1)
                        setTimeout(() => {setLock(false)}, downTime)
                    } else {
                        setLock(false)
                    }
                }
            }
        }
        const handleScroll = (event) => {
            const scrollY = window.scrollY
            const vh = window.innerHeight
            setPage(Math.round(scrollY / vh))
        }
        handleScroll()
        document.addEventListener("wheel", handleScroll, {passive: false})
        document.addEventListener("scroll", handleScroll, {passive: false})
        document.addEventListener("scrollend", handleScroll, {passive: false})
        document.addEventListener("touchend", handleScroll, {passive: false})
        document.addEventListener("keydown", disableKeyScroll)
        return () => {
            document.removeEventListener("wheel", handleScroll)
            document.removeEventListener("scroll", handleScroll)
            document.removeEventListener("scrollend", handleScroll)
            document.removeEventListener("touchend", handleScroll)
            document.removeEventListener("keydown", disableKeyScroll)
        }
    }, [currPage, locked, refs]);

    const page = useMemo(() => ({currPage}), [currPage])
    const NavBarDiv = memo(( {refs, currPage, setPage} ) => {
        // console.log("Refs: ", refs, " Curr Page: ", currPage)
        return <NavBar index={currPage} refs={refs} setIndex={setPage}/>
    })


    return (
        <>
            <HomePage ref = {refs[0]} />
            <AboutPage ref = {refs[1]} />
            <ExperiencePage ref = {refs[2]} />
            <WorkPage ref = {refs[3]}  />
            <ContactPage ref = {refs[4]} />
            <NavBarDiv refs={refs} currPage={currPage} setPage={setPage}/>
        </>
    )
}

export default App
