import Frame from 'react-frame-component';
import React from "react";

function App() {
    return (
        <div className='App'>
            <p>Iframes in React</p>
            <Frame>
                <p style={{color: "red"}}>Testing to see if my component </p>
            </Frame>
        </div>
    );
}

export default App;