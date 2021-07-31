import './Input.css'
const Input=(props)=>{
    return(
        <div className='input-container'>
        <input type={props.type} 
        onChange={props.onChange} 
        value={props.value} 
        placeholder={props.placeholder}
        required={props.required}
        />            
        </div>
    )
}
export default Input;