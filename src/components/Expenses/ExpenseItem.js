import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const { id, title, date, amount } = props;
  
  const [titleState, setTitle] = useState(title);

  const clickHandler = () => {
    console.log('hello is it me you looking for');
    setTitle('Holaaaa');
  };



  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Click</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;