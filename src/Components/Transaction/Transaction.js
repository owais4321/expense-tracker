import './Transaction.css'
const Transaction = (props) => {
    return (
        <div className={props.className}>
            <div className='desc'>
            Salary
            </div>
            <div className='amn'>
            6$
            </div>
            <button className='delbtn'>X</button>
        </div>
    )
}

export default Transaction;