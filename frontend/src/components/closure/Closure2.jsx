const Closure2 = () => {
  const adder = (num1) => {
    const addTwo = (num2) => {
      const second = num1 + num2;
      console.log({ num1, num2, second });

      const addThree = (num3) => {
        const three = second + num3;
        console.log({ num1, num2, num3, three });

        const addFour = (num4) => {
          const four = three + num4;
          console.log({ num1, num2, num3, three, four });
        };
        return addFour;
      };

      return addThree; // returns another function
    };

    return addTwo; // returns the first function
  };

  adder(5)(10)(50)(10);

  return <div>Closure2</div>;
};

export default Closure2;
