import styles from './Input.module.css';

export default function Input({ type, text, name, placeholder, onChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            onChange={onChange} 
            value={value}
            />
        </div>
    )
}