import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [update, setUpdate] = useState<boolean>(false);
  const [arr, setArr] = useState<Array<number>>([1]);

  const sortArr = (arr: Array<number>) => {
    console.log("sort");
    return arr.sort((a, b) => a - b);
  };

  const sortedArr = sortArr(arr);
  // const sortedArr = useMemo(() => sortArr(arr), [arr]);

  console.log("render");

  return (
    <div>
      UseMemoExample
      {sortedArr?.map((item: number) => {
        return <div key={item}>{item}</div>;
      })}
      <button onClick={() => setUpdate(!update)}>Update</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setArr([...arr, arr.push(arr[arr.length - 1] + 1)]);
          console.log(arr);
        }}>
        Change arr
      </button>
    </div>
  );
};

export default UseMemoExample;
