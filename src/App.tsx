import { useRef } from 'react';
import './App.css';

function App() {
  // const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  // const [users, setUsers] = useState([
  //   { name: 'John', age: 30 },
  //   { name: 'Jane', age: 25 },
  //   { name: 'Bob', age: 35 },
  // ]);
  // const [count1] = useState(10);
  // const [count2] = useState(20);
  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <dialog ref={dialogRef} id='my-dialog'>
        <button onClick={() => dialogRef.current?.close()}>Close Dialog</button>
        hellod
      </dialog>
      <button onClick={() => dialogRef.current?.showModal()}>Open Dialog</button>
      {/* {users.filter((user) => user.age > 30).map((user) => (
        <div key={user.name} className=''>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))} */}
      {/* <Counter initialCount={count1}></Counter>
      <Counter initialCount={count2}></Counter>
      <Counter initialCount={count1 + count2} color='yellow'></Counter> */}
      {/* {numbers.map((number) => (
        <div key={number}>{number}</div>
      ))} */}
      {/* <button
        onClick={() => {
          setNumbers([...numbers, numbers.length + 1]);
        }}
      >
        +
      </button> */}
    </>
  );
}

export default App;
