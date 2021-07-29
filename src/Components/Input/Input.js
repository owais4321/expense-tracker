import './Input.css'
const Input=(props)=>{
    return(
        <div className='input-container'>
        <input type={props.type}/>            
        </div>
    )
}
export default Input;