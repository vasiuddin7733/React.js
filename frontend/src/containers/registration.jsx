import React, { useEffect, useState } from "react";
import Closure1 from "../components/closure/Closure1";
import MyPromiseComponent from "../components/closure/MyPromiseComponent";
import Closure2 from "../components/closure/Closure2";
import Closure3 from "../components/closure/Closure3";
import Currying1 from "../components/currying/Currying1";
import Compose from "../components/compositions/Compose";

const Registration = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products); // assuming the API returns { products: [...] }
    } catch (err) {
      setError("Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div className="text-red-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <table className="table-auto border border-gray-400">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Closure1 />
      <Closure2 />
      <Closure3 />
      <Currying1 />
      <Compose />
      <MyPromiseComponent />
    </>
  );
};
export default Registration;
