import React from 'react';
import { useSelector } from 'react-redux';

const Top = () => {
  const { number, username } = useSelector((store) => store);

  return (
    <div className="sub_container">
      <h1>TOP</h1>
      <h3>번호:{number}</h3>
      <h3>이름:{username}</h3>
    </div>
  );
};

export default Top;
