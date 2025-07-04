import React, { useEffect } from "react";

const Closure1 = () => {
  const [name, setName] = React.useState("Vasiuddin Mohammed");
  const [count, setCount] = React.useState(1);
  const getName = () => {
    console.log({ name, count });
    setName("Vasiuddin");
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    getName();
  }, [name]);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => incrementCount()}>Count++</button>
      <div>{name}</div>
    </>
  );
};

export default Closure1;
