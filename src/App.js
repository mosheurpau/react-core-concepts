import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <dev>
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </dev>
  );

  /* 
  const items = [
    { name: "Laptop1", price: "85k" },
    { name: "Laptop2", price: "75k" },
    { name: "Laptop3", price: "65k" },
    { name: "Laptop4", price: "55k" },
  ];
  return (
   <div className="App">
      {items.map((item) => (
        <Products name={item.name} price={item.price}></Products>
      ))}
    </div>
  );
 */
}

/*
function Products(props) {

  console.log(props);
  return (
    <div
      style={{
        background: "blue",
        padding: "10px",
        margin: "20px",
        border: "solid red 5px",
        borderRadius: "15px",
      }}
    >
      <h2>Neme: {props.name}</h2>
      <h5>Price: {props.price}</h5>
    </div>
  );
 */

//------------External users----------

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    console.log(users);
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Users user={user.name} email={user.email}></Users>
      ))}
    </div>
  );
}

function Users(props) {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.user} </h2>
      <h5>Email: {props.email}</h5>
    </div>
  );
}

//--------------Counter section--------------
function Counter() {
  const [count, setCount] = useState(5);
  console.log(count);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const decreaseCount = () => {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }

  return (
    <div>
      <h2>Number: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
