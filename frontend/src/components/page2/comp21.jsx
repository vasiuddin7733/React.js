import React, { useState } from "react";

const Comp21 = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default Comp21;
