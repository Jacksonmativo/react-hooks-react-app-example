import React from "react"; // Optional in React 17+, but safe to keep
import { format } from "date-fns"; // No longer needed, but safe to keep
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Import TestComponent

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* Test 1: Header must contain "Now" */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent /> {/* Test 2: Renders ExampleComponent (contains "Whoa!") */}
      <TestComponent /> {/* Test 3: Renders TestComponent (contains title="time video") */}
    </div>
  );
}

export default App;