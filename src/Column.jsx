import styles from "./PageStyling.module.css"

function Column({children}) {
    return (<div className={styles.Column}>{children}</div>)
}

export default Column;