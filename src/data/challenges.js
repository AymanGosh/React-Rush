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

    ReactDOM.render(<App />, document.getElementById('root'));
    `  
  }
];


 