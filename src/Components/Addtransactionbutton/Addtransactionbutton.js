import './Addtransactionbutton.css'
const Addtransactionbutton =(props)=>{
return(
    <div className='addtransactionbutton'>
        <button onClick={props.onClick}>
            Add Transaction
        </button>
    </div>        
)
}
export default Addtransactionbutton;