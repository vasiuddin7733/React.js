import React, { useEffect, useRef, useState } from "react";

const Closure1 = () => {
  const [name, setName] = useState("Vasiuddin Mohammed");
  const [count, setCount] = useState(1);

  const nameRef = useRef(null); // React way to target DOM

  const getName = () => {
    console.log({ name, count });
    setName("Vasiuddin");
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const fontSize = (size) => {
    if (nameRef.current) {
      nameRef.current.style.fontSize = `${size}px`;
    }
  };

  useEffect(() => {
    getName(); // only runs when name changes
  }, [name]);

  return (
    <>
      <div>{count}</div>
      <button onClick={incrementCount}>Count++</button>
      <button onClick={() => fontSize(50)}>Font Size 50</button>
      <div id="name" ref={nameRef}>
        {name}
      </div>
    </>
  );
};

export default Closure1;
