import React, { Component } from "react";

export default class Comp11 extends Component {
  render() {
    const arr1 = [1, 2, 3, 4, 5, 6, 4, 4];
    const data = {
      name: "vamshi",
      country: "indian",
      id: 1,
    };
    const json = JSON.stringify(data);
    console.log(json);
    console.log(arr1.lastIndexOf(4));
    let date = new Date();
    console.log(date);

    return (
      <div>
        {arr1.map((x) => x * x).reduce((total, value) => total + value)}
        {arr1.every((ele) => ele > 2)}
      </div>
    );
  }
}
