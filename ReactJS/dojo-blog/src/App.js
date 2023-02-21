import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: 'Ahmed', age: 30 };
  const link = "www.google.com";
  return (
    // JSX
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p>liked {likes} times</p>

        {/* React can not accept object */}
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"Hello ninja"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random().toFixed(2) * 10000}</p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
