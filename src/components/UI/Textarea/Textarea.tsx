import './Textarea.scss'

interface TextareaProps {
    placeholder: string;
    name: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }

const Textarea: React.FC<TextareaProps>  = ({ placeholder, name, value, onChange })=> {
    
  return (
    <textarea className='textarea' placeholder={placeholder} name={name} value={value} onChange={onChange}/>
  )
}

export default Textarea