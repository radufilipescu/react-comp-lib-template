import { useState } from "react"

export function MyAwsomeComponent() {
  const [count, setCount] = useState<number>(0);
  return (
    <button 
      className="my-awsome-comp" 
      onClick={() => setCount((countVal) => countVal + 1)}
    >
      Useless Clicker {count}
    </button>
  );
}