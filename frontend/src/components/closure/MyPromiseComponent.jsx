import React, { useEffect } from "react";

const MyPromiseComponent = () => {
  useEffect(() => {
    const promise1 = new Promise((resolve, reject) => {
      const data = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
      ];
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promise1
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);

  return <div>Promise Example</div>;
};

export default MyPromiseComponent;
