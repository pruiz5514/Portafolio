import './Input.scss'

interface InputProps {
    placeholder: string;
    type: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  

const Input: React.FC<InputProps>  = ({ placeholder, type, name, value, onChange }) => {
  return (
    <input className="input"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
    />
  )
}

export default Input