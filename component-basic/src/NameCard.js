import React, {useState} from 'react';

const NameCard = () => {

  const myName = '효진';
  const [myAge, setMyAge] = useState(19);

  const clickHandler = () => {
    setMyAge(myAge+1);
  };

  return(
  <>
    <p>My name is {myName}</p>
    <p>My age is ... uh ... {myAge}</p>
    <button onClick={clickHandler}>떡국 먹기</button>
  </>);
};

export default NameCard;
