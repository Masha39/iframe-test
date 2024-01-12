import "./App.css";
import CustomIframe from "./CustomIframe";
import MyComponent from "./MyComponent";

function App() {
  return (
      <CustomIframe title="A custom made iframe">
        <MyComponent />
      </CustomIframe>
  );
}

export default App;