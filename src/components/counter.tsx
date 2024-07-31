import { useState } from "react";

interface Props {
  initialCount?: number;
  color?: Colors;
}
type Colors = "blue" | "red" | "green" | "yellow" | "purple" | "orange";

const Counter = ({ initialCount = 8, color = "blue" }: Props) => {
  const [count, setCount] = useState(initialCount);
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div style={{ color }}>color is {color}</div>
    </div>
  );
};

export default Counter;
