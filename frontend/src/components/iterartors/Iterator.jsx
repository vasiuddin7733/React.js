const Iterator = () => {
  const Arr = [1, 2, 3, 4, 5];
  for (let val of Arr) {
    console.log(val);
  }
  for (let i of Arr.reverse()) {
    console.log(i);
  }

  const makeIterator = (start = 0, end = Infinity, setp = 1) => {
    let current = start;
    let iterationCount = 0;
    return {
      next: () => {
        if (current < end) {
          const result = { value: current, done: false };
          current += setp;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
  };

  const myIterator = makeIterator(10, 100, 10);
  let result = myIterator.next();

  while (!result.done) {
    console.log(result.value);

    result = myIterator.next();
  }

  return <div>Iterator</div>;
};

export default Iterator;
