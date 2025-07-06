const Compose = () => {
  function add(values) {
    console.log(`Adding values: ${values}`);

    return values[0] + values[1];
  }
  function multiply(values) {
    return values[0] * values[1];
  }

  function subtract(values) {
    return values[0] - values[1];
  }

  function square(a) {
    console.log(`Squaring value: ${a}`);

    return a * a;
  }

  function compose(fn1, fn2) {
    return function (a, b) {
      console.log(fn2(fn1(a, b)));
      return fn2(fn1(a, b));
    };
  }

  const composseTwo = (fn1, fn2) => (a, b) => console.log(fn2(fn1(a, b)));

  function composeAll(...fns) {
    return function (...values) {
      console.log(`Composing functions with values: ${values}`);
      const result = fns.reduce((fn1, fn2) => fn2(fn1), values);
      console.log(`Composed result: ${result}`);
      return result;
    };
  }

  const composeAll2 =
    (...fns) =>
    (...values) =>
      console.log(fns.reduce((fn1, fn2) => fn2(fn1), values));

  const compose4 = composseTwo(add, square);
  const compose5 = composseTwo(multiply, square);
  const compose6 = composseTwo(subtract, square);
  compose4(30, 10);
  compose5(30, 10);
  compose6(30, 10);

  const compose7 = composeAll(add, square, (a) => a + 10);
  const compose8 = composeAll(multiply, square);
  const compose9 = composeAll(subtract, square);
  compose7(5, 3);
  compose8(5, 3);
  compose9(5, 3);

  const compose10 = composeAll2(add, square, (a) => a + 10);
  const compose11 = composeAll2(multiply, square);
  const compose12 = composeAll2(subtract, square);
  compose10(70, 3);
  compose11(70, 3);
  compose12(70, 3);

  return <div>Compose</div>;
};

export default Compose;
