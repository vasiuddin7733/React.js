const Currying1 = () => {
  function add(a) {
    return function (b) {
      return function (c) {
        console.log({ sum1: a + b + c });
      };
    };
  }
  add(1)(2)(3); // 6

  const adder = (a) => (b) => (c) => console.log({ sum2: a + b + c });
  adder(10)(20)(30); // 60

  const multiply = (a) => (b) => (c) => console.log({ product: a * b * c });
  multiply(2)(3)(4); // 24

  const sendEmail = (to) => (subject) => (body) => {
    console.log(`Sending email to: ${to}, Subject: ${subject}, Body: ${body}`);
  };
  sendEmail("vad@gmail.com")("Hello")("This is a test email");

  return <div>Currying1</div>;
};

export default Currying1;
