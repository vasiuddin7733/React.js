import React, { Component } from "react";
import Functions123 from "../array/functions"

export default class Comp11 extends Component {
  render() {
    const arr1 = [1, 2, 3, 4, 5, 6, 4, 4];
    const data = {
      name: "vamshi",
      country: "indian",
      id: 1,
    };
    const json = JSON.stringify(data);
    let date = new Date();

    return (
      <div className="text-red-900 ">
        <Functions123  />
        {arr1.map((x) => x * x).reduce((total, value) => total + value)}
        {arr1.every((ele) => ele > 2)}
      </div>
    );
  }
}
