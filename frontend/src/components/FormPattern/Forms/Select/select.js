import styles from "@/components/FormPattern/Forms/forms.module.css"

export default function Select({ name, text, options, onChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
            name={name} 
            onChange={onChange} 
            value={value}>
            <option value="">Selecione uma opção</option>
            {options.map((option) =>(
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
            </select>
        </div>
    )
}