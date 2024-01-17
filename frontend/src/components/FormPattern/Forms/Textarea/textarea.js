import styles from "@/components/FormPattern/Forms/forms.module.css"

export default function Textarea({type, value, name, onChange, row, cols, id, text}){

    return(
        <div className={styles.textarea}>
            <label htmlFor={name}>{text}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                row={row}
                id={id}
                cols={cols}
                type={type}
                />

        </div>
    )
}