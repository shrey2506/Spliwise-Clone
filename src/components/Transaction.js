import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const signA = transaction.shareA > 0 ? '+' : '';
  const signB = transaction.shareB > 0 ? '+' : '';

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>

      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        A: {signA}{transaction.A} <span>B: {signB}{transaction.B}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
      <hr />
    </div>
    
  )
}
