import Frame from 'react-frame-component';
import MyComponent from "./MyComponent";

function App() {
    return (
        <div className='App'>
            <p>Iframes in React</p>
            <Frame >
                <MyComponent />
            </Frame>
        </div>
    );
}

export default App;