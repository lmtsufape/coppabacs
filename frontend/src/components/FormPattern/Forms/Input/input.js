import styles from "@/components/FormPattern/Forms/forms.module.css"


export default function Input({ type, text, name, placeholder, onChange, value}){
 
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            value={placeholder}
            onChange={onChange} 
            value={value}
            />
        </div>
    )
}