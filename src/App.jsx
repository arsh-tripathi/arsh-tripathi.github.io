import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar.jsx'
import HomePage from './HomePage.jsx'
import AboutPage from "./AboutPage.jsx";
import ExperiencePage from './ExperiencePage.jsx'
import WorkPage from "./WorkPage.jsx";
import ContactPage from "./ContactPage.jsx";
import {useState, useEffect, useMemo, memo} from "react";
import React from "react"

function App() {
    const numPages = 5;
    const [currPage, setPage] = useState(0)
    const [touchStartY, setTouchStartY] = useState(0);
    const [locked, setLock] = useState(false)
    const refs = Array.from({ length: numPages }, () => React.useRef(null));
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
            event.preventDefault()
            if (locked) return
            setLock(true)
            if (event.deltaY > 0) {
                if (currPage < numPages - 1) {
                    scrollTo(refs[currPage + 1], currPage + 1)
                    setPage(currPage + 1)
                    setTimeout(() => {setLock(false)}, downTime)
                } else {
                    setLock(false)
                }
            } else {
                if (currPage > 0) {
                    scrollTo(refs[currPage - 1], currPage - 1)
                    setPage(currPage - 1)
                    setTimeout(() => {setLock(false)}, downTime)
                } else {
                    setLock(false)
                }
            }
        }
        const handleTouchStart = (event) => {
            event.preventDefault()
            if (locked) return
            setLock(true)
            setTouchStartY(event.touches[0].clientY)
        }
        const handleTouchEnd = (event) => {
            event.preventDefault()
            const deltaY = touchStartY - event.touches[0].clientY
            if (deltaY > 50) {
                if (currPage < numPages - 1) {
                    scrollTo(refs[currPage + 1], currPage + 1)
                    setPage(currPage + 1)
                    setTimeout(() => {setLock(false)}, downTime)
                } else {
                    setLock(false)
                }
            } else if (deltaY < -50) {
                if (currPage > 0) {
                    scrollTo(refs[currPage - 1], currPage - 1)
                    setPage(currPage - 1)
                    setTimeout(() => {setLock(false)}, downTime)
                } else {
                    setLock(false)
                }
            }
        }
        const handleTouchMove = (event) => {event.preventDefault()}
        window.addEventListener("wheel", handleScroll, {passive: false})
        window.addEventListener("keydown", disableKeyScroll)
        window.addEventListener("touchstart", handleTouchStart)
        window.addEventListener("touchend", handleTouchEnd)
        window.addEventListener("touchmove", handleTouchMove)
        return () => {
            window.removeEventListener("wheel", handleScroll)
            window.removeEventListener("keydown", disableKeyScroll)
            window.removeEventListener("touchstart", handleTouchStart)
            window.removeEventListener("touchend", handleTouchEnd)
            window.removeEventListener("touchmove", handleTouchMove)
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
