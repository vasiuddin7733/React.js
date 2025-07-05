const Closure3 = () => {
  const conter = () => {
    let count = 1;
    const increment = () => {
      console.log({ count: count++ });
    };
    return increment;
  };

  const count1 = conter();
  count1();
  count1();

  return (
    <>
      <div>Closure3</div>
    </>
  );
};
export default Closure3;
