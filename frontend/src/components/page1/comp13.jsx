import React, { useState, useEffect } from "react";
import axios from "axios";

const Comp13 = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((data) => setData(data));
  }, []);
  console.log(data.data);
  const id = 1;
  return (
    <center>
      <div className="flex justify-center">
        <a className="" href={`/page2/${id}`}>
          more information
        </a>
        {data?.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </div>
    </center>
  );
};

export default Comp13;
