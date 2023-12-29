import styles from "@/components/FormPattern/Forms/forms.module.css"

export default function Checkbox({text, type, name, placeholder, checked, onChange}){
    return(
        <div>
            <input
                type={type}
                name={name}
                value={placeholder}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={name}>{text}</label>
        </div>
    )
}