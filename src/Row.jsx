import styles from "./PageStyling.module.css"

function Row({children, gap}) {
    return (<div className={styles.Row} style={{gap: gap}}>{children}</div>)
}

export default Row;