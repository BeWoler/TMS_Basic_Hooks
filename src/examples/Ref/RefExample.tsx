import { useRef, useEffect, useState } from "react";

const RefExample = () => {
  const [text, setText] = useState<string>("");
  const inputeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log(inputeRef.current);
  }, [text]);

  return (
    <div>
      <input
        type='text'
        ref={inputeRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <pre>{JSON.stringify(inputeRef.current?.value, null)}</pre>
    </div>
  );
};

export default RefExample;
