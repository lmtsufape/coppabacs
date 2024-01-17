import styles from "@/components/FormPattern/Buttons/Button.module.css"

export default function WhiteButton({ text }) {
    return (
        <div className={styles.form_control}>
            <button className={styles.whitebtn}>{text}</button>
        </div>
    )
}