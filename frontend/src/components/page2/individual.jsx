import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Individual = (match) => {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${param.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const [data, setData] = useState([]);
  let param = useParams();
  let { search } = useLocation();

  return (
    <div className="flex justify-center">
      <div>individual</div>
      <div className="text-red-500">{data.id}</div>
      <div>{data.userId}</div>
      <div>{data.title}</div>
    </div>
  );
};
