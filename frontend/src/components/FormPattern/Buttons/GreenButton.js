import styles from './GreenButton.module.css'

export default function GreenButton({ text }) {
    return (
        <div className={styles.form_control}>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}