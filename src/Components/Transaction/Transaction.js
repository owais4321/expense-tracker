import './Transaction.css'

const Transaction = (props) => {

    return (    
        <div className={props.className}>
            <div className='desc'>
            {props.desc}
            </div>
            <div className='amn'>
            {props.amn}
            </div>
            <button className='delbtn'>X</button>
        </div>
    )
}

export default Transaction;