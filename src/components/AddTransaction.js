import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState();
  const [shareA,setShareA]=useState();
  const [shareB,setShareB]=useState();
  const [showForm, setShowForm]=useState(false);
  const [error,setError]=useState('');
  const toggle=()=>{
    setShowForm(!showForm);
  }


  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    let add=parseInt(shareA) +parseInt(shareB) ;
    console.log(add)

    if(parseInt(shareA) + parseInt(shareB)!== parseInt(amount)){
      console.log('Share of A and B should be equal to the amount value');
      setError('Error: Share of A and B should be equal to the amount value');
    }
    else{
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        A: shareA-amount/2,
        B: shareB-amount/2,
        
      }
  
      addTransaction(newTransaction);
      setError('');
    }

      setText('');
      setAmount();
      setShareA();
      setShareB();
      setShowForm(false)
  
    
  }

  return (
    <div>
      <button className="btn" onClick={toggle}>Add new transaction</button>
       {error && <div>{error}</div>}
      {showForm && 
        
         <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Item Name</label>
            <input type="text" required value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
            </label>
            <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>

          <div className="form-control">
            <label htmlFor="amount"
              >A's Share<br />
            </label>
            <input type="number" required value={shareA} onChange={(e) => setShareA(e.target.value)} placeholder="Not more than the total amount" />
          </div>

          <div className="form-control">
            <label htmlFor="amount"
              >B's Share<br />
            </label>
              <input type="number" required value={shareB} onChange={(e) => setShareB(e.target.value)} placeholder="Not more than the total amount" />
          </div>
          <button className="btn">Add transaction</button>
      </form>}
    </div>
  )
}
