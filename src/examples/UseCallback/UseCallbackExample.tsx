import { useEffect, useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [message, setMessage] = useState<string>("Hello");
  const [counter, setCounter] = useState<number>(0);

  // const greeting = useCallback((text: string) => {
  //   console.log(text);
  // }, []);

  const greeting = (text: string) => {
    console.log(text);
  };

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Hello, press me!</button>
      <button onClick={() => setMessage(message + "bye")}>
        Message + "Bye"!
      </button>
    </div>
  );
};

export default UseCallbackExample;
