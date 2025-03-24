import React, {useState} from 'react';

function ScrollableContainer({children, styling}) {
    const [isHovered, setHovered] = useState(false);
    const handleWheel = (event) => {
        if (!isHovered) return
        const target = event.currentTarget; // The scrollable div

        const atTop = target.scrollTop === 0;
        const atBottom = target.scrollTop + target.clientHeight >= target.scrollHeight;
        if (!((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0))) {
            event.stopPropagation();
        }
    }
    const onEnter = (event) => {
        setHovered(true);
    }
    const onLeave = (event) => {
        setHovered(false)
    }
    return (
        <div className={styling} onWheel={handleWheel} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            {children}
        </div>
    );
}

export default ScrollableContainer;