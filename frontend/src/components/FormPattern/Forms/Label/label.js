import styles from "@/components/FormPattern/Forms/forms.module.css"

export default function Label({text}){
    return(
        <div className={styles.labelStandard}>
        <label>{text}</label>
        </div>
    )
}