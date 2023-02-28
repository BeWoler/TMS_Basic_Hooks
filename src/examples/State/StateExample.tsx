import { ChangeEvent, useEffect, useState } from "react";

// useState - механизм, представляющий из себя кортеж, который содержит в себе сам state и функцию для изменеия нашего state
// передача в стэйт колбэк
// начальная инициализация (передача в стэйт колбэк)
// изменение state с объектом

const StateExample = () => {
  const [count, setCount] = useState<number>(0);
  const [obj, setObj] = useState<{ text: string; title: string }>({
    text: "",
    title: "",
  });

  const setTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setObj({ ...obj, text: e.target.value });
  };

  const setTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setObj({ ...obj, title: e.target.value });
  };

  const setTextHandlerFN = (e: ChangeEvent<HTMLInputElement>) => {
    setObj(() => {
      return {
        ...obj,
        text: e.target.value,
      };
    });
  };

  return (
    <div>
      useState example
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <input onChange={setTextHandler} placeholder='text' value={obj.text} />
      <input onChange={setTitleHandler} placeholder='title' value={obj.title} />
      <pre style={{ textAlign: "left", marginTop: "40px" }}>
        {JSON.stringify(obj, null, 2)}
      </pre>
    </div>
  );
};

export default StateExample;
