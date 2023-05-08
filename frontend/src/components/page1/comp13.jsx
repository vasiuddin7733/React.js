import React from 'react'
import { useState, useEffect } from "react"

const  Comp13 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then(
      respone => respone.json()
    ).then(data => setData(data))
  }, [])


  return (
    <div className="App">
      <div>
        {data?.map((item) => <div>{item.title}</div>)}
      </div>
    </div>

  );

}

export default Comp13