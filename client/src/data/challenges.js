export const challenges = [
  {
    id: 1,
    title: "React useState Hook – Basic Counter Example",
    description: `What will be displayed on the screen when the button is clicked multiple times, and how does the useState hook work in this component?`,

    defaultCode : `
let useState = React.useState;

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button id="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`
  },
  {
    id: 2,
    title: "React useEffect – Fetching Data",
    description: `How does useEffect work in this component, and what will be displayed after the API call completes?`,

    defaultCode: `
let { useState, useEffect } = React;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Hello from API!");
    }, 1000);
  }, []);

  return (
    <div>
      <h1>{data ? data : "Loading..."}</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`
  },
  {
    id: 3,
    title: "React Props – Passing Data to Child",
    description: `What will be displayed on the screen, and how are props passed from parent to child?`,

    defaultCode: `
function Child({ message }) {
  return <h2>{message}</h2>;
}

function App() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child message="Hello from Parent!" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`
  },
  {
    id: 4,
    title: "React useState – Toggle Visibility",
    description: `What happens when the button is clicked, and how does useState help in toggling the visibility?`,

    defaultCode: `
let useState = React.useState;

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle
      </button>
      {visible && <p>This text is visible</p>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
`
  }
];
