import React, { useState } from "react";

const Comp21 = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("https://react-app-c291a-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json; charset=UTF8",
      },
    })
      .then((res) => alert("data posted successfully"))
      .catch((err) => console.log(err));
  };
  const id = 1;
  return (
    <center style={{ paddingTop: "100px" }}>
      <div className="flex justify-center">
        <form onSubmit={submitHandler}>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            onClick={changeHandler}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            onClick={changeHandler}
          />
          <br />
          <input type="submit" value="Login" className="text-red" />
        </form>
        <a className="" href={`/page2/${id}`}>
          more information
        </a>
        <br />
        <a className="" href={`/page2?name=${id}`}>
          more information
        </a>
      </div>
    </center>
  );
};

export default Comp21;
