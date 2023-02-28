import { useState } from "react";


function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>The current count it: {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment Count</button>
        </div>
    )
}

export default App;