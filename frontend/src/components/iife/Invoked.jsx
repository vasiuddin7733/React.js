const Invoked = () => {
  (function () {
    console.log("IIFE Invoked");
  })();

  (() => console.log("Iam Invoked"))();

  (function add(a, b) {
    console.log(a + b);
  })(5, 5);

  ((a, b) => console.log(a + b))(5, 4);
  const products = (async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data;
  })();

  products.then((data) => {
    console.log("Products:", data.products);
  });

  const product = (() =>
    fetch("https://dummyjson.com/products").then((data) =>
      data
        .json()
        .then((data1) => data1.products)
        .then((data1) => console.log({ data1 }))
    ))();

  return <div>Invoked</div>;
};

export default Invoked;
