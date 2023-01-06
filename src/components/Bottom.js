import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease, increase } from '../Store';

const Bottom = () => {
  const dispatcher = useDispatch();

  return (
    <div className="sub_container">
      <h1>BOTTOM</h1>
      <button onClick={() => dispatcher(increase('최미'))}>증가</button>
      <button onClick={() => dispatcher(decrease('김주하'))}>감소</button>
    </div>
  );
};

export default Bottom;
