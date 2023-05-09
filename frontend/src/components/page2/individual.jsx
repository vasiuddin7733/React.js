import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Individual = (match) => {
  const [data, setData] = useState([]);
  let param = useParams();
  let { search } = useLocation();
  console.log(param);
  console.log(data);
  console.log(search);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${param.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div>individual</div>
      <div>{data.id}</div>
      <div>{data.userId}</div>
      <div>{data.title}</div>
    </div>
  );
};
